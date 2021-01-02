// ###########
// # imports #
// ###########

import find from "../helper/find";
import toggleClass from "../helper/toggleClass";
import listenForScroll from "../helper/listenForScroll";

// ###########
// # program #
// ###########

// remembering the timestamp, when the item comes into view
function updateTimestamp(elements) {
	let config = {
		root: null,
		rootMargin: "0px",
		threshold: 1,
	};

	let observer = new IntersectionObserver(onChange, config);
	elements.forEach((element) => observer.observe(element));

	// remove badge if user scrolls to designated position to avoid keeping
	// the badge with a value higher than 0
	listenForScroll(52, hideBadge);

	function hideBadge() {
		toggleClass(find("#unread-items"), "js-hidden");
	}
}

function onChange(changes, observer) {
	changes.forEach((change) => {
		if (change.intersectionRatio > 0) {
			let lastSavedTimestamp = localStorage.getItem("lastReadItems");
			let itemTimestamp = change.target.dataset.timestamp;
			let remainingItemsCount = change.target.dataset.count;
			if (lastSavedTimestamp < itemTimestamp) {
				localStorage.setItem("lastReadItems", itemTimestamp);
				if (remainingItemsCount > 0) {
					unreadItemsElementCount.innerHTML = remainingItemsCount;
				}
			}
			change.target.classList.add("feed-items__item--read");
			observer.unobserve(change.target);
		}
	});
}

export default updateTimestamp;
