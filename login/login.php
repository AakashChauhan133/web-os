<?php
session_start();

// Database connection
$host = 'localhost';
$db = 'myos';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else 
{
    echo "connceted";
}

// Get the submitted pin
$pin = $_POST['pin'] ?? '';

if (!empty($pin)) {
    // Search for user with this PIN
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = 'Admin' AND pin = ?");
    $stmt->bind_param("s", $pin);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = 'Admin';
        header("Location: ../desktop"); // Your landing page
        exit();
    } else {
        echo "Invalid PIN!";
    }
}
?>
