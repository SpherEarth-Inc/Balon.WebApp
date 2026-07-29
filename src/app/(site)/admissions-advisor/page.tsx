import { PageHero } from "@/components/layout/page-hero";
import { AdvisorPageContent } from "@/components/sections/advisor-page-content";
import { advisorContent } from "@/lib/content/pages/advisor";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: advisorContent.meta.title,
  description: advisorContent.meta.description,
  path: advisorContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: advisorContent.meta.title },
];

export default function AdmissionsAdvisorPage() {
  const { meta } = advisorContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
        imageClassName="object-top"
      />
      <AdvisorPageContent />
    </>
  );
}
