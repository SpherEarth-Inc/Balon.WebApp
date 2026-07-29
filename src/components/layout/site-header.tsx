"use client";

import Image from "next/image";
import { AppLink } from "@/components/ui/app-link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";
import { images } from "@/lib/content/assets";
import { mainNavigation, headerActions } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/content/site";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";

const compactNavLabels: Partial<Record<string, string>> = {
  "Parents & Families": "Parents",
  "Partners & Sponsors": "Partners",
};

function NavLabel({ label }: { label: string }) {
  const compact = compactNavLabels[label];

  if (!compact) {
    return label;
  }

  return (
    <>
      <span className="2xl:hidden">{compact}</span>
      <span className="hidden 2xl:inline">{label}</span>
    </>
  );
}

const desktopNavLinkClassName =
  "border-b-2 border-transparent px-1.5 py-1.5 text-xs font-bold uppercase tracking-wide whitespace-nowrap text-foreground/80 transition-colors hover:border-brand-green hover:text-brand-green xl:px-2 2xl:px-2.5";

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length) {
    return (
      <AppLink
        href={item.href}
        className={desktopNavLinkClassName}
      >
        <NavLabel label={item.label} />
      </AppLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.menuOnly ? (
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          className={cn(
            "inline-flex cursor-default items-center gap-1",
            desktopNavLinkClassName
          )}
        >
          <NavLabel label={item.label} />
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </button>
      ) : (
        <AppLink
          href={item.href}
          className={cn("inline-flex items-center gap-1", desktopNavLinkClassName)}
        >
          <NavLabel label={item.label} />
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </AppLink>
      )}
      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-[300px] divide-y divide-border overflow-hidden bg-background shadow-lg transition-all",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {item.children.map((child) => (
          <AppLink
            key={child.href}
            href={child.href}
            className="block px-5 py-3.5 text-sm font-semibold leading-snug text-foreground transition-colors hover:text-brand-green"
          >
            {child.label}
          </AppLink>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="border-b bg-white text-foreground">
        <div className="site-width flex items-center justify-between gap-3 container-padding py-3 xl:gap-4">
          <AppLink href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src={asset(images.logo)}
              alt={siteConfig.shortName}
              width={180}
              height={48}
              className="h-9 w-auto shrink-0 md:h-11"
              priority
            />
          </AppLink>

          <nav
            className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center xl:flex"
            aria-label="Main navigation"
          >
            {mainNavigation.map((item) => (
              <DesktopNavItem key={item.href + item.label} item={item} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ButtonLink
              href={headerActions.login.href}
              variant="outline"
              className="hidden rounded-none font-bold uppercase tracking-wide sm:inline-flex"
            >
              {headerActions.login.label}
            </ButtonLink>
            <ButtonLink
              href={headerActions.apply.href}
              className="hidden rounded-none bg-brand-green font-bold uppercase tracking-wide hover:bg-brand-green/90 sm:inline-flex"
            >
              {headerActions.apply.label}
            </ButtonLink>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
