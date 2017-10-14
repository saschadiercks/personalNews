<?php

	// Setup
	$projectConfigUrl ='../config/config.php';
	require_once($projectConfigUrl);

	$theme = '';
	session_start();
	if(isset($_GET['theme'])) {
		$theme = $_GET['theme'];
	} else {
		$theme = $themeDefault;
	}

	$_SESSION['theme'] = $theme;

	echo "hallo" . $theme;
?>
