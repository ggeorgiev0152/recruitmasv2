// Service Worker to fix MIME type issues
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Fix MIME types for JavaScript modules
  if (url.pathname.endsWith('.js') || url.pathname.endsWith('.mjs')) {
    event.respondWith(
      fetch(event.request).then(response => {
        const headers = new Headers(response.headers);
        headers.set('Content-Type', 'application/javascript; charset=utf-8');
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: headers
        });
      })
    );
  }
});