/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				"presto-white": "#FAFAFA",
				"presto-grey": "#525A70",
				"presto-green": "#4ABCA7",
				"presto-input-bg": "#F1F1F1"
			},
			fontFamily: {
				Inter: ["Inter", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
