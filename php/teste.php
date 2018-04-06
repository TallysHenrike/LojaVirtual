<?php
// definições de host, database, usuário e senha
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM products";
$result = mysqli_query($conn, $sql);

$products = array();
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $products[] = array("codigo" => utf8_decode($row["codigo"]), "nome" => utf8_decode($row["nome"]), "imagem" => utf8_decode($row["imagem"]), "promocao" => utf8_decode($row["promocao"]), "preco" => utf8_decode($row["preco"]), "desconto" => utf8_decode($row["desconto"]));
    }
} else {
    echo "0 results";
}

$identificador = ['products' => $products];
echo json_encode($identificador);
mysqli_close($conn);
?>