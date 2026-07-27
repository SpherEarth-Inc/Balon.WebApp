import { AppLink } from "@/components/ui/app-link";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import {
  BackToContents,
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { ButtonLink } from "@/components/ui/button-link";
import { programsContent } from "@/lib/content/pages/programs";

export function ProgramsPageSections() {
  const { intro } = programsContent;

  const details = [
    programsContent.trainingPhilosophy,
    programsContent.ageGroups,
    programsContent.playerJourney,
    programsContent.calendar,
    programsContent.investment,
  ];

  const contentsLinks = [
    ...pageContentsLinksFromSections(details),
    { id: "official-communications", label: "Official Communications" },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">{intro.title}</h2>
          {intro.paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have questions about our programs?{" "}
            <AppLink
              href="/faq/?category=programs"
              className="inline-text-link"
            >
              View the program FAQ
            </AppLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ready to choose a program?{" "}
            <AppLink
              href="/programs/choose-program/"
              className="inline-text-link"
            >
              View programs
            </AppLink>
            .
          </p>
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
            href="/programs/choose-program/"
            size="lg"
            className="h-12 gap-2 rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 md:h-14 md:px-10 md:text-lg"
          >
            View Programs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
