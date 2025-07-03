import { writeFileSync } from 'fs';
import { loadSectionsData } from '../src/stores/sections.ts';

const BASE_URL = 'https://mexexam.com';

const generateSitemap = async () => {
  const sections = await loadSectionsData();

  const urls = [
    // Static pages
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/start', priority: '0.9', changefreq: 'monthly' },
    { url: '/start/section', priority: '0.8', changefreq: 'monthly' },
    { url: '/exam', priority: '0.8', changefreq: 'monthly' },
    { url: '/settings', priority: '0.6', changefreq: 'monthly' },

    // Section pages
    ...sections.map((section) => ({
      url: `/exam/${section.id}`,
      priority: '0.7',
      changefreq: 'monthly'
    })),

    // Flash card pages
    ...sections.map((section) => ({
      url: `/flashcards/${section.id}/init`,
      priority: '0.6',
      changefreq: 'monthly'
    })),

    // Question pages
    ...sections.map((section) => ({
      url: `/${section.id}/init`,
      priority: '0.6',
      changefreq: 'monthly'
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully for mexexam.com!');
};

generateSitemap().catch(console.error);
