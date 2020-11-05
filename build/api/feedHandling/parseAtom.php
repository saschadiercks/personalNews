<?php
// ###########
// # imports #
// ###########

	// import functions
	require_once("./functions/getRootUrl.php");

// ###########
// # program #
// ###########

	function parseAtom($xml) {
		// get data to push to every feedItem
		$xmlAuthorLink = $xml->link['href'];						// extract href from element
		$xmlAuthorLink = getRootUrl($xmlAuthorLink);				// get source-link from feed
		$xmlAuthorDescription = $xmlAuthorLink;						// get description from feed

		$xmlAuthorIcon = $xmlAuthorLink . "/favicon.ico";			// set up favicon from sourcelink

		foreach($xml->entry as $item) {
			$feedItems[] = array(
				'itemAuthorLink' => $xmlAuthorLink,								// get authorlink (from feed)
				'itemAuthorDescription' => $xmlAuthorDescription,						// get author (from feed)
				'itemAuthorIcon' => $xmlAuthorIcon,										// get authorIcon (from feed)
				'itemLink' => strip_tags($item->id),									// get the link
				'itemTitle' => strip_tags($item->title),								// get the title
				'itemTimestamp' => strtotime($item->updated),							// get timestamp to make timeline sortable
				'itemDate' => date("d.m.Y (H:i)", strtotime($item->updated)),			// get releasedate an transform to readable date
				'itemDescription' => strip_tags($item->content)							// get description of item (usually news-short-description)
			);
		}

		return $feedItems;
	}

?>
