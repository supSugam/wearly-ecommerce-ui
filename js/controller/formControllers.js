"use strict";

// Method to validate the form
const validateSignupForm = function () {
	const signupForm = document.querySelector(".signup-form");
	const inputFields = signupForm.querySelectorAll(
		"input[type=text][required], input[type=email][required], input[type=password][required], input[type=tel][required]"
	);
	const imageInput = signupForm.querySelector("input[type=file][required]");
	const checkBoxInput = signupForm.querySelector(
		"input[type=checkbox][required]"
	);

	const checkBoxText = document
		.querySelector(".label-checkmark")
		.querySelector("p");

	let isValid = true;

	inputFields.forEach((inputField) => {
		inputField.addEventListener("input", () => {
			inputField.classList.remove("error");
			inputField
				.closest(".input-field-container")
				.querySelector(".error-message")
				.classList.remove("show");
		});

		if (!inputField.value) {
			isValid = false;
			inputField.classList.add("error");
			inputField
				.closest(".input-field-container")
				.querySelector(".error-message")
				.classList.add("show");
		}
	});

	if (imageInput.files.length !== 1) {
		isValid = false;
		document.querySelector(".avatar-preview").classList.add("error-image");
	}

	const checkCheckBox = function () {
		if (!checkBoxInput.checked) {
			isValid = false;
			checkBoxText.classList.add("error-checkbox");
		} else {
			checkBoxText.classList.remove("error-checkbox");
		}
	};
	checkCheckBox();
	checkBoxInput.addEventListener("change", () => {
		checkCheckBox();
	});

	if (!isValid) return false;

	document.querySelector(".btn-signup").innerHTML =
		'Signing Up.. <i class="fa-duotone fa-spinner-third fa-spin"></i>';

	// submit form if validation is successful
	return true;
};

// To validate login form

const validateLoginForm = function () {
	const loginForm = document.querySelector(".login-form");
	const inputFields = loginForm.querySelectorAll(
		"input[type=email][required], input[type=password][required]"
	);

	const checkBoxText = document.querySelector(".login-form").querySelector("p");
	console.log(checkBoxText, hello);

	let isValid = true;

	inputFields.forEach((inputField) => {
		inputField.addEventListener("input", () => {
			inputField.classList.remove("error");
			inputField
				.closest(".input-field-container")
				.querySelector(".error-message")
				.classList.remove("show");
		});

		if (!inputField.value) {
			isValid = false;
			inputField.classList.add("error");
			inputField
				.closest(".input-field-container")
				.querySelector(".error-message")
				.classList.add("show");
		}
	});

	if (!isValid) {
		return false;
	}

	document.querySelector(".btn-login").innerHTML =
		'Logging In <i class="fa-duotone fa-spinner-third fa-spin"></i>';

	// submit form if validation is successful
	return true;
};
