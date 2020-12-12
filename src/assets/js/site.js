// ###########
// # imports #
// ###########

import find from "./helper/find";
import toggleClass from "./helper/toggleClass";
import ajaxRequest from "./helper/ajaxRequest";

// ###########
// # program #
// ###########

// load content into the ui
ajaxRequest("GET", "middleware.php?return=content", injectContent);
function injectContent(response) {
	document.getElementById("content").innerHTML = response;
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
