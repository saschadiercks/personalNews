<?php

	// data
	$blacklist = json_decode(file_get_contents('../data/blacklist.json'), true);
	$content = json_decode(file_get_contents('../data/feeds.json'), true);
	$errorNames = array(
		"success" => "ok",
		"error" => "error",
		"warning" => "warning",
		"information" => "information"
	);

	// import functions
	require_once("./functions/answerRequest.php");

	// --> check for channel
	if (isset($_GET['channel']) && $_GET['channel'] != "") {
		answerRequest(200, $errorNames["success"], null, $content);
	} else {
		answerRequest(404, $errorNames["error"], "no channel defined", null);
	}

?>
