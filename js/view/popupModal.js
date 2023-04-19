document.addEventListener("DOMContentLoaded", function () {
	const overlay = document.querySelector("#overlay");
	const okButton = dialog.querySelectorAll(".btn--modal");

	const openPopup = function (popup) {
		popup.classList.add("open-popup");
		overlay.style.display = "block";
		document.body.classList.add("modal-open");
		document.body.style.overflow = "hidden";
	};

	const closePopup = function () {
		dialog.classList.remove("open-popup");
		overlay.style.display = "none";
		document.body.classList.remove("modal-open");
		document.body.style.overflow = "auto";
	};

	okButton.forEach((btn) => {
		btn.addEventListener("click", closePopup);
	});
});
