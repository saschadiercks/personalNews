function toggleClass(elements, className) {
	elements.forEach((element) => {
		if (element.classList.contains(className)) {
			element.classList.remove(className);
		} else {
			element.classList.add(className);
		}
	});
}

export default toggleClass;
