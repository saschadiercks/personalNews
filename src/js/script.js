// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	var themeLight = 'light';
	var themeDark = 'dark';


	// -- if DOM is ready, check if localStorage is filled and set body with it. This is useful, if the site runs as app
	var savedLocalStorageTheme = localStorage.getItem('theme');
	console.log(savedLocalStorageTheme);
	if(savedLocalStorageTheme !== null) {
		document.getElementsByTagName('body')[0].classList.remove(themeLight, themeDark);
		document.getElementsByTagName('body')[0].classList.add(savedLocalStorageTheme);
		document.getElementsByTagName('body')[0].style.opacity = "1";
		if(savedLocalStorageTheme === themeLight) {
			document.getElementById('theme-switcher').checked = false;
		}
		if(savedLocalStorageTheme === themeDark) {
			document.getElementById('theme-switcher').checked = true;
		}
	}

	// switch theme by adding and removing classes to body
	function themeSwitch(elementId) {
		switchingElement = document.getElementById(elementId);
		switchingElement.onclick = function() {
			xmlhttp = new XMLHttpRequest();
			if (this.checked) {
				document.getElementsByTagName('body')[0].classList.add(themeDark);
				document.getElementsByTagName('body')[0].classList.remove(themeLight);
				xmlhttp.open('GET','modules/themeswitch.php?theme='+themeDark,true);
				xmlhttp.send();
				xmlDoc = xmlhttp.responseXML;
				localStorage.setItem('theme', themeDark);
				console.log('localStorage Theme is: ' + themeDark);
			} else {
				document.getElementsByTagName('body')[0].classList.add(themeLight);
				document.getElementsByTagName('body')[0].classList.remove(themeDark);
				xmlhttp.open('GET','modules/themeswitch.php?theme='+themeLight,true);
				xmlhttp.send();
				localStorage.setItem('theme', themeLight);
				console.log('localStorage Theme is: ' + themeLight);
			}
		}
	}

	// toggle Element
	function toggleElement(elementId,targetElementId) {
		toggleElement = document.getElementById(elementId);
		toggleElement.onclick = function() {
			targetElement = document.getElementById(targetElementId);
			if(targetElement.classList.contains('js-hidden')) {
				targetElement.classList.remove('js-hidden');
			} else {
				targetElement.classList.add('js-hidden');
			}

			event.preventDefault();
		}
	}

	// add JS to body-tag to allow CSS-Manipulation if JS is available
	function setJs() {
		document.getElementsByTagName('body')[0].classList.add('js');
	}

	// make element sticky (via position in css)
	function stickyElement(stickyId,compensateId) {
		stickyElement = document.getElementById(stickyId);
		stickyElement.classList.add('sticky');
		stickyHeight = stickyElement.clientHeight + 'px';

		//add Element-Height as margin-top to desired element
		scrollElement = document.getElementById(compensateId);
		scrollElement.style.marginTop = stickyHeight;
	}

	// place Element in relation to sticky element
	function placeOverlay(elementId) {
		overlayElement = document.getElementById(elementId);
		overlayElement.style.top = stickyHeight;
	}

	// set Js on body if JS is available
	setJs();

	//sticky header (item to fix, item with margin to compensate fix)
	stickyElement('application-head','content');

	// theme switcher
	themeSwitch('theme-switcher');

	// toggle Element (toggle, target)
	toggleElement('toggle-overlay', 'application-overlay');

	// place overlay
	placeOverlay('application-overlay');
});
