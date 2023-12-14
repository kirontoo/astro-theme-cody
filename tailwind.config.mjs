/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
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
	typography: (theme) => ({
		cactus: {
			css: {
				"--tw-prose-body": theme("colors.textColor / 1"),
				"--tw-prose-headings": theme("colors.accent / 1"),
				"--tw-prose-links": theme("colors.textColor / 1"),
				"--tw-prose-bold": theme("colors.textColor / 1"),
				"--tw-prose-bullets": theme("colors.textColor / 1"),
				"--tw-prose-quotes": theme("colors.accent / 1"),
				"--tw-prose-code": theme("colors.textColor / 1"),
				"--tw-prose-hr": "0.5px dashed theme('colors.surface')",
				"--tw-prose-th-borders": "theme('colors.surface')",
			},
		},
		DEFAULT: {
			css: {
				a: {
					"@apply no-underline": "",
				},
				strong: {
					fontWeight: "700",
				},
				code: {
					border: "1px dotted theme('colors.surface')",
					borderRadius: "2px",
				},
				blockquote: {
					borderLeftWidth: "0",
				},
				hr: {
					borderTopStyle: "dashed",
				},
				thead: {
					borderBottomWidth: "none",
				},
				"thead th": {
					fontWeight: "700",
					borderBottom: "1px dashed theme('colors.surface')",
				},
				"tbody tr": {
					borderBottomWidth: "none",
				},
				tfoot: {
					borderTop: "1px dashed theme('colors.surface')",
				},
				sup: {
					"@apply ms-0.5": "",
					a: {
						"@apply bg-none": "",
						"&:hover": {
							"@apply text-link no-underline bg-none": "",
						},
						"&:before": {
							content: "'['",
						},
						"&:after": {
							content: "']'",
						},
					},
				},
			},
		},
		sm: {
			css: {
				code: {
					fontSize: theme("fontSize.sm")[0],
					fontWeight: "400",
				},
			},
		},
	}),
	plugins: [
		require('@tailwindcss/typography'),
	],
}
