import type { CollectionEntry } from "astro:content";

export function getAllSeries(posts: Array<CollectionEntry<"blog">>) {
	return posts.flatMap(({data}) => ( data.series ? [...data.series ] : [] ));
}

export function getUniqueSeries(posts: Array<CollectionEntry<"blog">>) {
	return [...new Set(getAllSeries(posts))];
}

export function getUniqueSeriesWithCount(
	posts: Array<CollectionEntry<"blog">>,
): Array<[string, number]> {
	return [
		...getAllSeries(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
