<?php

	// Project Title
	$projectTitle = 'personalNews';
	$projectdescription = 'your news as a timeline';
	$applicationName = 'personalNews';
	$applicationNameShort = $applicationName;

	// get host
	$host = $_SERVER['DOCUMENT_ROOT'];

	// Set Data-Environment
	$dataUrl = $host . '/data/data.json';					// Set the url to retrieve the data from
	$jsonContent = file_get_contents($dataUrl);		// Get the data
	$json = json_decode($jsonContent, true);		// (true) returns the json as array-structure
	$content = $json['content'];					// Get content of json-array directly (used to ease extension of the json later (header, footer...))

	// Set Environemt
	// $manifestUrl = $host . 'personalnews.manifest.php';	// This is the name of the manifest-file
	$cssUrl = $host . '/assets/css/site.css';			// Set the url to retreive the css from
	$jsUrl = $host . '/assets/js/script.js';				// Set the url to retrieve the js from
	ini_set('allow_url_fopen', true);			// allow loading external files

	// Set themes
	$themeLight = 'light';
	$themeDark = 'dark';
	$themeDefault = $themeDark;
?>
