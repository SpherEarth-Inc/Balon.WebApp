import type { SearchEntry } from "@/types/content";
import { landingContent } from "./landing";
import { programsContent } from "./programs";
import { admissionsContent } from "./admissions";
import { applyContent } from "./apply";
import { parentsContent } from "./parents";
import { scholarshipsContent } from "./scholarships";
import { overviewPartnersSponsorsContent } from "./overview-partners-sponsors";
import { sponsorshipContent } from "./sponsorship";
import { partnershipsContent } from "./partnerships";
import { locationsContent } from "./locations";
import { consultationContent } from "./consultation";
import { trustSafetyContent } from "./trust-safety";
import { successStoriesContent } from "./success-stories";
import { newsContent } from "./news";
import { enquiryContent } from "./enquiry";
import { careersContent } from "./careers";
import { advisorContent } from "./advisor";
import { legalPages } from "./legal";

export const searchEntries: SearchEntry[] = [
  {
    title: landingContent.meta.title === "Home" ? "Football Academy" : landingContent.meta.title,
    href: landingContent.meta.path,
    excerpt: landingContent.meta.description,
    keywords: [
      "home",
      "landing",
      "football academy",
      "toronto",
      "youth football",
      "apply",
      "consultation",
      "prospectus",
    ],
  },
  {
    title: programsContent.meta.title,
    href: programsContent.meta.path,
    excerpt: programsContent.meta.description,
    keywords: [
      "programs",
      "founding",
      "premier",
      "signature",
      "training",
      "age groups",
      "fees",
      "investment",
    ],
  },
  {
    title: admissionsContent.meta.title,
    href: admissionsContent.meta.path,
    excerpt: admissionsContent.meta.description,
    keywords: [
      "admissions",
      "apply",
      "selection",
      "assessment",
      "enrollment",
      "tuition",
      "documents",
      "international",
    ],
  },
  {
    title: applyContent.meta.title,
    href: applyContent.meta.path,
    excerpt: applyContent.meta.description,
    keywords: ["apply", "application", "form", "admissions journey", "register"],
  },
  {
    title: parentsContent.meta.title,
    href: parentsContent.meta.path,
    excerpt: parentsContent.meta.description,
    keywords: [
      "parents",
      "families",
      "communication",
      "safety",
      "attendance",
      "nutrition",
      "academic",
      "match days",
      "payments",
    ],
  },
  {
    title: scholarshipsContent.meta.title,
    href: scholarshipsContent.meta.path,
    excerpt: scholarshipsContent.meta.description,
    keywords: [
      "scholarships",
      "financial aid",
      "merit",
      "needs-based",
      "sponsor-funded",
      "eligibility",
    ],
  },
  {
    title: overviewPartnersSponsorsContent.meta.title,
    href: overviewPartnersSponsorsContent.meta.path,
    excerpt: overviewPartnersSponsorsContent.meta.description,
    keywords: [
      "partnership",
      "sponsorship",
      "overview",
      "partners",
      "sponsors",
      "community impact",
    ],
  },
  {
    title: sponsorshipContent.meta.title,
    href: sponsorshipContent.meta.path,
    excerpt: sponsorshipContent.meta.description,
    keywords: [
      "sponsors",
      "sponsorship",
      "corporate",
      "community impact",
      "CSR",
      "naming rights",
      "player sponsorship",
    ],
  },
  {
    title: partnershipsContent.meta.title,
    href: partnershipsContent.meta.path,
    excerpt: partnershipsContent.meta.description,
    keywords: [
      "partnerships",
      "schools",
      "clubs",
      "municipalities",
      "healthcare",
      "technology",
      "international",
      "strategic",
    ],
  },
  {
    title: locationsContent.meta.title,
    href: locationsContent.meta.path,
    excerpt: locationsContent.meta.description,
    keywords: [
      "locations",
      "GTA",
      "toronto",
      "training",
      "zones",
      "mississauga",
      "vaughan",
      "markham",
      "scarborough",
    ],
  },
  {
    title: consultationContent.meta.title,
    href: consultationContent.meta.path,
    excerpt: consultationContent.meta.description,
    keywords: [
      "consultation",
      "parent call",
      "calendly",
      "book",
      "information call",
      "meeting",
    ],
  },
  {
    title: "Trust & Safety",
    href: trustSafetyContent.meta.path,
    excerpt: trustSafetyContent.meta.description,
    keywords: [
      "trust",
      "safety",
      "fraud",
      "verify",
      "representative",
      "communications",
      "payment security",
      "reporting",
      "safeguarding",
    ],
  },
  {
    title: successStoriesContent.meta.title,
    href: successStoriesContent.meta.path,
    excerpt: successStoriesContent.meta.description,
    keywords: ["success stories", "testimonials", "player journeys", "achievements"],
  },
  {
    title: newsContent.meta.title,
    href: newsContent.meta.path,
    excerpt: newsContent.meta.description,
    keywords: ["news", "insights", "announcements", "updates", "articles"],
  },
  {
    title: enquiryContent.meta.title,
    href: enquiryContent.meta.path,
    excerpt: enquiryContent.meta.description,
    keywords: [
      "enquiry",
      "contact",
      "help",
      "office",
      "hours",
      "whatsapp",
      "map",
      "departments",
    ],
  },
  {
    title: careersContent.meta.title,
    href: careersContent.meta.path,
    excerpt: careersContent.meta.description,
    keywords: [
      "careers",
      "jobs",
      "coaches",
      "operations",
      "volunteers",
      "internships",
      "hiring",
    ],
  },
  {
    title: careersContent.rolesMeta.title,
    href: careersContent.rolesMeta.path,
    excerpt: careersContent.rolesMeta.description,
    keywords: [
      "roles",
      "coaches",
      "operations",
      "admissions advisor",
      "internships",
      "corporate",
      "volunteers",
    ],
  },
  {
    title: advisorContent.meta.title,
    href: advisorContent.meta.path,
    excerpt: advisorContent.meta.description,
    keywords: [
      "admissions advisor",
      "founding admissions advisor",
      "founding advisor",
      "representative",
      "recruitment",
      "commission",
      "become advisor",
      "referral",
    ],
  },
  {
    title: legalPages.privacy.meta.title,
    href: legalPages.privacy.meta.path,
    excerpt: legalPages.privacy.meta.description,
    keywords: ["privacy", "data", "personal information", "GDPR", "PIPEDA"],
  },
  {
    title: legalPages.terms.meta.title,
    href: legalPages.terms.meta.path,
    excerpt: legalPages.terms.meta.description,
    keywords: ["terms", "conditions", "legal", "agreement", "website use"],
  },
  {
    title: legalPages.safeguarding.meta.title,
    href: legalPages.safeguarding.meta.path,
    excerpt: legalPages.safeguarding.meta.description,
    keywords: ["safeguarding", "child protection", "welfare", "safety policy"],
  },
  {
    title: legalPages.accessibility.meta.title,
    href: legalPages.accessibility.meta.path,
    excerpt: legalPages.accessibility.meta.description,
    keywords: ["accessibility", "AODA", "WCAG", "disabilities", "inclusive"],
  },
];
