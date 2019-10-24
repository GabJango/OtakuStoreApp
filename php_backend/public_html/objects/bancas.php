<?php
class Bancas{

    // database connection and table name
    private $conn;
    private $table_name = "bancas";

    // object properties
    public $id;
    public $id_name;
    public $name;
    public $category;
    public $deliveryEstimate;
    public $rating;
		public $imagePath;
    public $about;
    public $hours;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

		// read products
function read(){

    // select all query
    $query = "SELECT p.id_name, p.name, p.category , p.deliveryEstimate, p.about, p.rating, p.imagePath, p.about, p.hours FROM " . $this->table_name . " p LEFT JOIN categories c ON c.id = p.id ORDER BY c.created DESC";

    // prepare query statement
    $stmt = $this->conn->prepare($query);

    // execute query
    $stmt->execute();

    return $stmt;
}

// used when filling up the update product form
function readOne(){
 
    // query to read single record
    $query = "SELECT p.id_name, p.name, p.category , p.deliveryEstimate, p.about, p.rating, p.imagePath, p.about, p.hours FROM " . $this->table_name . " p  WHERE p.id_name = ? LIMIT 0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    $stmt->bindParam(1, $this->id);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->id_name = $row['id_name'];
    $this->name = $row['name'];
    $this->category = $row['category'];
    $this->deliveryEstimate = $row['deliveryEstimate'];
    $this->about = $row['about'];
    $this->rating = $row['rating'];
    $this->imagePath = $row['imagePath'];
    $this->hours = $row['hours'];
    
}
}
