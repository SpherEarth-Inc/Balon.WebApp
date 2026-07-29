import { AppLink } from "@/components/ui/app-link";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import {
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollToButtonLink, ScrollToLink } from "@/components/ui/scroll-to-link";
import { trustSafetyContent } from "@/lib/content/pages/trust-safety";
import { cn } from "@/lib/utils";

export function TrustSafetyPageSections() {
  const { intro, promise } = trustSafetyContent;

  const detailSections = [
    trustSafetyContent.trustCentre,
    trustSafetyContent.communicationChannels,
    trustSafetyContent.authorizedRepresentatives,
    trustSafetyContent.paymentSecurity,
    trustSafetyContent.privacy,
    trustSafetyContent.reporting,
  ];

  const contentsLinks = [
    ...pageContentsLinksFromSections([promise, ...detailSections]),
    { id: "commitments", label: "Our Commitments" },
    { id: "fraud-prevention", label: "Protecting Yourself" },
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

          <p className="mt-10 text-muted-foreground leading-relaxed">
            Need to verify someone?{" "}
            <ScrollToLink
              targetId="verify-action"
              className="inline-text-link"
            >
              Verify a representative
            </ScrollToLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have questions about trust and safety?{" "}
            <AppLink
              href="/faq/?category=trust-safety"
              className="inline-text-link"
            >
              View the trust &amp; safety FAQ
            </AppLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Learn how we protect your information.{" "}
            <ScrollToLink
              targetId="privacy-action"
              className="inline-text-link"
            >
              Privacy &amp; personal information
            </ScrollToLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Want to see what we stand for?{" "}
            <ScrollToLink
              targetId="commitments"
              className="inline-text-link"
            >
              Our commitments
            </ScrollToLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            See something suspicious?{" "}
            <ScrollToLink
              targetId="reporting-action"
              className="inline-text-link"
            >
              Report suspicious activity
            </ScrollToLink>
            .
          </p>

          <PageContentsNav links={contentsLinks} />

          <div className="mt-10">
            <ContentSectionBlock section={promise}>
              {promise.cta && (
                <div className="scroll-mt-24">
                  {promise.cta.href.startsWith("#") ? (
                    <ScrollToButtonLink
                      targetId={promise.cta.href.slice(1)}
                      variant="outline"
                      size="lg"
                      className="mt-6 h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg"
                    >
                      {promise.cta.label}
                    </ScrollToButtonLink>
                  ) : (
                    <ButtonLink
                      href={promise.cta.href}
                      variant={promise.cta.variant === "primary" ? "default" : "outline"}
                      className={cn(
                        "mt-6 h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg",
                        promise.cta.variant === "primary" && "bg-brand-green hover:bg-brand-green/90"
                      )}
                    >
                      {promise.cta.label}
                    </ButtonLink>
                  )}
                </div>
              )}
            </ContentSectionBlock>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-10">
          {detailSections.map((section) => (
            <ContentSectionBlock key={section.id ?? section.subtitle} section={section}>
              {section.cta && (
                <div
                  id={section.id ? `${section.id}-action` : undefined}
                  className="scroll-mt-24"
                >
                  {section.cta.href.startsWith("#") ? (
                    <ScrollToButtonLink
                      targetId={section.cta.href.slice(1)}
                      variant="outline"
                      size="lg"
                      className="mt-6 h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg"
                    >
                      {section.cta.label}
                    </ScrollToButtonLink>
                  ) : (
                    <ButtonLink
                      href={section.cta.href}
                      variant={section.cta.variant === "primary" ? "default" : "outline"}
                      className={cn(
                        "mt-6 h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg",
                        section.cta.variant === "primary" && "bg-brand-green hover:bg-brand-green/90"
                      )}
                    >
                      {section.cta.label}
                    </ButtonLink>
                  )}
                </div>
              )}
            </ContentSectionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
