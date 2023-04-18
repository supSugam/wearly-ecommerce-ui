const textarea = document.querySelector(".product-description-field textarea");

const MAX_LINES = 8;
const MAX_CHARACTERS_PER_LINE = 50;

textarea.addEventListener("input", () => {
	const inputText = textarea.value;

	let lines = inputText.split("\n");
	if (lines.length > MAX_LINES) {
		lines = lines.slice(0, MAX_LINES);
	}

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];
		if (line.length > MAX_CHARACTERS_PER_LINE) {
			lines.splice(
				i,
				1,
				line.slice(0, MAX_CHARACTERS_PER_LINE),
				line.slice(MAX_CHARACTERS_PER_LINE)
			);
		}
	}

	textarea.value = lines.join("\n");
});

textarea.addEventListener("mouseenter", () => {
	textarea.style.counterReset = "line";
});

textarea.addEventListener("keydown", (event) => {
	const isEnter = event.keyCode === 13;
	const isMaxLine = textarea.value.split("\n").length >= MAX_LINES;

	if (isEnter && !isMaxLine) {
		textarea.style.counterIncrement = "line";
	}
});
