<?php

// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function sortArray($feedItems, $sortBy) {
		foreach ($feedItems as $feedItem => $key) {
			$itemTimestamp[$feedItem] = $key[$sortBy];
		}

		// only sort, when there is a timestamp available
		// otherwise we're keeping the sorting from the feed
		// we can safely assume, that timestamp is a number
		if(is_numeric($itemTimestamp[$feedItem])) {
			array_multisort($itemTimestamp, SORT_DESC, $feedItems);
		}
		return $feedItems;
	}
