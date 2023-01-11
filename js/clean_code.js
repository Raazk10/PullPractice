/*
	CLEAN CODE

	- don't be cute
	- methods should have verbs
	- use searchable names
	- use pronouncable names
	- small
	- do one thing (unngå side-effects)
	- one word per concept (f.eks. fetch/get/return, wrapper/container)
*/

// query selector
const testButton = document.querySelector(".header__menu-button");

// event listner

testButton.addEventListener("click", handleTestButtonClick);

// event handler

function handleTestButtonClick() {}
