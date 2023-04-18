"use strict";

const showError = function (inputField, message = "You must fill this field.") {
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

// const validateCheckBox = function (checkBoxInput, checkBoxText) {
// 	const isChecked = checkBoxInput.checked;
// 	checkBoxText.classList.toggle("error-checkbox", !isChecked);
// 	return isChecked;
// };

// Method to validate the form
const validateSignupForm = function () {
	const signupForm = document.querySelector(".signup-form");

	const inputFields = signupForm.querySelectorAll(
		"input[type=text][required], input[type=email][required], input[type=password][required], input[type=number][required]"
	);
	const imageInput = signupForm.querySelector("input[type=file][required]");

	const checkBoxInput = signupForm.querySelector('input[type="checkbox"]');
	const checkBoxText = signupForm
		.querySelector(".label-checkmark")
		.querySelector("p");

	let isValid = true;

	const validateCheckBox = function () {
		if (checkBoxInput.checked) {
			isValid = true;
			checkBoxText.classList.remove("error-checkbox", isValid);
		} else {
			isValid = false;
			checkBoxText.classList.add("error-checkbox", isValid);
		}
	};
	validateCheckBox();

	checkBoxInput.addEventListener("change", validateCheckBox);

	inputFields.forEach((inputField) => {
		if (!inputField.value) {
			isValid = false;
			showError(inputField, `${inputField.placeholder} is required.`);
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

	if (!isValid) return false;

	document.querySelector(".btn-signup").innerHTML =
		'Signing Up.. <i class="fa-duotone fa-spinner-third fa-spin"></i>';

	// submit form if validation is successful
	const formData = new FormData(signupForm);
	// create an object to store the form data
	const formObject = {};

	// iterate over the form data entries and add them to the object
	for (const [key, value] of formData.entries()) {
		key === "check" ? (formObject[key] = true) : (formObject[key] = value);
	}

	// convert the object to JSON using JSON.stringify()
	const jsonData = JSON.stringify(formObject);
	console.log(jsonData);
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
			removeError(inputField);
		});

		if (!inputField.value) {
			isValid = false;
			showError(inputField, `${inputField.placeholder} is required.`);
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

document.addEventListener("DOMContentLoaded", () => {
	const forms = document.querySelectorAll("form");
	forms.forEach((form) => {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
		});
	});
});

const validateAddProductForm = function () {
	const addProductForm = document.querySelector(".add-product-form");

	const inputFields = addProductForm.querySelectorAll(
		"input[type=text][required], input[type=number][required], textarea[type=text][required]"
	);
	const imageInput = addProductForm.querySelector("input[type=file][required]");

	const descriptionField = document.getElementById("product-description");
	let descriptionText;

	const btnAddProduct = addProductForm.querySelector(".btn-addProduct");
	btnAddProduct.disabled = true;

	let selectedGender = "";
	let selectedCategory = "";

	addProductForm.querySelectorAll(".category-list").forEach((category) => {
		category.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
			if (checkbox.checked && category.classList.contains("category-gender")) {
				selectedGender = checkbox.value;
			}
			if (
				checkbox.checked &&
				category.classList.contains("category-category")
			) {
				selectedCategory = checkbox.value;
			}
		});
	});

	let isValid = true;

	inputFields.forEach((inputField) => {
		if (!inputField.value) {
			isValid = false;
			showError(inputField, `${inputField.placeholder} is required.`);
		} else {
			if (
				inputField.type === "number" &&
				inputField.name === "product-quantity"
			) {
				if (inputField.value < 1) {
					isValid = false;
					showError(inputField, "Quantity must be atleast 1");
				}
			}

			if (inputField.type === "number" && inputField.name === "product-price") {
				if (inputField.value < 100) {
					isValid = false;
					showError(inputField, "Price must be atleast Rs. 100");
				}
			}

			if (inputField.name === "product-description") {
				if (inputField.value.length < 50) {
					isValid = false;
					showError(
						inputField,
						"Description must be atleast 50 characters long"
					);
				}
			}
		}

		descriptionText = descriptionField.value.split("\n").map((line) => {
			return "• " + line;
		});

		inputField.addEventListener("input", () => {
			removeError(inputField);
		});
	});

	if (imageInput.files.length !== 1) {
		isValid = false;
		document.querySelector(".product-preview").classList.add("error-image");
	}

	if (!isValid) {
		btnAddProduct.disabled = false;
		return false;
	}

	btnAddProduct.innerHTML =
		'Saving Product <i class="fa-duotone fa-spinner-third fa-spin"></i>';

	const formData = new FormData(addProductForm);
	console.log(formData);

	const {
		"product-name": productName,
		"product-price": productPrice,
		"product-quantity": productQuantity,
		"product-brand": productBrand,
	} = Object.fromEntries(formData.entries());

	const reader = new FileReader();
	reader.readAsDataURL(imageInput.files[0]);
	reader.onload = () => {
		const imageDataUrl = reader.result;
		// create an object to store the form data
		const productObject = {
			productName: productName,
			productPrice: productPrice,
			productBrand: productBrand,
			productQuantity: productQuantity,
			productGender: selectedGender,
			productCategory: selectedCategory,
			productDescriptionText: descriptionText,
			productImage: imageDataUrl,
		};
		// convert the object to JSON using JSON.stringify()
		const productDataJSON = JSON.stringify(productObject);

		// send POST request to servlet
		fetch(`${projectPath}/AddProductServlet`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: productDataJSON,
		})
			.then((response) => {
				if (response.status === 200) {
					console.log(response.ok, response.status);
					addProductForm.reset();
					btnAddProduct.innerHTML = 'Saved <i class="fa-duotone fa-check"></i>';
					setTimeout(() => {
						btnAddProduct.innerHTML = "Add Product";
						btnAddProduct.disabled = false;
					}, 2000);
				} else {
					// If login fails, display an error message to the user
					console.log("Adding product failed");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
		return true;
	};
};

// A debounce function that wraps around the input event handler
const debounce = (fn, delay) => {
	let timer;

	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
			timer = null;
		}, delay);
	};
};

// Select the necessary DOM elements
const searchInput = document.querySelector(".search__form--input");
const searchForm = document.querySelector(".search__form");
const icons = searchForm.querySelectorAll("i");
const [searchIcon, spinIcon, xIcon] = icons;
const dropdownMenuSearch = document.querySelector(
	".dropdown-menu-searchsuggestions"
);

// Add an input event listener with the debounced handler
searchInput.addEventListener(
	"input",
	debounce((e) => {
		// Get the trimmed input value and check if it's not empty
		const inputValue = e.target.value.trim();
		const hasValue = inputValue.length > 0;

		// Remove the 'active' class from all icons
		icons.forEach((icon) => icon.classList.remove("active"));
		const dropdownDefaults = `						<p>Popular Right Now</p>
		<li class="dropdown-option" data-value="Hoodie">
			<i class="fa-light fa-magnifying-glass"></i></i>Hoodie
		</li>
		<li class="dropdown-option" data-value="Tshirt">
			<i class="fa-light fa-magnifying-glass"></i></i>Tshirt
		</li>
		<li class="dropdown-option" data-value="Sportswear">
			<i class="fa-light fa-magnifying-glass"></i></i>Nike Sportswear
		</li>`;
		dropdownMenuSearch.innerHTML = "";

		// If the input value is not empty
		if (hasValue) {
			let matchingTerms = sortedSearchTerms.filter((term) => {
				return term
					.toLowerCase()
					.trim()
					.includes(inputValue.toLowerCase().trim());
			});
			matchingTerms.forEach((term, i) => {
				// dropdownMenuSearch.innerHTML += `<li class="dropdown__menu--item">${term}</li>`;
				i < 5
					? (dropdownMenuSearch.innerHTML += `						<li class="dropdown-option" data-value=${term}>
				<i class="fa-light fa-magnifying-glass"></i></i>${term}
			</li>`)
					: "";
			});
			// Add the 'active' class to the spin icon and set a timeout of 2 seconds
			spinIcon.classList.add("active");
			setTimeout(() => {
				// Check if the input value has not changed during the timeout
				if (inputValue === searchInput.value.trim()) {
					// Add the 'active' class to the x icon and remove it from the spin icon
					xIcon.classList.add("active");
					spinIcon.classList.remove("active");
				}
			}, 200);
		} else {
			// Add the 'active' class to the x icon if the input is empty
			searchIcon.classList.add("active");
			dropdownMenuSearch.innerHTML = dropdownDefaults;
		}
	}, 500)
);

// Add a click event listener to the x icon to clear the input and reset the icons
searchForm.querySelector(".fa-x").addEventListener("click", () => {
	searchInput.value = "";
	icons.forEach((icon) => icon.classList.remove("active"));
	searchIcon.classList.add("active");
});

searchInput.addEventListener("focus", () => {
	dropdownMenuSearch.classList.add("open");
});

document.addEventListener("click", (event) => {
	if (!searchInput.contains(event.target)) {
		dropdownMenuSearch.classList.remove("open");
	}
});

const searchTerms = [
	"dress",
	"shirt",
	"jeans",
	"jacket",
	"sweater",
	"coat",
	"blouse",
	"t-shirt",
	"pants",
	"shorts",
	"skirt",
	"leggings",
	"hoodie",
	"sweatshirt",
	"scarf",
	"hat",
	"gloves",
	"socks",
	"boots",
	"sandals",
	"sneakers",
	"heels",
	"flats",
	"handbag",
	"backpack",
	"wallet",
	"belt",
	"watch",
	"jewelry",
	"sunglasses",
	"umbrella",
	"coat hanger",
	"laundry bag",
	"hanger",
	"robe",
	"robe hook",
	"tie",
	"tie clip",
	"tie hanger",
	"shoe horn",
	"shoe rack",
	"shoe polish",
	"shoe brush",
	"shoe tree",
	"laundry detergent",
	"fabric softener",
	"stain remover",
	"dryer sheets",
	"lint roller",
];

//Sort names in ascending order
let sortedSearchTerms = searchTerms.sort();
