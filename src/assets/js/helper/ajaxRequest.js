function ajaxRequest(method, url, callback) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open(method, url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState === 4 && xmlhttp.readyState) {
			callback();
		}
	};
}

export default ajaxRequest;
