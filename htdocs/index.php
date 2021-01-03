<?php
	header('Content-type: text/html; charset=utf-8');
	require_once __DIR__ . '/config/config.php';
?>

<!DOCTYPE html>
<html <?php
	echo isset($projectLanguage) ? 'lang="'.$projectLanguage.'"' : FALSE;
	echo isset($projectDirection) ? 'dir="'.$projectDirection.'"' : FALSE;
	echo isset($theme)? 'class="'.$theme.'"' : 'class="' . $themeDefault .'"';
?>>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<?php
		echo isset($projectTitle) ? '<title>'.$projectTitle.'</title>' : FALSE;
		echo isset($projectDescription) ? '<meta name="description" content="'.$projectDescription.'"/>' : FALSE;
		echo isset($projectKeywords) ? '<meta name="keywords" content="'.$projectKeywords.'"/>' : FALSE;
		echo isset($projectLanguage) ? '<meta name="language" content="'.$projectLanguage.'"/>' : FALSE;
	?>

	<!-- mobile scaling -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- IE-Stuff -->
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
	<meta name="MSSmartTagsPreventParsing" content="TRUE" />

	<?php if($serveAsApplication === TRUE) { ?>
		<!-- Website as app -->
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />

		<!-- Short Names -->
		<meta name="apple-mobile-web-app-title" content="<?php echo($applicationName); ?>" />
		<meta name="application-name" content="<?php echo($applicationNameShort); ?>" />
	<?php } ?>

	<!-- Icons -->
	<link rel="apple-touch-icon" href="apple-touch-icon-foto-228x228-precomposed.png" sizes="228x228" />
	<link rel="shortcut icon" href="favicon.ico" />

	<!-- CSS -->
	<link rel="stylesheet" href="<?=$cssUrl?>" media="all"/>
</head>

<body>

	<!-- header -->
	<header class="application-header">
		<div>
			<button class="button--transparent js-overlay-toggle" data-target="#application-overlay" id="toggle-overlay"><i class="icon-menu"></i></a>
		</div>
		<div>
			<button class="button--transparent js-reload application-header__logo" id="logo"><img src="assets/images/world.svg" alt="<?php echo($projectTitle); ?>" /></button>
		</div>
		<div>
			<button class="button--transparent js-reload application-reload"><i class="icon-reload"></i></button>
		</div>
	</header>

	<!-- overlay -->
	<div class="overlay js-hidden" id="application-overlay">
		<div class="overlay-content">
			<div class="overlay__header">
				<div></div>
				<div><h2 class="overlay__title"><?= $applicationName ?></h2></div>
				<div class="current-theme">
					<form method="#" action="#">
					<input type="checkbox" id="theme-switcher" class="vh" <?php if($theme == $themeDark) { echo 'checked="checked"'; } ?> />
					<label for="theme-switcher"><span class="vh">change theme</span><i class="icon-moon"></i><i class="icon-sun"></i></label>
					</form>
				</div>
			</div>
			<ul id="channels" class="channels ui-list ui-list--vertical">
				<!-- overlay will be placed here (ajax) -->
			</ul>
		</div>
		<div class="overlay-backdrop js-overlay-toggle" data-target="#application-overlay"></div>
	</div>

	<!-- content -->
	<main id="content">
		<!-- feeds will be placed here (ajax) -->
	</main>

	<!-- footer -->
	<footer>
	</footer>

	<!-- loading-screen (js-hidden is removed while ajax-request runs) -->
	<div id="application-loading" class="application-loading overlay">
		<div class="spinner"></div>
	</div>

	<!-- JS -->
	<script type="text/javascript" src="<?php echo $jsUrl ?>">
	</script>
</body>
</html>
