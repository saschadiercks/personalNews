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

		if($itemTimestamp[$feedItem] != "no date received") {
			array_multisort($itemTimestamp, SORT_DESC, $feedItems);
		}
		return $feedItems;
	}

?>
