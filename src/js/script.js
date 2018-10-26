// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

		// ---- variables ----
		var themeLight = 'light';
		var themeDark = 'dark';
		var elementToToggleOnLoad = 'application-loading';
		var effectClassApplyTo = document.getElementsByTagName('body')[0];

		// helper: change classes
		function addClass(element,className) {
			element.classList.add(className);
		}
		function removeClass(element,className) {
			element.classList.remove(className);
		}

		// helper: scroll to desired position
		function scrollToTarget(x,y) {
			window.scrollTo(x,y);
		}

		// add JS to body-tag to allow CSS-Manipulation if JS is available
		function setJs() {
			var body = document.getElementsByTagName("body")[0];
			addClass(body,'js');
		}

		// ---- global functions ----

		// Overlay-Handling
		function handleOverlayTriggers(elementClassName) {
			var elements = document.getElementsByClassName(elementClassName);
			for(i=0; i < elements.length; i++) {
				elements[i].onclick = function(event) {
					var target = this.getAttribute('data-target');
					toggleOverlay(target,event);
				}
			}
		}
		function toggleOverlay(elementId,event) {
			var targetElement = document.getElementById(elementId);
			var fixElementId = 'content';
			if(targetElement.classList.contains('js-visible')) {
				addClass(targetElement,'js-hidden');
				removeClass(targetElement,'js-visible');
				removeClass(effectClassApplyTo,'js-fx');
			} else {
				removeClass(targetElement,'js-hidden');
				addClass(targetElement,'js-visible');
				addClass(effectClassApplyTo,'js-fx');
			}
			fixElement('content');
			event.preventDefault();
		}

		// make element sticky (via position in css)
		function stickyElement(stickyId,compensateId,compensateProperty) {
			stickyElement = document.getElementById(stickyId);
			stickyElement.classList.add('sticky');
			stickyHeight = stickyElement.clientHeight + 'px';

			//add Element-Height as defined property to desired element
			document.getElementById(compensateId).style.setProperty(compensateProperty,stickyHeight);
		}

		// place Element in relation to sticky element
		function placeOverlay(elementId) {
			overlayElement = document.getElementById(elementId);
			overlayElement.style.top = stickyHeight;
		}

		// ---- theme-switching ----
		// check if localStorage is filled and set body.class with it. This is useful, if the site runs as app
		var savedLocalStorageTheme = localStorage.getItem('theme');
		var applyThemeClassTo = document.getElementsByTagName('html')[0];
		console.log(savedLocalStorageTheme);
		if(savedLocalStorageTheme !== null) {
			removeClass(applyThemeClassTo, themeLight);
			removeClass(applyThemeClassTo, themeDark);
			addClass(applyThemeClassTo,savedLocalStorageTheme);
			if(savedLocalStorageTheme === themeLight) {
				document.getElementById('theme-switcher').checked = false;
			}
			if(savedLocalStorageTheme === themeDark) {
				document.getElementById('theme-switcher').checked = true;
			}
		}

		// switch theme by adding and removing classes to body
		function themeSwitch(elementId) {
			var renderFile = 'themeswitch.php?theme=';
			var applyThemeClassTo = document.getElementsByTagName('html')[0];

			switchingElement = document.getElementById(elementId);
			switchingElement.onclick = function() {
				xmlhttp = new XMLHttpRequest();
				if (this.checked) {
					addClass(applyThemeClassTo, themeDark);
					removeClass(applyThemeClassTo, themeLight);
					xmlhttp.open('GET',renderFile+themeDark,true);
					xmlhttp.send();
					localStorage.setItem('theme', themeDark);
					console.log('localStorage Theme is: ' + themeDark);
				} else {
					addClass(applyThemeClassTo, themeLight);
					removeClass(applyThemeClassTo, themeDark);
					xmlhttp.open('GET','themeswitch.php?theme='+themeLight,true);
					xmlhttp.send();
					localStorage.setItem('theme', themeLight);
					console.log('localStorage Theme is: ' + themeLight);
				}
			}
		}

		// ---- Loading Feeds (via Ajax) ----
		// add listener
		function channelSwitch(elementId) {
			elementContainer = document.getElementById(elementId);
			elementContainer.addEventListener('click', switchChannel, false);
		}

		// prepare loading after click
		function switchChannel(e) {
			if (e.target !== e.currentTarget) {
				channelLink = e.target.getAttribute('href');
				removeClass(effectClassApplyTo,'js-fx');
				ajaxRequest(channelLink);
				e.preventDefault();
			}
			e.stopPropagation();
		}

		// loading the content
		function ajaxRequest(channelLink) {
			// if this function is called with no parameter, we're chencking the localStorag, if one is present and use this (useful for initial load)
			if(channelLink === '') {
				var savedLocalStorageChannel = localStorage.getItem('channel');
				if(savedLocalStorageChannel !== null) {
					var channelLink = savedLocalStorageChannel;
				}
			}

			// requesting the content
			document.getElementById(elementToToggleOnLoad).classList.remove('js-hidden');
			renderFile = 'render-feeds.php';
			xmlhttp = new XMLHttpRequest();
			xmlhttp.open('GET',renderFile+channelLink,true);
			xmlhttp.send();

			overlayContainer = document.getElementById('application-overlay');
			addClass(overlayContainer,'js-hidden');
			fixElement('content');


			// output if call is succesful
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState === 4 && xmlhttp.readyState) {
					outputContainer = document.getElementById('content');
					outputContainer.innerHTML = xmlhttp.response;
					document.getElementById(elementToToggleOnLoad).classList.add('js-hidden');
					removeClass(elementToFix,'js-fixed');
					document.getElementById('application-overlay').classList.remove('js-visible');
					scrollToTarget(0,0);
					localStorage.setItem('channel', channelLink);

					clickFeedItem('#feed-items li');
					scrollIntoView(getLastReadItemId());
					setLastReadItemId(getIdFromElement('#feed-items li'));
				}
			}
		}

		// ---- handle last read items
		function getLastReadItemId() {
			lastReadItemId = localStorage.getItem('lastReadItem');
			if(lastReadItemId !== null) {
			} else {
				lastReadItemId = getIdFromElement('#feed-items li');
			}
			return lastReadItemId;
		}

		function setLastReadItemId(elementId) {
			localStorage.setItem('lastReadItem',elementId);
		}

		function getIdFromElement(selector) {
			elementId = document.querySelector(selector).id;
			setLastReadItemId(elementId);
			return elementId;
		}

		function scrollIntoView(target) {
			var scrollPositionY = document.getElementById(target).offsetTop;
			var stickOffset = document.getElementById('application-header').clientHeight;
			scrollToTarget(0,scrollPositionY - stickOffset);
		}

		function clickFeedItem(selector) {
			var elements = document.querySelectorAll(selector);
			for(i=0; i < elements.length; i++) {
				elements[i].onclick = function(event) {
					setLastReadItemId(this.id);
				}
			}

		}

		// ---- fix element to current position
		function fixElement(elementId) {
			elementToFix = document.getElementById(elementId);
			scrollY = window.pageYOffset;

			if(elementToFix.classList.contains('js-fixed')) {
				removeClass(elementToFix,'js-fixed');
				elementToFix.style.top = '';
				scrollToTarget(0,scrollYMem);
			} else {
				addClass(elementToFix,'js-fixed');
				elementToFix.style.top = '-' + scrollY + 'px';
				scrollYMem = scrollY;
			}
			console.log(scrollYMem);
		}

		// ---- initialize ----
		// set Js on body if JS is available
		setJs();

		// initial load of content
		ajaxRequest('');

		//sticky header (item(id) to fix, item(id) with property to compensate fix)
		stickyElement('application-header','content','margin-top');

		// theme switcher
		themeSwitch('theme-switcher');

		// Overlays
		handleOverlayTriggers('js-overlay-toggle');

		// place overlay
		placeOverlay('application-overlay');

		// switch channels
		channelSwitch('channels');

	});
