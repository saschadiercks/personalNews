<?php

// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function getRootUrl($url) {
		$url = explode('/', $url);						// explode original url
		$url = $url[0] . '//' . $url[2];				// just use protocole and domain
		return $url;
	}

?>
