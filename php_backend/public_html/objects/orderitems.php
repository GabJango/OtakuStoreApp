<?php
class OrderItems{

    // database connection and table name
    private $conn;
    private $table_name = "order_items";

    // object properties
    public $id_order;
    public $id_order_items;
    public $menuId;
    public $quantity;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

// create product
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                id_order=:id_order , menuId=:menuId, quantity=:quantity ";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id_order=htmlspecialchars(strip_tags($this->id_order));
    $this->menuId=htmlspecialchars(strip_tags($this->menuId));
    $this->quantity=htmlspecialchars(strip_tags($this->quantity));

    // bind values
    $stmt->bindParam(":id_order", $this->id_order);
    $stmt->bindParam(":menuId", $this->menuId);
    $stmt->bindParam(":quantity", $this->quantity);
    
    
   // echo json_encode(array("id_order" => $this->id_order,
//                           "menuId" => $this->menuId,
//                           "quantity" => $this->quantity));
    
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
}
