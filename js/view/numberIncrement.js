const inputField = document.getElementById("product-quantity");
const ispinUp = document.getElementById("ispin-up");
const ispinDown = document.getElementById("ispin-down");

// Initialize the value to 0
// let value = 0;

// Increment the value and update the input field
ispinUp.addEventListener("click", () => {
	let value = parseInt(inputField.value);
	if (!value) value = 0;
	value += 5;
	inputField.value = value;
});

// Decrement the value and update the input field
ispinDown.addEventListener("click", () => {
	let value = parseInt(inputField.value);

	if (value > 0) {
		value -= 5;
		inputField.value = value;
	}
});
