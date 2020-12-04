<?php
// ###########
// # imports #
// ###########

	// import functions
	require_once __DIR__ . "/../functions/returnTrueFalse.php";

// ###########
// # program #
// ###########

function returnChannelList($content, $activeChannel) {
	$renderedChannels = array();

	foreach($content as $key => $channel) {
		$channelItem = array(
			"channelId" => $key,
			"title" => $channel["title"],
			"isActive" => returnTrueFalse($key, $activeChannel)
		);

		array_push($renderedChannels, $channelItem);
	}

	return $renderedChannels;
}

?>
