<?php
// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########

	function reduceFeed($feeds, $maxitemcount) {

		return array_slice($feeds, 0, $maxitemcount);
	}
