import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, writeFileSync } from "fs";
import { resolve } from "path";

const baseUrl = "https://dewanshrawat.in";

const pages = ["/", "/blog", "/projects", "/experience"];

// 1. Generate sitemap.xml
const sitemap = new SitemapStream({ hostname: baseUrl });
const sitemapPath = resolve("dist", "sitemap.xml");
const sitemapWriteStream = createWriteStream(sitemapPath);

pages.forEach((page) => {
  sitemap.write({ url: page, changefreq: "weekly", priority: 0.8 });
});

sitemap.end();
sitemap.pipe(sitemapWriteStream);

streamToPromise(sitemap).then(() => {
  console.log("✅ Sitemap generated at dist/sitemap.xml");

  // 2. Generate robots.txt
  const robotsContent = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  const robotsPath = resolve("dist", "robots.txt");
  writeFileSync(robotsPath, robotsContent, { encoding: "utf8" });

  console.log("✅ robots.txt generated at dist/robots.txt");
});
