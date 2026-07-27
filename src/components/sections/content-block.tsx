import Image from "next/image";
import type { ContentSection } from "@/types/content";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface ContentBlockProps {
  section: ContentSection;
  imageRight?: boolean;
  className?: string;
  imageClassName?: string;
  imageContainerClassName?: string;
}

export function ContentBlock({
  section,
  imageRight = false,
  className,
  imageClassName,
  imageContainerClassName,
}: ContentBlockProps) {
  const hasImage = Boolean(section.image);

  return (
    <section id={section.id} className={cn("section-padding", section.id && "scroll-mt-24", className)}>
      <div className="container mx-auto container-padding">
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-16",
            hasImage ? "lg:grid-cols-2" : "max-w-3xl mx-auto"
          )}
        >
          <div className={cn(hasImage && imageRight && "lg:order-2")}>
            {section.subtitle && (
              <p className="section-subheading">
                {section.subtitle}
              </p>
            )}
            <h2 className="text-3xl font-bold uppercase md:text-4xl">{section.title}</h2>
            {section.description && (
              <p className="mt-4 text-lg text-muted-foreground">{section.description}</p>
            )}
            {section.paragraphs?.map((p, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-6 space-y-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {section.items && (
              <div className="mt-8 space-y-6">
                {section.items.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
            {section.cta && (
              <ButtonLink
                href={section.cta.href}
                variant={section.cta.variant === "primary" ? "default" : "outline"}
                className={cn(
                  "mt-8 h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg",
                  section.cta.variant === "primary" && "bg-brand-green hover:bg-brand-green/90"
                )}
              >
                {section.cta.label}
              </ButtonLink>
            )}
            {section.ctas && (
              <div className="mt-8 flex flex-wrap gap-3">
                {section.ctas.map((cta) => (
                  <ButtonLink
                    key={`${cta.href}-${cta.label}`}
                    href={cta.href}
                    variant={cta.variant === "primary" ? "default" : "outline"}
                    className="rounded-none"
                  >
                    {cta.label}
                  </ButtonLink>
                ))}
              </div>
            )}
          </div>
          {hasImage && section.image && (
            <div
              className={cn(
                "relative aspect-[4/3] overflow-hidden",
                imageContainerClassName,
                imageRight ? "lg:order-1" : ""
              )}
            >
              <Image
                src={asset(section.image)}
                alt=""
                fill
                className={cn("object-cover", imageClassName)}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
