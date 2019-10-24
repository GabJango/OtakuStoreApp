<?php
class Database{

    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "id10912564_otakustore";
    private $username = "id10912564_otakustore";
    private $password = "g4bri3l123";
    public $conn;

    // get the database connection
    public function getConnection(){

        $this->conn = null;

        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
