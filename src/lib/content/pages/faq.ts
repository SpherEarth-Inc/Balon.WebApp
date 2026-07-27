import type { FaqCategory, PageMeta } from "@/types/content";
import { images } from "../assets";

export const faqContent = {
  meta: {
    title: "FAQ",
    description:
      "Answers to common questions about applying to, joining, and training with SpherEarth Football Academy.",
    path: "/faq/",
    heroImage: images.faqHero,
  } satisfies PageMeta,
  categories: [
    {
      id: "general",
      title: "General",
      items: [
        {
          question: "Who can apply?",
          answer:
            "Players who meet the academy's age and eligibility requirements are welcome to submit an application for consideration.",
        },
        {
          question: "Does applying guarantee admission?",
          answer:
            "No. Applications begin the admissions review process but do not guarantee acceptance.",
        },
        {
          question: "Do you offer scholarships?",
          answer:
            "Yes. Scholarships may be available through academy programs and sponsor-supported initiatives.",
        },
        {
          question: "Where will training take place?",
          answer:
            "Training locations across the Greater Toronto Area will be announced through official SpherEarth communication channels.",
        },
        {
          question: "How will families be contacted?",
          answer:
            "Only through verified SpherEarth communication channels and authorized representatives.",
        },
      ],
    },
    {
      id: "admissions",
      title: "Admissions",
      items: [
        {
          question: "Does submitting an application guarantee admission?",
          answer:
            "No. Applications begin the admissions process but do not guarantee acceptance.",
        },
        {
          question: "Is there an application fee?",
          answer:
            "Any applicable fees or administrative requirements will be communicated during the admissions process.",
        },
        {
          question: "How long does the admissions process take?",
          answer:
            "Timeframes may vary depending on application volumes, assessments, and program availability.",
        },
        {
          question: "Will every player be assessed?",
          answer:
            "The admissions team will determine whether an assessment is appropriate based on the individual application and program requirements.",
        },
        {
          question: "Can applications be submitted throughout the year?",
          answer:
            "Application periods and enrollment opportunities will be announced through official SpherEarth communication channels.",
        },
        {
          question: "How will we receive updates?",
          answer:
            "Families will be contacted through verified SpherEarth communication channels using the contact information provided during the application process.",
        },
      ],
    },
    {
      id: "scholarships",
      title: "Scholarships",
      items: [
        {
          question: "Does applying for a scholarship guarantee financial assistance?",
          answer:
            "No. Scholarship opportunities are competitive and subject to available funding, eligibility, and the academy's selection process.",
        },
        {
          question: "Can I apply for admission without applying for a scholarship?",
          answer: "Yes. Scholarship applications are entirely optional.",
        },
        {
          question: "Can a player receive more than one scholarship?",
          answer:
            "Scholarship availability and funding arrangements vary depending on the program and available resources.",
        },
        {
          question: "Are scholarship applications confidential?",
          answer:
            "Yes. Information provided during the scholarship process is treated respectfully and confidentially.",
        },
        {
          question: "When will scholarship decisions be made?",
          answer:
            "Applicants will be informed through official SpherEarth communication channels after the review process has been completed.",
        },
        {
          question: "Can businesses sponsor scholarships?",
          answer:
            "Yes. Businesses, foundations, community organizations, and individuals interested in supporting youth development are encouraged to contact the academy regarding sponsorship opportunities.",
        },
      ],
    },
    {
      id: "parent-consultation",
      title: "Parent Consultation",
      items: [
        {
          question: "Is there a cost for the Parent Consultation?",
          answer: "No. The consultation is complimentary.",
        },
        {
          question: "How long does the consultation last?",
          answer:
            "Most conversations take approximately 20 to 30 minutes, depending on your questions.",
        },
        {
          question: "Is this an admissions interview?",
          answer:
            "No. The purpose of the consultation is to provide information, answer questions, and help determine whether the academy is a suitable fit.",
        },
        {
          question: "Can my child attend the consultation?",
          answer:
            "Yes. Prospective players are welcome to participate alongside their parent or guardian where appropriate.",
        },
        {
          question: "What if I need to reschedule?",
          answer:
            "Your booking confirmation will include instructions for rescheduling or cancelling your appointment if necessary.",
        },
      ],
    },
    {
      id: "parents",
      title: "Parents & Families",
      items: [
        {
          question: "How will we receive academy updates?",
          answer: "Official communications are sent through approved SpherEarth communication channels.",
        },
        {
          question: "Can parents observe training sessions?",
          answer:
            "Observation arrangements may vary depending on the session, facility, and coaching requirements. Guidance will be provided where applicable.",
        },
        {
          question: "How are player concerns addressed?",
          answer:
            "Families are encouraged to communicate respectfully with the appropriate academy representative so concerns can be reviewed promptly and fairly.",
        },
        {
          question: "Will players receive regular feedback?",
          answer:
            "Player development discussions may be provided at appropriate intervals to help families understand progress and areas for continued growth.",
        },
        {
          question: "Are scholarships available?",
          answer:
            "Eligible families may receive information regarding scholarship opportunities during the admissions process.",
        },
        {
          question: "What happens if my child cannot attend training?",
          answer:
            "Families should notify the academy as soon as reasonably possible so appropriate records and planning can be maintained.",
        },
      ],
    },
    {
      id: "sponsors",
      title: "Sponsorship",
      items: [
        {
          question: "Who can become a sponsor?",
          answer:
            "Businesses, corporations, foundations, community organizations, educational institutions, and individuals interested in supporting youth development are welcome to contact us.",
        },
        {
          question: "Can sponsorships be customized?",
          answer:
            "Yes. We recognize that every organization has different objectives and are pleased to discuss partnership opportunities tailored to your goals.",
        },
        {
          question: "Are sponsorship packages available?",
          answer:
            "Yes. Detailed sponsorship proposals are shared following an initial conversation with our Partnerships Team.",
        },
        {
          question: "Can sponsorship support scholarships?",
          answer:
            "Yes. Many sponsorship opportunities may contribute directly to scholarship initiatives and expanded access for deserving athletes.",
        },
        {
          question: "Can sponsors support specific academy initiatives?",
          answer:
            "Where appropriate, partnership opportunities may be aligned with approved academy programs, events, scholarships, or community initiatives.",
        },
      ],
    },
    {
      id: "partnerships",
      title: "Strategic Partnerships",
      items: [
        {
          question: "Who can become a strategic partner?",
          answer:
            "Schools, football clubs, municipalities, colleges, universities, community organizations, international academies, and other institutions whose values align with the academy's mission.",
        },
        {
          question: "Do partnerships require financial sponsorship?",
          answer:
            "No. Many strategic partnerships are collaborative rather than financial and focus on creating mutual value through shared expertise, facilities, programmes, or community initiatives.",
        },
        {
          question: "Can partnerships be customized?",
          answer:
            "Yes. Every partnership is developed according to the goals, capabilities, and objectives of the participating organizations.",
        },
        {
          question: "Do you partner outside Ontario?",
          answer:
            "As the academy grows, we intend to establish partnerships throughout Canada and internationally where appropriate.",
        },
        {
          question: "How long does the partnership process take?",
          answer: "Timelines vary depending on the nature and scope of the proposed collaboration.",
        },
        {
          question: "My organization does not fit one of the categories above. Can we still partner?",
          answer:
            "Absolutely. We welcome conversations with organizations whose expertise, services, or mission align with our commitment to youth development, education, community impact, innovation, and long-term athlete success.",
        },
      ],
    },
    {
      id: "trust-safety",
      title: "Trust & Safety",
      items: [
        {
          question: "Why should I verify a representative?",
          answer:
            "Verification helps ensure you are communicating with an individual who is authorized to represent SpherEarth Football Academy.",
        },
        {
          question: "Can Admissions Advisors contact families?",
          answer:
            "Yes. Authorized Admissions Advisors may contact prospective families regarding academy programmes and admissions opportunities. If you are ever uncertain, please verify the representative.",
        },
        {
          question: "Will the academy request payments through personal accounts?",
          answer:
            "Payments are conducted only through approved academy processes. If you receive an unexpected payment request, contact us before proceeding.",
        },
        {
          question: "What should I do if I receive suspicious communication?",
          answer:
            "Stop the conversation and contact SpherEarth Football Academy through our official communication channels. We will be pleased to assist you.",
        },
        {
          question: "Can I report suspicious activity?",
          answer:
            "Yes. We encourage reports whenever you believe something appears unusual or inconsistent with official academy communications.",
        },
      ],
    },
    {
      id: "advisors",
      title: "Admissions Advisors",
      items: [
        {
          question: "What is a SpherEarth Football Academy Admissions Advisor?",
          answer:
            "An Admissions Advisor is an individual authorized by SpherEarth Football Academy to introduce prospective players and families to the academy and guide them toward its official admissions channels. Advisors help create trusted introductions and explain approved information. They do not make admission decisions, guarantee outcomes, or replace the academy's internal admissions process.",
        },
        {
          question: "What does an Admissions Advisor do?",
          answer:
            "An Advisor may identify families who could be well aligned with the academy, introduce the academy's programmes, answer general questions using approved information, and invite interested families to begin the formal admissions journey. All admissions assessments, decisions, offers, enrollment arrangements, and payments remain under the academy's authority.",
        },
        {
          question: "Can anyone become an Admissions Advisor?",
          answer:
            "No. All applicants are reviewed individually. Only candidates who complete the required selection, screening, documentation, training, and authorization process may represent the academy.",
        },
        {
          question: "Is previous admissions or football-industry experience required?",
          answer:
            "Not necessarily. Experience in admissions, enrollment, education, student recruitment, youth football, community development, relationship management, premium client service, or business development may be valuable, but the academy also considers applicants who demonstrate strong communication, integrity, judgment, and an ability to build trusted relationships with families.",
        },
        {
          question: "Is this a full-time position? Is an Advisor an employee?",
          answer:
            "The Admissions Advisor Network is a flexible, relationship-based opportunity. Authorization as an Advisor is not, by itself, an offer of employment. Unless the academy enters into a separate written employment agreement, an authorized Admissions Advisor is not an employee of SpherEarth Inc. or SpherEarth Football Academy.",
        },
        {
          question: "Is the opportunity commission-based? When is compensation earned?",
          answer:
            "Admissions Advisors may be eligible for compensation for qualifying referrals under the terms of their written agreement. Compensation is earned only when the conditions in that agreement have been satisfied. An introduction, enquiry, application, consultation, assessment, or conditional admission does not necessarily create an entitlement to payment.",
        },
        {
          question: "Does an Advisor invitation guarantee admission for a player?",
          answer:
            "No. An invitation from an Advisor only encourages a family to begin the formal admissions process. Every application is reviewed independently by the academy. No Advisor may guarantee admission, selection, scholarships, trials, team placement, playing time, or future advancement.",
        },
        {
          question: "Can an Advisor assess a player, offer scholarships, or collect fees?",
          answer:
            "Not unless separately authorized in writing for assessment activity. Advisors cannot promise or negotiate scholarships, and must never collect tuition, deposits, or other academy payments through personal accounts or unofficial channels. Families must use official payment methods communicated directly by SpherEarth Football Academy.",
        },
        {
          question: "How are referrals attributed?",
          answer:
            "Referral attribution is recorded through the academy's approved process. The family may be asked to identify the referring Advisor, and Advisors may also submit referral information through an approved system. A referral does not create ownership of the player, family, application, territory, or future academy relationship.",
        },
        {
          question: "How do families verify an Admissions Advisor?",
          answer:
            "Families may contact SpherEarth Football Academy directly through official channels to confirm whether an individual is currently authorized. Verification requests may be sent to info@spherearth.ca or made by telephone at +1 647 936 2784. Families should verify any representative before sharing sensitive information, attending unofficial meetings, or making payments.",
        },
        {
          question: "How do I apply to become an Advisor?",
          answer:
            "Complete the official Admissions Advisor application form on the Become an Admissions Advisor page. Submitting the form is an expression of interest only and does not guarantee an interview, selection, training, authorization, or appointment.",
        },
        {
          question: "What happens after I apply?",
          answer:
            "The academy will review your application. Selected candidates may be invited to a confidential introductory conversation and asked to provide additional information, references, documentation, or screening materials. You become authorized only after receiving formal written confirmation from the academy.",
        },
      ],
    },
    {
      id: "programs",
      title: "Programs",
      items: [
        {
          question: "Which program is right for my child?",
          answer:
            "Program recommendations are made following the admissions process and, where applicable, player assessment.",
        },
        {
          question: "Does my child need previous football experience?",
          answer:
            "Players with different levels of experience may be considered depending on age, commitment, and available program spaces.",
        },
        {
          question: "Can players move between programs?",
          answer:
            "Player progression is reviewed periodically and may occur where appropriate based on development and academy recommendations.",
        },
        {
          question: "Are scholarships available?",
          answer:
            "Yes. Scholarship opportunities may be available through academy initiatives and sponsor-supported programs, subject to eligibility and availability.",
        },
        {
          question: "Are training schedules available online?",
          answer:
            "General information is available publicly. Detailed schedules are shared with enrolled families.",
        },
        {
          question: "Are fees published on the website?",
          answer:
            "Investment information is provided during the admissions process to ensure families receive accurate guidance based on the appropriate program and available payment options.",
        },
      ],
    },
  ] satisfies FaqCategory[],
};
