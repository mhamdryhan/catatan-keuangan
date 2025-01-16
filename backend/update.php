<?php
include 'db.php';

$id = $_POST['id'];
$description = $_POST['description'];
$amount = $_POST['amount'];

$sql = "UPDATE transactions SET description='$description', amount=$amount WHERE id=$id";
$conn->query($sql);

echo json_encode(["message" => "Data berhasil diperbarui"]);
?>
