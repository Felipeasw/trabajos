<?php
include('../model/pez.php');

$pez = new Pez($_POST['id'], $_POST['nombre'], $_POST['apellido'], $_POST['username'], $_POST['categoria']);

if ($_POST['aux'] == 'guardar') {
    $pez->guardarPez();
}
if ($_POST['aux'] == 'actualizar') {
    $pez->actualizarPez();
}
if ($_POST['aux'] == 'eliminar') {
        $pez->eliminarPez($_POST['id']);
    }

?>
