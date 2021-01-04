// ###########
// # imports #
// ###########

// ###########
// # program #
// ###########
// the first theme in the array is the default theme
let availableThemes = ["dark", "light", "auto"];
let applyThemeClassTo = document.querySelector("html");
let availableThemesCount = availableThemes.length;

// ---- run this immediately
// we're reading the theme from localstorage and place it as a data-attribute now
// this way, we can easily control the css without affecting other classes
let currentTheme = getCurrentTheme();
let currentThemeNo = availableThemes.indexOf(currentTheme);

// check if the theme is available, otherwise set default theme
if (currentThemeNo === -1) {
	currentTheme = availableThemes[0];
	currentThemeNo = 0;
}

// now apply the theme
applyThemeClassTo.dataset.theme = currentTheme;

// ---- run this after html is loaded
document.addEventListener("DOMContentLoaded", domReady, true);

// ---- functions
function domReady() {
	document
		.querySelector("#js-themeswitch")
		.addEventListener("click", toggleTheme, true);
}

function getCurrentTheme() {
	let currentTheme = localStorage.getItem("theme")
		? localStorage.getItem("theme")
		: availableThemes[0];
	return currentTheme;
}

function toggleTheme() {
	currentThemeNo++;
	if (currentThemeNo > availableThemesCount - 1) {
		currentThemeNo = 0;
	}

	applyThemeClassTo.dataset.theme = availableThemes[currentThemeNo];
	localStorage.setItem("theme", availableThemes[currentThemeNo]);
}
