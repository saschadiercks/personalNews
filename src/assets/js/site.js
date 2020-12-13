// ###########
// # imports #
// ###########

import find from "./helper/find";
import toggleClass from "./helper/toggleClass";
import ajaxRequest from "./helper/ajaxRequest";
import returnSearchParam from "./helper/returnSearchParam";

// ###########
// # program #
// ###########

// load content into the ui
ajaxRequest(
	"GET",
	"middleware.php?return=content&channel=" + returnSearchParam("channel"),
	injectContent
);
function injectContent(response) {
	document.getElementById("content").innerHTML = response;
	toggleClass(find("#unread-items"), "js-hidden");
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
