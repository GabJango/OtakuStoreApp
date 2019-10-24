<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


// include database and object files
include_once '../config/database.php';
include_once '../objects/list_manga.php';

// instantiate database and bancas object
$database = new Database();
$db = $database->getConnection();

// initialize object
$list_manga = new List_manga($db);

// set ID property of record to read
$list_manga->id = isset($_GET['id']) ? $_GET['id'] : die();

// query bancass
$stmt = $list_manga->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // list_manga array
    $list_manga_arr = array();


    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

       $list_manga_item = [

            "id_name" => $id_name,
            "imagePath" =>$imagePath,
            "name" => $name,
            "description" => html_entity_decode($description),
			"price" => $price,
			"bancaId" => $bancaId,
    
    ];

   array_push($list_manga_arr, $list_manga_item);
    }

    // set response code - 200 OK
    http_response_code(200);
    $list_manga_arr = array_values($list_manga_arr);
    // show bancass data in json format
    echo json_encode($list_manga_arr);
}

else{

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No list manga found.")
    );
}

?>
