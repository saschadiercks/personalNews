// ###########
// # imports #
// ###########

import ajaxRequest from "./helper/ajaxRequest";
import find from "./helper/find";
import reload from "./helper/reload";
import returnSearchParam from "./helper/returnSearchParam";
import scrollToTop from "./helper/scrollToTop";
import toggleClass from "./helper/toggleClass";
import togglePageScroll from "./helper/togglePageScroll";

import setupTimeline from "./tools/setupTimeline";

// ###########
// # program #
// ###########

// ---- initial states
window.isScrollable = true;

// get latest unreadItem from saved timestamp
window.lastReadTimestamps = localStorage.getItem("lastReadItems");
if (!lastReadTimestamps) {
	lastReadTimestamps = 0;
}

// ---- load content and setupTimeline with response
ajaxRequest(
	"GET",
	"middleware.php?return=content&channel=" +
		returnSearchParam("channel") +
		"&timestamp=" +
		lastReadTimestamps,
	setupTimeline
);

// ---- load channels into UI-Element
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
			togglePageScroll(
				document.querySelector("body"),
				document.querySelector("#application-content")
			);
			event.preventDefault();
		},
		true
	);
});

// ---- reload
find(".js-reload").forEach((element) => {
	element.addEventListener("click", reload, true);
});

// ---- scroll to top
find(".js-scroll-top").forEach((element) => {
	element.addEventListener(
		"click",
		() => {
			scrollToTop();
		},
		true
	);
});
