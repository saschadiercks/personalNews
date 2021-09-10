<?php

// ###########
// # imports #
// ###########

	// import functions
	require_once __DIR__ . "/checkFeedFormat.php";
	require_once __DIR__ . "/parseRss.php";
	require_once __DIR__ . "/parseAtom.php";

// ###########
// # program #
// ###########

	function loadExternalFeeds($content, $timestamp) {

		foreach($content['feeds'] as $feed) {

			// check if an avatar is set in the data-file
			// we put it into the parser to exchange the favicon if the icon is set
			$feedAvatar = $feed['icon'];

			// get url from json and put it in an object
			$feed = @file_get_contents($feed['url']);
			$feed = simplexml_load_string($feed);

			switch (checkFeedFormat($feed)) {
				case "rss":
					$feeds[] = parseRss($feed, $feedAvatar, $timestamp);
					break;
				case "atom":
					$feeds[] = parseAtom($feed, $feedAvatar, $timestamp);
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
