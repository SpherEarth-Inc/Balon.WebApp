import { PageHero } from "@/components/layout/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { ButtonLink } from "@/components/ui/button-link";
import { careersContent } from "@/lib/content/pages/careers";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: careersContent.rolesMeta.title,
  description: careersContent.rolesMeta.description,
  path: careersContent.rolesMeta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
  { label: careersContent.rolesMeta.title },
];

export default function CareersRolesPage() {
  const { rolesMeta, roleCategories } = careersContent;

  return (
    <>
      <PageHero
        title={rolesMeta.title}
        description={rolesMeta.description}
        breadcrumb={breadcrumb}
        image={rolesMeta.heroImage}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding space-y-12 lg:space-y-14">
          {roleCategories.map((role, index) =>
            role.image ? (
              <ContentBlock
                key={role.id}
                section={{
                  id: role.id,
                  title: role.title,
                  description: role.description,
                  image: role.image,
                  cta: role.cta,
                }}
                imageRight={index % 2 === 1}
                className="!py-0"
                imageClassName="object-top"
                imageContainerClassName="mx-auto aspect-[3/4] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
              />
            ) : (
              <div key={role.id} className="mx-auto content-width">
                <h2 className="text-3xl font-bold uppercase md:text-4xl">{role.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{role.description}</p>
                <ButtonLink
                  href={role.cta.href}
                  variant="outline"
                  className="mt-8 h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg"
                >
                  {role.cta.label}
                </ButtonLink>
              </div>
            )
          )}
        </div>

        <div className="container mx-auto container-padding">
          <div className="mx-auto mt-16 flex max-w-5xl flex-wrap gap-3">
            <ButtonLink
              href="/careers/"
              variant="outline"
              className="h-12 rounded-none px-8 text-base md:h-14 md:px-10 md:text-lg"
            >
              Back to Careers
            </ButtonLink>
            <ButtonLink
              href="/enquiry/?department=General%20Enquiries"
              className="h-12 rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 md:h-14 md:px-10 md:text-lg"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
