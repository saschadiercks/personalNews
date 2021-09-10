<?php
// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########

	function returnNewItemsCount($feeds, $timestamp, $totalItems) {
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
		$newItems = returnNewItemsCount($feeds, $timestamp, $totalItems);

		return array(
			"totalItems" => $totalItems,
			"newItems" => isset($newItems) ? $newItems : $totalItems
		);
	}
