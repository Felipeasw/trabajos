<?php
include('../controller/conexion.php');

class Pez
{
    private $id;
    private $nombre;
    private $apellido;
    private $username;
    private $categoria;

    public function __construct($id = null, $nombre =null, $apellido=null, $username=null, $categoria=null)
    {
       $this->id = $id;
       $this->nombre = $nombre;
       $this->apellido = $apellido;
       $this->username = $username;
       $this->categoria = $categoria;
    }

    public function guardarPez()
    {
        try {
            $pdo = new Conexion();
            $sql = "INSERT INTO pez (nombre, apellido, username, categoria) VALUES ('$this->nombre', '$this->apellido', '$this->username', '$this->categoria')";
            $query = $pdo->prepare($sql);
            $query->execute();
            $lastInsertId = $pdo->lastInsertId();
            echo $lastInsertId;
        } catch (Exception $e) {
            echo 'Error: ' . $e->getMessage() . "/n";
        }
    }

    public function actualizarPez()
{
    try {
        $pdo = new Conexion();
        $sql = "UPDATE pez SET nombre='$this->nombre', apellido='$this->apellido', username='$this->username', categoria='$this->categoria' WHERE id=$this->id";
        $query = $pdo->prepare($sql);
        $query->execute();
    } catch (Exception $e) {
        echo 'Error: ' . $e->getMessage() . "/n";
    }
}


    public function eliminarPez()
    {
        try {
            $pdo = new Conexion();
            $sql = "DELETE FROM pez WHERE id=$this->id";
            $query = $pdo->prepare($sql);
            $query->execute();
        } catch (Exception $e) {
            echo 'Error: ' . $e->getMessage() . "/n";
        }
    }
    public function traerPez()
    {
        $pdo = new Conexion();
        try {
            
            $sql = "SELECT * FROM pez";
            $query = $pdo->prepare($sql);
            $query->execute();
            $rta=$query ->fetchAll();
            return $rta;

        } catch (Exception $e) {
            echo 'Error: ' . $e->getMessage() . "/n";
        }
    }

    public function traerDatos($id){
        $pdo = new Conexion();
        try {

            $sql = "SELECT * FROM pez WHERE id = $id";
            $query = $pdo->prepare($sql);
            $query->execute();
            $rta=$query ->fetch();
            return $rta;

        } catch (Exception $e) {
            echo 'Error: ' . $e->getMessage() . "/n";
        }
    }

}



?>
