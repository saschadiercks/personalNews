function removeClass(elements, className) {
	elements.forEach((element) => {
		element.classList.remove(className);
	});
}

export default removeClass;
