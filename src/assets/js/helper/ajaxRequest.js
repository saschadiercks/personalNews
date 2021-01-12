function ajaxRequest(method, url, callback) {
	let content = new XMLHttpRequest();
	content.open(method, url, true);
	content.send();
	content.onreadystatechange = function () {
		if (content.readyState === 4 && content.readyState) {
			if (callback) {
				callback(content.response);
			} else {
				return content.response;
			}
		}
	};
}

export default ajaxRequest;
