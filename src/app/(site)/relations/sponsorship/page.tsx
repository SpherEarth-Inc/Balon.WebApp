import { AppLink } from "@/components/ui/app-link";
import { PageHero } from "@/components/layout/page-hero";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { ButtonLink } from "@/components/ui/button-link";
import { sponsorshipContent } from "@/lib/content/pages/sponsorship";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: sponsorshipContent.meta.title,
  description: sponsorshipContent.meta.description,
  path: sponsorshipContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/relations/" },
  { label: "Sponsorship" },
];

export default function SponsorshipPage() {
  const { meta, intro, finalCta } = sponsorshipContent;
  const sections = [sponsorshipContent.sponsorFunded, sponsorshipContent.commitment];
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
            <PageContentsNav links={contentsLinks} />
          </div>

          <div className="mx-auto mt-12 max-w-5xl space-y-10">
            {sections.map((section) => (
              <ContentSectionBlock key={section.id} section={section} />
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-5xl text-muted-foreground leading-relaxed">
            Have questions about sponsorship?{" "}
            <AppLink
              href="/faq/?category=sponsors"
              className="inline-text-link"
            >
              View the sponsorship FAQ
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
