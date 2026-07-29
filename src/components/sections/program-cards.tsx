import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ProgramCard } from "@/types/content";
import { SectionHeader } from "@/components/sections/section-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface ProgramCardsProps {
  title?: string;
  subtitle?: string;
  cards: ProgramCard[];
  image?: string;
  align?: "center" | "left";
  headerStyle?: "default" | "overview";
  seeAllHref?: string;
  seeAllLabel?: string;
}

export function ProgramCards({
  title,
  subtitle,
  cards,
  image,
  align = "center",
  headerStyle = "default",
  seeAllHref,
  seeAllLabel,
}: ProgramCardsProps) {
  const showHeader = Boolean(title);

  return (
    <section className={cn("section-padding", headerStyle === "default" && "bg-muted/50")}>
      <div className="container mx-auto container-padding">
        {showHeader && headerStyle === "overview" && (
          <div className="mb-12 max-w-6xl">
            <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
          </div>
        )}
        {showHeader && headerStyle === "default" && align === "left" && (
          <SectionHeader
            title={title!}
            subtitle={subtitle}
            seeAllHref={seeAllHref}
            seeAllLabel={seeAllLabel}
            className="mb-10"
          />
        )}
        {showHeader && headerStyle === "default" && align !== "left" && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => {
            const cardImage = card.image ?? image;
            return (
            <Card key={card.title} className="flex flex-col rounded-none border-0 shadow-md overflow-hidden">
              {cardImage && card.image ? (
                <div className="flex justify-center bg-muted/30 px-4 py-4">
                  <Image
                    src={asset(cardImage)}
                    alt=""
                    width={200}
                    height={200}
                    className="h-auto w-full max-w-[140px] object-contain sm:max-w-[160px]"
                  />
                </div>
              ) : cardImage ? (
                <div className="relative h-36 shrink-0 overflow-hidden sm:h-40">
                  <Image
                    src={asset(cardImage)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <CardHeader>
                <CardTitle className="font-heading uppercase">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm text-muted-foreground">{card.description}</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {card.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-green">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={card.cta.href}
                  variant="outline"
                  className="mt-auto rounded-none border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                >
                  {card.cta.label}
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
