import { AppLink } from "@/components/ui/app-link";
import { PageHero } from "@/components/layout/page-hero";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { ButtonLink } from "@/components/ui/button-link";
import { partnershipsContent } from "@/lib/content/pages/partnerships";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: partnershipsContent.meta.title,
  description: partnershipsContent.meta.description,
  path: partnershipsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/relations/" },
  { label: "Strategic Partnerships" },
];

export default function PartnershipsPage() {
  const { meta, intro, categories, finalCta } = partnershipsContent;

  const categorySections = categories.map((category) => ({
    id: category.id,
    title: category.subtitle,
    subtitle: category.subtitle,
    description: category.description,
    bullets: category.bullets,
  }));

  const contentsLinks = pageContentsLinksFromSections([
    partnershipsContent.whyPartner,
    ...categorySections,
    partnershipsContent.principles,
  ]);

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mx-auto content-width">
            <h2 className="text-2xl font-bold uppercase md:text-3xl">{intro.title}</h2>
            {intro.paragraphs?.map((p, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            <PageContentsNav links={contentsLinks} />
          </div>

          <div className="mx-auto mt-12 max-w-5xl space-y-10">
            <ContentSectionBlock section={partnershipsContent.whyPartner} />
            {categorySections.map((section) => (
              <ContentSectionBlock key={section.id} section={section} />
            ))}
            <ContentSectionBlock section={partnershipsContent.principles} />
          </div>

          <p className="mx-auto mt-12 max-w-5xl text-muted-foreground leading-relaxed">
            Have questions about strategic partnerships?{" "}
            <AppLink
              href="/faq/?category=partnerships"
              className="inline-text-link"
            >
              View the partnerships FAQ
            </AppLink>
            .
          </p>

          {intro.cta && (
            <div className="mx-auto mt-12 flex max-w-5xl flex-wrap gap-3">
              <ButtonLink
                href={intro.cta.href}
                className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
              >
                {intro.cta.label}
              </ButtonLink>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
