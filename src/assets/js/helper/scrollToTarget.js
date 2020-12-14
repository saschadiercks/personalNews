function scrollToTarget(element, offsetX) {
	let scrollPositionY = element.offsetTop;
	if (!offsetX) {
		offsetX = 0;
	}

	window.scrollTo({
		left: 0,
		top: scrollPositionY,
		behavior: "smooth",
	});
}

export default scrollToTarget;
