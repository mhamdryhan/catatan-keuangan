<?php
include 'db.php';

$description = $_POST['description'];
$amount = $_POST['amount'];

$sql = "INSERT INTO transactions (description, amount) VALUES ('$description', $amount)";
$conn->query($sql);

echo json_encode(["message" => "Data berhasil ditambahkan"]);
?>
