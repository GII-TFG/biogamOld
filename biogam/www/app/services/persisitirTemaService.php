<?php
$jsonTema = file_get_contents("php://input");
$objetoTema = json_decode($jsonTema);

//configuracion de la conexion a la BBDD
$servidorBD = "localhost";
$nombreBD = "u234471085_gam1";
$usuarioBD = "u234471085_gian";
$claveBD = "mimamamemima123";

//conexion a la base de datos:
$conn = new PDO("mysql:host=$servidorBD;dbname=$nombreBD", $usuarioBD, $claveBD)
        or die("Error en la conexion a la base de datos");

//preparacion del query

        

?>