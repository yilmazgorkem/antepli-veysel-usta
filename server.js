const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

const server = http.createServer((req, res) => {
  // Railway health check
  if (req.url === '/health' || req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('OK');
    return;
  }

  // Parse path
  let parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Friendly Route Aliases
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  } else if (
    pathname === '/ana-sayfa' ||
    pathname === '/anasayfa' ||
    pathname === '/full' ||
    pathname === '/onizleme' ||
    pathname === '/preview'
  ) {
    pathname = '/ana-sayfa.html';
  }

  const filePath = path.join(__dirname, pathname);

  // Security: Prevent directory traversal outside root
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Erişim Reddedildi');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Sayfa Bulunamadı — Antepli Veysel Usta</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-align: center; padding: 4rem 1rem; background: #f6f0e6; color: #2c1c12; }
    h1 { font-size: 2.2rem; margin-bottom: 0.5rem; }
    p { font-size: 1.1rem; color: #5a3b24; }
    a { color: #9a3f28; font-weight: 600; text-decoration: underline; }
  </style>
</head>
<body>
  <h1>404 — Sayfa Bulunamadı</h1>
  <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
  <p><a href="/">Ana Sayfaya Dön →</a></p>
</body>
</html>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Caching: HTML is fresh, static assets cached 1 day
    const cacheControl = ext === '.html' ? 'no-cache' : 'public, max-age=86400';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': cacheControl,
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Antepli Veysel Usta sunucusu http://${HOST}:${PORT} adresinde aktif.`);
});
