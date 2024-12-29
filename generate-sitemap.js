const fs = require('fs');
const path = require('path');

const siteUrl = 'https://aracovita.dev';
const POSTS_PER_PAGE = 5;

// Función para generar el sitemap
async function generateSitemap() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  // Obtén los slugs de los archivos .mdx
  const slugs = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replace('.mdx', ''));

  // Calcula el número total de páginas
  const totalPages = Math.ceil(slugs.length / POSTS_PER_PAGE);

  // Genera las URLs de paginación
  const paginationUrls = Array.from({ length: totalPages }, (_, i) => i + 1)
    .map(pageNum => ({
      url: `${siteUrl}/blog${pageNum === 1 ? '' : `?page=${pageNum}`}`,
      priority: pageNum === 1 ? '0.9' : '0.7',
      changefreq: 'weekly'
    }));

  // Genera todas las URLs
  const urls = [
    // Homepage
    {
      url: `${siteUrl}/`,
      priority: '1.0',
      changefreq: 'weekly'
    },
    // URLs de paginación
    ...paginationUrls,
    // URLs de los posts individuales
    ...slugs.map(slug => ({
      url: `${siteUrl}/blog/${slug}`,
      priority: '0.7',
      changefreq: 'monthly'
    }))
  ];

  // Plantilla XML para el sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(({ url, priority, changefreq }) => {
        return `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
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