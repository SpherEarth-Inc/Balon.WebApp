import { AppLink } from "@/components/ui/app-link";
import { PageHero } from "@/components/layout/page-hero";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import {
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { ButtonLink } from "@/components/ui/button-link";
import { overviewPartnersSponsorsContent } from "@/lib/content/pages/overview-partners-sponsors";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: overviewPartnersSponsorsContent.meta.title,
  description: overviewPartnersSponsorsContent.meta.description,
  path: overviewPartnersSponsorsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Overview" },
];

export default function RelationsPage() {
  const { meta, intro, sections } = overviewPartnersSponsorsContent;
  const contentsLinks = pageContentsLinksFromSections(sections);

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
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ready to explore sponsorship?{" "}
              <AppLink
                href="/relations/sponsorship/"
                className="inline-text-link"
              >
                View sponsorship
              </AppLink>
              .
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ready to explore strategic partnerships?{" "}
              <AppLink
                href="/relations/partnerships/"
                className="inline-text-link"
              >
                View partnerships
              </AppLink>
              .
            </p>
            <PageContentsNav links={contentsLinks} />
          </div>

          <div className="mx-auto mt-12 max-w-5xl space-y-10">
            {sections.map((section) => (
              <ContentSectionBlock key={section.id} section={section} />
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap gap-3">
            <ButtonLink
              href="/relations/sponsorship/"
              className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
            >
              View Sponsorship
            </ButtonLink>
            <ButtonLink
              href="/relations/partnerships/"
              variant="outline"
              className="h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg"
            >
              View Partnerships
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
