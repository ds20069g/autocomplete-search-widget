<?php
header('Content-Type: application/json');

// make the API request
$response = file_get_contents('https://jsonplaceholder.typicode.com/comments?postId=3');

// decode the JSON response
$data = json_decode($response);

// filter the data by the keywords
$filteredData = array_filter($data, function ($item) {
    // replace "keyword" with the actual keyword
    return strpos($item->name, "keyword") !== false;
});

// encode the filtered data as JSON and return it
echo json_encode($filteredData);
?>
