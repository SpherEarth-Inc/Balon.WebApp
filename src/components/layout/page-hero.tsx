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
          "relative isolate flex min-h-[36vh] flex-col justify-end overflow-hidden border-b bg-brand-navy text-white md:min-h-[42vh]",
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
        <div className="container relative mx-auto container-padding pb-6 pt-14 md:pb-8">
          <h1 className="max-w-3xl text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {breadcrumb && breadcrumb.length > 0 && (
            <div className={cn("mt-3", crumbStyles)}>
              <BreadcrumbNav items={breadcrumb} />
            </div>
          )}
          {description && (
            <p className="mt-3 max-w-xl text-sm text-white/85 md:mt-4 md:text-base">
              {description}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="border-b bg-brand-navy text-white">
      <div className="container mx-auto container-padding py-10 md:py-12">
        {breadcrumb && breadcrumb.length > 0 && (
          <div className={crumbStyles}>
            <BreadcrumbNav items={breadcrumb} />
          </div>
        )}
        <h1
          className={cn(
            "text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl lg:text-5xl",
            breadcrumb && breadcrumb.length > 0 && "mt-3"
          )}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-xl text-sm text-white/85 md:mt-4 md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
