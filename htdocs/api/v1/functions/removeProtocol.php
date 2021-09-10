<?php

// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function removeProtocol($url) {
		$url = explode('//', $url);		// explode original url
		return $url[1] . '.' . $url[2];				// just use domain and TLD
	}
