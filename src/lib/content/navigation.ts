import type { NavItem } from "@/types/content";

// Login lives in the separate Next.js server app (balon.spherearth.ca), not this
// static site. Configurable via env so the exact host is easy to change.
const appLoginUrl =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL?.trim() || "https://balon.spherearth.ca";

export const headerActions = {
  login: { label: "Log In", href: appLoginUrl },
  apply: { label: "Apply Now", href: "/admissions/apply/" },
} as const;

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    href: "/programs/",
    children: [
      { label: "Overview", href: "/programs/" },
      { label: "Choose Program", href: "/programs/choose-program/" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions/",
    children: [
      { label: "Admissions Overview", href: "/admissions/" },
      { label: "Apply Now", href: "/admissions/apply/" },
      { label: "Scholarships", href: "/scholarships/" },
    ],
  },
  {
    label: "Parents & Families",
    href: "/parents-and-families/",
    children: [
      { label: "Overview", href: "/parents-and-families/" },
      { label: "Book a Parent Consultation", href: "/parents-and-families/consultation/" },
    ],
  },
  {
    label: "Partners & Sponsors",
    href: "/relations/",
    children: [
      { label: "Overview", href: "/relations/" },
      { label: "Sponsorship", href: "/relations/sponsorship/" },
      { label: "Strategic Partnerships", href: "/relations/partnerships/" },
      { label: "Founding Admissions Advisors", href: "/admissions-advisor/" },
    ],
  },
  { label: "FAQ", href: "/faq/" },
  {
    label: "More",
    href: "/locations/",
    menuOnly: true,
    children: [
      { label: "About", href: "/about/" },
      { label: "News", href: "/news/" },
      { label: "Locations", href: "/locations/" },
      { label: "Success Stories", href: "/success-stories/" },
      { label: "Trust & Safety", href: "/trust-and-safety/" },
      { label: "Enquiry Centre", href: "/enquiry/" },
      { label: "Careers", href: "/careers/" },
    ],
  },
];

export const utilityNavigation: NavItem[] = [
  { label: headerActions.apply.label, href: headerActions.apply.href },
  { label: "Book Parent Consultation", href: "/parents-and-families/consultation/" },
  { label: headerActions.login.label, href: headerActions.login.href },
];

export const footerNavigation = {
  academy: [
    { label: "Programs", href: "/programs/" },
    { label: "Admissions", href: "/admissions/" },
    { label: "Apply Now", href: "/admissions/apply/" },
    { label: "Parents & Families", href: "/parents-and-families/" },
    { label: "Scholarships", href: "/scholarships/" },
    { label: "Locations", href: "/locations/" },
  ],
  partners: [
    { label: "Sponsorship", href: "/relations/sponsorship/" },
    { label: "Partnerships", href: "/relations/partnerships/" },
    { label: "Founding Admissions Advisors", href: "/admissions-advisor/" },
    { label: "Careers", href: "/careers/" },
  ],
  trust: [
    { label: "Trust & Safety", href: "/trust-and-safety/" },
    { label: "Success Stories", href: "/success-stories/" },
    { label: "News & Insights", href: "/news/" },
    { label: "Enquiry Centre", href: "/enquiry/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms & Conditions", href: "/terms/" },
    { label: "Safeguarding", href: "/safeguarding/" },
    { label: "Accessibility", href: "/accessibility/" },
  ],
  corporate: [
    { label: "SpherEarth Inc.", href: "https://www.spherearth.ca" },
    { label: "Book Consultation", href: "/parents-and-families/consultation/" },
  ],
};

export const enquiryDepartments = [
  "Admissions",
  "Scholarships",
  "Sponsorship",
  "Strategic Partnerships",
  "Media & Communications",
  "General Enquiries",
] as const;

export const trainingLocations = [
  "Toronto Core",
  "North York",
  "Scarborough",
  "Vaughan",
  "Markham",
  "Mississauga",
  "Brampton",
  "Hamilton",
  "Niagara",
  "Barrie",
  "Newmarket",
  "Other",
] as const;

export const gtaCommunities = [
  "Toronto", "North York", "Etobicoke", "Scarborough", "Vaughan", "Richmond Hill",
  "Markham", "Mississauga", "Brampton", "Pickering", "Ajax", "Whitby",
  "Oakville", "Burlington", "Aurora", "Newmarket", "Milton",
] as const;
