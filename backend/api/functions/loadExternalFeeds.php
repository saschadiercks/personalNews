<?php

// ###########
// # imports #
// ###########

	// import functions
	require_once __DIR__ . "/../feedHandling/checkFeedFormat.php";
	require_once __DIR__ . "/../feedHandling/parseRss.php";
	require_once __DIR__ . "/../feedHandling/parseAtom.php";

// ###########
// # program #
// ###########

	function loadExternalFeeds($content) {

		foreach($content['feeds'] as $feed) {

			// get url from json and put it in an object
			$feed = @file_get_contents($feed['url']);
			$feed = simplexml_load_string($feed);

			switch (checkFeedFormat($feed)) {
				case "rss":
					$feeds[] = parseRss($feed);
					break;
				case "atom":
					$feeds[] = parseAtom($feed);
					break;
			}
		}

		// merge arrays into one
		$feedsCombined = array();
		for($i = 0; $i < count($feeds); $i++) {
			$feedsCombined = array_merge($feedsCombined,$feeds[$i]);
		}

		return $feedsCombined;
	}

?>
