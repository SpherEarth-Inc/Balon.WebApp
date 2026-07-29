/** Public Domain.API form client (no auth). */

export const FORM_SLUGS = {
  admissionsAdvisor: "admissions-advisor",
  careers: "careers",
  parentConsultation: "parent-consultation",
  enquiry: "enquiry",
  admissionsApply: "admissions-apply",
} as const;

export type FormSlug = (typeof FORM_SLUGS)[keyof typeof FORM_SLUGS];

export interface FormSubmitPayload {
  form_version?: number;
  data: Record<string, unknown>;
  meta?: Record<string, unknown>;
}

export interface FormSubmitResult {
  id: number;
}

export interface FormUploadResult {
  object_name: string;
  url: string;
  size: number;
  file_name: string;
  mime_type: string;
}

export function getDomainApiUrl() {
  return (process.env.NEXT_PUBLIC_DOMAIN_API_URL ?? "").trim().replace(/\/+$/, "");
}

function apiErrorMessage(status: number, body: unknown): string {
  if (body && typeof body === "object") {
    const record = body as Record<string, unknown>;
    if (typeof record.error === "string") return record.error;
    if (typeof record.detail === "string") return record.detail;
  }
  if (status >= 500) return "Server error. Please try again later.";
  return "Unable to submit the form. Please try again.";
}

export async function submitForm(
  slug: FormSlug,
  payload: FormSubmitPayload,
): Promise<FormSubmitResult> {
  const base = getDomainApiUrl();
  if (!base) {
    throw new Error("FORMS_NOT_CONFIGURED");
  }

  const meta = {
    page_url: typeof window !== "undefined" ? window.location.href : "",
    locale: typeof navigator !== "undefined" ? navigator.language : "",
    ...(payload.meta ?? {}),
  };

  const response = await fetch(`${base}/api/forms/${slug}/submit/`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      form_version: payload.form_version ?? 1,
      data: payload.data,
      meta,
    }),
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(apiErrorMessage(response.status, body));
  }

  return body as FormSubmitResult;
}

export async function uploadFormFile(
  slug: FormSlug,
  file: File,
): Promise<FormUploadResult> {
  const base = getDomainApiUrl();
  if (!base) {
    throw new Error("FORMS_NOT_CONFIGURED");
  }

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${base}/api/forms/${slug}/upload/`, {
    method: "POST",
    body: formData,
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(apiErrorMessage(response.status, body));
  }

  return body as FormUploadResult;
}

export function isFormsNotConfigured(error: unknown) {
  return error instanceof Error && error.message === "FORMS_NOT_CONFIGURED";
}
