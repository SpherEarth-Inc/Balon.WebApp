"use client";

import { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";
import { AppLink } from "@/components/ui/app-link";
import { AdvisorForm } from "@/components/forms/advisor-form";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import {
  BackToContents,
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";
import { Button } from "@/components/ui/button";
import { ScrollToLink, scrollSectionIntoView } from "@/components/ui/scroll-to-link";
import { advisorContent } from "@/lib/content/pages/advisor";
import { cn } from "@/lib/utils";

type AdvisorStep = "intro" | "form" | "submitted";

export function AdvisorPageContent() {
  const {
    intro,
    pathway,
    whyJoin,
    role,
    responsibilities,
    doNot,
    qualifications,
    qualities,
    academyProvides,
    flexibleOpportunity,
    recognition,
    attribution,
    process,
    professionalStandards,
    safeguarding,
    privacy,
    closing,
    formIntro,
    thankYou,
  } = advisorContent;
  const [step, setStep] = useState<AdvisorStep>("intro");

  useEffect(() => {
    if (step === "form" || step === "submitted") {
      const timer = window.setTimeout(() => scrollSectionIntoView("advisor-application"), 0);
      return () => window.clearTimeout(timer);
    }
  }, [step]);

  const detailSections = [
    pathway,
    whyJoin,
    role,
    responsibilities,
    doNot,
    qualifications,
    qualities,
    academyProvides,
    flexibleOpportunity,
    recognition,
    attribution,
    process,
    professionalStandards,
    safeguarding,
    privacy,
    closing,
  ];

  const contentsLinks = [
    ...pageContentsLinksFromSections(detailSections),
    { id: "official-communications", label: "Official Communications" },
    { id: "express-interest", label: "Express Your Interest" },
  ];

  return (
    <section
      id="advisor-application"
      className={cn(
        "scroll-mt-24",
        step === "form" ? "bg-muted/30 py-6 md:py-10" : "section-padding"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="mx-auto content-width">
          {step === "intro" && (
            <>
              <h2 className="text-3xl font-bold uppercase md:text-4xl">{intro.title}</h2>
              {intro.paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Have questions about becoming an Admissions Advisor?{" "}
                <AppLink
                  href="/faq/?category=advisors"
                  className="inline-text-link"
                >
                  Review the Admissions Advisor FAQ
                </AppLink>
                .
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ready to apply?{" "}
                <ScrollToLink targetId="express-interest" className="inline-text-link">
                  Express your interest
                </ScrollToLink>
                .
              </p>

              <PageContentsNav links={contentsLinks} />

              <div className="mt-12 space-y-10">
                {detailSections.map((section) => (
                  <ContentSectionBlock
                    key={section.id}
                    section={section}
                    itemsAsOrderedList
                  />
                ))}
                <div id="official-communications" className="scroll-mt-24">
                  <OfficialCommunicationsSection />
                  <BackToContents />
                </div>
              </div>

              <div id="express-interest" className="mt-12 scroll-mt-24">
                <Button
                  type="button"
                  onClick={() => setStep("form")}
                  className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
                >
                  Express Your Interest
                </Button>
                <BackToContents />
              </div>
            </>
          )}

          {step === "form" && (
            <>
              <h2 className="text-2xl font-bold uppercase md:text-3xl">{formIntro.title}</h2>
              {formIntro.paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="mt-8">
                <AdvisorForm onSuccess={() => setStep("submitted")} />
              </div>
            </>
          )}

          {step === "submitted" && (
            <div className="py-12 text-center">
              <CircleCheck
                className="mx-auto size-24 text-brand-green md:size-32"
                strokeWidth={1.5}
                aria-hidden
              />
              <h2 className="mt-8 text-3xl font-bold uppercase md:text-4xl">{thankYou.title}</h2>
              {thankYou.paragraphs.map((p, i) => (
                <p key={i} className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
