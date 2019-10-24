<?php
class Order{

    // database connection and table name
    private $conn;
    private $table_name = "_order";
    private $second_table_name = "order_items";

    // object properties
    public $id_order;
    public $id_order_items;
    public $menuId;
    public $address;
    public $number;
    public $paymentOption;
	public $optionalAddress;


    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
/*
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
*/

// create product
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                id_order=:id_order, address=:address, number=:number, paymentOption=:paymentOption, optionalAddress=:optionalAddress";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id_order=htmlspecialchars(strip_tags($this->id_order));
    $this->address=htmlspecialchars(strip_tags($this->address));
    $this->number=htmlspecialchars(strip_tags($this->number));
    $this->paymentOption=htmlspecialchars(strip_tags($this->paymentOption));
    $this->optionalAddress=htmlspecialchars(strip_tags($this->optionalAddress));
 
    // bind values
    $stmt->bindParam(":id_order", $this->id_order);
    $stmt->bindParam(":address", $this->address);
    $stmt->bindParam(":number", $this->number);
    $stmt->bindParam(":paymentOption", $this->paymentOption);
    $stmt->bindParam(":optionalAddress", $this->optionalAddress);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
}
