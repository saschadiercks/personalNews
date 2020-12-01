<?php

ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

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
	require_once __DIR__ . "/functions/loadExternalFeeds.php";
	require_once __DIR__ . "/feedHandling/filterFeed.php";
	require_once __DIR__ . "/functions/sortArray.php";
	require_once __DIR__ . "/functions/returnJson.php";

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
			returnJson($errorNames["success"], null, $content);

		} else {
			// error: the submitted channel does not exist
			returnJson($errorNames["error"], "channel not found", null);
		}

	} else {
		// error: the channel is not submitted
		returnJson($errorNames["error"], "no channel set", null);
	}

?>
