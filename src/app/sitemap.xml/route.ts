export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_FRONT_URL

  const sitemaps = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
  ];

  const sitemapIndex = `
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemaps
              .map(
                (sitemap) => `
                  <url>
                    <loc>${sitemap.url}</loc>
                    <lastmod>${sitemap.lastModified}</lastmod>
                    <changefreq>${sitemap.changeFrequency}</changefreq>
                    <priority>${sitemap.priority}</priority>
                  </url>
                `
              )
              .join("")}
          </urlset>
        `;

  return new Response(sitemapIndex, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
