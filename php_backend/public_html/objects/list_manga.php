<?php
class List_manga{

    // database connection and table name
    private $conn;
    private $table_name = "list_manga";

    // object properties
    public $id;
    public $id_name;
    public $imagePath;
    public $name;
    public $description;
	public $price;
    public $bancaId;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
 


	// read list_manga
    function read(){

        // select all query
        $query = "SELECT id_name, imagePath, name, description, price , bancaId FROM " . $this->table_name . " WHERE bancaId = ? ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

         
        // bind id of product to be updated
        $stmt->bindParam(1, $this->id);
    
        // execute query
        $stmt->execute();

        return $stmt;
    }
}

?>