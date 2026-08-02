import { LinkedInInsight } from "@/components/analytics/linkedin-insight";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { TwitterPixel } from "@/components/analytics/twitter-pixel";

export function AnalyticsScripts() {
  return (
    <>
      <LinkedInInsight />
      <MetaPixel />
      <TwitterPixel />
    </>
  );
}
