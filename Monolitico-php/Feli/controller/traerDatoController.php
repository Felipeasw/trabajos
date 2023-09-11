<?php
include('../model/pez.php');

$pez=new Pez();
$datosPez=$pez->traerDatos($_POST['id']);
echo(json_encode($datosPez));
?>