<?php
include('../model/pez.php');

$pez=new Pez();
$datosPez=$pez->traerPez();
echo (json_encode($datosPez));

?>