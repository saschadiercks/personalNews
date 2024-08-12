<?php
// ###########
// # imports #
// ###########

	// import functions
	require_once __DIR__ ."/../../../config/config.php";
	require_once __DIR__ ."/../functions/getRootUrl.php";
	require_once __DIR__ . "/../functions/removeProtocol.php";
	require_once __DIR__ ."/returnItemTimestamp.php";
	require_once __DIR__ ."/setAvatar.php";

// ###########
// # program #
// ###########

	function parseAtom($xml, $optionalAvatarUrl, $timestamp) {
		global $itemDescriptionEmptyAllowed;
		global $itemDescriptionEmptyText;

		// get data to push to every feedItem
		$xmlAuthorLink = $xml->link['href'];						// extract href from element
		$xmlAuthorLink = getRootUrl($xmlAuthorLink);				// get source-link from feed
		$xmlAuthorDescription = removeProtocol($xmlAuthorLink);	// get description from AuthorLink

		// use Icon from date file or use Url for favicon
		$xmlAuthorIcon = setAvatar($optionalAvatarUrl, $xmlAuthorLink);

		foreach($xml->entry as $item) {
			$feedItems[] = array(
					'itemAuthorLink' => $xmlAuthorLink,								// get authorlink (from feed)
					'itemAuthorDescription' => $xmlAuthorDescription,						// get author (from feed)
					'itemAuthorIcon' => $xmlAuthorIcon,										// get authorIcon (from feed)
					'itemLink' => strip_tags($item->id),									// get the link
					'itemTitle' => strip_tags($item->title),								// get the title
					'itemTimestamp' => returnItemTimestamp($item->updated, "timestamp"),	// get timestamp to make timeline sortable
					'itemDate' => returnItemTimestamp($item->updated, "readableDate"),		// get releasedate an transform to readable date
					'itemDescription' => strlen(strip_tags($item->content)) > 0 || !$itemDescriptionEmptyAllowed ? strip_tags($item->content) : $itemDescriptionEmptyText,	// get description of item (usually news-short-description)
					'itemIsUnread' => returnItemTimestamp($item->pubDate, "timestamp") > $timestamp
				);

		}

		return $feedItems;
	}

