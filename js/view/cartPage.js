const cartItemsContainer = document.querySelector(".cart-items");

const cartQuantityHandler = function () {
	cartItemsContainer.addEventListener("click", (event) => {
		const target = event.target;
		const cartItem = target.closest(".cart-item");

		if (cartItem) {
			const quantityInput = cartItem.querySelector(".quantity-value");
			const totalPrice = cartItem.querySelector(
				".cart-item__total-price--value"
			);
			const price = +cartItem.querySelector(".cart-item__price--value")
				.textContent;

			if (target.classList.contains("minus")) {
				if (quantityInput.value > parseInt(quantityInput.min)) {
					quantityInput.value = parseInt(quantityInput.value) - 1;
				}
			} else if (target.classList.contains("plus")) {
				if (quantityInput.value < parseInt(quantityInput.max)) {
					quantityInput.value = parseInt(quantityInput.value) + 1;
				}
			}

			cartPriceHandler(quantityInput, totalPrice, price);
		}
	});
};

const cartPriceHandler = function (quantityInput, totalPrice, price) {
	const quantity = +quantityInput.value;
	totalPrice.textContent = quantity * price;
	const allItemsTotalPrice = Array.from(
		document.querySelectorAll(".cart-item .cart-item__total-price--value")
	);

	const grandTotalPrice = allItemsTotalPrice.reduce(
		(acc, cur) => acc + +cur.textContent,
		0
	);
	document.querySelector(".cart-item__totalPrice--value").textContent =
		grandTotalPrice;

	document.querySelector(".grand-total__price-value").textContent =
		grandTotalPrice + 135;
};

document.addEventListener("DOMContentLoaded", () => {
	// cartPaginationHandler();
	cartQuantityHandler();

	const quantityInputs = document.querySelectorAll(
		".cart-item__quantity .quantity-input"
	);
	quantityInputs.forEach((inputBtn) => {
		const quantityValue = inputBtn.querySelector(".quantity-value");
		const totalPrice = inputBtn
			.closest(".cart-item")
			.querySelector(".cart-item__total-price--value");
		const price = +inputBtn
			.closest(".cart-item")
			.querySelector(".cart-item__price--value").textContent;

		cartPriceHandler(quantityValue, totalPrice, price);
	});
});
