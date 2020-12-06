<?php
// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########

	function retunrNewItemsCount($feeds, $timestamp, $totalItems) {
		$i = 0;

		foreach($feeds as $feed) {
			if($timestamp >= $feed["itemTimestamp"] && $i < $totalItems) {
				return $i;
			}
			$i++;
		}
	}

	function returnItemCounts($feeds, $timestamp) {

		$totalItems = count($feeds);
		$newItems = retunrNewItemsCount($feeds, $timestamp, $totalItems);

		$itemCounts = array(
			"totalItems" => $totalItems,
			"newItems" => isset($newItems) ? $newItems : $totalItems
		);

		return $itemCounts;
	}

?>
