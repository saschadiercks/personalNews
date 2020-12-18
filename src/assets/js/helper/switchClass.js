// ###########
// # imports #
// ###########

import addClass from "./addClass";
import removeClass from "./removeClass";

// ###########
// # program #
// ###########

function switchClass(elements, classNameRemove, classNameAdd) {
	elements.forEach((element) => {
		removeClass(elements, classNameRemove);
		addClass(elements, classNameAdd);
	});
}

export default switchClass;
