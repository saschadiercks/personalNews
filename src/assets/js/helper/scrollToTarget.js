function scrollToTarget(element, offsetX = 0, offsetY = 0, callback) {
	let scrollPositionY = element ? element.offsetTop - offsetY : 0;
	let scrollPositionX = offsetX;

	window.scrollBy({
		left: scrollPositionX,
		top: scrollPositionY,
	});

	if (callback) {
		callback();
	}
}

export default scrollToTarget;
