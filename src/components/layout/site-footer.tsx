import Image from "next/image";
import { AppLink } from "@/components/ui/app-link";
import { SocialLinks } from "@/components/ui/social-links";
import { asset } from "@/lib/asset";
import { images } from "@/lib/content/assets";
import { footerNavigation } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white text-foreground">
      <div className="container mx-auto container-padding py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="space-y-5 lg:col-span-2">
            <div className="inline-flex">
              <Image
                src={asset(images.logo)}
                alt={siteConfig.shortName}
                width={180}
                height={48}
                className="h-11 w-auto"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.name} — a business of {siteConfig.parentCompany}.
              Premium youth football development built in Toronto and designed for the world.
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href={siteConfig.corporateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-green transition-colors hover:text-brand-navy"
              >
                Visit SpherEarth Inc. →
              </a>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Academy</h3>
            <ul className="space-y-2">
              {footerNavigation.academy.map((link) => (
                <li key={link.href}>
                  <AppLink href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-brand-green">
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Partners</h3>
            <ul className="space-y-2">
              {footerNavigation.partners.map((link) => (
                <li key={link.href}>
                  <AppLink href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-brand-green">
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Contact</h3>
              <address className="text-sm not-italic leading-relaxed text-muted-foreground">
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.city}, {siteConfig.contact.country}
              </address>
              <p className="mt-3 text-sm text-muted-foreground">
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-green">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-brand-green">
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Follow Us</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-green py-4">
        <div className="container mx-auto container-padding flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium text-white">
            &copy; {year} {siteConfig.parentCompany} All Rights Reserved.
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            {footerNavigation.legal.map((link) => (
              <AppLink
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </AppLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
