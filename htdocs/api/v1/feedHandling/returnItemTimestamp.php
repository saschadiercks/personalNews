<?php
// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########

	function returnItemTimestamp($timestamp, $returnValue) {
		if($timestamp) {
			if($returnValue === "readableDate") {
				return date("d.m.Y (H:i)", strtotime($timestamp));
			} else {
				return strtotime($timestamp);
			}
		} else {
			return "no date received";
		}
	}
?>
