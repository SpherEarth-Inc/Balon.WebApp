import { ScrollToLink } from "@/components/ui/scroll-to-link";
import { cn } from "@/lib/utils";

export const PAGE_CONTENTS_ID = "on-this-page";

export type PageContentsLink = {
  id: string;
  label: string;
};

export function pageContentsLinksFromSections(
  sections: Array<{ id?: string; title?: string; subtitle?: string; label?: string }>
): PageContentsLink[] {
  return sections.flatMap((section) => {
    if (!section.id) return [];
    const label = section.label ?? section.subtitle ?? section.title;
    if (!label) return [];
    return [{ id: section.id, label }];
  });
}

export function BackToContents({ className }: { className?: string }) {
  return (
    <p className={cn("mt-4", className)}>
      <ScrollToLink
        targetId={PAGE_CONTENTS_ID}
        className="text-sm text-brand-green hover:underline"
      >
        Back to contents
      </ScrollToLink>
    </p>
  );
}

interface PageContentsNavProps {
  links: PageContentsLink[];
  className?: string;
  title?: string;
}

export function PageContentsNav({
  links,
  className,
  title = "On this page",
}: PageContentsNavProps) {
  if (links.length === 0) return null;

  return (
    <nav
      id={PAGE_CONTENTS_ID}
      aria-label="Page sections"
      className={cn(
        "mt-10 scroll-mt-24 border border-border bg-muted/30 p-5 md:p-6",
        className
      )}
    >
      <p className="text-sm font-bold uppercase tracking-wide">{title}</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.id} className="flex items-start gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
            <ScrollToLink
              targetId={link.id}
              className="text-sm text-muted-foreground hover:text-brand-green hover:underline"
            >
              {link.label}
            </ScrollToLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
