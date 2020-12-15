function scrollToTarget(element, offsetX) {
	let scrollPositionY = element ? element.offsetTop : 0;
	let scrollPositionX = offsetX ? offsetX : 0;

	window.scrollTo({
		left: scrollPositionX,
		top: scrollPositionY,
		behavior: "smooth",
	});
}

export default scrollToTarget;
