<?php
// set output
header("Content-Type:application/json");

// get request

// --> check for channel
if (isset($_GET['channel']) && $_GET['channel']!="") {
	returnNewsItems($_GET['channel']);
} else {
	returnError("noChannel");
}

// --> return newsItems
function returnNewsItems($channel) {
	$response['status'] = "ok";
	$response['channel'] = $channel;
	$response['mock'] = "random content";
	answerRequest($response);
}

// --> return errorJson
function returnError($errorType) {

	// check for reason
	if ($errorType === "noChannel") {
		$message = "no channel defined";
	}

	$response['status'] = "error";
	$response['message'] = $message;
	answerRequest($response);
}

// --> answerRequest
function answerRequest($response) {
	$json_response = json_encode($response);
 	echo $json_response;
}
