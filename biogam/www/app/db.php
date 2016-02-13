<?php
/*

$host = "localhost"
$user = "root"
$pass = ""
$db   = "u234471085_gam1"

$con = new mysqli($host,$use,$pass,$db);

if($con->connection_error){


	die("DB connection failed: ".$con->connection_error);

}



$sql = "SELECT * FROM 'tema' ORDER BY 'id' DESC" 
$qry = $con->query($sql);
$temas=array();

if($qry->num_rows>0){


	while($row = $qry->fetch_object()){

		$temas[]=$row;
	}
}else{

	$temas[]=null;
}

$con->close();

echo json_encode($temas);*/



$data = array(

	"id" => "0",
    "name" => "One Locus",
    "description"  => ""
    );

// Send the data.
echo json_encode($data);

?>
