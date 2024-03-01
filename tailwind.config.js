/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			sm: { max: "568px" },
			md: { max: "768px" },
			lg: { max: "1024px" },
			xl: { max: "1280px" },
			xxl: { max: "1440px" },
			xxxl: { max: "1768px" },
		},
		extend: {
			fontFamily: {
				manrope: "var(--font-manrope)",
				inter: "var(--font-inter)",
				gotham: "var(--font-gotham)",
				halvar: "var(--font-halvar)",
				montserrat: "var(--font-montserrat)",
			},
			colors: {
				dark: "#030303",
				secondary_dark: "#232323",
				negative: "#EB001B",
				positive: "#18CC35",
			},
			animation: {
				spin_slow: "spin 3s linear infinite",
			},
		},
	},
	plugins: [],
};