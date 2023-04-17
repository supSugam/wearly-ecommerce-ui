const checkBoxGender = document
	.querySelector(".add-product-form")
	.querySelector(".category-gender")
	.querySelectorAll("input[type=checkbox]");

checkBoxGender.forEach((checkbox) => {
	checkbox.addEventListener("click", (event) => {
		// If the clicked checkbox is now checked
		if (event.target.checked) {
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

let checkedCategory = [];

let lastCheckedCheckbox = null;

checkBoxCategory.forEach((checkbox) => {
	checkbox.addEventListener("click", (e) => {
		if (e.target.checked) {
			if (lastCheckedCheckbox !== null && lastCheckedCheckbox !== e.target) {
				lastCheckedCheckbox.checked = false;
				checkedCategory = [e.target.value];
			} else {
				checkedCategory.push(e.target.value);
			}
			lastCheckedCheckbox = e.target;
		} else {
			checkedCategory = checkedCategory.filter(
				(value) => value !== e.target.value
			);
			lastCheckedCheckbox = null;
		}
	});
});
