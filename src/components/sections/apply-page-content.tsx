"use client";

import { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";
import { ApplyForm } from "@/components/forms/apply-form";
import { Button } from "@/components/ui/button";
import { scrollSectionIntoView } from "@/components/ui/scroll-to-link";
import { applyContent } from "@/lib/content/pages/apply";
import { cn } from "@/lib/utils";

type ApplyStep = "intro" | "form" | "submitted";

export function ApplyPageContent() {
  const { intro, beforeYouBegin, thankYou } = applyContent;
  const [step, setStep] = useState<ApplyStep>("intro");

  useEffect(() => {
    if (step === "form" || step === "submitted") {
      const timer = window.setTimeout(() => scrollSectionIntoView("admissions-apply"), 0);
      return () => window.clearTimeout(timer);
    }
  }, [step]);

  return (
    <section
      id="admissions-apply"
      className={cn(
        "scroll-mt-24",
        step === "form" ? "bg-muted/30 py-6 md:py-10" : "section-padding"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="mx-auto max-w-3xl">
          {step === "intro" && (
            <>
              <h2 className="text-3xl font-bold uppercase md:text-4xl">
                {intro.title}
              </h2>
              {intro.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}

              <p className="section-subheading mt-10">
                {beforeYouBegin.title}
              </p>
              <ul className="mt-4 space-y-2">
                {beforeYouBegin.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                {beforeYouBegin.estimatedTime}
              </p>

              <div className="mt-12">
                <Button
                  type="button"
                  onClick={() => setStep("form")}
                  className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
                >
                  Begin
                </Button>
              </div>
            </>
          )}

          {step === "form" && (
            <ApplyForm onSuccess={() => setStep("submitted")} />
          )}

          {step === "submitted" && (
            <div className="py-12 text-center">
              <CircleCheck
                className="mx-auto size-24 text-brand-green md:size-32"
                strokeWidth={1.5}
                aria-hidden
              />
              <h2 className="mt-8 text-3xl font-bold uppercase md:text-4xl">
                Application Submitted
              </h2>
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
