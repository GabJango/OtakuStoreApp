<?php
class Reviews{

    // database connection and table name
    private $conn;
    private $table_name = "reviews";

    // object properties
    public $id;
    public $name;
    public $dateComment;
    public $rating;
	public $comments;
    public $bancaId;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
 


	// read bancas
    function read(){

        // select all query
        $query = "SELECT name, dateComment, rating, comments, bancaId FROM " . $this->table_name . " WHERE bancaId = ? ";

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