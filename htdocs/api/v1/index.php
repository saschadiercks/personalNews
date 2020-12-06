<?php

ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

// ###########
// # imports #
// ###########

	// data through url
	$channel = $_GET['channel'];
	$timestamp = $_GET['timestamp'];

	require_once __DIR__ . ('/../../settings/index.php');
	require_once __DIR__ . ('/functions/buildContent.php');

// ###########
// # program #
// ###########

	// build content
	$contentBuilt = buildContent($channel, $metaData, $feedsData, $blacklistData, $errorNames, $timestamp);

	// enrich json and return it
	returnJson($contentBuilt['meta'], $contentBuilt['content'], $contentBuilt['channels']);

?>
