// ###########
// # imports #
// ###########

import addClass from "./addClass";
import removeClass from "./removeClass";
import find from "./find";

// ###########
// # program #
// ###########

function themeSwitcher() {
	let themeLight = "light";
	let themeDark = "dark";
	let switchingElement = document.getElementById("theme-switcher");

	let savedLocalStorageTheme = localStorage.getItem("theme");
	let applyThemeClassTo = document.getElementsByTagName("html")[0];
	if (savedLocalStorageTheme !== null) {
		applyThemeClassTo.classList.remove(themeLight);
		applyThemeClassTo.classList.remove(themeDark);
		applyThemeClassTo.classList.add(savedLocalStorageTheme);
		if (savedLocalStorageTheme === themeLight) {
			switchingElement.checked = false;
		}
		if (savedLocalStorageTheme === themeDark) {
			switchingElement.checked = true;
		}
	}

	// switch theme by adding and removing classes to body

	switchingElement.onclick = function () {
		if (this.checked) {
			applyThemeClassTo.classList.remove(themeLight);
			applyThemeClassTo.classList.add(themeDark);
			localStorage.setItem("theme", themeDark);
		} else {
			applyThemeClassTo.classList.add(themeLight);
			applyThemeClassTo.classList.remove(themeDark);
			localStorage.setItem("theme", themeLight);
		}
	};
}

export default themeSwitcher;
