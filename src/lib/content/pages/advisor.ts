import { images } from "../assets";
import type { ContentSection, PageMeta } from "@/types/content";

export interface AdvisorContent {
  meta: PageMeta;
  intro: ContentSection;
  formIntro: ContentSection;
  pathway: ContentSection;
  whyJoin: ContentSection;
  role: ContentSection;
  responsibilities: ContentSection;
  doNot: ContentSection;
  qualifications: ContentSection;
  qualities: ContentSection;
  academyProvides: ContentSection;
  flexibleOpportunity: ContentSection;
  recognition: ContentSection;
  attribution: ContentSection;
  process: ContentSection;
  professionalStandards: ContentSection;
  safeguarding: ContentSection;
  privacy: ContentSection;
  closing: ContentSection;
  thankYou: {
    title: string;
    paragraphs: string[];
  };
}

export const advisorContent: AdvisorContent = {
  meta: {
    title: "Join Our Founding Admissions Advisor Network",
    description:
      "Help introduce ambitious young players and their families to a premium football development experience built in Toronto and designed for the world.",
    path: "/admissions-advisor/",
    heroImage: images.becomeAnAdvisor,
  },
  intro: {
    title: "Join Our Founding Admissions Advisor Network",
    paragraphs: [
      "SpherEarth Football Academy is building a select network of trusted Admissions Advisors across the Greater Toronto Area.",
      "We are seeking professionals, football leaders, educators, and community connectors who understand how to build relationships, communicate responsibly with families, and represent a premium organization with integrity.",
      "Admissions Advisors help identify players and families who may be well aligned with the academy and invite them to begin the formal admissions process.",
    ],
  },
  pathway: {
    id: "pathway",
    title: "Help Families Discover a Meaningful Development Pathway",
    paragraphs: [
      "Choosing the right environment for a young athlete is an important family decision.",
      "Families want more than training sessions. They want confidence that their child will be supported by a structured organization committed to development, character, professionalism, and long-term growth.",
      "Admissions Advisors help families discover SpherEarth Football Academy, understand its programmes, and take the appropriate first step in the admissions journey.",
      "Advisors do not make admission decisions or guarantee places. Their role is to create trusted introductions and guide interested families toward the academy's official admissions channels.",
    ],
  },
  whyJoin: {
    id: "why-join",
    title: "Why Join the Founding Network?",
    paragraphs: [
      "Joining the Founding Admissions Advisor Network provides an opportunity to contribute during an important stage in the academy's development.",
      "Founding Advisors will help SpherEarth Football Academy establish trusted relationships with families and communities across the Greater Toronto Area.",
      "As an authorized Advisor, you may have the opportunity to:",
    ],
    bullets: [
      "Introduce families to a premium youth football development organization",
      "Help talented and motivated young players discover structured development opportunities",
      "Build trusted relationships within your professional and community networks",
      "Represent an ambitious Canadian organization with an international outlook",
      "Contribute local knowledge and community insight",
      "Participate in a structured referral and recognition programme",
      "Develop your understanding of the academy's programmes, admissions processes, and family experience",
      "Grow with the academy as its programmes and geographic reach develop",
    ],
    trailingParagraphs: [
      "Founding status does not create ownership, employment, governance rights, or a permanent appointment. All responsibilities and benefits are governed by the Advisor's written authorization and applicable academy policies.",
    ],
  },
  role: {
    id: "role",
    title: "The Admissions Advisor Role",
    paragraphs: [
      "Admissions Advisors serve as trusted, authorized representatives of SpherEarth Football Academy within their communities and professional networks.",
      "They help introduce suitable prospective families to the academy while maintaining high standards of professionalism, transparency, confidentiality, and respect.",
      "The role focuses on relationship development and responsible introductions. It does not involve evaluating players, making admission decisions, delivering coaching, collecting academy fees, or providing guarantees on behalf of the academy.",
      "Only individuals who have completed the academy's selection, training, documentation, and authorization requirements may represent themselves as SpherEarth Football Academy Admissions Advisors.",
    ],
  },
  responsibilities: {
    id: "responsibilities",
    title: "What Admissions Advisors Do",
    description: "Admissions Advisors may be responsible for:",
    bullets: [
      "Identifying players and families who may align with the academy's values, programmes, and admissions expectations",
      "Introducing the academy accurately and professionally",
      "Explaining the purpose of the academy's programmes using approved information",
      "Inviting interested families to begin the official admissions process",
      "Directing families to authorized application, consultation, and communication channels",
      "Helping families understand the general stages of the admissions journey",
      "Recording referrals through the academy's approved attribution process",
      "Maintaining appropriate records where required",
      "Protecting personal and confidential information",
      "Using only approved academy materials, messaging, and brand assets",
      "Complying with safeguarding, privacy, communications, and professional conduct requirements",
      "Keeping programme and admissions information accurate and current",
      "Referring questions outside their authority to the appropriate academy team",
      "Supporting a respectful and professional first experience for every family",
    ],
    trailingParagraphs: [
      "Admissions Advisors must never misrepresent programmes, make unauthorized promises, create unofficial offers, pressure families, or imply that a referral guarantees admission.",
    ],
  },
  doNot: {
    id: "do-not",
    title: "What Admissions Advisors Do Not Do",
    description: "Admissions Advisors do not:",
    bullets: [
      "Decide whether a player is admitted",
      "Guarantee an assessment, scholarship, trial, programme place, or admission outcome",
      "Evaluate a player's football ability unless separately authorized to do so",
      "Issue academy acceptance letters or admission offers",
      "Negotiate tuition, fees, scholarships, refunds, or payment terms",
      "Collect tuition, application fees, deposits, or other academy payments directly from families",
      "Create independent academy marketing materials without written approval",
      "Use the academy's name, logo, or intellectual property outside authorized activities",
      "Sign agreements on behalf of the academy",
      "Represent themselves as academy employees unless separately employed by SpherEarth",
      "Make safeguarding, medical, legal, immigration, scholarship, or educational guarantees",
      "Contact minors independently in circumstances prohibited by academy policy",
      "Retain or share family information outside approved systems",
      "Subcontract or appoint additional representatives",
      "Conduct unofficial player trials, assessments, events, or recruitment activities",
    ],
    trailingParagraphs: [
      "Questions outside the Advisor's approved responsibilities must be referred to the academy's Admissions Team.",
    ],
  },
  qualifications: {
    id: "qualifications",
    title: "Who We're Looking For",
    description:
      "The Admissions Advisor opportunity may be particularly well suited to individuals with experience in:",
    bullets: [
      "School, college, university, or programme admissions",
      "Enrollment management or student recruitment",
      "Independent or private education",
      "Youth football, community sport, or player development",
      "Educational consulting",
      "Parent and family engagement",
      "Community leadership",
      "Relationship management",
      "Premium client service",
      "Professional services",
      "Membership organizations",
      "Business development",
      "Community outreach",
      "Youth-focused organizations",
      "Multicultural and newcomer community engagement",
    ],
    trailingParagraphs: [
      "Previous admissions or football-industry experience may be beneficial, but it is not the only consideration.",
      "We are interested in individuals who can build trust, communicate clearly, exercise sound judgment, and represent the academy responsibly.",
    ],
  },
  qualities: {
    id: "qualities",
    title: "The Qualities We Value",
    description: "Strong candidates will demonstrate:",
    bullets: [
      "Integrity and professional accountability",
      "Excellent communication and interpersonal skills",
      "Confidence engaging parents, guardians, and professional contacts",
      "Good judgment and emotional maturity",
      "Respect for confidentiality and privacy",
      "Commitment to child safeguarding",
      "An ability to explain information accurately",
      "A consultative and non-pressuring approach",
      "Reliability and responsiveness",
      "Cultural awareness and respect",
      "Strong personal and professional boundaries",
      "A willingness to follow approved processes",
      "Comfort using digital communication and administrative systems",
      "An interest in youth development and long-term player growth",
      "Commitment to the academy's values and reputation",
    ],
    trailingParagraphs: [
      "An existing network within football, education, business, cultural, faith, or community organizations may be helpful but is not sufficient on its own. Every Advisor must also meet the academy's suitability and authorization requirements.",
    ],
  },
  academyProvides: {
    id: "academy-provides",
    title: "What the Academy Provides",
    description: "Authorized Admissions Advisors may receive:",
    bullets: [
      "A structured onboarding and authorization process",
      "Orientation to the academy's mission, values, and programmes",
      "Training on admissions procedures and Advisor responsibilities",
      "Approved presentation and communication materials",
      "Approved digital brand assets",
      "Access to official referral and attribution procedures",
      "Guidance on communicating with families",
      "Defined escalation and support channels",
      "Updates on programme availability and admissions information",
      "Privacy, safeguarding, and professional conduct guidance",
      "Access to designated academy systems or resources where appropriate",
      "Ongoing performance, compliance, and quality reviews",
      "Recognition for eligible referrals under the applicable written agreement",
    ],
    trailingParagraphs: [
      "Access to information, materials, systems, events, and opportunities is determined by the academy and may vary by Advisor status, location, activity, and authorization level.",
    ],
  },
  flexibleOpportunity: {
    id: "flexible-opportunity",
    title: "A Professional and Flexible Opportunity",
    paragraphs: [
      "The Admissions Advisor Network is designed to support relationship-based outreach within approved communities and professional networks.",
      "The level of activity may vary among Advisors. Some may make occasional introductions through established relationships, while others may develop more active community engagement within the limits of their authorization.",
      "Admissions Advisors must not treat the role as unrestricted public solicitation. All outreach must remain professional, appropriate, accurate, and consistent with academy policies.",
      "The precise nature of each Advisor's engagement, including status, responsibilities, territory, permitted activities, compensation eligibility, and performance expectations, is confirmed in writing before authorization.",
      "Unless a separate written employment agreement states otherwise, authorization as an Admissions Advisor does not make an individual an employee, director, officer, partner, franchisee, or legal agent of SpherEarth Inc. or SpherEarth Football Academy.",
    ],
  },
  recognition: {
    id: "recognition",
    title: "Recognition and Compensation",
    paragraphs: [
      "Admissions Advisors may be eligible for recognition or compensation for qualifying referrals recorded and verified through the academy's official attribution process.",
      "Eligibility may depend on factors including authorization status, approved referral channels, accurate attribution, completed enrollment requirements, received fees, and compliance with academy policies.",
      "Compensation structures, rates, timing, eligibility rules, reversals, exclusions, and payment conditions are communicated to selected candidates and documented before authorization.",
      "No compensation is earned solely because an introduction, enquiry, application, assessment, or conversation takes place unless the written Advisor agreement specifically states otherwise.",
      "Advisors are responsible for understanding and complying with any personal tax, reporting, registration, insurance, or business obligations that apply to them.",
    ],
  },
  attribution: {
    id: "attribution",
    title: "Referral Attribution",
    paragraphs: [
      "Where a family is introduced by an authorized Admissions Advisor, attribution should be recorded at the earliest appropriate stage through the academy's approved referral process.",
      "Attribution helps the academy maintain accurate admissions records, recognize eligible Advisor contributions, prevent duplicate referral claims, monitor introduction quality, protect families from unauthorized solicitation, and maintain transparency throughout the admissions journey.",
      "Submitting a referral does not give an Advisor ownership of a family relationship, application, player, territory, or future enrollment.",
      "The academy may communicate directly with referred families at any stage and retains full authority over admissions, service delivery, enrollment, communications, refunds, safeguarding, and the family relationship.",
      "In cases of duplicate, incomplete, late, disputed, or unverifiable attribution, the academy's determination will apply in accordance with the relevant written terms.",
    ],
  },
  process: {
    id: "process",
    title: "Selection and Authorization Process",
    description: "Becoming an authorized Admissions Advisor typically involves:",
    items: [
      {
        title: "1. Expression of Interest",
        description:
          "Complete the Admissions Advisor application and provide accurate information about your background, experience, networks, interests, and availability.",
      },
      {
        title: "2. Initial Review",
        description:
          "The academy reviews the application to determine whether the candidate's experience, professional profile, location, and values appear aligned with current needs.",
      },
      {
        title: "3. Confidential Introductory Conversation",
        description:
          "Selected candidates may be invited to discuss the academy, the Advisor opportunity, expectations, relevant experience, and potential areas of contribution.",
      },
      {
        title: "4. Suitability Assessment",
        description:
          "The academy may evaluate professional history, communication skills, judgment, references, conflicts of interest, reputation, and other relevant considerations.",
      },
      {
        title: "5. Verification and Screening",
        description:
          "Candidates may be asked to provide identification, professional references, background information, screening documentation, or other materials appropriate to the role. Where required, authorization may be conditional on the completion of a background or vulnerable-sector screening process.",
      },
      {
        title: "6. Training and Documentation",
        description:
          "Selected candidates must complete required orientation, training, declarations, agreements, and policy acknowledgements.",
      },
      {
        title: "7. Formal Authorization",
        description:
          "An individual becomes an authorized Admissions Advisor only after receiving written confirmation from the academy. Submitting an application, attending a meeting, completing training, or receiving preliminary approval does not by itself create authorization.",
      },
      {
        title: "8. Ongoing Review",
        description:
          "Authorization may be reviewed periodically and may remain subject to performance, conduct, training, compliance, programme availability, and organizational requirements. The academy may approve, decline, suspend, restrict, or withdraw authorization in accordance with applicable agreements and policies.",
      },
    ],
  },
  professionalStandards: {
    id: "professional-standards",
    title: "Professional Standards",
    description: "Every authorized Admissions Advisor is expected to:",
    bullets: [
      "Act honestly and in good faith",
      "Put family welfare and informed decision-making ahead of personal gain",
      "Communicate respectfully and without pressure",
      "Present only current, approved information",
      "Disclose their Advisor status accurately",
      "Avoid misleading statements or exaggerated claims",
      "Respect family decisions, including decisions not to proceed",
      "Protect confidential and personal information",
      "Comply with safeguarding expectations",
      "Maintain appropriate boundaries with minors",
      "Avoid discriminatory, abusive, aggressive, or inappropriate conduct",
      "Declare actual or potential conflicts of interest",
      "Avoid conduct that may damage the academy's reputation",
      "Cooperate with quality assurance and compliance reviews",
      "Report concerns, errors, complaints, and safeguarding matters promptly",
      "Stop representing the academy immediately if authorization expires, is suspended, or is withdrawn",
    ],
  },
  safeguarding: {
    id: "safeguarding",
    title: "Safeguarding and Boundaries",
    paragraphs: [
      "The safety and well-being of children and young people are fundamental to SpherEarth Football Academy.",
      "Admissions Advisors must follow all applicable safeguarding requirements and maintain appropriate boundaries at all times.",
      "Unless expressly authorized through an approved academy process, Advisors must not meet privately with a minor without an appropriate parent, guardian, or authorized adult present; communicate privately with minors through personal messaging channels; request unnecessary personal information from a child; transport players; provide accommodation; conduct trials or assessments; photograph or record minors; make medical, psychological, educational, or legal judgments; handle safeguarding concerns independently; or promise confidential treatment of a safeguarding disclosure.",
      "Any concern regarding a child's safety or welfare must be reported immediately through the academy's approved safeguarding process.",
    ],
  },
  privacy: {
    id: "privacy",
    title: "Privacy and Confidentiality",
    paragraphs: [
      "Admissions Advisors may encounter personal information relating to players, parents, guardians, and families. This information must be handled responsibly and only for authorized academy purposes.",
      "Advisors must collect only information genuinely required for an approved purpose, use official systems and channels wherever required, avoid storing family information unnecessarily, protect devices and accounts, never share personal information without authorization, delete or return information when instructed, report suspected loss or misuse immediately, and comply with academy privacy policies and applicable Canadian privacy requirements.",
      "Information obtained through the Advisor role must not be used to promote unrelated products, services, organizations, or personal business activities.",
    ],
  },
  closing: {
    id: "closing",
    title: "Help Shape Our Founding Admissions Network",
    paragraphs: [
      "We are seeking a select group of individuals who can represent SpherEarth Football Academy with professionalism, integrity, sound judgment, and genuine care for families.",
      "Submitting an expression of interest begins a confidential review process. It does not create an offer, appointment, authorization, employment relationship, or obligation for either party.",
      "Selected applicants will be contacted by the academy regarding the next stage.",
    ],
  },
  formIntro: {
    id: "advisor-application",
    title: "Apply to Join the Founding Admissions Advisor Network",
    paragraphs: [
      "Thank you for your interest in representing SpherEarth Football Academy.",
      "We are building a select network of trusted professionals and community leaders who can introduce families to the academy and support a respectful, accurate, and professional first step in the admissions journey.",
      "Please complete the application below to tell us about your background, experience, professional relationships, community involvement, and interest in the opportunity.",
      "Submitting this application is an expression of interest only. It does not create an offer, appointment, authorization, employment relationship, compensation entitlement, or obligation for either party.",
      "Selected candidates may be contacted for a confidential introductory conversation and further assessment.",
    ],
  },
  thankYou: {
    title: "Thank You for Your Interest",
    paragraphs: [
      "Your expression of interest has been submitted to SpherEarth Football Academy.",
      "Our team will review the information provided. Candidates selected for further consideration may be contacted for a confidential introductory conversation or asked to provide additional information.",
      "Submission of an application does not create authorization, employment, compensation entitlement, or an obligation for either party.",
      "Until you receive formal written authorization, you must not represent yourself as a SpherEarth Football Academy Admissions Advisor, contact families on the academy's behalf, use academy materials, or undertake recruitment activities.",
    ],
  },
};
