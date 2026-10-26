import { siteUrl } from "@/api/site";

const robots = () => ({
  rules: { userAgent: "*", allow: "/", disallow: "/search" },
  sitemap: `${siteUrl}/sitemap.xml`,
});

export default robots;
