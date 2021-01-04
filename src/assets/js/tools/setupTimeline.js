// ###########
// # imports #
// ###########

import scrollToTarget from "../helper/scrollToTarget";
import find from "../helper/find";
import toggleClass from "../helper/toggleClass";
import updateTimestamp from "../tools/updateTimestamp";

// ###########
// # program #
// ###########

function setupTimeline(response) {
	// place response
	document.getElementById("application-content").innerHTML = response;

	// get unreadItem-element and it's count
	window.unreadItemsCount = document.getElementById(
		"unread-items"
	).dataset.unreaditems;
	window.unreadItemsElementCount = document.getElementById(
		"unread-items__count"
	);

	// now get amount of feeditems and calculate latest item to se it as scroll-anchor
	let allFeedItems = find(".feed-items__item");
	let latestItem = allFeedItems[unreadItemsCount - 1];

	// toggle ui-elements
	toggleClass(find("#unread-items"), "js-hidden");
	toggleClass(find("#application-loading"), "js-hidden");

	// scroll to target
	scrollToTarget(latestItem, 0, 52, () => {
		updateTimestamp(allFeedItems);
	});
}

export default setupTimeline;
