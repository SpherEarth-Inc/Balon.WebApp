"use client";

import { useEffect, useState } from "react";
import { CardWall, type CardWallItem } from "@/components/sections/card-wall";
import { SectionHeader } from "@/components/sections/section-header";
import {
  isNewsNotConfigured,
  listNews,
  newsArticleHref,
  type NewsListItem,
} from "@/lib/api/news";

const FALLBACK_IMAGE = "/images/explore/news.webp";
const PAGE_SIZE = 12;

function toCard(item: NewsListItem, index: number, page: number): CardWallItem {
  return {
    tag: item.category_name?.trim() || "News",
    title: item.title,
    description: item.summary || undefined,
    href: newsArticleHref(item.slug),
    image: item.featured_image || FALLBACK_IMAGE,
    featured: page === 1 && index === 0,
  };
}

export function NewsListSection() {
  const [items, setItems] = useState<CardWallItem[] | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    listNews({ page, page_size: PAGE_SIZE })
      .then((data) => {
        if (!cancelled) {
          setItems(data.results.map((item, i) => toCard(item, i, page)));
          setTotal(data.count);
          setError(null);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        if (isNewsNotConfigured(err)) {
          setError("News is not configured for this environment yet.");
        } else {
          setError(err instanceof Error ? err.message : "Unable to load news.");
        }
        setItems([]);
        setTotal(0);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [page]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <SectionHeader
          title="Latest"
          subtitle="Announcements and updates from the academy"
          className="mb-8"
        />

        {loading && items === null ? (
          <p className="text-sm text-muted-foreground">Loading articles…</p>
        ) : error ? (
          <p className="max-w-2xl text-sm text-muted-foreground">{error}</p>
        ) : !items || items.length === 0 ? (
          <p className="max-w-2xl text-sm text-muted-foreground">
            No published articles yet. Check back soon.
          </p>
        ) : (
          <>
            <CardWall items={items} />
            {totalPages > 1 ? (
              <div className="mt-10 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
                <p>
                  Showing {(page - 1) * PAGE_SIZE + 1}–
                  {Math.min(page * PAGE_SIZE, total)} of {total}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-border bg-white px-3 py-1.5 font-medium text-foreground disabled:opacity-40"
                    disabled={page <= 1 || loading}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    Previous
                  </button>
                  <span className="tabular-nums">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    type="button"
                    className="border border-border bg-white px-3 py-1.5 font-medium text-foreground disabled:opacity-40"
                    disabled={page >= totalPages || loading}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
