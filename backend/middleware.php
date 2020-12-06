<?php
	ini_set('display_errors', 1);
	error_reporting(E_ALL ^ E_NOTICE);

// ###########
// # imports #
// ###########

	// data through url
	$returnType = $_GET['return'];

	// data from api
	require_once __DIR__ . ('/settings/index.php');
	require_once __DIR__ . ('/api/functions/buildContent.php');

// ###########
// # program #
// ###########

	$contentBuilt = buildContent($channel, $metaData, $feedsData, $blacklistData, $errorNames);

	function renderChannels($channels) {
		echo '<div class="overlay js-hidden" id="application-overlay">';
		echo 	'<div class="overlay-backdrop js-overlay-toggle" data-target="application-overlay"></div>';
		echo 		'<div class="overlay-content">';
		echo			'<h2>personalNews</h2>';
		echo			'<ul id="channels">';
							foreach($channels as $channel) {
								echo '<li>';
								echo '<a href="?channel=' . $channel['channel'] . '" data-channel="'. $channel['channel'] . '">' . $channel['channelTitle'] . "</a>";
								echo '</li>';
							}
		echo			'</ul>';
		echo		'</div>';
		echo	'</div>';
		echo '</div>';
	}

	function renderContent($feedItems) {
		echo '<ul id="feed-items">';
			$feedItemCount = 0;
			foreach ($feedItems as $feedItem) {
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
	}

	switch ($returnType) {
		case 'channels':
			renderChannels($contentBuilt['channels']);
			break;
		case 'content':
			renderContent($contentBuilt['content']);
			break;
		default:
			echo "nothing specified";
			break;
	}

?>
