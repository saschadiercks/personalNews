function scrollToElement(element, offsetY) {
	let scrollPositionY = document.querySelector(element).offsetTop;
	if (!offsetY) {
		offsetY = 0;
	}

	window.scrollTo(0, scrollPositionY - offsetY);
}

export default scrollToElement;
