import { CardWall, type CardWallItem } from "@/components/sections/card-wall";
import { ContentBlock } from "@/components/sections/content-block";
import { HeroCarousel, type HeroSlide } from "@/components/sections/hero-carousel";
import { HomeLatestNews } from "@/components/news/home-latest-news";
import { SectionHeader } from "@/components/sections/section-header";
import { images } from "@/lib/content/assets";
import { landingContent } from "@/lib/content/pages/landing";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: landingContent.meta.title,
  description: landingContent.meta.description,
  path: landingContent.meta.path,
});

const heroSlides: HeroSlide[] = [
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
  {
    tag: "Programs",
    headline: "A Pathway For Every Player",
    description:
      "Founding, Premier and Signature programs built around elite coaching and long-term player development.",
    video: "/images/home-hero/programs.mp4",
    image: images.homepageHero,
    ctas: [{ label: "View Programs", href: "/programs/" }],
  },
  {
    tag: "Sponsorship",
    headline: "Invest In The Next Generation",
    description:
      "Partner with us to help talented young athletes access life-changing opportunities.",
    video: "/images/home-hero/sponsor.mp4",
    ctas: [{ label: "Become a Sponsor", href: "/relations/sponsorship/" }],
  },
  {
    tag: "Partnerships",
    headline: "Build The Future With Us",
    description:
      "Strategic partnerships that connect players to global development opportunities.",
    video: "/images/home-hero/partner.mp4",
    ctas: [{ label: "Partner With Us", href: "/relations/partnerships/" }],
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
      <HeroCarousel slides={heroSlides} />

      <HomeLatestNews />

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
