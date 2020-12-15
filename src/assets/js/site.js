// ###########
// # imports #
// ###########

import debounce from "./helper/debounce";
import find from "./helper/find";
import toggleClass from "./helper/toggleClass";
import ajaxRequest from "./helper/ajaxRequest";
import returnSearchParam from "./helper/returnSearchParam";
import scrollToTarget from "./helper/scrollToTarget";
import themeSwitcher from "./helper/themeSwitcher";

// ###########
// # program #
// ###########

// get latest unreadItem from saved timestamp
let lastReadTimestamps = localStorage.getItem("lastReadItems");
if (!lastReadTimestamps) {
	lastReadTimestamps = 0;
}

// load content into the ui
ajaxRequest(
	"GET",
	"middleware.php?return=content&channel=" +
		returnSearchParam("channel") +
		"&timestamp=" +
		lastReadTimestamps,
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
	let allFeedItems = find(".feed-items__item");
	let unreadItemsCount = find("#unread-items__count")[0].innerHTML - 1;
	let latestItem = allFeedItems[unreadItemsCount];
	scrollToTarget(latestItem);

	// give it some time before executing
	setTimeout(() => {
		updateTimestamp(allFeedItems);
	}, 3000);
}

// remembering the timestamp, when the item comes into view
// IntersectionObserver Supported
function updateTimestamp(elements) {
	//let amount = elements.length;
	let config = {
		root: null,
		rootMargin: "100px 0px 0px",
		threshold: 0,
	};

	let observer = new IntersectionObserver(onChange, config);
	elements.forEach((element) => observer.observe(element));
}

function onChange(changes, observer) {
	changes.forEach((change) => {
		if (change.intersectionRatio > 0) {
			let lastSavedTimestamp = localStorage.getItem("lastReadItems");
			let currentTimestamp = change.target.dataset.timestamp;
			if (lastSavedTimestamp < currentTimestamp) {
				localStorage.setItem("lastReadItems", currentTimestamp);
			}
			change.target.classList.add("feed-items__item--read");
			observer.unobserve(change.target);
		}
	});
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
			event.preventDefault();
		},
		true
	);
});

// allow theme switching
themeSwitcher();
