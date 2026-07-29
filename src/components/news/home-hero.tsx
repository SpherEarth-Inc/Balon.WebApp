"use client";

import { useEffect, useMemo, useState } from "react";
import { HeroCarousel, type HeroSlide } from "@/components/sections/hero-carousel";
import {
  isNewsNotConfigured,
  listNews,
  type NewsListItem,
} from "@/lib/api/news";

const FALLBACK_IMAGE = "/images/explore/news.webp";
const HOME_NEWS_COUNT = 6;

function newsToSlide(item: NewsListItem): HeroSlide {
  return {
    tag: item.category_name?.trim() || "News",
    headline: item.title,
    description: item.summary || undefined,
    image: item.featured_image || FALLBACK_IMAGE,
    ctas: [
      { label: "Read story", href: `/news/${item.slug}/` },
      { label: "All news", href: "/news/" },
    ],
  };
}

type HomeHeroProps = {
  brandSlides: HeroSlide[];
};

/** Brand opener, then up to six latest news stories as cinematic hero slides. */
export function HomeHero({ brandSlides }: HomeHeroProps) {
  const [newsSlides, setNewsSlides] = useState<HeroSlide[]>([]);

  useEffect(() => {
    let cancelled = false;
    listNews({ page: 1, page_size: HOME_NEWS_COUNT })
      .then((data) => {
        if (!cancelled) setNewsSlides(data.results.map(newsToSlide));
      })
      .catch((err) => {
        if (cancelled) return;
        if (!isNewsNotConfigured(err)) console.error(err);
        setNewsSlides([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const slides = useMemo(
    () => [...brandSlides, ...newsSlides],
    [brandSlides, newsSlides],
  );

  return <HeroCarousel slides={slides} />;
}
