import { getCollection, type CollectionEntry } from "astro:content";

export async function getAllPosts(filterHidden: boolean = false) {
	return await getCollection("blog", ({ data }) => {
		if (import.meta.env.PROD) {
			if (filterHidden) {
				return !data.hide;
			}

			// on production: exclude draft posts by default
			return !data.draft;
		}

		return filterHidden ? !data.hide : true;
	});
}
 
// ascending = oldest to newest date
// descending = newest to oldest date
export function sortMDByDate(
	posts: Array<CollectionEntry<"blog">>, 
	order: "ascending" | "descending" = "descending"
) {
	// -1 = ascending
	// 1 = descending
	const direction = order === "descending" ? 1 : -1;

	return posts.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.pubDate).valueOf();
		const bDate = new Date(b.data.updatedDate ?? b.data.pubDate).valueOf();
		return (bDate - aDate) * direction;
	});
}


export function sortMDByPinned(posts: Array<CollectionEntry<"blog">>) {
	return posts.sort((a, b) => {
		const aOrder = a.data.order ?? 100;
		const bOrder = b.data.order ?? 100;
		return aOrder - bOrder;
	});
}

export function getPostsByTag(
	tag: string, 
	posts: Array<CollectionEntry<"blog">>
) {
	return posts.filter(post => {
		if (post.data.tags) {
			return post.data.tags.includes(tag);
		}
		return false;
	});
}

export function getPostsBySeries (
	series: string,
	posts: Array<CollectionEntry<"blog">>
) {
	return posts.filter(post => {
		if (post.data.series) {
			return post.data.series.includes(series);
		}
		return false;
	});
}
