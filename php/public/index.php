<?php

header('Content-Type: application/json');

// get the search query from the GET parameters
$query = isset($_GET['q']) ? urlencode($_GET['q']) : '';

// make the API request
$response = file_get_contents("https://jsonplaceholder.typicode.com/comments?postId=3&q=${query}");

// decode the JSON response
$data = json_decode($response);

// filter the data by the keywords
$filteredData = array_filter($data, function ($item) use ($query) {
    return strpos($item->name, $query) !== false;
});

// encode the filtered data as JSON and return it
echo json_encode($filteredData);
?>
