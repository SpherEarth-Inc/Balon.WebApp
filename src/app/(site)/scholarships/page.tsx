import { AppLink } from "@/components/ui/app-link";
import { PageHero } from "@/components/layout/page-hero";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import {
  BackToContents,
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { ButtonLink } from "@/components/ui/button-link";
import { scholarshipsContent } from "@/lib/content/pages/scholarships";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: scholarshipsContent.meta.title,
  description: scholarshipsContent.meta.description,
  path: scholarshipsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: scholarshipsContent.meta.title },
];

export default function ScholarshipsPage() {
  const { meta, intro } = scholarshipsContent;
  const overviewSections = [
    scholarshipsContent.philosophy,
    scholarshipsContent.merit,
    scholarshipsContent.needsBased,
    scholarshipsContent.eligibility,
    scholarshipsContent.selectionProcess,
  ];

  const contentsLinks = [
    ...pageContentsLinksFromSections(overviewSections),
    { id: "official-communications", label: "Official Communications" },
  ];

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
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold uppercase md:text-3xl">{intro.title}</h2>
            {intro.paragraphs?.map((p, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            <PageContentsNav links={contentsLinks} />
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {overviewSections.map((section) => (
              <ContentSectionBlock key={section.id} section={section} />
            ))}
            <div id="official-communications" className="scroll-mt-24">
              <OfficialCommunicationsSection />
              <BackToContents />
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-muted-foreground leading-relaxed">
            Have questions about scholarships?{" "}
            <AppLink
              href="/faq/?category=scholarships"
              className="inline-text-link"
            >
              View the scholarship FAQ
            </AppLink>
            .
          </p>

          {intro.cta && (
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
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
    </>
  );
}
