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
const HOME_NEWS_COUNT = 6;

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

export function HomeLatestNews() {
  const [items, setItems] = useState<CardWallItem[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    listNews({ page: 1, page_size: HOME_NEWS_COUNT })
      .then((data) => {
        if (!cancelled) setItems(data.results.map(toCard));
      })
      .catch((err) => {
        if (cancelled) return;
        if (!isNewsNotConfigured(err)) {
          console.error(err);
        }
        setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <section id="latest-news" className="scroll-mt-24 section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <SectionHeader
          title="Latest News"
          subtitle="Recent announcements and updates from the academy"
          seeAllHref="/news/"
          seeAllLabel="All news"
          className="mb-8"
        />
        <CardWall items={items} />
      </div>
    </section>
  );
}
