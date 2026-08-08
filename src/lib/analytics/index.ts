declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: (action: string, data?: Record<string, unknown>) => void;
    fbq?: (...args: unknown[]) => void;
    twq?: (...args: unknown[]) => void;
  }
}

export function pushDataLayerEvent(
  event: string,
  payload: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

/** Google Ads / GTM conversion for a successful Admissions Apply submit. */
export function trackAdmissionsApplyConversion() {
  pushDataLayerEvent("admissions_apply_submit");
}

const LINKEDIN_CONVERSION_ID = process.env.NEXT_PUBLIC_LINKEDIN_ADVISOR_CONVERSION_ID;
const TWITTER_EVENT_ID = process.env.NEXT_PUBLIC_TWITTER_ADVISOR_EVENT_ID;

export function trackLinkedInConversion(conversionId = LINKEDIN_CONVERSION_ID) {
  if (typeof window === "undefined") return;
  if (!conversionId || typeof window.lintrk !== "function") return;
  window.lintrk("track", { conversion_id: Number(conversionId) });
}

export function trackMetaLead() {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", "Lead");
}

export function trackTwitterConversion(eventId = TWITTER_EVENT_ID) {
  if (typeof window === "undefined") return;
  if (!eventId || typeof window.twq !== "function") return;
  window.twq("event", eventId, {});
}

/**
 * Fires the Admissions Advisor Expression of Interest conversion across every
 * configured ad platform. Each helper no-ops unless its pixel loaded and the
 * relevant id is set, so this is safe to call regardless of which platforms
 * are active.
 */
export function trackAdvisorConversion() {
  trackLinkedInConversion();
  trackMetaLead();
  trackTwitterConversion();
}
