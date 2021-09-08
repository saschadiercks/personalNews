<?php

function removeDuplicates($feedItems) {
	$collectedTitles = array();

	foreach($feedItems as $feedItem => $itemFragment) {
		if(!in_array($itemFragment['itemTitle'], $collectedTitles)) {
			array_push($collectedTitles, $itemFragment['itemTitle']);
		} else {
			unset($feedItems[$feedItem]);
		}
	}

	return $feedItems;
}
