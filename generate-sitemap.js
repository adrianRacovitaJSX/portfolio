const fs = require('fs');
const path = require('path');

const siteUrl = 'https://aracovita.dev';  

// Función para generar el sitemap
async function generateSitemap() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  // Obtén los slugs de los archivos .mdx
  const slugs = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replace('.mdx', ''));

  // Genera las URLs del sitemap
  const urls = [
    // URL base del sitio
    `${siteUrl}/`,
    // URLs de los posts del blog
    ...slugs.map((slug) => `${siteUrl}/blog/${slug}`)
  ];

  // Plantilla XML para el sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `;
      })
      .join('')}
  </urlset>`;

  // Guarda el archivo sitemap.xml en la carpeta app
  fs.writeFileSync(path.join(process.cwd(), 'app', 'sitemap.xml'), sitemap);
  console.log('Sitemap generado correctamente en app/sitemap.xml');
}

// Ejecuta la función
generateSitemap();