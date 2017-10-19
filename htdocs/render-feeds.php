<?php

	// Setup
	$projectConfigUrl = 'config/config.php';
	require_once($projectConfigUrl);

	// +++++ Functions +++++++

	// get the rootUrl
	function getRootUrl($url) {
		$url = explode('/', $url);		// explode original url
		$url = $url[2];					// simply use rootUrl
		return $url;
	}

	// get the RSS
	function getRSS($content, $currentChannelKey) {
		foreach($content as $key=>$value) {

			// compute selected channel only (default if checkCurrentChannel decides)
			if($key == $currentChannelKey) {
				foreach($value as $rssUrl) {
					$xml = file_get_contents($rssUrl['url']);			// get url from json
					$xml = simplexml_load_string($xml);					// load rss to object

					// get data to push to every feedItem
					$xmlAuthorLink = getRootUrl((string)$xml->channel[0]->link);			// get source-link from rss
					$xmlAuthorDescription = $xmlAuthorLink;									// get description from rss
					$xmlAuthorIcon = '//' . $xmlAuthorLink . "/favicon.ico";				// set up favicon from sourcelink

					foreach($xml->channel[0]->item as $item) {
						$feedItems[] = array(
							'itemAuthorLink' => '//' . $xmlAuthorLink,						// get authorlink (from feed)
							'itemAuthorDescription' => $xmlAuthorDescription,				// get author (from feed)
							'itemAuthorIcon' => $xmlAuthorIcon,								// get authorIcon (from feed)
							'itemLink' => strip_tags($item->link),							// get the link
							'itemTitle' => strip_tags($item->title),						// get the title
							'itemTimestamp' => strtotime($item->pubDate),					// get timestamp to make timeline sortable
							'itemDate' => date("d.m.Y (H:i)", strtotime($item->pubDate)),	// get releasedate an transform to readable date
							'itemDescription' => shortenItem(strip_tags($item->description))				// get description of item (usually news-short-description)
						);
					}
				}
			}

		}
		return $feedItems;
	}

	// sort RSS by releaseDate/timestamp
	function sortRss($feedItems) {
		foreach ($feedItems as $key => $row) {
			$itemTimestamp[$key] = $row['itemTimestamp'];
		}
		array_multisort($itemTimestamp, SORT_DESC, $feedItems);
		return $feedItems;
	}

	function shortenItem($item) {
		if(strlen($item) > 400) {
			$item = substr($item, 0, 400) . " ...";
		}
		return $item;
	}

	// render Output
	function renderRss($feedItems) {
		foreach ($feedItems as $feedItem) {
			echo '<li id="' . $feedItem['itemTimestamp'] . '">';	// add timestamp to use as anchor for unread news
			echo 	'<div>';
			echo 		'<a href="' . $feedItem['itemAuthorLink'] . '" class="icon" rel="noopener"><img src="' . $feedItem['itemAuthorIcon'] . '" alt="' . $feedItem['itemAuthorDescription'] . '" height="32" width="32" /></a>';
			echo 	'</div>';
			echo 	'<div>';
			echo 		'<h2 class="title"><a href="' .  $feedItem['itemLink'] . '" rel="noopener">' . $feedItem['itemTitle'] .'</a></h2>';
			echo 		'<p class="info"><span class="date">' . $feedItem['itemDate'] . '</span> / <a href="' . $feedItem['itemAuthorLink'] . '" class="source">' . $feedItem['itemAuthorDescription'] . '</a></p>';
			echo 		'<p class="excerpt"><a href="' .  $feedItem['itemLink'] . '" rel="noopener">' . $feedItem['itemDescription'] . '</a></p>';
			echo 	'</div>';
			echo	'<div>';
			echo	'</div>';
			echo '</li>';
		}
	}

	// check if channel is set via parameter and the paramter matches the channels from data/json (array)
	function checkCurrentChannel($channelItems) {
		$channelUrlParameter = urldecode($_GET['channel']);
		if(in_array($channelUrlParameter, $channelItems)) {
			return $channelUrlParameter;
		} else {
			return $channelItems[0];
		}
	}

?>


<!-- output -->
<ul>
	<?php
		$currentChannelKey = checkCurrentChannel($channelItems);
		$feedItems = getRss($content, $currentChannelKey);
		$feedItems = sortRss($feedItems);
		renderRss($feedItems);
	?>
</ul>
