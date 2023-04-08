"use strict";

const quantityInputs = document.querySelectorAll(".quantity-input");

quantityInputs.forEach((input) => {
	const minusBtn = input.querySelector(".minus");
	const plusBtn = input.querySelector(".plus");
	const quantityValue = input.querySelector(".quantity-value");

	minusBtn.addEventListener("click", () => {
		if (quantityValue.value > parseInt(quantityValue.min)) {
			quantityValue.value = parseInt(quantityValue.value) - 1;
		}
	});

	plusBtn.addEventListener("click", () => {
		if (quantityValue.value < parseInt(quantityValue.max)) {
			quantityValue.value = parseInt(quantityValue.value) + 1;
		}
	});
});

// Ratings Calculator

function displayStarRating(value) {
	const fullStar = '<i class="fa-solid fa-star"></i>';
	const halfStar = '<i class="fa-solid fa-star-half-stroke"></i>';
	const emptyStar = '<i class="fa-regular fa-star"></i>';

	const roundedValue = Math.round(value * 2) / 2; // round to nearest 0.5

	let starsHtml = "";
	for (let i = 0; i < Math.floor(roundedValue); i++) {
		starsHtml += fullStar;
	}
	if (roundedValue % 1 >= 0.5) {
		starsHtml += halfStar;
	}
	for (let i = Math.ceil(roundedValue); i < 5; i++) {
		starsHtml += emptyStar;
	}

	return starsHtml;
}

// Example usage:
const ratingContainer = document.querySelector(".product-rating");
ratingContainer.innerHTML = displayStarRating(3.3);

// Spinner

// Get the button element
const btnCart = document.querySelector(".btn--cart");

// Add a click event listener to the button
btnCart.addEventListener("click", function () {
	// Replace the original icon with a loading icon
	btnCart.innerHTML =
		'Add to Cart <i class="fa-duotone fa-spinner-third fa-spin"></i>';

	// Wait for one second (1000 milliseconds)
	setTimeout(function () {
		// Redirect to the other page
		window.location.href = "https://supSugam.github.io/wearly-ecommerce-ui";

		// Replace the loading icon with the original icon
		btnCart.innerHTML = '<i class="ph-fill ph-shopping-cart"></i> Add to cart';
	}, 1500);
});
