<?php
// ###########
// # imports #
// ###########

	// import functions
	require_once __DIR__ ."/../functions/getRootUrl.php";
	require_once __DIR__ ."/../functions/setAvatar.php";

// ###########
// # program #
// ###########

	function parseRss($xml, $optionalAvatarUrl) {
		$xmlAuthorLink = $xml->channel[0]->link;
		$xmlAuthorLink = getRootUrl($xmlAuthorLink);					// get source-link from feed
		$xmlAuthorDescription = $xmlAuthorLink;							// get description from feed

		// use Icon from date file or use Url for favicon
		$xmlAuthorIcon = setAvatar($optionalAvatarUrl, $xmlAuthorLink);

		foreach($xml->channel[0]->item as $item) {
			$feedItems[] = array(
				'itemAuthorLink' => $xmlAuthorLink,								// get authorlink (from feed)
				'itemAuthorDescription' => $xmlAuthorDescription,						// get author (from feed)
				'itemAuthorIcon' => $xmlAuthorIcon,										// get authorIcon (from feed)
				'itemLink' => strip_tags($item->link),									// get the link
				'itemTitle' => strip_tags($item->title),								// get the title
				'itemTimestamp' => strtotime($item->pubDate),							// get timestamp to make timeline sortable
				'itemDate' => date("d.m.Y (H:i)", strtotime($item->pubDate)),			// get releasedate an transform to readable date
				'itemDescription' => strip_tags($item->description)						// get description of item (usually news-short-description)
			);
		}

		return $feedItems;
	}

?>
