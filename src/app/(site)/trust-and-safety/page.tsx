import { PageHero } from "@/components/layout/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BackToContents } from "@/components/sections/page-contents";
import { TrustSafetyPageSections } from "@/components/sections/trust-safety-page-sections";
import { trustSafetyContent } from "@/lib/content/pages/trust-safety";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: trustSafetyContent.meta.title,
  description: trustSafetyContent.meta.description,
  path: trustSafetyContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Trust & Safety" },
];

export default function TrustAndSafetyPage() {
  const { meta, commitments, commitmentsHeader, finalCta } = trustSafetyContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <TrustSafetyPageSections />
      <section id="commitments" className="scroll-mt-24 section-padding bg-muted/50">
        <div className="container mx-auto container-padding">
          <div className="mx-auto mb-10 max-w-5xl">
            <h2 className="text-3xl font-bold uppercase md:text-4xl">{commitmentsHeader.title}</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((commitment) => (
              <div
                key={commitment.label}
                className="border-l-4 border-brand-green bg-background p-6 shadow-sm"
              >
                <h3 className="font-bold">{commitment.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-5xl">
            <BackToContents />
          </div>
        </div>
      </section>
      <ContentBlock section={trustSafetyContent.protectingYourself} />
      <div className="container mx-auto container-padding pb-8">
        <div className="mx-auto content-width">
          <BackToContents />
        </div>
      </div>
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
        dark={false}
      />
    </>
  );
}
