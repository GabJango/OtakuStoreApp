<?php
//headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

error_reporting(0);
ini_set(“display_errors”, 0 ); // tirando os erros do PHP

// pegando dados de coneção do banco
include_once '../config/database.php';

// instanciando os objetos
include_once '../objects/order.php';
include_once '../objects/orderitems.php';

$database = new Database();
$db = $database->getConnection();

$message = [];
// definindo estrutura dos objetos
$order = new Order($db);
$orderitems = new OrderItems($db);

//informações que chegam do POST
$json_output = file_get_contents("php://input");

// transformado formado JSON para objetos do PHP
$json_obj = json_decode($json_output);


$data = $json_obj;

if ($json_output1 = json_encode($data->orderItems)){
    array_push($message,array("messageOrderItems" => "OrderItems: Preenchido"));
}else{
    array_push($message,array("messageOrderItems" => "OrderItems: vazio"));
}

$json_obj1 = json_decode($json_output1);

if($json_count = count($json_obj1)){
    array_push($message,array("messageCount" => "Count = " .  $json_count . " "));
}else{
    array_push($message,array("messageCount" => "Count Vazio"));

}


// verificando se a data é vázia

if(
    !empty($data->id) &&
    !empty($data->address) &&
    !empty($data->number) &&
    !empty($data->paymentOption)

){

    // setando a order para cada objeto do post
    $order->id_order = $data->id;
    $order->address = $data->address;
    $order->number = $data->number;
    $order->optionalAddress = $data->optionalAddress;
    $order->paymentOption = $data->paymentOption;

    if ($order->create()){
        // setando response code do http - 201 (criado com sucesso)
        http_response_code(201);

        // messagem para o usuário
        array_push($message,array("message" => "order was created."));
    }else{
			// setando response code do http - 503 (erro)
        http_response_code(503);

        // messagem para o usuário
        array_push($message,array("message" => "Unable to create order Item." . $i . " "));

        exit();
    }

}
// messagem para o usuário campo vázio
else{
    // setando response code do http - 400 (erro)
    http_response_code(400);

    // messagem para o usuário
    array_push($message,array("message" => "Unable to create order. Data is incomplete."));

    exit();
}

for ($i = 0; $i < $json_count; $i++){

    if(!empty($json_obj1[$i]->menuId) &&
       !empty($json_obj1[$i]->quantity)
    ){
        // setando a order items para cada objeto do post
        $orderitems->id_order = $data->id;
        $orderitems->menuId = $json_obj1[$i]->menuId;
        $orderitems->quantity = $json_obj1[$i]->quantity;
        // create the orderitems
        if($orderitems->create()){

            // setando response code do http - 201 (criado com sucesso)
            http_response_code(201);

            // messagem para o usuário
           array_push($message,array("message" => "order Item " . $i . " was created."));
        }
        else{

            // setando response code do http - 503 (erro)
            http_response_code(503);

            // messagem para o usuário
            array_push($message,array("message" => "Unable to create order Item." . $i . " "));

            exit();
        }
    }
    // messagem para o usuário campo vázio
    else{
        // setando response code do http - 400 (erro)
        http_response_code(400);

        // messagem para o usuário
        array_push($message,array("message" => "Unable to create order Item " . $i . " . Data is incomplete."));
        exit();
    }
}
		echo json_encode($message);

?>
