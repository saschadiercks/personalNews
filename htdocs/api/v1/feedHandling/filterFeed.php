<?php
// ###########
// # imports #
// ###########
	require_once __DIR__ ."/../../../config/config.php";

// ###########
// # program #
// ###########
function filterFeed($feedItems, $blacklist) {
	global $itemDescriptionEmptyAllowed;
	foreach($feedItems as $feedItem => $itemFragment) {
			// remove feedItems with empty text (if empty descriptions are not allowed)
			if(!$itemDescriptionEmptyAllowed && empty($itemFragment['itemDescription'])) {
				unset($feedItems[$feedItem]);
			} else {
				$itemFragmentsCombined = $itemFragment['itemLink'] .' '. $itemFragment['itemTitle'] .' '. $itemFragment['itemDescription']; 	// were combining url, title, description to search them in one go

				foreach($blacklist as $blacklistItem) {
					if(strpos($itemFragmentsCombined, $blacklistItem) !== FALSE) {
						unset($feedItems[$feedItem]);
					}
				}
			}
		}

		return $feedItems;
	}
