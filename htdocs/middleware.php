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
	$contentBuilt = buildContent($channel, $metaData, $feedsData, $blacklistData, $errorNames, $timestamp);

// ###########
// # program #
// ###########

	function renderChannels($channels) {
		foreach($channels as $channel) {
			echo '<li>';
			echo '<a href="?channel=' . $channel['channel'] . '" data-channel="'. $channel['channel'] . '">' . $channel['channelTitle'] . "</a>";
			echo '</li>';
		}
	}

	function renderContent($content, $meta) {
		// the feedItems
		echo '<ul id="feed-items">';
			$feedItemCount = 0;
			foreach ($content as $feedItem) {
				echo '<li id="ts-' . $feedItem['itemTimestamp'] . '" data-count="' . $feedItemCount . '" data-ts="' . $feedItem['itemTimestamp'] .'">';	// add timestamp to use as anchor for unread news
				echo 	'<div>';
				echo 		'<a href="' . $feedItem['itemAuthorLink'] . '" class="icon" rel="noopener" target="pn-blank"><img src="' . $feedItem['itemAuthorIcon'] . '" alt="' . $feedItem['itemAuthorDescription'] . '" height="128" width="128" /></a>';
				echo 	'</div>';
				echo 	'<div>';
				echo		'<header>';
				echo			'<h2 class="title"><a href="' .  $feedItem['itemLink'] . '" rel="noopener" target="pn-blank">' . $feedItem['itemTitle'] .'</a></h2>';
				echo			'<p class="info"><span class="date">' . $feedItem['itemDate'] . '</span> / <a href="' . $feedItem['itemAuthorLink'] . '" class="source">' . $feedItem['itemAuthorDescription'] . '</a></p>';
				echo		'</header>';
				echo		'<p class="excerpt"><a href="' .  $feedItem['itemLink'] . '" rel="noopener" target="pn-blank">' . $feedItem['itemDescription'] . '</a></p>';
				echo	'</div>';
				echo	'<div>';
				echo	'</div>';
				echo '</li>';
				$feedItemCount++;
			}
		echo '</ul>';

		// the itemCount
		echo'<div id="unread-items" class="js-hidden">';
		echo'<span id="unread-items__count">' . $meta['itemCounts']['newItems'] . '</span>';
		echo'</div>';
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
