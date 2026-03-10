/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#d4a411",
				"primary-hover": "#b0880e",
				"secondary-blue": "#0f3460",
				"accent-silver": "#e2e8f0",
				"background-light": "#f0f4f8",
				"background-dark": "#012340", // Deep Corporate Blue
				"surface-dark": "#022c50", // Slightly lighter blue for cards
			},
			fontFamily: {
				display: ["Manrope", "sans-serif"],
				serif: ["Cinzel", "serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			borderRadius: {
				DEFAULT: "0.25rem",
				lg: "0.5rem",
				xl: "0.75rem",
				"2xl": "1rem",
				full: "9999px",
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
