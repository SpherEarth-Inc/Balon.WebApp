/** Public Domain.API news client (no auth). */

import { getDomainApiUrl } from "@/lib/api/forms";

export type TipTapNode = {
  type: string;
  attrs?: Record<string, unknown>;
  content?: TipTapNode[];
  marks?: { type: string; attrs?: Record<string, unknown> }[];
  text?: string;
};

export type TipTapDoc = {
  type: "doc";
  content?: TipTapNode[];
};

export type NewsListItem = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  featured_image: string | null;
  category: number | null;
  category_name: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type NewsArticle = NewsListItem & {
  content: TipTapDoc;
};

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

function apiErrorMessage(status: number, body: unknown): string {
  if (body && typeof body === "object") {
    const record = body as Record<string, unknown>;
    if (typeof record.error === "string") return record.error;
    if (typeof record.detail === "string") return record.detail;
  }
  if (status === 404) return "Article not found.";
  if (status >= 500) return "Server error. Please try again later.";
  return "Unable to load news. Please try again.";
}

async function newsRequest<T>(path: string): Promise<T> {
  const base = getDomainApiUrl();
  if (!base) {
    throw new Error("NEWS_NOT_CONFIGURED");
  }

  const response = await fetch(`${base}${path}`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(apiErrorMessage(response.status, body));
  }
  return body as T;
}

export function listNews(params?: { page?: number; page_size?: number }) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.page_size) search.set("page_size", String(params.page_size));
  const qs = search.toString();
  return newsRequest<PaginatedResponse<NewsListItem>>(
    `/api/news/${qs ? `?${qs}` : ""}`,
  );
}

export function getNews(slug: string) {
  return newsRequest<NewsArticle>(
    `/api/news/${encodeURIComponent(slug)}/`,
  );
}

export function isNewsNotConfigured(error: unknown) {
  return error instanceof Error && error.message === "NEWS_NOT_CONFIGURED";
}
