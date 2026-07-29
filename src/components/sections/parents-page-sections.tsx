import { AppLink } from "@/components/ui/app-link";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import {
  BackToContents,
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { ButtonLink } from "@/components/ui/button-link";
import { parentsContent } from "@/lib/content/pages/parents";

export function ParentsPageSections() {
  const { intro } = parentsContent;
  const consultationHref = parentsContent.meta.path.replace(/\/$/, "") + "/consultation/";

  const details = [
    parentsContent.promise,
    parentsContent.partnership,
    parentsContent.communication,
    parentsContent.safety,
    parentsContent.expectations,
    parentsContent.attendance,
    parentsContent.nutrition,
    parentsContent.academicSupport,
    parentsContent.travel,
    parentsContent.matchDays,
    parentsContent.payments,
  ];

  const contentsLinks = [
    ...pageContentsLinksFromSections(details),
    { id: "official-communications", label: "Official Communications" },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="mx-auto content-width">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">{intro.title}</h2>
          {intro.paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ready to book a parent consultation?{" "}
            <AppLink
              href={consultationHref}
              className="inline-text-link"
            >
              Book a parent consultation
            </AppLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have questions for parents and families?{" "}
            <AppLink
              href="/faq/?category=parents"
              className="inline-text-link"
            >
              View the parents & families FAQ
            </AppLink>
            .
          </p>
          <PageContentsNav links={contentsLinks} />
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-10">
          {details.map((item) => (
            <ContentSectionBlock key={item.id} section={item} />
          ))}
          <div id="official-communications" className="scroll-mt-24">
            <OfficialCommunicationsSection />
            <BackToContents />
          </div>
        </div>

        {intro.cta && (
          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap gap-3">
            <ButtonLink
              href={intro.cta.href}
              size="lg"
              className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
            >
              {intro.cta.label}
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
