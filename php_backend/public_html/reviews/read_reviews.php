<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


// include database and object files
include_once '../config/database.php';
include_once '../objects/reviews.php';

// instantiate database and bancas object
$database = new Database();
$db = $database->getConnection();

// initialize object
$reviews = new Reviews($db);

// set ID property of record to read
$reviews->id = isset($_GET['id']) ? $_GET['id'] : die();

// query bancass
$stmt = $reviews->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // bancass array
    $reviews_arr = array();


    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

       $reviews_item = [

            "name" => $name,
            "dateComment" =>$dateComment,
            "rating" => $rating,
            "comments" => html_entity_decode($comments),
			"bancaId" => $bancaId
    
    ];

   array_push($reviews_arr, $reviews_item);
    }

    // set response code - 200 OK
    http_response_code(200);
    $reviews_arr = array_values($reviews_arr);
    // show bancass data in json format
    echo json_encode($reviews_arr);
}

else{

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No reviews found.")
    );
}

?>
