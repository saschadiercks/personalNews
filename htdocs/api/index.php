<?php

	// data
	$blacklist = json_decode(file_get_contents('../data/blacklist.json'), true);
	$content = json_decode(file_get_contents('../data/feeds.json'), true);

	// import functions
	require_once("./functions/answerRequest.php");

	// --> check for channel
	if (isset($_GET['channel']) && $_GET['channel'] != "") {
		// returnNewsItems($_GET['channel'], $content);
		answerRequest(200, "ok", null, $content);
	} else {
		answerRequest(404, "error", "no channel defined", null);
	}

?>
