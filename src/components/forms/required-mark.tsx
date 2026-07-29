import { cn } from "@/lib/utils";

/** Red required-field asterisk for form labels. */
export function RequiredMark({ className }: { className?: string }) {
  return (
    <span className={cn("text-red-600", className)} aria-hidden="true">
      {" *"}
    </span>
  );
}
