// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########

// remembering the timestamp, when the item comes into view
function listenForScroll(offset, callback) {
	window.addEventListener("scroll", listenerFunction);

	function listenerFunction() {
		if (pageYOffset <= offset) {
			callback();
			window.removeEventListener("scroll", listenerFunction);
		}
	}
}

export default listenForScroll;
