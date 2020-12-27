<?php

	// Project Title
	$projectTitle = 'personalNews';
	$projectTitleSub = 'your news as a timeline';
	$projectDescription = $projectTitle . ' | ' . $projectTitleSub;
	$projectKeywords = 'news, timeline, newsstream';
	$projectLanguage = 'de';					// langugage of your content (see: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
	$projectDirection = 'ltr';					// Reading direction ltr || rtl

	// Application-Settings (mobile)
	$serveAsApplication = TRUE;					// allow running as standalone application (TRUE || FALSE)
	$applicationName = 'personalNews';
	$applicationNameShort = $applicationName;

	// Set Environemt
	// $manifestUrl = 'application.manifest.php';	// This is the name of the manifest-file
	$cssUrl = 'assets/css/site.css';			// Set the url to retreive the css from
	$jsUrl = 'assets/js/site.js';				// Set the url to retrieve the js from

	// Set php requirements
	ini_set('allow_url_fopen', true);			// allow loading external files
	date_default_timezone_set('Europe/Berlin');  // set Timezone to avoid errors on feed-fetching

	// Set themes
	$themeLight = 'light';
	$themeDark = 'dark';
	$themeDefault = $themeDark;

	// size to shortenText
	$itemDescriptionLength = 300;
	$readMoreIcon = '...';

	// +++++ Functions +++++++
	$channelUrlParameter = urldecode($_GET['channel']);		// get the channelparamter, if there's one
	$channelItems = array();								// collect all channels in array
	$feedItems = array();									// collect all feeds in array

	// get theme from session
	session_start();
	if(!empty($_SESSION['theme'])) {
		$theme = $_SESSION['theme'];
	} else {
		$theme = $themeDefault;
	}
?>
