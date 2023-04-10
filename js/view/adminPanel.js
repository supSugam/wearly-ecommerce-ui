window.addEventListener("load", () => {
	const optionsDropdown = (el, multiple) => {
		const options = Array.from(el.querySelectorAll(".option-title"));
		const dropdown = (e) => {
			const next = e.currentTarget.nextElementSibling;

			const linkParent = e.currentTarget.parentNode;

			next.classList.toggle("show");
			linkParent.classList.toggle("open");

			if (!multiple) {
				const options = Array.from(el.querySelectorAll(".option-breakdown"));

				options.forEach((option) => {
					if (option !== next) {
						option.classList.remove("show");
						// option.parentNode.classList.remove("open");
					}
				});
			}
		};

		options.forEach((option) => {
			option.addEventListener("click", dropdown);
		});
	};

	const optionsList = Array.from(document.querySelectorAll(".options-list"));
	optionsList.forEach((optionList) => {
		optionsDropdown(optionList, false);
	});
});
