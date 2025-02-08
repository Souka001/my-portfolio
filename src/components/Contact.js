import { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import separatorBlack from "../assets/img/separatorBlack.png";

function Contact() {
  const formInitialDetails = {
    firstName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await axios.post('http://localhost:8000/contact.php', formDetails, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.code === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);

        // Khwi l'message b3d 3 secondes
        setTimeout(() => {
          setStatus({});
        }, 3000); // 3000 ms = 3 secondes
      } else {
        setStatus({ success: false, message: response.data.message || "Something went wrong, please try again later." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Failed to send message. Please check your server." });
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <div>
              <h2>C O N T A C T</h2>
              <p>Your message is important to me. If you wish to discuss a project or ask a question,</p>
              <p>I am available to respond to you.</p>
              <img src={separatorBlack} alt="logocontact" />
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={12} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="ENTER YOUR NAME*"
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      required
                    />
                  </Col>

                  <Col size={12} sm={12} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="ENTER YOUR EMAIL*"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                      required
                    />
                  </Col>

                  <Col size={12} sm={12} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="PHONE NUMBER (Optional)"
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                  </Col>

                  <Col size={12} sm={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="YOUR MESSAGE*"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      required
                    />
                  </Col>

                  <Col size={12} sm={12} className="px-1">
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>

                  {status.message &&
                    <Col>
                      <p className={status.success ? "success" : "danger"}>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;