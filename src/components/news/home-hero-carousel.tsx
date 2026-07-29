"use client";

import { useEffect, useMemo, useState } from "react";
import {
  HeroCarousel,
  type HeroSlide,
} from "@/components/sections/hero-carousel";
import {
  isNewsNotConfigured,
  listNews,
  newsArticleHref,
  type NewsListItem,
} from "@/lib/api/news";

const FALLBACK_IMAGE = "/images/explore/news.webp";
const HOME_HERO_NEWS_COUNT = 3;

const FALLBACK_NEWS_SLIDE: HeroSlide = {
  tag: "News",
  headline: "Latest From The Academy",
  description:
    "Announcements, stories and updates from SpherEarth Football Academy.",
  image: FALLBACK_IMAGE,
  ctas: [{ label: "View News", href: "/news/" }],
};

function newsToSlide(item: NewsListItem): HeroSlide {
  return {
    tag: item.category_name?.trim() || "News",
    headline: item.title,
    description: item.summary || undefined,
    image: item.featured_image || FALLBACK_IMAGE,
    ctas: [
      { label: "Latest News", href: "#latest-news" },
      { label: "Read Article", href: newsArticleHref(item.slug) },
    ],
  };
}

export function HomeHeroCarousel({ baseSlides }: { baseSlides: HeroSlide[] }) {
  const [newsItems, setNewsItems] = useState<NewsListItem[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    listNews({ page: 1, page_size: HOME_HERO_NEWS_COUNT })
      .then((data) => {
        if (!cancelled) setNewsItems(data.results);
      })
      .catch((err) => {
        if (cancelled) return;
        if (!isNewsNotConfigured(err)) {
          console.error(err);
        }
        setNewsItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const slides = useMemo(() => {
    // Keep base carousel moving while news loads; append news once ready.
    if (newsItems === null) return baseSlides;
    if (newsItems.length === 0) return [...baseSlides, FALLBACK_NEWS_SLIDE];
    return [...baseSlides, ...newsItems.map(newsToSlide)];
  }, [baseSlides, newsItems]);

  return <HeroCarousel slides={slides} />;
}
