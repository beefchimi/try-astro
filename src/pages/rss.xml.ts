import rss, {pagesGlobToRssItems} from '@astrojs/rss';

// TODO: Figure out how to type `context` arg.
export async function GET({site = ''}) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
