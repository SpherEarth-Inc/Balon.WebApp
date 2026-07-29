import type { LegalPage } from "@/lib/content/pages/legal";
import { ContentBlock } from "@/components/sections/content-block";

interface LegalPageLayoutProps {
  page: LegalPage;
}

export function LegalPageLayout({ page }: LegalPageLayoutProps) {
  return (
    <div className="container mx-auto container-padding section-padding">
      <p className="mb-8 text-sm text-muted-foreground">Last updated: {page.lastUpdated}</p>
      <div className="mx-auto content-width space-y-16">
        {page.sections.map((section) => (
          <ContentBlock key={section.id} section={section} className="!py-0" />
        ))}
      </div>
    </div>
  );
}
