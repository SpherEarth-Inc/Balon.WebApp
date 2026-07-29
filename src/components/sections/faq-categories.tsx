"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqCategory } from "@/types/content";
import { cn } from "@/lib/utils";

interface FaqCategoriesProps {
  categories: FaqCategory[];
}

export function FaqCategories({ categories }: FaqCategoriesProps) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.some((item) => item.id === category)) {
      setActiveCategory(category);
    }
  }, [searchParams, categories]);

  const visibleCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((category) => category.id === activeCategory);

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors",
              activeCategory === "all"
                ? "bg-brand-green text-white"
                : "bg-muted text-foreground hover:bg-muted/80"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors",
                activeCategory === category.id
                  ? "bg-brand-green text-white"
                  : "bg-muted text-foreground hover:bg-muted/80"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl space-y-10">
          {visibleCategories.map((category) => (
            <div key={category.id}>
              {activeCategory === "all" && (
                <h2 className="mb-4 text-xl font-bold uppercase md:text-2xl">
                  {category.title}
                </h2>
              )}
              <Accordion multiple={false}>
                {category.items.map((item, i) => (
                  <AccordionItem key={`${category.id}-${i}`} value={`${category.id}-faq-${i}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
