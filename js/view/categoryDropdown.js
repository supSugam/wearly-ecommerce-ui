window.addEventListener("load", () => {
	const categoryDropdown = (el, multiple) => {
		// Select all category title elements within the given element
		const categories = Array.from(el.querySelectorAll(".category-title"));

		const dropdown = (e) => {
			// Get the next sibling element of the clicked element
			const next = e.currentTarget.nextElementSibling;

			// Get the parent element of the clicked element
			const linkParent = e.currentTarget.parentNode;

			// Toggle the 'show' class on the next element and 'open' class on the parent element
			next.classList.toggle("show");
			linkParent.classList.toggle("open");

			if (!multiple) {
				// Select all category options elements within the given element
				const categoryOptions = Array.from(
					el.querySelectorAll(".category-options")
				);

				// Loop through all category options and close any that are not the clicked element
				categoryOptions.forEach((option) => {
					if (option !== next) {
						option.classList.remove("show");
						option.parentNode.classList.remove("open");
					}
				});
			}
		};

		// Add the dropdown function as a click event listener to each category element
		categories.forEach((category) => {
			category.addEventListener("click", dropdown);
		});
	};

	// Call the categoryDropdown function with the specified arguments and the '.category-list' element as the container
	const categoryLists = Array.from(document.querySelectorAll(".category-list"));
	categoryLists.forEach((categoryList) => {
		categoryDropdown(categoryList, false);
	});
});
