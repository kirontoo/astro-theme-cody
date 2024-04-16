import type { CollectionEntry } from "astro:content";

// should only be used with frontmatter arrays
export function getAllPostsByProperty(prop: "series" | "tags", posts: Array<CollectionEntry<"blog">>) {
  return posts.flatMap(({ data }) => {
    return data[prop] ?? [];
  })
}

export function getUniqueByProperty(prop: "series" | "tags", posts: Array<CollectionEntry<"blog">>) {
   return  [...new Set(getAllPostsByProperty(prop, posts))];
}

export function getUniqueWithCountByProperty(
  prop: "series" | "tags",
	posts: Array<CollectionEntry<"blog">>,
): Array<[string, number]> {
	return [
		...getAllPostsByProperty(prop, posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
