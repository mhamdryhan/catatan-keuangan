<?php
include 'db.php';

$id = $_POST['id'];

$sql = "DELETE FROM transactions WHERE id=$id";
$conn->query($sql);

echo json_encode(["message" => "Data berhasil dihapus"]);
?>
