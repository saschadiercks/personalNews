<?php

// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function getRootUrl($url) {
		// extract the protocol
		$url = explode('//', $url);
		$protocol = $url[0];
		$urlWithoutPath = explode('/', $url[1]);

		$urlWithoutSubDomain = str_replace('www.', '', $urlWithoutPath);
		return $protocol . '//' . $urlWithoutSubDomain[0];
	}

