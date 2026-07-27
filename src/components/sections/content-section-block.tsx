import {
  BackToContents,
} from "@/components/sections/page-contents";
import type { ContentSection } from "@/types/content";
import { cn } from "@/lib/utils";

interface ContentSectionBlockProps {
  section: ContentSection;
  className?: string;
  children?: React.ReactNode;
  showBackToContents?: boolean;
  itemsAsOrderedList?: boolean;
}

export function ContentSectionBlock({
  section,
  className,
  children,
  showBackToContents = true,
  itemsAsOrderedList = false,
}: ContentSectionBlockProps) {
  const subheading = section.subtitle ?? section.title;

  return (
    <div id={section.id} className={cn("scroll-mt-24", className)}>
      {subheading && <p className="section-subheading">{subheading}</p>}
      {section.description && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{section.description}</p>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
      {section.items && itemsAsOrderedList && (
        <ol className="mt-4 space-y-4">
          {section.items.map((item) => (
            <li key={item.title}>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>
      )}
      {section.items && !itemsAsOrderedList && (
        <div className="mt-4 space-y-4">
          {section.items.map((item) => (
            <div key={item.title}>
              <h4 className="font-bold">{item.title}</h4>
              <p className="mt-1 text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      )}
      {section.bullets && (
        <ul className="mt-4 space-y-2">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.trailingParagraphs?.map((p, i) => (
        <p key={`trail-${i}`} className="mt-4 text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
      {children}
      {showBackToContents ? <BackToContents /> : null}
    </div>
  );
}
