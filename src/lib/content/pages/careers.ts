import { images } from "../assets";
import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export const careerFormRoles = [
  "Admissions Advisor",
  "Coach",
  "Operations",
  "Volunteer",
  "Internship",
  "Corporate Role",
] as const;

export type CareerFormRole = (typeof careerFormRoles)[number];

function createRoleApplyCta(role: CareerFormRole): CtaLink {
  return {
    label: "Apply",
    href: `/careers/?role=${encodeURIComponent(role)}`,
    variant: "outline",
  };
}

export interface RoleCategory {
  id: string;
  title: string;
  description: string;
  image?: string;
  cta: CtaLink;
}

export interface CareersContent {
  meta: PageMeta;
  rolesMeta: PageMeta;
  intro: ContentSection;
  roleCategories: RoleCategory[];
  whyJoin: ContentSection;
  applicationNote: ContentSection;
  finalCta: {
    title: string;
    description: string;
    cta: CtaLink;
  };
}

export const careersContent: CareersContent = {
  meta: {
    title: "Careers",
    description:
      "Join SpherEarth Football Academy. Explore career opportunities in coaching, admissions, operations, and more.",
    path: "/careers/",
    heroImage: images.careersHero,
  },
  rolesMeta: {
    title: "Explore Roles",
    description:
      "Discover the career paths available at SpherEarth Football Academy, from coaching and operations to admissions, internships, and corporate roles.",
    path: "/careers/roles/",
    heroImage: images.rolesHero,
  },
  intro: {
    title: "Careers",
    paragraphs: [
      "SpherEarth Football Academy is building a team of passionate professionals committed to developing talented young athletes and creating meaningful opportunities for families and communities.",
      "As we prepare for launch and grow responsibly across the Greater Toronto Area, we welcome individuals who share our values of integrity, excellence, and long-term impact.",
    ],
  },
  roleCategories: [
    {
      id: "admissions-advisors",
      title: "Admissions Advisors",
      description:
        "Join our Founding Admissions Advisor Network as a trusted representative who identifies prospective players and families, guides families through the admissions process, and helps build the academy's founding community.",
      image: "/images/roles/admission-advisor.webp",
      cta: { label: "Express Your Interest", href: "/admissions-advisor/" },
    },
    {
      id: "coaches",
      title: "Coaches",
      description:
        "Qualified coaching professionals who deliver structured technical and tactical development, mentorship, and positive player experiences within a professional academy environment.",
      image: "/images/roles/coaches.webp",
      cta: createRoleApplyCta("Coach"),
    },
    {
      id: "operations",
      title: "Operations",
      description:
        "Team members who support academy administration, programme coordination, communications, and the day-to-day delivery of a premium academy experience.",
      image: "/images/roles/operations.webp",
      cta: createRoleApplyCta("Operations"),
    },
    {
      id: "volunteers",
      title: "Volunteers",
      description:
        "Community-minded individuals who contribute time and expertise to support academy events, outreach initiatives, and player development activities.",
      image: "/images/roles/volunteers.webp",
      cta: createRoleApplyCta("Volunteer"),
    },
    {
      id: "internships",
      title: "Internships",
      description:
        "Learning opportunities for students and early-career professionals interested in sport management, coaching, marketing, operations, and youth development.",
      image: "/images/roles/internships.webp",
      cta: createRoleApplyCta("Internship"),
    },
    {
      id: "corporate",
      title: "Corporate Roles",
      description:
        "Professional roles within SpherEarth Inc. supporting the academy and broader corporate operations, including finance, legal, marketing, and strategic development.",
      image: "/images/roles/corporate.webp",
      cta: createRoleApplyCta("Corporate Role"),
    },
  ],
  whyJoin: {
    id: "why-join",
    title: "Why Join SpherEarth Football Academy?",
    subtitle: "Why Join SpherEarth Football Academy?",
    description: "Working with the academy means contributing to something meaningful:",
    bullets: [
      "Developing the next generation of athletes and leaders",
      "Building a premium youth football academy in Toronto",
      "Working within a professionally governed organization",
      "Creating lasting community impact",
      "Growing alongside a responsible, long-term vision",
    ],
  },
  applicationNote: {
    id: "application",
    title: "How to Apply",
    subtitle: "How to Apply",
    paragraphs: [
      "Current openings will be posted as the academy prepares for launch and expands operations.",
      "Interested candidates are invited to submit an enquiry through the Enquiry Centre or contact us directly to express interest in future opportunities.",
      "For Admissions Advisor opportunities, please visit the dedicated Founding Admissions Advisor Network page.",
    ],
    cta: { label: "Join the Founding Advisor Network", href: "/admissions-advisor/" },
  },
  finalCta: {
    title: "Interested in Joining Our Team?",
    description:
      "We welcome enquiries from passionate professionals who believe in the power of sport to develop young people. Contact us to learn about current and upcoming opportunities.",
    cta: { label: "Contact Us", href: "/enquiry/?department=General%20Enquiries" },
  },
};
