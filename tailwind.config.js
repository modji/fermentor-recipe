/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				rose_white: "hsl(330, 100%, 98%)",
				light_rose_white: "hsl(28, 56%, 90%)",
				eggshell: "hsl(30, 54%, 90%)",
				light_grey: "hsl(30, 18%, 87%)",
				wenge_brown: "hsl(30, 10%, 34%)",
				dark_charcoal: "hsl(24, 5%, 18%)",
				nutmeg: "hsl(14, 45%, 36%)",
				dark_raspberry: "hsl(332, 51%, 32%)",
			},
			fontFamily: {
				young: ["Young Serif", "sans-serif"],
				outfit: ["Outfit", "sans-serif"],
			},
			fontSize: {
				normal: "16px",
			},
		},
	},
	plugins: [],
};
