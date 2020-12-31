// remembering the timestamp, when the item comes into view

// IntersectionObserver
function updateTimestamp(elements) {
	let config = {
		root: null,
		rootMargin: "-52px 0px 0px 0px",
		threshold: 0,
	};

	let observer = new IntersectionObserver(onChange, config);
	elements.forEach((element) => observer.observe(element));
}

// things to hapüen on intersection
function onChange(changes, observer) {
	changes.forEach((change) => {
		if (change.intersectionRatio > 0) {
			let itemTimestamp = change.target.dataset.timestamp;
			if (window.lastReadTimestamps < itemTimestamp) {
				localStorage.setItem("lastReadItems", itemTimestamp);
				unreadItemsElement.innerHTML = change.target.dataset.count;
			}
			change.target.classList.add("feed-items__item--read");
			observer.unobserve(change.target);
		}
	});
}

export default updateTimestamp;
