// ###########
// # imports #
// ###########

import ajaxRequest from "./helper/ajaxRequest";
import find from "./helper/find";
import reload from "./helper/reload";
import returnSearchParam from "./helper/returnSearchParam";
import themeSwitcher from "./helper/themeSwitcher";
import toggleClass from "./helper/toggleClass";

import setupTimeline from "./tools/setupTimeline";

// ###########
// # program #
// ###########

// get latest unreadItem from saved timestamp
window.lastReadTimestamps = localStorage.getItem("lastReadItems");
if (!lastReadTimestamps) {
	lastReadTimestamps = 0;
}

// load content and setupTimeline with response
ajaxRequest(
	"GET",
	"middleware.php?return=content&channel=" +
		returnSearchParam("channel") +
		"&timestamp=" +
		lastReadTimestamps,
	setupTimeline
);

// load channels into UI-Element
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
			event.preventDefault();
		},
		true
	);
});

// reload
find(".js-reload").forEach((element) => {
	element.addEventListener("click", reload, true);
});

// allow theme switching
// TODO: this needs refactoring alongside with the css
themeSwitcher();
