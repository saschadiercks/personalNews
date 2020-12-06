<?php

// ###########
// # imports #
// ###########

	require_once __DIR__ ."/../functions/getCurrentServer.php";

// ###########
// # program #
// ###########

	function setAvatar($optionalAvatarUrl, $favIconUrl) {
		// set Avatar
		if($optionalAvatarUrl && !empty($optionalAvatarUrl)) {
			$avatar = getCurrentServer()."/".$optionalAvatarUrl;
		} else {
			$avatar = $favIconUrl . "/favicon.ico";
		}

		return $avatar;
	}

?>
