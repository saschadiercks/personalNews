<?php

	// Setup
	$projectConfigUrl ='config/config.php';
	require_once($projectConfigUrl);

	// +++++ Functions +++++++
	$channelUrlParameter = urldecode($_GET['channel']);		// get the channelparamter, if there's one
	$channelItems = array();								// collect all channels in array

	// get all channels and put them in array
	function getChannelItems($content) {
		$channelItems = array_keys($content);
		return $channelItems;
	}


	// build the channel-list
	function renderChannels($channelItems) {
		foreach($channelItems as $channelItem) {
			$channelItemParameter = urlencode($channelItem);
			$channelItemName = $channelItem;

			echo '<li>';
			echo '<a href="?channel=' . $channelItemParameter . '">' . $channelItemName . "</a>";
			echo '</li>';
		}
	}

?>


<!-- output -->
<div class="overlay js-hidden" id="application-overlay">
	<h2><?php echo($applicationName); ?></h2>
	<ul id="channels">
		<?php
			$channelItems = getChannelItems($content);
			renderChannels($channelItems);
		?>
	</ul>
</div>
