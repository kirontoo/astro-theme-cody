import type { CollectionEntry } from "astro:content";

// https://github.com/chrismwilliams/astro-theme-cactus/blob/a85e0e559d3f92b32e73990486c0574b2b733227/src/utils/post.ts
export function getAllTags(posts: Array<CollectionEntry<"blog">>) {
	return posts.flatMap(({data}) => ( data.tags ? [...data.tags ] : [] ));
}

export function getUniqueTags(posts: Array<CollectionEntry<"blog">>) {
	return [...new Set(getAllTags(posts))];
}

export function getUniqueTagsWithCount(
	posts: Array<CollectionEntry<"blog">>,
): Array<[string, number]> {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
