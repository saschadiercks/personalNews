// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########
function togglePageScroll() {
	if (window.isScrollable) {
		document.querySelector("html").style.overflowY = "hidden";
		document.querySelector("body").style.marginRight = window.scrollbarWidth;
		window.isScrollable = false;
	} else {
		document.querySelector("html").style.overflowY = "scroll";
		document.querySelector("body").style.marginRight = 0;
		window.isScrollable = true;
	}
}

export default togglePageScroll;
