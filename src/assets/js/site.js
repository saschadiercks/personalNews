// ###########
// # imports #
// ###########

import find from "./helper/find";
import toggleClass from "./helper/toggleClass";
import ajaxRequest from "./helper/ajaxRequest";
import returnSearchParam from "./helper/returnSearchParam";
import scrollToTarget from "./helper/scrollToTarget";

// ###########
// # program #
// ###########

// load content into the ui
ajaxRequest(
	"GET",
	"middleware.php?return=content&channel=" + returnSearchParam("channel"),
	afterContentLoad
);

// do this after content has been loaded
function afterContentLoad(response) {
	document.getElementById("content").innerHTML = response;
	toggleClass(find("#unread-items"), "js-hidden");
	toggleClass(find("#application-loading"), "js-hidden");
	scrollToFirstUnreadItem();
}

function scrollToFirstUnreadItem() {
	// we're removing 1 since the iteration through the list starts with zero
	let unreaItemsCount = find("#unread-items__count")[0].innerHTML - 1;
	let latestItem = find(".feed-items__item")[unreaItemsCount];
	scrollToTarget(latestItem);
}

// load channels into UI
ajaxRequest("GET", "middleware.php?return=channels", injectChannels);
function injectChannels(response) {
	document.getElementById("channels").innerHTML = response;
}

// toggle overlays
find(".js-overlay-toggle").forEach((element) => {
	element.addEventListener(
		"click",
		() => {
			toggleClass(find(element.dataset.target), "js-hidden");
		},
		true
	);
});
