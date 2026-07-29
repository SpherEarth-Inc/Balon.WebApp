import { Suspense } from "react";
import { NewsArticleSection } from "@/components/news/news-article-section";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "News article",
  description: "Academy news and insights from SpherEarth Football Academy.",
  path: "/news/",
});

export default function NewsArticlePage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto container-padding section-padding">
          <p className="text-sm text-muted-foreground">Loading article…</p>
        </div>
      }
    >
      <NewsArticleSection />
    </Suspense>
  );
}
