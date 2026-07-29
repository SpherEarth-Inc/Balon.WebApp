import { NewsArticleSection } from "@/components/news/news-article-section";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "News article",
  description: "Academy news and insights from SpherEarth Football Academy.",
  path: "/news/",
});

/** Static-export placeholder; Apache rewrites real slugs to this page. */
export function generateStaticParams() {
  return [{ slug: "_" }];
}

export default function NewsArticlePage() {
  return <NewsArticleSection />;
}
