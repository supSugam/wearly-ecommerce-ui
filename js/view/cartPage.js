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
};

// const cartItemsPerPage = 3;

// const getCartItemsPage = function (page = 1) {
// 	const start = (page - 1) * cartItemsPerPage;
// 	const end = page * cartItemsPerPage;

// 	const cartItems = document.querySelectorAll(".cart-item");
// 	return Array.from(cartItems).slice(start, end);
// };

// const cartPaginationHandler = function () {
// 	const paginationContainer = document.querySelector(".pagination-cart-items");
// 	paginationContainer.addEventListener("click", (event) => {
// 		const btnClicked = event.target.closest(".btn--inline");
// 		if (!btnClicked) return;
// 		const goTo = +btnClicked.dataset.goto;
// 		controlCartPagination(goTo);
// 	});
// };

// const controlCartPagination = function (page) {
// 	// 1) Get cart items for the page
// 	const cartItems = getCartItemsPage(page);
// 	console.log(cartItems);
// 	// 2) Render cart items
// 	// 3) Render pagination buttons
// 	cartPaginationButtons();
// };

// const cartPaginationButtons = function () {
// 	const paginationContainer = document.querySelector(".pagination-cart-items");
// 	const numberOfPages = Math.ceil(getCartItemsPage().length / cartItemsPerPage);
// 	console.log(numberOfPages);
// 	const currentPage = 1;
// 	if (currentPage === 1 && numberOfPages > 1) {
// 		// Display only next button

// 		paginationContainer.insertAdjacentHTML(
// 			"afterbegin",
// 			`
// 		<button data-goto="${
// 			currentPage + 1
// 		}" class="btn--inline pagination__btn--next">
// 		<span>Page ${currentPage + 1}</span>
// 		<i class="fa-solid fa-arrow-right"></i>
// 	</button>`
// 		);
// 	}
// 	if (currentPage === numberOfPages && numberOfPages > 1) {
// 		paginationContainer.insertAdjacentHTML(
// 			"afterbegin",
// 			`								<button data-goto="${
// 				currentPage - 1
// 			}" class="btn--inline pagination__btn--prev">
// 		<i class="fa-solid fa-arrow-left"></i>
// 		<span>Page ${currentPage - 1}</span>
// 	</button>`
// 		);
// 	}

// 	if (currentPage > 1 && currentPage < numberOfPages) {
// 		// Display both buttons
// 		paginationContainer.insertAdjacentHTML(
// 			"afterbegin",
// 			`
// 		<button data-goto="${
// 			currentPage - 1
// 		}" class="btn--inline pagination__btn--prev">
// 		<i class="fa-solid fa-arrow-left"></i>
// 		<span>Page ${currentPage - 1}</span>
// 	</button>
// 	<button data-goto="${
// 		currentPage + 1
// 	}" class="btn--inline pagination__btn--next">
// 		<span>Page ${currentPage + 1}</span>
// 		<i class="fa-solid fa-arrow-right"></i>
// 	</button>`
// 		);
// 	}
// 	// No pagination
// 	if (currentPage === 1 && numberOfPages === 1) {
// 		paginationContainer.insertAdjacentHTML(
// 			"afterbegin",
// 			`<p>End of Cart items</p>`
// 		);
// 	}
// };

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
