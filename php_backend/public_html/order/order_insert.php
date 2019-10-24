<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

error_reporting(0);
ini_set(“display_errors”, 0 );

// get database connection
include_once '../config/database.php';

// instantiate order object
include_once '../objects/order.php';
include_once '../objects/orderitems.php';

$database = new Database();
$db = $database->getConnection();


$order = new Order($db);
$orderitems = new OrderItems($db);

$json_output = file_get_contents("php://input");

$json_obj2 = json_decode($json_output);

// get posted data
$data = $json_obj2;

if ($json_output3 = json_encode($data->orderItems)){
  //  echo json_encode(array("messageOrderItems" => "OrderItems: Preenchido"));
}else{
  // echo json_encode(array("messageOrderItems" => "OrderItems: vazio"));
}

$json_obj3 = json_decode($json_output3);

if($json_count = count($json_obj3)){
    //  echo json_encode(array("messageCount" => "Count = " .  $json_count . " "));
}else{
    // echo json_encode(array("messageCount" => "Count Vazio"));
    
}


// make sure data is not empty

if(
    !empty($data->id) &&
    !empty($data->address) &&
    !empty($data->number) &&
    !empty($data->paymentOption)
    
){
 
    // set order property values
    $order->id_order = $data->id;
    $order->address = $data->address;
    $order->number = $data->number;
    $order->optionalAddress = $data->optionalAddress;
    $order->paymentOption = $data->paymentOption;
    
    if ($order->create()){
        // set response code - 201 created
        http_response_code(201);
    
        // tell the user
        echo json_encode(array("message" => "order was created."));
    }else{
        http_response_code(503);
    
        // tell the user
        echo json_encode(array("message" => "Unable to create order Item." . $i . " "));
        
        exit();
    }

}    
// tell the user data is incomplete
else{
    // set response code - 400 bad request
    http_response_code(400);
    
    // tell the user
    echo json_encode(array("message" => "Unable to create order. Data is incomplete."));
    
    exit();
}
 
for ($i = 0; $i < $json_count; $i++){

    if(!empty($json_obj3[$i]->menuId) &&
       !empty($json_obj3[$i]->quantity)
    ){
        // set order property values
        $orderitems->id_order = $data->id;
        $orderitems->menuId = $json_obj3[$i]->menuId;
        $orderitems->quantity = $json_obj3[$i]->quantity;
        // create the order
        if($orderitems->create()){
            
            // set response code - 201 created
            http_response_code(201);
        
            // tell the user
           // echo json_encode(array("message" => "order Item " . $i . " was created."));
        }
        // if unable to create the order, tell the user
        else{
                        
            // set response code - 201 created
            http_response_code(503);
            
            // tell the user
            echo json_encode(array("message" => "Unable to create order Item." . $i . " "));

            exit();
        }
    }
    // tell the user data is incomplete
    else{
        // set response code - 400 bad request
        http_response_code(400);
    
        // tell the user
        echo json_encode(array("message" => "Unable to create order Item " . $i . " . Data is incomplete."));
        exit();
    }
}

?>