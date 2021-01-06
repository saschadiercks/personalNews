// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########
function togglePageScroll() {
	if (window.isScrollable) {
		window.scrollPosition = window.pageYOffset;
		document.body.style.cssText = `overflow: hidden; position: fixed; top: -${window.scrollPosition}px`;
		window.isScrollable = false;
	} else {
		document.body.style.cssText = null;
		window.scrollTo(0, scrollPosition);
		window.isScrollable = true;
	}
}

export default togglePageScroll;
