const fs = require('fs');
const path = require('path');

const BASE_URL = "https://gold.ariyadi.eu.org";

const pages = [
    {
        loc: "/",
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: "1.0"
    }
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

pages.forEach(p => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${p.loc}</loc>\n`;
    xml += `    <lastmod>${p.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
    xml += `    <priority>${p.priority}</priority>\n`;
    xml += '  </url>\n';
});

xml += '</urlset>';

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log("✅ sitemap.xml berhasil di-generate!");
