const checkBoxGender = document
	.querySelector(".add-product-form")
	.querySelector(".category-gender")
	.querySelectorAll("input[type=checkbox]");

checkBoxGender.forEach((checkbox) => {
	checkbox.addEventListener("click", (event) => {
		// If the clicked checkbox is now checked
		if (event.target.checked) {
			checkbox.disabled = true;
			// Uncheck the other checkboxes
			checkBoxGender.forEach((otherCheckbox) => {
				if (otherCheckbox !== event.target) {
					otherCheckbox.checked = false;
				}
			});
		}
	});
});

const checkBoxCategory = document
	.querySelector(".add-product-form")
	.querySelector(".category-category")
	.querySelectorAll("input[type=checkbox]");

checkBoxCategory.forEach((checkbox) => {
	checkbox.addEventListener("click", (event) => {
		// If the clicked checkbox is now checked
		if (event.target.checked) {
			checkbox.disabled = true;
			// Uncheck the other checkboxes
			checkBoxCategory.forEach((otherCheckbox) => {
				if (otherCheckbox !== event.target) {
					otherCheckbox.checked = false;
				}
			});
		}
	});
});
