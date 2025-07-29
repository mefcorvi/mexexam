import { writeFileSync } from 'fs';
import { readFileSync } from 'fs';
import { join } from 'path';
import type { Package } from '../utils/questions-schema';

const BASE_URL = 'https://mexexam.com';

type SectionData = {
  id: string;
  title: string;
};

const loadSectionsData = (): SectionData[] => {
  const packagePath = join(process.cwd(), 'data', 'mexexam.json');
  const data = readFileSync(packagePath, 'utf-8');
  const pkg = JSON.parse(data) as Package;
  
  return pkg.sections.map(section => ({
    id: section.id,
    title: section.title.es ?? ''
  }));
};

const generateSitemap = async () => {
  const sections = loadSectionsData();

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
