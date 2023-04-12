"use strict";

// Method to validate the form
const validateSignupForm = function () {
	const signupForm = document.querySelector(".signup-form");

	const inputFields = signupForm.querySelectorAll(
		"input[type=text][required], input[type=email][required], input[type=password][required], input[type=number][required]"
	);
	const imageInput = signupForm.querySelector("input[type=file][required]");
	const checkBoxInput = signupForm.querySelector(
		"input[type=checkbox][required]"
	);

	const showError = function (
		inputField,
		message = "You must fill this field."
	) {
		inputField.classList.add("error");
		inputField
			.closest(".input-field-container")
			.querySelector(".error-message")
			.classList.add("show");
		inputField
			.closest(".input-field-container")
			.querySelector(".error-message").innerHTML = message;
	};

	const removeError = function (inputField) {
		inputField.classList.remove("error");
		inputField
			.closest(".input-field-container")
			.querySelector(".error-message")
			.classList.remove("show");
	};

	const checkBoxText = signupForm
		.querySelector(".label-checkmark")
		.querySelector("p");

	let isValid = true;

	inputFields.forEach((inputField) => {
		if (
			!inputField.value &&
			(inputField.type === "text" ||
				inputField.type === "password" ||
				inputField.type === "number" ||
				inputField.type === "email")
		) {
			isValid = false;
			showError(inputField);
		} else {
			if (inputField.type === "email") {
				const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
				if (!emailRegex.test(inputField.value)) {
					isValid = false;
					showError(inputField, "Enter a valid email address!");
				}
			}

			if (inputField.type === "password") {
				if (inputField.value.length < 8) {
					isValid = false;
					showError(inputField, "Must be at least 8 characters long!");
				}
			}

			if (inputField.type === "number") {
				if (inputField.value.length !== 10) {
					isValid = false;
					showError(inputField, "Must be 10 digits long!");
				}
			}
		}

		inputField.addEventListener("input", () => {
			removeError(inputField);
		});
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
	const formData = new FormData(signupForm);
	for (const [key, value] of formData) {
		console.log(key, value);
	}
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

const validateAddProductForm = function () {
	const addProductForm = document.querySelector(".add-product-form");
	const inputFields = addProductForm.querySelectorAll(
		"input[type=text][required], input[type=number][required], textarea[required]"
	);
	const imageInput = addProductForm.querySelector("input[type=file][required]");

	// const checkCheckBox = function () {
	// 	if (!checkBoxInput.checked) {
	// 		isValid = false;
	// 		checkBoxText.classList.add("error-checkbox");
	// 	} else {
	// 		checkBoxText.classList.remove("error-checkbox");
	// 	}
	// };
	// checkCheckBox();

	// checkBoxInput.addEventListener("change", () => {
	// 	checkCheckBox();
	// });

	// const checkBoxText = signupForm
	// 	.querySelector(".label-checkmark")
	// 	.querySelector("p");

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
		addProductForm
			.querySelector(".product-preview")
			.classList.add("error-image");
	}

	if (!isValid) return false;

	document.querySelector(".btn-signup").innerHTML =
		'Signing Up.. <i class="fa-duotone fa-spinner-third fa-spin"></i>';

	// submit form if validation is successful
	return true;
};

document.addEventListener("DOMContentLoaded", () => {
	const forms = document.querySelectorAll("form");
	forms.forEach((form) => {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
		});
	});

	// const checkBoxGender = document
	// 	.querySelector(".add-product-form")
	// 	.querySelector(".category-gender")
	// 	.querySelectorAll("input[type=checkbox]");

	// checkBoxGender.forEach((checkbox) => {
	// 	checkbox.addEventListener("click", (event) => {
	// 		// If the clicked checkbox is now checked
	// 		if (event.target.checked) {
	// 			// Uncheck the other checkboxes
	// 			checkBoxGender.forEach((otherCheckbox) => {
	// 				if (otherCheckbox !== event.target) {
	// 					otherCheckbox.checked = false;
	// 				}
	// 			});
	// 		}
	// 	});
	// });

	// const checkBoxCategory = document
	// 	.querySelector(".add-product-form")
	// 	.querySelector(".category-category")
	// 	.querySelectorAll("input[type=checkbox]");

	// let checkedCategory = [];

	// let lastCheckedCheckbox = null;

	// checkBoxCategory.forEach((checkbox) => {
	// 	checkbox.addEventListener("click", (e) => {
	// 		if (e.target.checked) {
	// 			if (lastCheckedCheckbox !== null && lastCheckedCheckbox !== e.target) {
	// 				lastCheckedCheckbox.checked = false;
	// 				checkedCategory = [e.target.value];
	// 			} else {
	// 				checkedCategory.push(e.target.value);
	// 			}
	// 			lastCheckedCheckbox = e.target;
	// 		} else {
	// 			checkedCategory = checkedCategory.filter(
	// 				(value) => value !== e.target.value
	// 			);
	// 			lastCheckedCheckbox = null;
	// 		}
	// 	});
	// });
});
