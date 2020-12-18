function returnSearchParam(paramToSearchFor) {
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);

	return urlParams.get(paramToSearchFor);
}

export default returnSearchParam;
