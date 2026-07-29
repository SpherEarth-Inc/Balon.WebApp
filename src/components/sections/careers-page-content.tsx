"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { CareersForm } from "@/components/forms/careers-form";
import { FootballLoader } from "@/components/ui/football-loader";
import { scrollSectionIntoView } from "@/components/ui/scroll-to-link";
import { careersContent } from "@/lib/content/pages/careers";
import type { ContentSection } from "@/types/content";
import { cn } from "@/lib/utils";

type CareersStep = "intro" | "form";

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
    </div>
  );
}

export function CareersPageContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const [step, setStep] = useState<CareersStep>(() => (roleParam ? "form" : "intro"));

  useEffect(() => {
    if (roleParam) {
      setStep("form");
    }
  }, [roleParam]);

  useEffect(() => {
    if (step === "form") {
      const timer = window.setTimeout(() => scrollSectionIntoView("careers-application"), 0);
      return () => window.clearTimeout(timer);
    }
  }, [step]);

  const { intro, whyJoin, applicationNote } = careersContent;

  if (step === "form") {
    return (
      <section id="careers-application" className="scroll-mt-24 bg-muted/30 py-6 md:py-10">
        <div className="container mx-auto container-padding">
          <div className="mx-auto content-width">
            <Suspense fallback={<FootballLoader className="py-4" label="Loading form" />}>
              <CareersForm />
            </Suspense>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="careers-intro" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="mx-auto content-width">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">{intro.title}</h2>
          {intro.paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Interested in exploring available roles?{" "}
            <AppLink
              href="/careers/roles/"
              className="inline-text-link"
            >
              Explore roles
            </AppLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ready to submit an application?{" "}
            <button
              type="button"
              onClick={() => setStep("form")}
              className={cn(
                "inline-text-link",
                "bg-transparent p-0 underline-offset-4 hover:underline"
              )}
            >
              Submit application
            </button>
            .
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-10">
          <DetailBlock section={whyJoin} />
          <DetailBlock section={applicationNote} />
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mt-8">
            <Button
              type="button"
              onClick={() => setStep("form")}
              className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
            >
              Send Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
