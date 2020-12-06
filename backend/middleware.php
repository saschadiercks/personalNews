<?php
	ini_set('display_errors', 1);
	error_reporting(E_ALL ^ E_NOTICE);

// ###########
// # imports #
// ###########

	// data through url
	$channel = $_GET['channel'];

	require_once __DIR__ . ('/settings/index.php');
	require_once __DIR__ . ('/api/functions/buildContent.php');

// ###########
// # program #
// ###########

	$contentBuilt = buildContent($channel, $metaData, $feedsData, $blacklistData, $errorNames);

	var_dump($contentBuilt);

?>
