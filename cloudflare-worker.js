addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

// Configure your GitHub Pages URL here
const GITHUB_PAGES_URL = 'https://mefcorvi.github.io/mexexam';

async function handleRequest(request) {
  const url = new URL(request.url);

  // beacon
  if (url.pathname.startsWith('/beacon')) {
    // пробрасываем query-string как есть
    const upstream = 'https://cloudflareinsights.com/cdn-cgi/rum' + url.search;
    const resp = await fetch(upstream, {
      method: request.method,
      body: request.body, // Beacon API шлёт POST
      headers: request.headers, // сохраняем origin-IP, UA и т.д.
      cf: { cacheTtl: 0 } // метрики кэшировать бессмысленно
    });
    // Возвращаем ответ как есть, включая CORS-заголовки Cloudflare
    return resp;
  }

  // Remove /mexexam prefix from pathname for GitHub Pages
  let pathname = url.pathname;
  if (pathname.startsWith('/mexexam')) {
    pathname = pathname.substring('/mexexam'.length) || '/';
  }

  // Handle static assets (JS, CSS, images, etc.)
  if (isStaticAsset(pathname)) {
    const githubPagesUrl = GITHUB_PAGES_URL + pathname;
    return fetch(githubPagesUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
  }

  // Handle API routes (if any)
  if (pathname.startsWith('/api/')) {
    return fetch(request);
  }

  // For all other routes, serve index.html from GitHub Pages (SPA routing)
  const githubPagesUrl = GITHUB_PAGES_URL + '/index.html';
  return fetch(githubPagesUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  });
}

function isStaticAsset(pathname) {
  const staticExtensions = [
    '.js',
    '.css',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.svg',
    '.ico',
    '.woff',
    '.woff2',
    '.ttf',
    '.eot',
    '.webp',
    '.avif',
    '.mp4',
    '.webm',
    '.mp3',
    '.wav',
    '.pdf',
    '.zip',
    '.txt',
    '.xml',
    '.json'
  ];

  return (
    staticExtensions.some((ext) => pathname.endsWith(ext)) ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_nuxt/') ||
    pathname.startsWith('/dist/') ||
    pathname.includes('.')
  );
}
