<?php

ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

// ###########
// # imports #
// ###########

	// data
	$feedsData = json_decode(file_get_contents('../data/feeds.json'), true);
	$blacklistData = json_decode(file_get_contents('../data/blacklist.json'), true);
	$metaData= json_decode(file_get_contents('../data/meta.json'), true);
	$errorNames = array(
		"ok" => "ok",
		"error" => "error",
		"warning" => "warning",
		"information" => "information"
	);

	// import functions
	require_once __DIR__ . "/functions/loadExternalFeeds.php";
	require_once __DIR__ . "/feedHandling/filterFeed.php";
	require_once __DIR__ . "/feedHandling/returnChannelList.php";
	require_once __DIR__ . "/functions/sortArray.php";
	require_once __DIR__ . "/functions/returnJson.php";

// ###########
// # program #
// ###########

	// check: is a channel set and does it exist in the data?
	// otherwise use the first channel
	if (isset($_GET['channel']) && $_GET['channel'] != "" && in_array($_GET['channel'], array_keys($feedsData))) {
		$activeChannel = $_GET['channel'];
		$responseType = $errorNames["ok"];
		$responseMsg = null;
	} else {
		$activeChannel = array_keys($feedsData)[0];
		$responseType = $errorNames["warning"];
		$responseMsg = "requested channel not found - using default";
	}

	// collect metaStuff
	$meta = array(
		"state" => $responseType ? $responseType : $errorNames["ok"],
		"message" => $responseMsg ? $responseMsg : null,
		"newItems" => $returnedItems ? $returnedItems : null,
		"pinnedMessage" => $metaData["pinnedMessage"] ? $metaData["pinnedMessage"] : false
	);

	// grab requested channel-contents and modify them
	$content = $feedsData[$activeChannel];
	$content = loadExternalFeeds($content);
	$content = filterFeed($content, $blacklistData);
	$content = sortArray($content, 'itemTimestamp');

	// return channelList with Active State
	$channels = returnChannelList($feedsData, $activeChannel);


	// enrich json and return it
	returnJson($meta, $content, $channels);

?>
