<?php
// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function filterFeed($feedItems, $blacklist) {

		foreach($feedItems as $feedItem => $itemFragment) {
			$itemFragmentsCombined = $itemFragment['itemLink'] .' '. $itemFragment['itemTitle'] .' '. $itemFragment['itemDescription']; 	// were combining url, title, description to search them in one go

			foreach($blacklist as $blacklistItem) {
				if(strpos($itemFragmentsCombined, $blacklistItem) !== FALSE) {
					unset($feedItems[$feedItem]);
				}
			}
		}

		return $feedItems;
	}

?>
