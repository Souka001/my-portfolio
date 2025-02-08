<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Connexion à la base de données
$host = "localhost";
$user = "root";
$password = "";
$dbname = "contact_db";

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["code" => 500, "message" => "Database connection failed"]));
}

// Vérifier si la requête est en POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["code" => 405, "message" => "Method Not Allowed"]);
    exit;
}

// Récupération des données JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['firstName']) && !empty($data['email']) && !empty($data['message'])) {
    $firstName = $conn->real_escape_string($data['firstName']);
    $email = $conn->real_escape_string($data['email']);
    $phone = isset($data['phone']) ? $conn->real_escape_string($data['phone']) : ""; // Phone optional
    $message = $conn->real_escape_string($data['message']);

    // Si le numéro de téléphone est rempli, on vérifie qu'il est valide
    if (!empty($phone)) {
        $phone = filter_var($phone, FILTER_SANITIZE_NUMBER_INT); // Nettoyer le numéro
        if (!is_numeric($phone)) {
            echo json_encode([
                "code" => 400,
                "message" => "The phone number must contain only digits and be valid."
            ]);
            exit;
        }
    }

    // Enregistrement du message
    $sql = "INSERT INTO messages (firstName, email, phone, message) VALUES ('$firstName', '$email', '$phone', '$message')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["code" => 200, "message" => "Message sent successfully!"]);
    } else {
        echo json_encode(["code" => 500, "message" => "Failed to send message."]);
    }
} else {
    echo json_encode(["code" => 400, "message" => "All fields are required except phone."]);
}

$conn->close();
?>