<?php

// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function getRootDomainTLD($url) {
		$url = explode('.', $url);						// explode original url
		$url = $url[1] . '.' . $url[2];				// just use domain and TLD
		return $url;
	}

?>
