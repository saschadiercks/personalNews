function scrollToTarget(element, offsetX = 0, offsetY = 0) {
	let scrollPositionY = element ? element.offsetTop - offsetY : 0;
	let scrollPositionX = offsetX;

	window.scrollTo({
		left: scrollPositionX,
		top: scrollPositionY,
	});
}

export default scrollToTarget;
