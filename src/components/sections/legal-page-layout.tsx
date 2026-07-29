import type { LegalPage } from "@/lib/content/pages/legal";
import { ContentSectionBlock } from "@/components/sections/content-section-block";
import {
  PageContentsNav,
  pageContentsLinksFromSections,
} from "@/components/sections/page-contents";

interface LegalPageLayoutProps {
  page: LegalPage;
}

export function LegalPageLayout({ page }: LegalPageLayoutProps) {
  const [intro, ...details] = page.sections;
  const contentsLinks = pageContentsLinksFromSections(details);

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="mx-auto content-width">
          {intro ? (
            <>
              <h2 className="text-3xl font-bold uppercase md:text-4xl">
                {intro.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: {page.lastUpdated}
              </p>
              {intro.description && (
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {intro.description}
                </p>
              )}
              {intro.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="mt-4 text-muted-foreground leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {intro.bullets && (
                <ul className="mt-6 space-y-2">
                  {intro.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : null}

          <PageContentsNav links={contentsLinks} />
        </div>

        {details.length > 0 ? (
          <div className="mx-auto mt-12 max-w-5xl space-y-10">
            {details.map((section) => (
              <ContentSectionBlock key={section.id} section={section} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
