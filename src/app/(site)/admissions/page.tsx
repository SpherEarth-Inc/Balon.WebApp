import { PageHero } from "@/components/layout/page-hero";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import {
  BackToContents,
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { StepsTimeline } from "@/components/sections/steps-timeline";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollToLink } from "@/components/ui/scroll-to-link";
import { admissionsContent } from "@/lib/content/pages/admissions";
import { createMetadata } from "@/lib/content/site";

const ADMISSIONS_PROCESS_ID = "admissions-process";

function renderParagraphWithProcessLink(text: string) {
  const linkText = "process";
  const index = text.indexOf(linkText);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <ScrollToLink
        targetId={ADMISSIONS_PROCESS_ID}
        className="text-brand-green hover:underline"
      >
        {linkText}
      </ScrollToLink>
      {text.slice(index + linkText.length)}
    </>
  );
}

export const metadata = createMetadata({
  title: admissionsContent.meta.title,
  description: admissionsContent.meta.description,
  path: admissionsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: admissionsContent.meta.title },
];

export default function AdmissionsPage() {
  const { meta, intro, finalCta } = admissionsContent;
  const details = [
    admissionsContent.philosophy,
    admissionsContent.pathways,
    admissionsContent.selectionCriteria,
    admissionsContent.whoCanApply,
    admissionsContent.admissionsPriority,
    admissionsContent.assessment,
    admissionsContent.documents,
    admissionsContent.tuition,
    admissionsContent.paymentPlans,
    admissionsContent.international,
  ];

  const contentsLinks = [
    ...pageContentsLinksFromSections(details),
    { id: "official-communications", label: "Official Communications" },
    { id: ADMISSIONS_PROCESS_ID, label: "Admissions Process" },
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
                {i === 1 ? renderParagraphWithProcessLink(p) : p}
              </p>
            ))}
            <PageContentsNav links={contentsLinks} />
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {details.map((item) => (
              <ContentSectionBlock key={item.id} section={item} />
            ))}
            <div id="official-communications" className="scroll-mt-24">
              <OfficialCommunicationsSection />
              <BackToContents />
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
            <ButtonLink
              href="/admissions/apply/"
              className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
            >
              Start Application
            </ButtonLink>
          </div>
        </div>
      </section>

      <StepsTimeline
        id={ADMISSIONS_PROCESS_ID}
        title="Admissions Process"
        subtitle="Your journey from application to enrollment"
        steps={admissionsContent.steps}
      />
      <div className="container mx-auto container-padding pb-8">
        <div className="mx-auto max-w-3xl">
          <BackToContents />
        </div>
      </div>
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
