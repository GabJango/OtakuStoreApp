<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');


// include database and object files
include_once '../config/database.php';
include_once '../objects/bancas.php';

// instantiate database and bancas object
$database = new Database();
$db = $database->getConnection();

// initialize object
$bancas = new Bancas($db);


// set ID property of record to read
$bancas->id = isset($_GET['id']) ? $_GET['id'] : die();

// query bancass
$bancas->readOne();
 
if($bancas->name!=null){
    // create array
    $bancas_arr = array(
            "id_name" => $bancas->id_name,
            "name" => $bancas->name,
            "category" => $bancas->category,
            "deliveryEstimate" => $bancas->deliveryEstimate,
            "rating" => $bancas->rating,
            "imagePath" => $bancas->imagePath,
            "about" => $bancas->about,
            "hours" => $bancas->hours
    );
            
   // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($bancas_arr);
}

else{

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "Banca não encontrada.")
    );
}

?>


