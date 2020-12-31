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
	document.getElementById("content").innerHTML = response;

	// get unreadItem and make value globally acccessible
	window.unreadItemsElement = document.getElementById("unread-items");

	// now get amount of feeditems and calculate latest item to se it as scroll-anchor
	let allFeedItems = find(".feed-items__item");
	let unreadItemsCount = unreadItemsElement.dataset.unreaditems;
	let latestItem = allFeedItems[unreadItemsCount - 1];
	scrollToTarget(latestItem, 0, 52, () => updateTimestamp(allFeedItems));

	// toggle ui-elements
	toggleClass(find("#unread-items"), "js-hidden");
	toggleClass(find("#application-loading"), "js-hidden");
}

export default setupTimeline;
