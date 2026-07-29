import { PageHero } from "@/components/layout/page-hero";
import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { legalPages } from "@/lib/content/pages/legal";
import { createMetadata } from "@/lib/content/site";

const page = legalPages.terms;

export const metadata = createMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: page.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: page.meta.title },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title={page.meta.title}
        description={page.meta.description}
        breadcrumb={breadcrumb}
        image={page.meta.heroImage}
      />
      <LegalPageLayout page={page} />
    </>
  );
}
