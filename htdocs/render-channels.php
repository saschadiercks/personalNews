<?php

	// Setup
	$projectConfigUrl ='config/config.php';
	require_once($projectConfigUrl);

	// build the channel-list
	function renderChannels($channelItems) {
		foreach($channelItems as $channelItem) {
			$channelItemParameter = urlencode($channelItem);
			$channelItemName = $channelItem;

			echo '<li>';
			echo '<a href="?channel=' . $channelItemParameter . '" data-channel="'. $channelItemParameter . '">' . $channelItemName . "</a>";
			echo '</li>';
		}
	}
?>


<!-- output -->
<div class="overlay js-hidden" id="application-overlay">
	<div class="overlay-backdrop js-overlay-toggle" data-target="application-overlay"></div>
	<div class="overlay-content">
		<h2><?php echo($applicationName); ?></h2>
		<ul id="channels">
			<?php
				renderChannels($channelItems);
			?>
		</ul>
	</div>
</div>
