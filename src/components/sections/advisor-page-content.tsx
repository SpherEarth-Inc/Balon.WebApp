"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";
import { AppLink } from "@/components/ui/app-link";
import { AdvisorForm } from "@/components/forms/advisor-form";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import { Button } from "@/components/ui/button";
import { advisorContent } from "@/lib/content/pages/advisor";
import type { ContentSection } from "@/types/content";
import { cn } from "@/lib/utils";

type AdvisorStep = "intro" | "form" | "submitted";

function DetailBlock({ section }: { section: ContentSection }) {
  const subheading = section.subtitle ?? section.title;

  return (
    <div>
      {subheading && (
        <p className="section-subheading">
          {subheading}
        </p>
      )}
      {section.description && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{section.description}</p>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
      {section.items && (
        <ol className="mt-4 space-y-4">
          {section.items.map((item) => (
            <li key={item.title}>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>
      )}
      {section.bullets && (
        <ul className="mt-4 space-y-2">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.trailingParagraphs?.map((p, i) => (
        <p key={`trail-${i}`} className="mt-4 text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

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

  return (
    <section
      id="advisor-application"
      className={cn(
        "scroll-mt-24",
        step === "form" ? "bg-muted/30 py-6 md:py-10" : "section-padding"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="mx-auto max-w-3xl">
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
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="inline-text-link"
                >
                  Express your interest
                </button>
                .
              </p>

              <div className="mt-12 space-y-10">
                {detailSections.map((section) => (
                  <DetailBlock key={section.id} section={section} />
                ))}
                <OfficialCommunicationsSection />
              </div>

              <div className="mt-12">
                <Button
                  type="button"
                  onClick={() => setStep("form")}
                  className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
                >
                  Express Your Interest
                </Button>
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
