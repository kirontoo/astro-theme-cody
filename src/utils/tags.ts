import type { CollectionEntry } from "astro:content";

export function getAllTags(posts: Array<CollectionEntry<"blog">>) {
	return posts.flatMap((post) => [...post.data.tags]);
}

export function getUniqueTags(posts: Array<CollectionEntry<"blog">>) {
	return [...new Set(getAllTags(posts))];
}
