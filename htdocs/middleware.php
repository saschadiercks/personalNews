<?php

	// this middleware is used as a very dirty solution to keep the old site
	// working as expected

	ini_set('display_errors', 1);
	error_reporting(E_ALL ^ E_NOTICE);

// ###########
// # imports #
// ###########

	// data through url
	$returnType = $_GET['return'];
	$channel = $_GET['channel'];
	$timestamp = $_GET['timestamp'];

	// data from api
	require_once __DIR__ . ('/settings/index.php');
	require_once __DIR__ . ('/api/v1/functions/buildContent.php');

	// load the data
	$contentBuilt = buildContent($channel, $metaData, $feedsData, $blacklistData, $translations, $timestamp);

// ###########
// # program #
// ###########

	function renderChannels($channels) {
		foreach($channels as $channel) {
			echo '<li class="channels__item>';
			echo '<a href="?channel=' . $channel['channel'] . '" data-channel="'. $channel['channel'] . '" class="channels__link">' . $channel['channelTitle'] . "</a>";
			echo '</li>';
		}
	}

	function renderContent($content, $meta) {
		// the feedItems
		echo '<ul id="feed-items" class="ui-list ui-list--vertical">';
			echo '<li class="application-message">';
			echo $meta['pinnedMessage'];
			echo '</li>';

			// we need to start at zero, since we're using the number to render the remaining items
			$remainingItemCount = 0;
			foreach ($content as $feedItem) {
				$classNameRead = $remainingItemCount > $meta['itemCounts']['newItems'] ?  "feed-items__item--read" : "";
				echo '<li class="feed-items__item feed-item' . $classNameRead . '" data-timestamp="' . $feedItem['itemTimestamp'] .'" data-count="' . $remainingItemCount .'">';
				echo 	'<div>';
				echo 		'<a href="' . $feedItem['itemAuthorLink'] . '" class="feed-item__icon" rel="noopener" target="pn-blank"><img src="' . $feedItem['itemAuthorIcon'] . '" alt="' . $feedItem['itemAuthorDescription'] . '" height="128" width="128" /></a>';
				echo 	'</div>';
				echo 	'<div>';
				echo		'<header>';
				echo			'<h2 class="feed-item__title"><a href="' .  $feedItem['itemLink'] . '" rel="noopener" target="pn-blank">' . $feedItem['itemTitle'] .'</a></h2>';
				echo			'<p class="feed-item__meta"><span class="feed-item__date">' . $feedItem['itemDate'] . '</span> / <a href="' . $feedItem['itemAuthorLink'] . '" class="feed-item__source">' . $feedItem['itemAuthorDescription'] . '</a></p>';
				echo		'</header>';
				echo		'<p class="feed-item__description"><a href="' .  $feedItem['itemLink'] . '" rel="noopener" target="pn-blank">' . $feedItem['itemDescription'] . '</a></p>';
				echo	'</div>';
				echo	'<div class="feed-items__marker"></div>';
				echo '</li>';
				$remainingItemCount++;
			}
		echo '</ul>';

		// the itemCount
		echo '<div id="unread-items" class="badge badge--unread-items js-hidden" data-unreaditems="' . $meta['itemCounts']['newItems']. '">';
		echo	'<span id="unread-items__count" class="badge__content">' . $meta['itemCounts']['newItems'] . '</span>';
		echo '</div>';
	}

	// what to do, when called via ajax from index.php
	switch ($returnType) {
		case 'channels':
			renderChannels($contentBuilt['channels']);
			break;
		case 'content':
			renderContent($contentBuilt['content'], $contentBuilt['meta']);
			break;
		default:
			echo "nothing specified";
			break;
	}
?>
