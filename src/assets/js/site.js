// ###########
// # imports #
// ###########

import find from "./helper/find";
import toggleClass from "./helper/toggleClass";

// ###########
// # program #
// ###########

let overlayToggle = find(".js-overlay-toggle");
overlayToggle.forEach((element) => {
	element.addEventListener("click", toggleOverlay, true);
});

// toggle overlays
function toggleOverlay(event) {
	let targets = find(this.dataset.target);
	toggleClass(targets, "js-hidden");
}
