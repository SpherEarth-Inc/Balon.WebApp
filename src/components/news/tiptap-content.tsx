import type { ReactNode } from "react";
import type { TipTapDoc, TipTapNode } from "@/lib/api/news";
import { cn } from "@/lib/utils";

type TipTapContentProps = {
  doc: TipTapDoc | null | undefined;
  className?: string;
};

function renderMarks(text: string, marks?: TipTapNode["marks"]): ReactNode {
  if (!marks?.length) return text;

  return marks.reduce<ReactNode>((child, mark) => {
    switch (mark.type) {
      case "bold":
        return <strong>{child}</strong>;
      case "italic":
        return <em>{child}</em>;
      case "strike":
        return <s>{child}</s>;
      case "code":
        return (
          <code className="rounded-sm bg-muted px-1 py-0.5 text-[0.9em]">
            {child}
          </code>
        );
      case "link": {
        const href = typeof mark.attrs?.href === "string" ? mark.attrs.href : "#";
        const target =
          typeof mark.attrs?.target === "string" ? mark.attrs.target : undefined;
        return (
          <a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="font-medium text-brand-green underline underline-offset-2 hover:text-brand-green/80"
          >
            {child}
          </a>
        );
      }
      default:
        return child;
    }
  }, text);
}

function renderNode(node: TipTapNode, index: number): ReactNode {
  const children = node.content?.map((child, i) => renderNode(child, i));

  switch (node.type) {
    case "doc":
      return <>{children}</>;
    case "paragraph":
      return (
        <p key={index} className="text-base leading-relaxed text-foreground/90">
          {children ?? <br />}
        </p>
      );
    case "heading": {
      const level = Number(node.attrs?.level ?? 2);
      const className =
        "font-heading font-bold uppercase tracking-tight text-brand-navy";
      if (level === 1) {
        return (
          <h2 key={index} className={cn(className, "text-2xl md:text-3xl")}>
            {children}
          </h2>
        );
      }
      if (level === 3) {
        return (
          <h3 key={index} className={cn(className, "text-lg md:text-xl")}>
            {children}
          </h3>
        );
      }
      return (
        <h2 key={index} className={cn(className, "text-xl md:text-2xl")}>
          {children}
        </h2>
      );
    }
    case "bulletList":
      return (
        <ul key={index} className="list-disc space-y-2 pl-5 text-foreground/90">
          {children}
        </ul>
      );
    case "orderedList":
      return (
        <ol key={index} className="list-decimal space-y-2 pl-5 text-foreground/90">
          {children}
        </ol>
      );
    case "listItem":
      return (
        <li key={index} className="leading-relaxed">
          {children}
        </li>
      );
    case "blockquote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-brand-green pl-4 text-muted-foreground italic"
        >
          {children}
        </blockquote>
      );
    case "codeBlock":
      return (
        <pre
          key={index}
          className="overflow-x-auto rounded-none bg-muted p-4 text-sm"
        >
          <code>{children}</code>
        </pre>
      );
    case "horizontalRule":
      return <hr key={index} className="border-border" />;
    case "hardBreak":
      return <br key={index} />;
    case "image": {
      const src = typeof node.attrs?.src === "string" ? node.attrs.src : "";
      if (!src) return null;
      const alt = typeof node.attrs?.alt === "string" ? node.attrs.alt : "";
      const width =
        typeof node.attrs?.width === "number" ? node.attrs.width : undefined;
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={index}
          src={src}
          alt={alt}
          width={width}
          className="my-2 h-auto max-w-full"
        />
      );
    }
    case "text":
      return (
        <span key={index}>{renderMarks(node.text ?? "", node.marks)}</span>
      );
    default:
      return children ? <div key={index}>{children}</div> : null;
  }
}

export function TipTapContent({ doc, className }: TipTapContentProps) {
  if (!doc || doc.type !== "doc") return null;

  return (
    <div className={cn("space-y-4", className)}>
      {doc.content?.map((node, index) => renderNode(node, index))}
    </div>
  );
}
