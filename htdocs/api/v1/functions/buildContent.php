<?php

// ###########
// # imports #
// ###########

	// import functions
	require_once __DIR__ . "/../feedHandling/loadExternalFeeds.php";
	require_once __DIR__ . "/../feedHandling/removeDuplicates.php";
	require_once __DIR__ . "/../feedHandling/filterFeed.php";
	require_once __DIR__ . "/../feedHandling/returnChannelList.php";
	require_once __DIR__ . "/../feedHandling/returnItemCounts.php";
	require_once __DIR__ . "/../feedHandling/reduceFeed.php";
	require_once __DIR__ . "/../feedHandling/shortenDescription.php";
	require_once __DIR__ . "/sortArray.php";
	require_once __DIR__ . "/returnJson.php";

// ###########
// # program #
// ###########

	function buildContent($channel, $meta, $feeds, $blacklist, $translations, $timestamp, $maxitemcount, $maxTextLength) {
		// ---- check items that are passed via URL
		// is a channel set and does it exist in the data?
		// otherwise use the first channel
		if (isset($channel) && $channel !== "" && in_array($channel, array_keys($feeds))) {
			$activeChannel = $channel;
			$responseType = $translations["ok"];
			$responseMsg = null;
		} else {
			$activeChannel = array_keys($feeds)[0];
			$responseType = $translations["warning"];
			$responseMsg = "requested channel not found - using default";
		}

		// is maxitemcount set and is it a valid number?
		// otherwise set it to zero => return everything
		if(!is_numeric($maxitemcount) && isset($maxitemcount)) {
			$maxitemcount = 0;
			$responseType = $translations["warning"];
			$responseMsg = "maxitemcount dosn't contain a valid number - returning all items";
		}

		// is maxTextLength set?
		// otherwise set it to zero => doesn't shorten the text
		if(!is_numeric($maxTextLength) && isset($maxTextLength)) {
			$maxTextLength = 0;
			$responseType = $translations["warning"];
			$responseMsg = "maxitemcount dosn't contain a valid number - returning all items";
		}

		// ---- now let's build the content
		// grab requested channel-contents and modify them
		$content['content'] = $feeds[$activeChannel];
		$content['content'] = loadExternalFeeds($content['content'], $timestamp);
		$content['content'] = removeDuplicates($content['content']);
		$content['content'] = filterFeed($content['content'], $blacklist);
		$content['content'] = sortArray($content['content'], 'itemTimestamp');

		// reduce content to maxitemcount
		if($maxitemcount > 0) {
			$content['content'] = reduceFeed($content['content'], $maxitemcount);
		}

		// shorten description
		if($maxTextLength > 0) {
			$content['content'] = shortenText($content['content'], $maxTextLength);
		}

		// count returnedItems
		$itemCounts = returnItemCounts($content['content'], $timestamp);

		// return channelList with Active State
		$content['channels'] = returnChannelList($feeds, $activeChannel);

		// collect metaStuff
		$content['meta'] = array(
			"state" => $responseType ? $responseType : $translations["ok"],
			"message" => $responseMsg ? $responseMsg : null,
			"itemCounts" => $itemCounts ? $itemCounts : null,
			"pinnedMessage" => $meta["pinnedMessage"] ? $meta["pinnedMessage"] : false
		);

		return $content;
	}

?>
