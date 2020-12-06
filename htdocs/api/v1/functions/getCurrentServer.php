<?php

// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function getCurrentServer() {
		if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
			$url = "https://";
		} else {
			$url = "http://";
		}

		// Append the host(domain name, ip) to the URL.
		$url .= $_SERVER['HTTP_HOST'];

		return $url;
	}

?>
