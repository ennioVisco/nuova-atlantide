import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Nuova Atlantide',
    description: "Un gruppo di pensiero per l'innovazione radicale nel Drin Drin",
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>it-it</language>',
    canonicalUrl: 'https://nuova-atlantide.it',
  });
}
