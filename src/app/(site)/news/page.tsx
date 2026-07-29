import { PageHero } from "@/components/layout/page-hero";
import { NewsListSection } from "@/components/news/news-list-section";
import { newsContent } from "@/lib/content/pages/news";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: newsContent.meta.title,
  description: newsContent.meta.description,
  path: newsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: newsContent.meta.title },
];

export default function NewsPage() {
  const { meta } = newsContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <NewsListSection />
    </>
  );
}
