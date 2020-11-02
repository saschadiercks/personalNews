<?php

// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function getRootUrl($url,$urlFragementNr) {
		$url = explode('/', $url);		// explode original url
		$url = $url[$urlFragementNr];					// simply use rootUrl
		return $url;
	}

?>
