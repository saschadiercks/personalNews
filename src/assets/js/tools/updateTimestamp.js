// remembering the timestamp, when the item comes into view
// IntersectionObserver Supported
function updateTimestamp(elements) {
	//let amount = elements.length;
	let config = {
		root: null,
		rootMargin: "0px",
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
				unreadItemsElement.innerHTML = change.target.dataset.count - 1;
			}
			change.target.classList.add("feed-items__item--read");
			observer.unobserve(change.target);
		}
	});
}

export default updateTimestamp;
