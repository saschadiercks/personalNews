<?php

// ###########
// # imports #
// ###########

	// import functions
	require_once("./feedHandling/checkFeedFormat.php");
	require_once("./feedHandling/parseRss.php");
	require_once("./feedHandling/parseAtom.php");

// ###########
// # program #
// ###########

	function loadExternalFeeds($content) {
		foreach($content as $feed) {
			//$icon = $feed['icon'];						// get icon-url

			// get url from json and put it in an object
			$xml = @file_get_contents($feed['url']);
			$xml = simplexml_load_string($xml);

			switch (checkFeedFormat($xml)) {
				case "rss":
					parseRss($xml);
					break;
				case "atom":
					parseAtom($xml);
					break;
			}
		}

		return $xml;
	}

?>
