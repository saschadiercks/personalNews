<?php
	include_once('../config/config.php');

	$theme = '';
	session_start();
	if(isset($_GET['theme'])) {
		$theme = $_GET['theme'];
	} else {
		$theme = $themeDefault;
	}

	$_SESSION['theme'] = $theme;
?>
