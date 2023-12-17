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
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		ogImage: z.string().optional(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowercase),
		draft: z.boolean().optional().default(false)
	}),
});

export const collections = { blog };
