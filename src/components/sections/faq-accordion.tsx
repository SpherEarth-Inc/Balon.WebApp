import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/types/content";

interface FaqAccordionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

export function FaqAccordion({ title, subtitle, items }: FaqAccordionProps) {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        {title && (
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        <Accordion multiple={false} className="mx-auto content-width">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
