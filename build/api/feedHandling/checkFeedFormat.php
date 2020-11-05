<?php

	function checkFeedFormat($feedObject) {
		if(isset($feedObject->channel)) {
			return "rss";
		} else if(isset($feedObject->entry)) {
			return "atom";
		}
	}

?>
