"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CtaLink } from "@/types/content";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";

interface LandingHeroProps {
  headline: string;
  subheadline: string;
  description: string;
  image: string;
  ctas: CtaLink[];
}

export function LandingHero({
  headline,
  subheadline,
  description,
  image,
  ctas,
}: LandingHeroProps) {
  return (
    <section className="relative isolate flex min-h-[36vh] flex-col justify-end overflow-hidden bg-brand-navy text-white md:min-h-[42vh]">
      <Image
        src={asset(image)}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />

      <div className="absolute left-0 top-0 z-10">
        <div className="container mx-auto container-padding pt-8">
          <span className="inline-flex bg-brand-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest md:text-xs">
            {subheadline}
          </span>
        </div>
      </div>

      <div className="container relative z-10 mx-auto container-padding pb-6 pt-14 md:pb-8">
        <h1 className="max-w-3xl text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl lg:text-5xl">
          {headline}
        </h1>
        <p className="mt-3 max-w-xl text-sm text-white/85 md:mt-4 md:text-base">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5 md:mt-6">
          {ctas.map((cta, i) => (
            <ButtonLink
              key={`${cta.href}-${cta.label}`}
              href={cta.href}
              size="lg"
              variant={i === 0 ? "default" : "outline"}
              className={
                i === 0
                  ? "h-10 gap-2 rounded-none bg-brand-green px-6 text-sm hover:bg-brand-green/90 md:h-11 md:px-8 md:text-base"
                  : "h-10 rounded-none border-white/40 bg-transparent px-6 text-sm text-white hover:bg-white/10 hover:text-white md:h-11 md:px-8 md:text-base"
              }
            >
              {cta.label}
              {i === 0 && <ArrowRight className="size-4" />}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
