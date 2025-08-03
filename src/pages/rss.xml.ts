import rss from '@astrojs/rss';
import { HOME } from '@/config';
import { ghost } from '@/lib/ghost';

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const blog = await ghost.posts.browse({
    limit: 'all',
    order: 'published_at DESC',
    filter: 'tag:blog',
    include: 'tags'
  });

  const projects = await ghost.posts.browse({
    limit: 'all',
    order: 'published_at DESC',
    filter: 'tag:projects',
    include: 'tags'
  });

  const items = [...blog, ...projects].sort(
    (a, b) =>
      new Date(b.published_at!).valueOf() - new Date(a.published_at!).valueOf()
  );

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: String(item.title),
      description: String(item.excerpt),
      pubDate: new Date(item.published_at!),
      link: `/${item.tags ? item.tags[0].name : ''}/${item.id}/`
    })),
    stylesheet: '/rss.xsl'
  });
}
