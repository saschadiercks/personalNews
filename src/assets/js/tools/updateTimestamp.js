// ###########
// # imports #
// ###########

import find from "../helper/find";
import toggleClass from "../helper/toggleClass";

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
}

function hideBadge() {
	toggleClass(find("#unread-items"), "js-hidden");
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
				} else {
					hideBadge();
				}
			}
			change.target.classList.add("timeline__item--read");
			observer.unobserve(change.target);
		}
	});
}

export default updateTimestamp;
