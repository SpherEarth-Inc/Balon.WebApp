import Image from "next/image";
import type { BreadcrumbItem } from "@/types/content";
import { BreadcrumbNav } from "@/components/layout/breadcrumb-nav";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
  image?: string;
  imageClassName?: string;
  className?: string;
}

export function PageHero({
  title,
  description,
  breadcrumb,
  image,
  imageClassName,
  className,
}: PageHeroProps) {
  const crumbStyles =
    "[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/70";

  if (image) {
    return (
      <section
        className={cn(
          "relative isolate overflow-hidden border-b bg-brand-navy text-white",
          className
        )}
      >
        <Image
          src={asset(image)}
          alt=""
          fill
          priority
          className={cn("object-cover", imageClassName)}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="container relative mx-auto container-padding py-20 md:py-28 lg:py-32">
          <h1 className="text-4xl font-bold uppercase tracking-wide md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {breadcrumb && breadcrumb.length > 0 && (
            <div className={cn("mt-4", crumbStyles)}>
              <BreadcrumbNav items={breadcrumb} />
            </div>
          )}
          {description && (
            <p className="mt-4 max-w-6xl text-lg text-white/80">{description}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="border-b bg-brand-navy text-white">
      <div className="container mx-auto container-padding section-padding">
        {breadcrumb && breadcrumb.length > 0 && (
          <div className={crumbStyles}>
            <BreadcrumbNav items={breadcrumb} />
          </div>
        )}
        <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-6xl text-lg text-white/80">{description}</p>
        )}
      </div>
    </section>
  );
}
