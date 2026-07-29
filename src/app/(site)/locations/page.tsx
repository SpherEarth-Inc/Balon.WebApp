import { PageHero } from "@/components/layout/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { locationsContent } from "@/lib/content/pages/locations";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: locationsContent.meta.title,
  description: locationsContent.meta.description,
  path: locationsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: locationsContent.meta.title },
];

export default function LocationsPage() {
  const { meta, gta, finalCta } = locationsContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ContentBlock section={locationsContent.intro} />
      <ContentBlock section={locationsContent.findYourZone} imageRight />
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto container-padding">
          <div className="mb-10 text-center">
            <p className="section-subheading">
              {gta.subtitle}
            </p>
            <h2 className="text-3xl font-bold uppercase md:text-4xl">{gta.title}</h2>
            {gta.description && (
              <p className="mx-auto mt-4 max-w-5xl text-muted-foreground">{gta.description}</p>
            )}
          </div>
          <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gta.communities.map((community) => (
              <div
                key={community}
                className="border border-border bg-background px-4 py-3 text-center text-sm font-medium"
              >
                {community}
              </div>
            ))}
          </div>
          {gta.paragraphs?.map((p, i) => (
            <p key={i} className="mx-auto mt-8 max-w-5xl text-center text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>
      <ContentBlock section={locationsContent.beyondGta} />
      <ContentBlock section={locationsContent.trainingLocations} imageRight />
      <ContentBlock section={locationsContent.agePathways} />
      <ContentBlock section={locationsContent.trainingSchedule} imageRight />
      <ContentBlock section={locationsContent.matchDays} />
      <ContentBlock section={locationsContent.parentsFamilies} imageRight />
      <ContentBlock section={locationsContent.commitment} />
      <FaqAccordion items={locationsContent.faqs} />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
