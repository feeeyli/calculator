/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

export default {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				spartan: ["League Spartan", "sans-serif"],
			},
			fontSize: {
				clamp: "clamp(1.25rem, 7vw, 3rem)",
			},
		},
	},
	plugins: [
		createThemes({
			1: {
				"main-background": "hsl(222, 26%, 31%)",
				"keypad-background": "hsl(223, 31%, 20%)",
				"screen-background": "hsl(224, 36%, 15%)",
				"key-background-secondary": "hsl(225, 21%, 49%)",
				"key-shadow-secondary": "hsl(224, 28%, 35%)",
				"key-background-tertiary": "hsl(6, 63%, 50%)",
				"key-shadow-tertiary": "hsl(6, 70%, 34%)",
				"key-background": "hsl(30, 25%, 89%)",
				"key-shadow": "hsl(28, 16%, 65%)",
				"text-secondary": "hsl(221, 14%, 31%)",
				"text-primary": "hsl(0, 0%, 100%)",
			},

			2: {
				"main-background": "hsl(0, 0%, 90%)",
				"keypad-background": "hsl(0, 5%, 81%)",
				"screen-background": "hsl(0, 0%, 93%)",
				"key-background-secondary": "hsl(185, 42%, 37%)",
				"key-shadow-secondary": "hsl(185, 58%, 25%)",
				"key-background-tertiary": "hsl(25, 98%, 40%)",
				"key-shadow-tertiary": "hsl(25, 99%, 27%)",
				"key-background": "hsl(45, 7%, 89%)",
				"key-shadow": "hsl(35, 11%, 61%)",
				"text-secondary": "hsl(60, 10%, 19%)",
				"text-primary": "hsl(0, 0%, 100%)",
			},

			3: {
				"main-background": "hsl(268, 75%, 9%)",
				"keypad-background": "hsl(268, 71%, 12%)",
				"key-background-secondary": "hsl(281, 89%, 26%)",
				"key-shadow-secondary": "hsl(285, 91%, 52%)",
				"key-background-tertiary": "hsl(176, 100%, 44%)",
				"key-shadow-tertiary": "hsl(177, 92%, 70%)",
				"key-background": "hsl(268, 47%, 21%)",
				"key-shadow": "hsl(290, 70%, 36%)",
				"text-tertiary": "hsl(52, 100%, 62%)",
				"text-secondary": "hsl(198, 20%, 13%)",
				"text-primary": "hsl(0, 0%, 100%)",
			},
		}),
	],
};
