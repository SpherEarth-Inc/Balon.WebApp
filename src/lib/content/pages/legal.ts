import { images } from "../assets";
import type { ContentSection, PageMeta } from "@/types/content";

export interface LegalPage {
  meta: PageMeta;
  lastUpdated: string;
  sections: ContentSection[];
}

export interface LegalPages {
  privacy: LegalPage;
  terms: LegalPage;
  safeguarding: LegalPage;
  accessibility: LegalPage;
}

export const legalPages: LegalPages = {
  privacy: {
    meta: {
      title: "Privacy Policy",
      description:
        "SpherEarth Football Academy Privacy Policy. How we collect, use, store, and protect personal information.",
      path: "/privacy/",
      heroImage: images.trustSafetyHero,
    },
    lastUpdated: "2026",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "SpherEarth Football Academy is a business of SpherEarth Inc. | SphèreTerre Inc. (\"SpherEarth\", \"we\", \"us\", or \"our\").",
          "This Privacy Policy explains how we collect, use, disclose, store, and protect personal information in connection with our academy website, admissions processes, communications, and related services.",
          "By using our website or submitting information to us, you acknowledge that you have read and understood this Privacy Policy.",
        ],
      },
      {
        id: "information-collected",
        title: "Information We Collect",
        description: "We may collect personal information including, but not limited to:",
        bullets: [
          "Parent or guardian contact details",
          "Player information provided during admissions",
          "Communication preferences",
          "Enquiry and application form submissions",
          "Website usage data and cookies where applicable",
          "Payment and enrollment information where applicable",
        ],
      },
      {
        id: "use-of-information",
        title: "How We Use Information",
        bullets: [
          "Processing admissions applications and enquiries",
          "Communicating with families and applicants",
          "Delivering academy programmes and services",
          "Maintaining safety, safeguarding, and security",
          "Complying with legal and regulatory obligations",
          "Improving our website and services",
        ],
      },
      {
        id: "sharing",
        title: "Information Sharing",
        paragraphs: [
          "We do not sell personal information. We may share information with authorized academy personnel, service providers, and partners where necessary to deliver our services, subject to appropriate safeguards.",
          "We may disclose information where required by law or to protect the rights, safety, and security of our community.",
        ],
      },
      {
        id: "security",
        title: "Data Security",
        paragraphs: [
          "We implement reasonable administrative, technical, and organizational measures designed to protect personal information against unauthorized access, loss, or misuse.",
          "No method of transmission over the internet is completely secure. We encourage families to use official academy channels when sharing sensitive information.",
        ],
      },
      {
        id: "rights",
        title: "Your Rights",
        paragraphs: [
          "Subject to applicable law, you may have rights to access, correct, or request deletion of your personal information, or to withdraw consent where processing is based on consent.",
          "Privacy enquiries may be directed to privacy@spherearth.ca.",
        ],
      },
      {
        id: "contact",
        title: "Contact Us",
        paragraphs: [
          "For privacy-related questions or requests, please contact:",
          "SpherEarth Inc. | SphèreTerre Inc.",
          "Email: privacy@spherearth.ca",
          "Address: First Canadian Place, 100 King Street West, Suite 5600, Toronto, Ontario M5X 1C9, Canada",
        ],
      },
    ],
  },
  terms: {
    meta: {
      title: "Terms & Conditions",
      description:
        "Terms and conditions governing use of the SpherEarth Football Academy website and services.",
      path: "/terms/",
      heroImage: images.faqHero,
    },
    lastUpdated: "2026",
    sections: [
      {
        id: "acceptance",
        title: "Acceptance of Terms",
        paragraphs: [
          "These Terms & Conditions (\"Terms\") govern your access to and use of the SpherEarth Football Academy website and related services operated by SpherEarth Inc. | SphèreTerre Inc.",
          "By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.",
        ],
      },
      {
        id: "services",
        title: "Academy Services",
        paragraphs: [
          "Information on this website is provided for general informational purposes. Programme details, fees, schedules, and availability are subject to change and may be confirmed during the admissions process.",
          "Submitting an application or enquiry does not constitute a contract for services or guarantee admission to the academy.",
        ],
      },
      {
        id: "user-conduct",
        title: "User Conduct",
        description: "You agree not to:",
        bullets: [
          "Use the website for unlawful purposes",
          "Submit false or misleading information",
          "Attempt to gain unauthorized access to our systems",
          "Interfere with the proper functioning of the website",
          "Misrepresent affiliation with SpherEarth Football Academy",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        paragraphs: [
          "All content on this website, including text, images, logos, and training methodologies, is owned by or licensed to SpherEarth Inc. and is protected by applicable intellectual property laws.",
          "You may not reproduce, distribute, or use academy content without prior written permission.",
        ],
      },
      {
        id: "limitation",
        title: "Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by law, SpherEarth Inc. shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or academy services.",
          "Nothing in these Terms excludes or limits liability that cannot be excluded under applicable law.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.",
          "Any disputes shall be subject to the exclusive jurisdiction of the courts of Ontario.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "For questions regarding these Terms, please contact info@spherearth.ca.",
        ],
      },
    ],
  },
  safeguarding: {
    meta: {
      title: "Safeguarding & Child Protection",
      description:
        "SpherEarth Football Academy safeguarding and child protection commitment. Protecting the well-being of every athlete.",
      path: "/safeguarding/",
      heroImage: images.trustSafetyHero,
    },
    lastUpdated: "2026",
    sections: [
      {
        id: "commitment",
        title: "Our Safeguarding Commitment",
        paragraphs: [
          "SpherEarth Football Academy is committed to promoting safeguarding practices that support the physical, emotional, and psychological well-being of every athlete.",
          "Creating a safe, respectful, and positive learning environment is one of our highest priorities.",
          "We strive to foster an environment built on respect, inclusion, accountability, and responsible supervision.",
        ],
      },
      {
        id: "principles",
        title: "Safeguarding Principles",
        bullets: [
          "The welfare of the child is paramount",
          "All participants deserve respect, dignity, and fair treatment",
          "Academy personnel act with integrity and professionalism",
          "Concerns are taken seriously and addressed promptly",
          "Policies and procedures are reviewed and improved continuously",
        ],
      },
      {
        id: "policies",
        title: "Policies and Procedures",
        paragraphs: [
          "Detailed safeguarding policies and procedures are provided to enrolled families and academy personnel.",
          "These include guidance on supervision, communication, reporting concerns, and appropriate conduct.",
          "All authorized personnel are expected to comply with academy safeguarding standards.",
        ],
      },
      {
        id: "reporting",
        title: "Reporting Concerns",
        paragraphs: [
          "Families, players, and staff are encouraged to report any safeguarding concerns promptly through official academy channels.",
          "Reports will be handled professionally, confidentially, and in accordance with applicable policies and legal obligations.",
          "If you believe a child is in immediate danger, contact local emergency services.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "For safeguarding enquiries, please contact the academy through the Enquiry Centre or email info@spherearth.ca.",
        ],
      },
    ],
  },
  accessibility: {
    meta: {
      title: "Accessibility",
      description:
        "SpherEarth Football Academy accessibility statement. Our commitment to accessible digital experiences under AODA.",
      path: "/accessibility/",
      heroImage: images.enquiryHero,
    },
    lastUpdated: "2026",
    sections: [
      {
        id: "commitment",
        title: "Accessibility Commitment",
        paragraphs: [
          "SpherEarth Football Academy is committed to providing a website and digital experience that is accessible to the widest possible audience, including persons with disabilities.",
          "We strive to conform with the Accessibility for Ontarians with Disabilities Act (AODA) and applicable Web Content Accessibility Guidelines (WCAG) where reasonably practicable.",
        ],
      },
      {
        id: "measures",
        title: "Measures We Take",
        bullets: [
          "Designing pages with clear structure and readable content",
          "Providing alternative text for meaningful images where applicable",
          "Ensuring sufficient colour contrast and responsive layouts",
          "Supporting keyboard navigation where practicable",
          "Reviewing accessibility on an ongoing basis",
        ],
      },
      {
        id: "feedback",
        title: "Feedback and Assistance",
        paragraphs: [
          "We welcome feedback on the accessibility of our website. If you encounter barriers or require information in an alternative format, please contact us.",
          "We will make reasonable efforts to respond and address accessibility concerns promptly.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "Accessibility enquiries: info@spherearth.ca",
          "SpherEarth Inc. | SphèreTerre Inc.",
          "First Canadian Place, 100 King Street West, Suite 5600, Toronto, Ontario M5X 1C9, Canada",
        ],
      },
    ],
  },
};
