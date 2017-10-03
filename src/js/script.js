// TODO: use data-target instead of elementIndex

// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// add JS to body-tag to allow CSS-Manipulation if JS is available
	document.getElementsByTagName('body')[0].classList.add('js');

	// make element sticky (via position in css)
	function stickyElement(stickyId,scrollId) {
		stickyElement = document.getElementById(stickyId);
		stickyElement.classList.add('sticky');

		//add Element-Height as margin-top to desired element
		scrollElement = document.getElementById(scrollId);
		scrollElement.style.marginTop = stickyElement.clientHeight + 'px';
	}

	// switch theme by adding and removing classes to body
	function themeSwitch(elementId) {
		switchingElement = document.getElementById(elementId);
		switchingElement.onclick = function() {
			if (this.checked) {
				document.getElementsByTagName('body')[0].classList.add('dark');
				document.getElementsByTagName('body')[0].classList.remove('light');
				localStorage.setItem('theme', 'dark');
				console.log('localStorage Theme is: dark');
			} else {
				document.getElementsByTagName('body')[0].classList.add('light');
				document.getElementsByTagName('body')[0].classList.remove('dark');
				localStorage.setItem('theme', 'light');
				console.log('localStorage Theme is: light');
			}
		}
	}

	// -- if DOM is ready, check if localStorage is filled and set body with it
	var savedLocalStorageTheme = localStorage.getItem('theme');
	console.log(savedLocalStorageTheme);
	if(savedLocalStorageTheme !== null) {
		document.getElementsByTagName('body')[0].classList.remove('light', 'dark');
		document.getElementsByTagName('body')[0].classList.add(savedLocalStorageTheme);
		if(savedLocalStorageTheme === 'light') {
			document.getElementById('theme-switcher').checked = false;
		}
		if(savedLocalStorageTheme === 'dark') {
			document.getElementById('theme-switcher').checked = true;
		}
	}


	//sticky header
	stickyElement('application-head','content');

	// theme switcher
	themeSwitch('theme-switcher');
});
