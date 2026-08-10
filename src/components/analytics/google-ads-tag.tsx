const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();

/**
 * Google Ads gtag.js — place immediately after the opening <head> element.
 * Account ID format: AW-XXXXXXXXXX
 */
export function GoogleAdsTag() {
  if (!googleAdsId) return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`} />
      <script
        id="google-ads-gtag"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAdsId}');
`.trim(),
        }}
      />
    </>
  );
}
