"use client";

import { useEffect, useState } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { TipTapContent } from "@/components/news/tiptap-content";
import { ButtonLink } from "@/components/ui/button-link";
import {
  getNews,
  isNewsNotConfigured,
  type NewsArticle,
} from "@/lib/api/news";

const FALLBACK_IMAGE = "/images/explore/news.webp";

function formatPublishedAt(value: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-CA", { dateStyle: "long" }).format(date);
}

/** Prefer the browser URL — static export serves /news/_/ for all slugs via Apache. */
function articleSlugFromPath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "news" || parts.length < 2) return "";
  const slug = decodeURIComponent(parts[1] ?? "");
  if (!slug || slug === "_") return "";
  return slug;
}

export function NewsArticleSection() {
  const [slug, setSlug] = useState<string | null>(null);
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSlug(articleSlugFromPath(window.location.pathname));
  }, []);

  useEffect(() => {
    if (slug === null) return;

    if (!slug) {
      setLoading(false);
      setError("Article not found.");
      return;
    }

    let cancelled = false;
    setLoading(true);
    getNews(slug)
      .then((data) => {
        if (!cancelled) {
          setArticle(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        if (isNewsNotConfigured(err)) {
          setError("News is not configured for this environment yet.");
        } else {
          setError(err instanceof Error ? err.message : "Unable to load article.");
        }
        setArticle(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (slug === null || loading) {
    return (
      <div className="container mx-auto container-padding section-padding">
        <p className="text-sm text-muted-foreground">Loading article…</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto container-padding section-padding space-y-6">
        <p className="text-sm text-muted-foreground">
          {error ?? "Article not found."}
        </p>
        <ButtonLink href="/news/" variant="outline">
          Back to news
        </ButtonLink>
      </div>
    );
  }

  const published = formatPublishedAt(article.published_at);
  const category = article.category_name?.trim() || "News";

  return (
    <>
      <PageHero
        title={article.title}
        description={article.summary || undefined}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "News & Insights", href: "/news/" },
          { label: article.title },
        ]}
        image={article.featured_image || FALLBACK_IMAGE}
      />

      <article className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mx-auto content-width space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex bg-red-600 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-widest text-white">
                {category}
              </span>
              {published ? (
                <time dateTime={article.published_at ?? undefined}>{published}</time>
              ) : null}
            </div>

            <TipTapContent doc={article.content} />

            <div className="pt-4">
              <ButtonLink href="/news/" variant="outline">
                Back to news
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
