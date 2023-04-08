"use strict";

document.addEventListener("DOMContentLoaded", function () {
	// To make the sign up form not expose credentials in url
	const signup_form = document.querySelector(".signup-form");
	if (!signup_form) return;
	signup_form.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the form from being submitted normally
	});
});
