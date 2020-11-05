<?php

// ###########
// # imports #
// ###########

	// data
	$content = json_decode(file_get_contents('../data/feeds.json'), true);
	$blacklist = json_decode(file_get_contents('../data/blacklist.json'), true);
	$errorNames = array(
		"success" => "ok",
		"error" => "error",
		"warning" => "warning",
		"information" => "information"
	);

	// import functions
	require_once("./functions/loadExternalFeeds.php");
	require_once("./feedHandling/filterFeed.php");
	require_once("./functions/sortArray.php");
	require_once("./functions/returnJson.php");

// ###########
// # program #
// ###########

	// check: is a channel set?
	if (isset($_GET['channel']) && $_GET['channel'] != "") {

		// check: does the requested channel exist in the datafile?
		if(in_array($_GET['channel'], array_keys($content))) {

			// grab requested channel-contents and modify them
			$content = $content[$_GET['channel']];
			$content = loadExternalFeeds($content);
			$content = filterFeed($content, $blacklist);
			$content = sortArray($content, 'itemTimestamp');

			// return json and enrich it
			returnJson(200, $errorNames["success"], null, $content);

		} else {
			// error: the submitted channel does not exist
			returnJson(404, $errorNames["error"], "channel not found", null);
		}

	} else {
		// error: the channel is not submitted
		returnJson(400, $errorNames["error"], "no channel set", null);
	}

?>
