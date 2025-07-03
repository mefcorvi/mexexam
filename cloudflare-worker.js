addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // Handle static assets (JS, CSS, images, etc.)
  if (isStaticAsset(url.pathname)) {
    return fetch(request);
  }

  // Handle API routes (if any)
  if (url.pathname.startsWith('/api/')) {
    return fetch(request);
  }

  // For all other routes, serve index.html (SPA routing)
  const modifiedRequest = new Request(new URL('/index.html', url.origin), {
    method: request.method,
    headers: request.headers,
    body: request.body
  });

  return fetch(modifiedRequest);
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
