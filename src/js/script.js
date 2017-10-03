// TODO: use data-target instead of elementIndex

// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// add JS to body-tag to allow CSS-Manipulation if JS is available
	document.getElementsByTagName('body')[0].className += ' js';

	// make element sticky (via position in css)
	function stickyElement(stickyId,scrollId) {
		stickyElement = document.getElementById(stickyId);
		stickyElement.className += ' sticky';

		//add Element-Height as margin-top to desired element
		scrollElement = document.getElementById(scrollId);
		scrollElement.style.marginTop = stickyElement.clientHeight + 'px';
	}


	//sticky header
	//var stickyElement = document.getElementById('application-head');
	//var stickyElementHeight = stickyElement.clientHeight;
	stickyElement('application-head','content');
});
