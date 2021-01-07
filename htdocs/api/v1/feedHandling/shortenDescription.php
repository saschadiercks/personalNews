<?php

// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########

function shortenText($feedItems, $maxTextLength) {

	foreach($feedItems as &$feedItem) {
		if(strlen($feedItem['itemDescription']) > $maxTextLength) {
			$feedItem['itemDescription'] = substr($feedItem['itemDescription'], 0, strpos($feedItem['itemDescription'], '. ', $maxTextLength)) . ". (...)";
		}
	}

	return $feedItems;
}

?>
