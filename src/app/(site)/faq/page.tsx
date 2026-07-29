import { Suspense } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { FaqCategories } from "@/components/sections/faq-categories";
import { faqContent } from "@/lib/content/pages/faq";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: faqContent.meta.title,
  description: faqContent.meta.description,
  path: faqContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "FAQ" },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description={faqContent.meta.description}
        breadcrumb={breadcrumb}
        image={faqContent.meta.heroImage}
      />

      <Suspense
        fallback={
          <section className="section-padding">
            <div className="container mx-auto container-padding">
              <div className="mx-auto content-width text-muted-foreground">Loading FAQs...</div>
            </div>
          </section>
        }
      >
        <FaqCategories categories={faqContent.categories} />
      </Suspense>
    </>
  );
}
