import { defineCollection, z } from 'astro:content';

function removeDupsAndLowercase(list: string[]) {
	if (!list.length) return list;
	const lowercaseItems = list.map((str) => str.toLowerCase());
	const uniqueItems = new Set(lowercaseItems);
	return Array.from(uniqueItems);

}

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.object({
			src: z.string().or(image()),
			alt: z.string(),
		}).optional(),
		ogImage: z.string().optional(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowercase).optional(),
		draft: z.boolean().optional().default(false),
		// for pinning posts
		order: z.number().optional()
	}),
});

const project = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.object({
			url: z.string().or(image()),
			alt: z.string().optional()
		}).optional(),
		ogImage: z.string().optional(),
		stack: z.array(z.string()).default([]).transform(removeDupsAndLowercase),
		website: z.string().optional(),
		github: z.string(),
		draft: z.boolean().optional().default(false),
		// for pinning projects
		order: z.number().optional()
	})
});

export const collections = { blog, project };
