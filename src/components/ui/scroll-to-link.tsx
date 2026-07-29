"use client";

import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScrollToLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
}

/** Scroll to a section after intro → form step changes (avoids landing on the footer). */
export function scrollSectionIntoView(targetId: string) {
  document.getElementById(targetId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  if (typeof window !== "undefined" && window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

function scrollToTarget(targetId: string, onNavigate?: () => void) {
  if (onNavigate) {
    onNavigate();
    return;
  }
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${targetId}`);
}

export function ScrollToLink({ targetId, children, className, onNavigate }: ScrollToLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTarget(targetId, onNavigate);
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

type ScrollToButtonLinkProps = ScrollToLinkProps &
  VariantProps<typeof buttonVariants>;

export function ScrollToButtonLink({
  targetId,
  children,
  className,
  onNavigate,
  variant,
  size,
}: ScrollToButtonLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTarget(targetId, onNavigate);
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </a>
  );
}
