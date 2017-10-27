<?php

	// Project Title
	$projectTitle = 'personalNews';
	$projectdescription = 'your news as a timeline';
	$applicationName = 'personalNews';
	$applicationNameShort = $applicationName;

	// Set Data-Environment
	$dataUrl = 'data/data.json';					// Set the url to retrieve the data from
	$jsonContent = file_get_contents($dataUrl);		// Get the data
	$json = json_decode($jsonContent, true);		// (true) returns the json as array-structure
	$content = $json['content'];					// Get content of json-array directly (used to ease extension of the json later (header, footer...))

	// Set Environemt
	// $manifestUrl = 'application.manifest.php';	// This is the name of the manifest-file
	$cssUrl = 'assets/css/site.css';			// Set the url to retreive the css from
	$jsUrl = 'assets/js/script.js';				// Set the url to retrieve the js from
	ini_set('allow_url_fopen', true);			// allow loading external files
	date_default_timezone_set('Europe/Berlin');  // set Timezone to avoid errors on feed-fetching

	// Set themes
	$themeLight = 'light';
	$themeDark = 'dark';
	$themeDefault = $themeDark;

	// size to shortenText
	$itemDescriptionLength = 400;

	// +++++ Functions +++++++
	$channelUrlParameter = urldecode($_GET['channel']);		// get the channelparamter, if there's one
	$channelItems = array();								// collect all channels in array
	$feedItems = array();									// collect all feeds in array

	// get all channels and put them in array
	function getChannelItems($content) {
		$channelItems = array_keys($content);
		return $channelItems;
	}

	$channelItems = getChannelItems($content);
?>
