<?php

// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function sortArray($feedItems,$keyName) {
		foreach ($feedItems as $feedItem => $key) {
			$itemTimestamp[$feedItem] = $key[$keyName];
		}
		array_multisort($itemTimestamp, SORT_DESC, $feedItems);
		return $feedItems;
	}

?>
