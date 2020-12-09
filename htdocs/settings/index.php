<?php

	$metaData= json_decode(file_get_contents(__DIR__ . '/../data/meta.json'), true);
	$feedsData = json_decode(file_get_contents(__DIR__ . '/../data/feeds.json'), true);
	$blacklistData = json_decode(file_get_contents(__DIR__ . '/../data/blacklist.json'), true);
	$translations = array(
		"ok" => "ok",
		"error" => "error",
		"warning" => "warning",
		"information" => "information"
	);

?>
