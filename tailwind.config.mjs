/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		fontFamily: {
			'mono': ['Space Mono', 'monospace']
		},
		extend: {
			colors: {
				bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
				textColor: "hsl(var(--theme-text) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				surface: "hsl(var(--theme-surface) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
