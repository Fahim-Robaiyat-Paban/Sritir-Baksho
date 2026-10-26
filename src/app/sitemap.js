import { siteUrl } from "@/api/site";
import { getGameSlugs } from "@/api/games";
import { getStorySlugs } from "@/api/stories";
import { results } from "@/api/quiz";

const staticRoutes = ["", "/card", "/games", "/stories", "/gallery", "/quiz", "/about", "/privacy"];

const sitemap = () => [
  ...staticRoutes.map((path) => ({ url: `${siteUrl}${path}` })),
  ...getGameSlugs().map((slug) => ({ url: `${siteUrl}/games/${slug}` })),
  ...getStorySlugs().map((slug) => ({ url: `${siteUrl}/stories/${slug}` })),
  ...results.map((result) => ({ url: `${siteUrl}/quiz/result/${result.id}` })),
];

export default sitemap;
