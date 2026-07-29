import { PageHero } from "@/components/layout/page-hero";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import { ScrollToLink } from "@/components/ui/scroll-to-link";
import { enquiryContent } from "@/lib/content/pages/enquiry";
import { createMetadata } from "@/lib/content/site";
import type { ContentSection } from "@/types/content";

export const metadata = createMetadata({
  title: enquiryContent.meta.title,
  description: enquiryContent.meta.description,
  path: enquiryContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: enquiryContent.meta.title },
];

const ENQUIRY_FORM_ID = "enquiry-form";

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

export default function EnquiryPage() {
  const { meta, intro, formIntro, office, hours, mapNote, beforeYouContact } = enquiryContent;
  const mapQuery = encodeURIComponent(office.address.join(", "));

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
          <div className="mx-auto content-width">
            <h2 className="text-3xl font-bold uppercase md:text-4xl">{intro.title}</h2>
            {intro.paragraphs?.map((p, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ready to send an enquiry?{" "}
              <ScrollToLink
                targetId={ENQUIRY_FORM_ID}
                className="inline-text-link"
              >
                Complete the enquiry form
              </ScrollToLink>
              .
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl space-y-10">
            <DetailBlock section={beforeYouContact} />
            <OfficialCommunicationsSection />
          </div>
        </div>
      </section>

      <section
        id={ENQUIRY_FORM_ID}
        className="scroll-mt-24 section-padding bg-muted/50"
      >
        <div className="container mx-auto container-padding">
          <div className="mx-auto content-width">
            <h2 className="text-2xl font-bold uppercase md:text-3xl">{formIntro.title}</h2>
            {formIntro.description && (
              <p className="mt-4 text-muted-foreground leading-relaxed">{formIntro.description}</p>
            )}
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mx-auto content-width space-y-10">
            <div>
              <p className="section-subheading">
                {office.title}
              </p>
              <p className="font-medium">{office.company}</p>
              <address className="mt-4 not-italic text-muted-foreground leading-relaxed">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4">
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="text-brand-green hover:underline"
                >
                  {office.phone}
                </a>
              </p>
              <p className="mt-2">
                <a href={`mailto:${office.email}`} className="text-brand-green hover:underline">
                  {office.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Privacy:{" "}
                <a href={`mailto:${office.privacyEmail}`} className="text-brand-green hover:underline">
                  {office.privacyEmail}
                </a>
              </p>
            </div>

            <div>
              <p className="section-subheading">
                {hours.title}
              </p>
              <ul className="mt-4 space-y-2">
                {[hours.weekdays, hours.saturday, hours.sunday].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <p className="section-subheading text-center">
              Find Us
            </p>
            <div className="aspect-video overflow-hidden border border-border bg-muted">
              <iframe
                title="SpherEarth corporate office location"
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">{mapNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
