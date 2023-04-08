document.addEventListener("DOMContentLoaded", function () {
	const imagePreviewHandler = function () {
		const imageUpload = document.getElementById("profileUpload");
		const imagePreview = document.getElementById("imagePreview");

		if (!imageUpload) return;
		imageUpload.addEventListener("change", function () {
			if (this.files && this.files[0]) {
				const reader = new FileReader();
				reader.onload = function (e) {
					imagePreview.style.backgroundImage = `url(${e.target.result})`;
					imagePreview.style.display = "none";
					imagePreview.style.opacity = "0";
					imagePreview.classList.remove("default-avatar");
					setTimeout(() => {
						imagePreview.style.display = "block";
						imagePreview.style.transition = "opacity 650ms ease-in-out";
						imagePreview.style.opacity = "1";
					}, 100);
				};
				reader.readAsDataURL(this.files[0]);
			}
		});
	};

	const imageInputOptimization = function () {
		const profileUpload = document.querySelector(".profile-upload");
		if (!profileUpload) return;
		profileUpload.addEventListener("click", function (e) {
			if (!e.target.matches('label[for="profileUpload"]')) {
				document.querySelector(".avatar-edit input[type=file]").click();
			}
		});
	};

	imagePreviewHandler();
	imageInputOptimization();
});
