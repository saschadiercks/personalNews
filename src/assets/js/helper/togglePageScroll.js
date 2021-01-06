function togglePageScroll(elementToFix, elementToOffset) {
	if (window.lastScrollPosition === 0) {
		lastScrollPosition = window.pageYOffset;
		elementToFix.style.position = "fixed";
	} else {
		elementToFix.style.position = "relative";
		window.scrollTo(0, lastScrollPosition);
		lastScrollPosition = 0;
	}

	elementToOffset.style.top = lastScrollPosition * -1 + "px";
}

export default togglePageScroll;
