<?php
	header('Content-type: text/html; charset=utf-8');

	// Setup
	$projectConfigUrl ='config/config.php';
	require_once($projectConfigUrl);

	// get theme from session
	session_start();
	if(!empty($_SESSION['theme'])) {
		$theme = $_SESSION['theme'];
	} else {
		$theme = $themeDefault;
	}
?>

<!DOCTYPE html>
<html dir="ltr" lang="de" manifest="<?php if(isset($manifestUrl)) { echo($manifestUrl); }  ?>">
<head>
	<title><?php echo($projectTitle); ?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="<?php echo($projectdescription); ?>" />
	<meta name="language" content="de" />
	<meta name="MSSmartTagsPreventParsing" content="TRUE" />
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Website as app -->
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="black"/>

	<!-- Short Names -->
	<meta name="apple-mobile-web-app-title" content="<?php echo($applicationName); ?>" />
	<meta name="application-name" content="<?php echo($applicationNameShort); ?>" />

	<!-- Icons -->
	<link rel="apple-touch-icon" href="apple-touch-icon-foto-192x192-precomposed.png" />
	<link rel="shortcut icon" href="favicon.ico" />

	<!-- CSS -->
	<style type="text/css">
		<?php require_once($cssUrl); ?>
	</style>

	<!-- Mobile Manifest -->
	<link rel="manifest" href="manifest.json" />
</head>

<body id="home" class="<?php echo $theme; ?>">

	<!-- header -->
	<header id="application-head">
		<div>
			<a href="#" title="select channel" data-target="application-overlay" id="toggle-overlay"><i class="icon-menu"></i></a>
		</div>
		<div>
			<a href="#" title="scroll to top" id="logo"><img src="assets/images/world.svg" alt="<?php echo($projectTitle); ?>" /></a>
		</div>
		<div>
			<form method="#" action="#">
				<input type="checkbox" id="theme-switcher" class="vh" <?php if($theme == $themeDark) { echo 'checked="checked"'; } ?> />
				<label for="theme-switcher"><span class="vh">change theme</span><i class="icon-moon"></i><i class="icon-sun"></i></label>
			</form>
		</div>
	</header>

	<?php include_once('render-channels.php'); ?>

	<!-- content -->
	<main id="content">
		<!-- feeds will be placed here (ajax) -->
	</main>

	<!-- footer -->
	<footer>
	</footer>

	<!-- loading-screen (js-hidden is removed while ajax-request runs) -->
	<div id="application-loading" class="overlay js-hidden"></div>

	<!-- JS -->
	<script type="text/javascript">
		<?php require_once($jsUrl); ?>
	</script>
</body>
</html>
