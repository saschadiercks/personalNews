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

	// Countervalues to start with. Every block gets it's own value, so we don't need to unset it
	// The important thing is, header and content must use the same startValue!
	//$counterStartvalue = 1;						// Set the Number the counters start with (no change nesseccary)
	//$headerCount = $counterStartvalue;
	//$contentCount = $counterStartvalue;

	// +++++ Funktionen +++++++
	// allow loading files
	ini_set("allow_url_fopen", true);

	// parse RSS
	function parseRss($rssUrl) {
		$xml = file_get_contents($rssUrl);
		$xml = simplexml_load_string($xml);

		$author = $xml->channel[0]->$description;
		echo $author;

		foreach ($xml->channel[0]->item as $item) {
			echo '<li>';
			echo '<h2 class="title"><a href="' .  $item->link . 'rel="noopener">' . $item->title .'</a></h2>';
			echo '<p class="info"><span class="date">' . date("d.m.Y (h:m)", strtotime($item->pubDate)) . '</span> / <span class="source">tagesschau.de</span></p>';
			echo '<p class="excerpt">' . $item->description . '</p>';
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
				foreach($content as $key) {
					foreach($key as $rssUrl) {
						parseRss($rssUrl['url']);
					}
				}
			?>
		</ul>
	</main>

	<!-- footer -->
	<footer>
	</footer>
</body>
</html>
