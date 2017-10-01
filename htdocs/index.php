<?php
	// Setup
	$projectConfigUrl = "config/config.php";
	require_once($projectConfigUrl);

	// Data-Environment
	$dataUrl = "data/data.json";				// Set the url to retrieve the data from
	$jsonContent = file_get_contents($dataUrl);		// Get the data
	$json = json_decode($jsonContent, true);		// (true) returns the json as array-structure

	// Array-Konstrukte aufbauen
	//$header = array_keys($json['content']);		// Build header-array (keys of first layer only, because we only need the keys as title)
	$content = $json['content'];					// Get content-array directly
	//$footer = $json['footer'];					// Get footer-array



	// +++++ Functions +++++++

	// get the RSS
	function getRSS($content) {
		foreach($content as $key) {
			foreach($key as $rssUrl) {
				$xml = file_get_contents($rssUrl['url']);
				$xml = simplexml_load_string($xml);
				$xmlLink = $xml->channel[0]->link;
				$xmlDescription = $xml->channel[0]->description;
				return array ($xml, $xmlLink, $xmlDescription);
			}
		}
	}

	// parse RSS
	function renderRss($bundledXml) {
		$xmlLink = $bundledXml[1];
		$xmlDescription = $bundledXml[2];

		foreach ($bundledXml[0]->channel[0]->item as $item) {
			// prepare output
			$itemLink = strip_tags($item->link);
			$itemTitle = strip_tags($item->title);
			$itemDate = strip_tags(date("d.m.Y (H:m)", strtotime($item->pubDate)));
			$itemDescription = strip_tags($item->description);

			// render output
			echo '<li>';
			echo '<a href="' . $xmlLink . '" class="icon" rel="noopener"><img src="favicon.ico" alt="' . $xmlDescription . '" height="32" width="32" /></a>';
			echo '<h2 class="title"><a href="' .  $itemLink . '" rel="noopener">' . $itemTitle .'</a></h2>';
			echo '<p class="info"><span class="date">' . $itemDate . '</span> / <a href="' . $xmlLink . '" class="source">' . $xmlDescription . '</a></p>';
			echo '<p class="excerpt js-folddown"><a href="' .  $itemLink . '" rel="noopener">' . $itemDescription . '</a></p>';
			echo '</li>';
		}
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

	<!-- Short Names -->
	<meta name="apple-mobile-web-app-title" content="<?php echo($applicationName); ?>" />
	<meta name="application-name" content="<?php echo($applicationNameShort); ?>" />

	<!-- Icons -->
	<link rel="apple-touch-icon" href="apple-touch-icon-foto-114x114-precomposed.png" />
	<link rel="shortcut icon" href="favicon.ico" />

	<!-- CSS -->
	<style type="text/css">
		<?php require_once($cssUrl); ?>
	</style>

	<!-- JS -->
	<script type="text/javascript">
		<?php require_once($jsUrl); ?>
	</script>

	<!-- Mobile Manifest -->
	<link rel="manifest" href="manifest.json" />
</head>

<body id="home">

	<!-- header -->
	<header>
		<!-- nothing here -->
	</header>

	<!-- content -->
	<main id="content">
		<ul>
			<?php
				$bundledXml = getRss($content);
				renderRss($bundledXml);
			?>
		</ul>
	</main>

	<!-- footer -->
	<footer>
	</footer>
</body>
</html>
