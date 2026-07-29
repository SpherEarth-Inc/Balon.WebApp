import { images } from "@/lib/content/assets";

export const siteConfig = {
  name: "SpherEarth Football Academy",
  shortName: "SpherEarth Academy",
  parentCompany: "SpherEarth Inc. | SphèreTerre Inc.",
  tagline: "Developing Talent. Expanding Possibilities.",
  description:
    "SpherEarth Football Academy is a premium youth football development academy built in Toronto and designed for ambitious young athletes and families.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://academy.spherearth.ca",
  corporateUrl: "https://www.spherearth.ca",
  contact: {
    email: "info@spherearth.ca",
    privacyEmail: "privacy@spherearth.ca",
    phone: "+1 647 936 2784",
    address: "First Canadian Place, 100 King Street West, Suite 5600",
    city: "Toronto, Ontario M5X 1C9",
    country: "Canada",
    hours: {
      weekdays: "Monday – Friday: 9:00 AM – 6:00 PM",
      saturday: "Saturday: Scheduled consultations and approved academy activities",
      sunday: "Sunday: Closed, except for approved academy activities or special events",
    },
  },
  socialLinks: [
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/1spherearth" },
    { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/1SpherEarth" },
    { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/@1SpherEarth" },
    { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/1SpherEarth" },
    { platform: "threads", label: "Threads", href: "https://www.threads.net/@1spherearth" },
    { platform: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@1spherearth" },
    { platform: "x", label: "X", href: "https://x.com/1SpherEarth" },
  ],
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
} as const;

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}) {
  const fullTitle =
    title === "Home" ? siteConfig.name : `${title} – ${siteConfig.name}`;

  return {
    title: fullTitle,
    description: description ?? siteConfig.description,
    icons: {
      icon: [{ url: images.logo, type: "image/webp" }],
      shortcut: images.logo,
      apple: images.logo,
    },
    openGraph: {
      title: fullTitle,
      description: description ?? siteConfig.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.shortName,
      locale: "en_CA",
      type: "website" as const,
    },
  };
}
