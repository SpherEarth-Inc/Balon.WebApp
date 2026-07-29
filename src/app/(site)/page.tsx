import { CardWall, type CardWallItem } from "@/components/sections/card-wall";
import { ContentBlock } from "@/components/sections/content-block";
import type { HeroSlide } from "@/components/sections/hero-carousel";
import { HomeHero } from "@/components/news/home-hero";
import { SectionHeader } from "@/components/sections/section-header";
import { landingContent } from "@/lib/content/pages/landing";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: landingContent.meta.title,
  description: landingContent.meta.description,
  path: landingContent.meta.path,
});

/** Opening brand slide only — latest news appends as following hero slides. */
const brandSlides: HeroSlide[] = [
  {
    tag: "",
    headline: landingContent.hero.headline,
    description:
      "Premium youth football development — built in Toronto, designed for the world.",
    video: "/images/home-hero/index.mp4",
    ctas: [
      { label: "Explore", href: "#explore" },
      { label: "Apply Now", href: "/admissions/apply/" },
    ],
  },
];

const exploreCards: CardWallItem[] = [
  {
    tag: "Programs",
    title: "A pathway for every stage of development",
    description:
      "Founding, Premier and Signature programs built around elite coaching and long-term player growth.",
    href: "/programs/",
    image: "/images/explore/programs.webp",
    featured: true,
  },
  {
    tag: "Admissions",
    title: "How to join the academy",
    href: "/admissions/",
    image: "/images/explore/academy.webp",
  },
  {
    tag: "Scholarships",
    title: "Opportunity for every talent",
    href: "/scholarships/",
    image: "/images/explore/scholarships.webp",
  },
  {
    tag: "Families",
    title: "Our promise to parents & families",
    href: "/parents-and-families/",
    image: "/images/explore/family.webp",
  },
  {
    tag: "Partnerships",
    title: "Invest in the next generation",
    href: "/relations/",
    image: "/images/explore/partnerships.webp",
  },
  {
    tag: "News",
    title: "Latest from the academy",
    href: "/news/",
    image: "/images/explore/news.webp",
  },
];

export default function LandingPage() {
  return (
    <>
      <HomeHero brandSlides={brandSlides} />

      <section id="explore" className="scroll-mt-24 section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader
            title="Explore The Academy"
            subtitle="Everything you need to know about SpherEarth Football Academy"
            className="mb-8"
          />
          <CardWall items={exploreCards} />
        </div>
      </section>

      <ContentBlock section={landingContent.globalVision} imageRight imageClassName="object-contain" />
    </>
  );
}
