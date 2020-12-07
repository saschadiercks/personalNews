// is the DOM ready for manipulation?
document.addEventListener("DOMContentLoaded", function () {
	// ---- variables ----
	var themeLight = "light";
	var themeDark = "dark";
	var elementToToggleOnLoad = "application-loading";
	var effectClassApplyTo = document.getElementsByTagName("body")[0];
	var feedItem = "#feed-items li";

	// helper: change classes
	function addClass(element, className) {
		element.classList.add(className);
	}
	function removeClass(element, className) {
		element.classList.remove(className);
	}

	// helper: scroll to desired position
	function scrollToTarget(x, y) {
		window.scrollTo(x, y);
	}

	// helper: get Attribute from Element
	function getAtrributeFromElement(selector, attribute) {
		var attributeValue = document
			.querySelector(selector)
			.getAttribute(attribute);
		return attributeValue;
	}

	// add JS to body-tag to allow CSS-Manipulation if JS is available
	function setJs() {
		var body = document.getElementsByTagName("body")[0];
		addClass(body, "js");
	}

	// ---- global functions ----

	// Overlay-Handling
	function handleOverlayTriggers(elementClassName) {
		var elements = document.getElementsByClassName(elementClassName);
		for (i = 0; i < elements.length; i++) {
			elements[i].onclick = function (event) {
				var target = this.getAttribute("data-target");
				toggleOverlay(target, event);
			};
		}
	}
	function toggleOverlay(elementId, event) {
		var targetElement = document.getElementById(elementId);
		var fixElementId = "content";
		if (targetElement.classList.contains("js-visible")) {
			addClass(targetElement, "js-hidden");
			removeClass(targetElement, "js-visible");
			removeClass(effectClassApplyTo, "js-fx");
		} else {
			removeClass(targetElement, "js-hidden");
			addClass(targetElement, "js-visible");
			addClass(effectClassApplyTo, "js-fx");
		}
		fixElement("content");
		event.preventDefault();
	}

	// make element sticky (via position in css)
	function stickyElement(stickyId, compensateId, compensateProperty) {
		stickyElement = document.getElementById(stickyId);
		stickyElement.classList.add("sticky");
		stickyHeight = stickyElement.clientHeight + "px";

		//add Element-Height as defined property to desired element
		document
			.getElementById(compensateId)
			.style.setProperty(compensateProperty, stickyHeight);
	}

	// place Element in relation to sticky element
	function placeOverlay(elementId) {
		overlayElement = document.getElementById(elementId);
		overlayElement.style.top = stickyHeight;
	}

	// ---- theme-switching ----
	// check if localStorage is filled and set body-class with it. This is useful, if the site runs as app
	var savedLocalStorageTheme = localStorage.getItem("theme");
	var applyThemeClassTo = document.getElementsByTagName("html")[0];
	if (savedLocalStorageTheme !== null) {
		removeClass(applyThemeClassTo, themeLight);
		removeClass(applyThemeClassTo, themeDark);
		addClass(applyThemeClassTo, savedLocalStorageTheme);
		if (savedLocalStorageTheme === themeLight) {
			document.getElementById("theme-switcher").checked = false;
		}
		if (savedLocalStorageTheme === themeDark) {
			document.getElementById("theme-switcher").checked = true;
		}
	}

	// switch theme by adding and removing classes to body
	function themeSwitch(elementId) {
		var renderFile = "themeswitch.php?theme=";
		var applyThemeClassTo = document.getElementsByTagName("html")[0];

		switchingElement = document.getElementById(elementId);
		switchingElement.onclick = function () {
			xmlhttp = new XMLHttpRequest();
			if (this.checked) {
				addClass(applyThemeClassTo, themeDark);
				removeClass(applyThemeClassTo, themeLight);
				xmlhttp.open("GET", renderFile + themeDark, true);
				xmlhttp.send();
				localStorage.setItem("theme", themeDark);
				console.log("localStorage Theme is: " + themeDark);
			} else {
				addClass(applyThemeClassTo, themeLight);
				removeClass(applyThemeClassTo, themeDark);
				xmlhttp.open("GET", "themeswitch.php?theme=" + themeLight, true);
				xmlhttp.send();
				localStorage.setItem("theme", themeLight);
				console.log("localStorage Theme is: " + themeLight);
			}
		};
	}

	// ---- Loading Feeds (via Ajax) ----
	// add listener
	function channelSwitch(elementId) {
		elementContainer = document.getElementById(elementId);
		elementContainer.addEventListener("click", switchChannel, false);
	}

	// prepare loading after click
	function switchChannel(e) {
		if (e.target !== e.currentTarget) {
			channelLink = e.target.dataset.channel;
			removeClass(effectClassApplyTo, "js-fx");
			ajaxRequest(channelLink);
			e.preventDefault();
		}
		e.stopPropagation();
	}

	// loading the content
	function ajaxRequest(channelLink) {
		// if this function is called with no parameter, we're checking the localStorage,
		// if one is present we use this (useful for initial load)
		if (channelLink === "") {
			var savedLocalStorageChannel = localStorage.getItem("channel");
			if (savedLocalStorageChannel !== null) {
				var channelLink = savedLocalStorageChannel;
			}
		}

		// requesting the content
		document
			.getElementById(elementToToggleOnLoad)
			.classList.remove("js-hidden");
		renderFile = "middleware.php?return=content";
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open(
			"GET",
			renderFile + "&channel=" + channelLink + "&timestamp=" + lastItemTs,
			true
		);
		xmlhttp.send();

		overlayContainer = document.getElementById("application-overlay");
		addClass(overlayContainer, "js-hidden");
		fixElement("content");

		// output if call is succesful
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === 4 && xmlhttp.readyState) {
				// add content
				outputContainer = document.getElementById("content");
				outputContainer.innerHTML = xmlhttp.response;

				// reset scrollpostion and remove loader & menu
				scrollToTarget(0, 0);
				document
					.getElementById("application-overlay")
					.classList.remove("js-visible");
				document
					.getElementById(elementToToggleOnLoad)
					.classList.add("js-hidden");
				removeClass(elementToFix, "js-fixed");

				// set current channel and get last clicked Item from storage & latest Item in Feed
				localStorage.setItem("channel", channelLink);
				lastItemTs = localStorage.getItem("lastItemTs");
				window.latestItemTs = getAtrributeFromElement(feedItem, "data-ts");

				// give browser time and handle feed-timeline afterwards
				setTimeout(stepsAfterLoad(), 100);
				function stepsAfterLoad() {
					listenerClickFeedItem(feedItem); // add Event-Listener and get oldest Item-Timestamp from Timeline
					if (lastItemTs) {
						if (document.querySelector("#ts-" + lastItemTs) === null) {
							setUnreadItemCount("Not found");
							localStorage.setItem("lastItemTs", latestItemTs);
						} else if (lastItemTs < oldestItemInTimeline) {
							setUnreadItemCount(
								"(" +
									getAtrributeFromElement(
										"#ts-" + oldestItemInTimeline,
										"data-count"
									) +
									")"
							);
							scrollIntoView("#ts-" + oldestItemInTimeline);
						} else if (latestItemTs > lastItemTs) {
							setUnreadItemCount(
								getAtrributeFromElement("#ts-" + lastItemTs, "data-count")
							);
							scrollIntoView("#ts-" + lastItemTs);
						}
					} else {
						setUnreadItemCount("Welcome");
						localStorage.setItem("lastItemTs", latestItemTs);
					}
				}
			}
		};
	}

	// ---- scroll to element
	function scrollIntoView(target) {
		var scrollPositionY = document.querySelector(target).offsetTop;
		var stickyOffset = document.getElementById("application-header")
			.clientHeight;
		scrollToTarget(0, scrollPositionY - stickyOffset);
	}

	// ---- handle scrolldepth
	window.addEventListener("scroll", function (event) {
		scrollDepth = window.pageYOffset;
		if (scrollDepth <= 0) {
			setUnreadItemCount();
			localStorage.setItem("lastItemTs", latestItemTs);
		}
	});
	function listenerClickFeedItem(selector) {
		var elements = document.querySelectorAll(selector);
		for (i = 0; i < elements.length; i++) {
			elements[i].onclick = function (event) {
				localStorage.setItem("offsetTop", window.pageYOffset);
				localStorage.setItem("lastItemTs", this.getAttribute("data-ts"));
			};

			// save last Item in timeline for later
			if (i == elements.length - 1) {
				window.oldestItemInTimeline = elements[i].getAttribute("data-ts");
			}
		}
	}

	// ---- handle unreadItem badge
	function setUnreadItemCount(value) {
		badge = "#unread-items";
		badgeValue = "#unread-items__count";
		if (value > 0 || typeof value == "string") {
			document.querySelector(badge).classList.remove("js-hidden");
			document.querySelector(badge).classList.add("js-show");
			document.querySelector(badgeValue).innerText = value;
		} else {
			document.querySelector(badge).classList.remove("js-show");
			document.querySelector(badge).classList.add("js-hide");
		}
	}

	// ---- fix element to current position
	function fixElement(elementId) {
		elementToFix = document.getElementById(elementId);
		scrollY = window.pageYOffset;

		if (elementToFix.classList.contains("js-fixed")) {
			removeClass(elementToFix, "js-fixed");
			elementToFix.style.top = "";
			scrollToTarget(0, scrollYMem);
		} else {
			addClass(elementToFix, "js-fixed");
			elementToFix.style.top = "-" + scrollY + "px";
			scrollYMem = scrollY;
		}
	}

	// ---- initialize ----
	// set Js on body if JS is available
	setJs();

	// initial load of content
	ajaxRequest("");

	//sticky header (item(id) to fix, item(id) with property to compensate fix)
	stickyElement("application-header", "content", "margin-top");

	// theme switcher
	themeSwitch("theme-switcher");

	// Overlays
	handleOverlayTriggers("js-overlay-toggle");

	// place overlay
	placeOverlay("application-overlay");

	// switch channels
	channelSwitch("channels");
});
