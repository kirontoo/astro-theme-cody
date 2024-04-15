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
				bgColor: "var(--theme-bg)",
				textColor: "var(--theme-text)",
				link: "var(--theme-link)",
				accent: "var(--theme-accent)",
				"accent-2": "var(--theme-accent-2)",
				surface: "var(--theme-surface)",
				quote: "var(--theme-quote)",
				highlight: "var(--theme-highlight)"
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
