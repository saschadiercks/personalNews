<?php
// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########

	function reduceFeed($feeds, $maxitemcount) {

		$feeds = array_slice($feeds, 0, $maxitemcount);
		return $feeds;
	}

?>
