import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
