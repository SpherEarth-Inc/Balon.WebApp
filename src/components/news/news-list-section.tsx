"use client";

import { useEffect, useState } from "react";
import { CardWall, type CardWallItem } from "@/components/sections/card-wall";
import { SectionHeader } from "@/components/sections/section-header";
import {
  isNewsNotConfigured,
  listNews,
  type NewsListItem,
} from "@/lib/api/news";

const FALLBACK_IMAGE = "/images/explore/news.webp";

function toCard(item: NewsListItem, index: number): CardWallItem {
  return {
    tag: item.category_name?.trim() || "News",
    title: item.title,
    description: item.summary || undefined,
    href: `/news/${item.slug}/`,
    image: item.featured_image || FALLBACK_IMAGE,
    featured: index === 0,
  };
}

export function NewsListSection() {
  const [items, setItems] = useState<CardWallItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    listNews()
      .then((articles) => {
        if (!cancelled) {
          setItems(articles.map(toCard));
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
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <SectionHeader
          title="Latest"
          subtitle="Announcements and updates from the academy"
          className="mb-8"
        />

        {items === null ? (
          <p className="text-sm text-muted-foreground">Loading articles…</p>
        ) : error ? (
          <p className="max-w-2xl text-sm text-muted-foreground">{error}</p>
        ) : items.length === 0 ? (
          <p className="max-w-2xl text-sm text-muted-foreground">
            No published articles yet. Check back soon.
          </p>
        ) : (
          <CardWall items={items} />
        )}
      </div>
    </section>
  );
}
