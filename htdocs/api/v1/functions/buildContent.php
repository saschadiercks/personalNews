<?php

// ###########
// # imports #
// ###########

	// import functions
	require_once __DIR__ . "/../feedHandling/loadExternalFeeds.php";
	require_once __DIR__ . "/../feedHandling/filterFeed.php";
	require_once __DIR__ . "/../feedHandling/returnChannelList.php";
	require_once __DIR__ . "/sortArray.php";
	require_once __DIR__ . "/returnJson.php";

// ###########
// # program #
// ###########

	function buildContent($channel, $meta, $feeds, $blacklist, $translations) {
		// check: is a channel set and does it exist in the data?
		// otherwise use the first channel
		if (isset($channel) && $channel != "" && in_array($channel, array_keys($feeds))) {
			$activeChannel = $channel;
			$responseType = $translations["ok"];
			$responseMsg = null;
		} else {
			$activeChannel = array_keys($feeds)[0];
			$responseType = $translations["warning"];
			$responseMsg = "requested channel not found - using default";
		}

		// grab requested channel-contents and modify them
		$content['content'] = $feeds[$activeChannel];
		$content['content'] = loadExternalFeeds($content['content']);
		$content['content'] = filterFeed($content['content'], $blacklist);
		$content['content'] = sortArray($content['content'], 'itemTimestamp');

		// count returnedItems
		$returnedItems = 0;

		// return channelList with Active State
		$content['channels'] = returnChannelList($feeds, $activeChannel);

		// collect metaStuff
		$content['meta'] = array(
			"state" => $responseType ? $responseType : $translations["ok"],
			"message" => $responseMsg ? $responseMsg : null,
			"newItems" => $returnedItems ? $returnedItems : null,
			"pinnedMessage" => $meta["pinnedMessage"] ? $meta["pinnedMessage"] : false
		);

		return $content;
	}

?>
