"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { formFieldClass, formTextareaClass } from "@/components/forms/form-field-styles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const yesNo = ["Yes", "No"] as const;
const yesNoMore = ["Yes", "No", "I would like more information"] as const;
const digitalComfort = ["Yes", "No", "I would require training"] as const;

const yearsOptions = [
  "Less than one year",
  "One to three years",
  "Four to seven years",
  "Eight to twelve years",
  "More than twelve years",
] as const;

const involvementOptions = [
  "Occasional professional referrals",
  "Community-based relationship development",
  "Regular part-time activity",
  "A broader business-development relationship",
  "Open to discussing the most appropriate structure",
] as const;

const heardAboutOptions = [
  "LinkedIn advertisement",
  "LinkedIn post",
  "LinkedIn message",
  "Academy website",
  "Professional referral",
  "Community referral",
  "Football contact",
  "Education contact",
  "Search engine",
  "Social media",
  "Other",
] as const;

const advisorSchema = z.object({
  fullLegalName: z.string().min(2, "Required"),
  preferredName: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Required"),
  city: z.string().min(1, "Required"),
  province: z.string().min(1, "Required"),
  postalCode: z.string().min(1, "Required"),
  linkedIn: z.string().optional(),
  jobTitle: z.string().min(1, "Required"),
  employer: z.string().min(1, "Required"),
  professionalBackground: z.string().min(20, "Please provide more detail"),
  relevantExperience: z.string().min(10, "Required"),
  yearsExperience: z.string().min(1, "Required"),
  qualifications: z.string().optional(),
  communities: z.string().min(10, "Required"),
  networks: z.string().min(10, "Required"),
  otherRole: z.string().min(1, "Required"),
  otherRoleDetails: z.string().optional(),
  authorizeOther: z.string().min(1, "Required"),
  authorizeOtherDetails: z.string().optional(),
  whyInterested: z.string().min(20, "Please provide more detail"),
  familyNeeds: z.string().min(20, "Please provide more detail"),
  approachIntroducing: z.string().min(20, "Please provide more detail"),
  trustExample: z.string().min(20, "Please provide more detail"),
  integrityMeaning: z.string().min(20, "Please provide more detail"),
  involvementLevel: z.string().min(1, "Required"),
  timeAvailable: z.string().min(1, "Required"),
  availableForOnboarding: z.string().min(1, "Required"),
  digitalSystems: z.string().min(1, "Required"),
  startWhen: z.string().min(1, "Required"),
  provideReferences: z.string().min(1, "Required"),
  backgroundScreening: z.string().min(1, "Required"),
  suitabilityDisclosure: z.string().min(1, "Required"),
  suitabilityDetails: z.string().optional(),
  conflictOfInterest: z.string().min(1, "Required"),
  conflictDetails: z.string().optional(),
  previouslyRepresented: z.string().min(1, "Required"),
  alreadyReferred: z.string().min(1, "Required"),
  alreadyReferredDetails: z.string().optional(),
  heardAbout: z.string().min(1, "Required"),
  additionalInfo: z.string().optional(),
  consentAccurate: z.literal(true, { message: "Required" }),
  consentNoRepresent: z.literal(true, { message: "Required" }),
  consentContact: z.literal(true, { message: "Required" }),
  consentPrivacy: z.literal(true, { message: "Required" }),
});

type AdvisorFormData = z.infer<typeof advisorSchema>;
type AdvisorField = keyof AdvisorFormData;

const STEPS = [
  {
    id: "applicant",
    title: "Applicant Information",
    fields: [
      "fullLegalName",
      "preferredName",
      "email",
      "phone",
      "city",
      "province",
      "postalCode",
      "linkedIn",
      "jobTitle",
      "employer",
    ] as const satisfies readonly AdvisorField[],
  },
  {
    id: "background",
    title: "Professional Background",
    fields: [
      "professionalBackground",
      "relevantExperience",
      "yearsExperience",
      "qualifications",
    ] as const satisfies readonly AdvisorField[],
  },
  {
    id: "community",
    title: "Community and Network",
    fields: [
      "communities",
      "networks",
      "otherRole",
      "otherRoleDetails",
      "authorizeOther",
      "authorizeOtherDetails",
    ] as const satisfies readonly AdvisorField[],
  },
  {
    id: "interest",
    title: "Interest and Suitability",
    fields: [
      "whyInterested",
      "familyNeeds",
      "approachIntroducing",
      "trustExample",
      "integrityMeaning",
    ] as const satisfies readonly AdvisorField[],
  },
  {
    id: "availability",
    title: "Availability and Engagement",
    fields: [
      "involvementLevel",
      "timeAvailable",
      "availableForOnboarding",
      "digitalSystems",
      "startWhen",
    ] as const satisfies readonly AdvisorField[],
  },
  {
    id: "declarations",
    title: "References & Declarations",
    fields: [
      "provideReferences",
      "backgroundScreening",
      "suitabilityDisclosure",
      "suitabilityDetails",
      "conflictOfInterest",
      "conflictDetails",
      "previouslyRepresented",
      "alreadyReferred",
      "alreadyReferredDetails",
      "heardAbout",
      "additionalInfo",
      "consentAccurate",
      "consentNoRepresent",
      "consentContact",
      "consentPrivacy",
    ] as const satisfies readonly AdvisorField[],
  },
] as const;

interface AdvisorFormProps {
  onSuccess?: () => void;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-destructive">{message}</p>;
}

export function AdvisorForm({ onSuccess }: AdvisorFormProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === STEPS.length - 1;
  const currentStep = STEPS[stepIndex];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<AdvisorFormData>({
    resolver: zodResolver(advisorSchema),
    defaultValues: {
      province: "Ontario",
      yearsExperience: "One to three years",
      otherRole: "No",
      authorizeOther: "No",
      involvementLevel: "Open to discussing the most appropriate structure",
      availableForOnboarding: "Yes",
      digitalSystems: "Yes",
      provideReferences: "Yes",
      backgroundScreening: "Yes",
      suitabilityDisclosure: "No",
      conflictOfInterest: "No",
      previouslyRepresented: "No",
      alreadyReferred: "No",
      heardAbout: "Academy website",
    },
  });

  async function goNext() {
    const valid = await trigger([...currentStep.fields]);
    if (!valid) return;
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  }

  function goBack() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  function onSubmit() {
    toast.success("Expression of interest received!", {
      description:
        "Our team will review your application. Selected candidates may be contacted for a confidential introductory conversation.",
    });
    reset();
    setStepIndex(0);
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div>
        <p className="text-sm text-muted-foreground">
          Step {stepIndex + 1} of {STEPS.length}
        </p>
        <div className="mt-3 flex gap-1.5" aria-hidden>
          {STEPS.map((step, i) => (
            <div
              key={step.id}
              className={cn(
                "h-1.5 flex-1 rounded-full",
                i <= stepIndex ? "bg-brand-green" : "bg-muted"
              )}
            />
          ))}
        </div>
        <h3 className="mt-4 text-lg font-bold uppercase">{currentStep.title}</h3>
      </div>

      {currentStep.id === "applicant" && (
        <fieldset className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="min-w-0">
              <Label htmlFor="fullLegalName">Full Legal Name *</Label>
              <Input id="fullLegalName" {...register("fullLegalName")} className={formFieldClass} />
              <FieldError message={errors.fullLegalName?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="preferredName">Preferred Name</Label>
              <Input id="preferredName" {...register("preferredName")} className={formFieldClass} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" {...register("email")} className={formFieldClass} />
              <FieldError message={errors.email?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="phone">Telephone Number *</Label>
              <Input id="phone" {...register("phone")} className={formFieldClass} />
              <FieldError message={errors.phone?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="city">City or Municipality *</Label>
              <Input id="city" {...register("city")} className={formFieldClass} />
              <FieldError message={errors.city?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="province">Province *</Label>
              <Input id="province" {...register("province")} className={formFieldClass} />
              <FieldError message={errors.province?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="postalCode">Postal Code *</Label>
              <Input id="postalCode" {...register("postalCode")} className={formFieldClass} />
              <FieldError message={errors.postalCode?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="linkedIn">LinkedIn Profile</Label>
              <Input id="linkedIn" {...register("linkedIn")} className={formFieldClass} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="jobTitle">Current Job Title or Professional Role *</Label>
              <Input id="jobTitle" {...register("jobTitle")} className={formFieldClass} />
              <FieldError message={errors.jobTitle?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="employer">Current Employer or Organization *</Label>
              <Input id="employer" {...register("employer")} className={formFieldClass} />
              <FieldError message={errors.employer?.message} />
            </div>
          </div>
        </fieldset>
      )}

      {currentStep.id === "background" && (
        <fieldset className="space-y-4">
          <div className="min-w-0">
            <Label htmlFor="professionalBackground">
              Please describe your professional background and current responsibilities. *
            </Label>
            <Textarea
              id="professionalBackground"
              {...register("professionalBackground")}
              className={cn(formTextareaClass, "min-h-28")}
            />
            <FieldError message={errors.professionalBackground?.message} />
          </div>
          <div className="min-w-0">
            <Label htmlFor="relevantExperience">
              Relevant experience in admissions, enrollment, education, youth sport, football,
              community outreach, relationship management, premium client service, or business
              development *
            </Label>
            <Textarea
              id="relevantExperience"
              {...register("relevantExperience")}
              className={formTextareaClass}
            />
            <FieldError message={errors.relevantExperience?.message} />
          </div>
          <div className="min-w-0 md:max-w-md">
            <Label>Years of relevant professional or community experience *</Label>
            <Select
              value={watch("yearsExperience")}
              onValueChange={(v) => setValue("yearsExperience", v as string)}
            >
              <SelectTrigger className={formFieldClass}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {yearsOptions.map((o) => (
                  <SelectItem key={o} value={o}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError message={errors.yearsExperience?.message} />
          </div>
          <div className="min-w-0">
            <Label htmlFor="qualifications">
              Relevant professional qualifications, licences, certifications, coaching credentials,
              safeguarding training, or educational experience
            </Label>
            <Textarea
              id="qualifications"
              {...register("qualifications")}
              className={formTextareaClass}
            />
          </div>
        </fieldset>
      )}

      {currentStep.id === "community" && (
        <fieldset className="space-y-4">
          <div className="min-w-0">
            <Label htmlFor="communities">
              Which communities or geographic areas are you best positioned to serve? *
            </Label>
            <Textarea id="communities" {...register("communities")} className={formTextareaClass} />
            <FieldError message={errors.communities?.message} />
          </div>
          <div className="min-w-0">
            <Label htmlFor="networks">
              Describe the professional, educational, football, cultural, business, or community
              networks relevant to your application. *
            </Label>
            <Textarea id="networks" {...register("networks")} className={formTextareaClass} />
            <FieldError message={errors.networks?.message} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="min-w-0">
              <Label>Role with a school, club, academy, or related organization? *</Label>
              <Select
                value={watch("otherRole")}
                onValueChange={(v) => setValue("otherRole", v as string)}
              >
                <SelectTrigger className={formFieldClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {yesNo.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.otherRole?.message} />
            </div>
            <div className="min-w-0">
              <Label>Authorized to recruit or refer for another organization? *</Label>
              <Select
                value={watch("authorizeOther")}
                onValueChange={(v) => setValue("authorizeOther", v as string)}
              >
                <SelectTrigger className={formFieldClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {yesNo.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.authorizeOther?.message} />
            </div>
          </div>
          {watch("otherRole") === "Yes" && (
            <div className="min-w-0">
              <Label htmlFor="otherRoleDetails">Please provide details</Label>
              <Textarea
                id="otherRoleDetails"
                {...register("otherRoleDetails")}
                className={formTextareaClass}
              />
            </div>
          )}
          {watch("authorizeOther") === "Yes" && (
            <div className="min-w-0">
              <Label htmlFor="authorizeOtherDetails">Please provide details</Label>
              <Textarea
                id="authorizeOtherDetails"
                {...register("authorizeOtherDetails")}
                className={formTextareaClass}
              />
            </div>
          )}
        </fieldset>
      )}

      {currentStep.id === "interest" && (
        <fieldset className="space-y-4">
          <div className="min-w-0">
            <Label htmlFor="whyInterested">
              Why are you interested in becoming a SpherEarth Football Academy Admissions Advisor? *
            </Label>
            <Textarea
              id="whyInterested"
              {...register("whyInterested")}
              className={cn(formTextareaClass, "min-h-28")}
            />
            <FieldError message={errors.whyInterested?.message} />
          </div>
          <div className="min-w-0">
            <Label htmlFor="familyNeeds">
              What do you believe families need when making important decisions about a child&apos;s
              development? *
            </Label>
            <Textarea id="familyNeeds" {...register("familyNeeds")} className={formTextareaClass} />
            <FieldError message={errors.familyNeeds?.message} />
          </div>
          <div className="min-w-0">
            <Label htmlFor="approachIntroducing">
              How would you approach introducing a premium football academy to a family without
              creating pressure or unrealistic expectations? *
            </Label>
            <Textarea
              id="approachIntroducing"
              {...register("approachIntroducing")}
              className={formTextareaClass}
            />
            <FieldError message={errors.approachIntroducing?.message} />
          </div>
          <div className="min-w-0">
            <Label htmlFor="trustExample">
              Please provide an example of a time when you built trust with a client, parent,
              student, family, or community member. *
            </Label>
            <Textarea id="trustExample" {...register("trustExample")} className={formTextareaClass} />
            <FieldError message={errors.trustExample?.message} />
          </div>
          <div className="min-w-0">
            <Label htmlFor="integrityMeaning">
              What does professional integrity mean to you in a relationship-based role? *
            </Label>
            <Textarea
              id="integrityMeaning"
              {...register("integrityMeaning")}
              className={formTextareaClass}
            />
            <FieldError message={errors.integrityMeaning?.message} />
          </div>
        </fieldset>
      )}

      {currentStep.id === "availability" && (
        <fieldset className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="min-w-0">
              <Label>What level of involvement are you interested in? *</Label>
              <Select
                value={watch("involvementLevel")}
                onValueChange={(v) => setValue("involvementLevel", v as string)}
              >
                <SelectTrigger className={formFieldClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {involvementOptions.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.involvementLevel?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="timeAvailable">
                Approximately how much time could you make available each month? *
              </Label>
              <Input id="timeAvailable" {...register("timeAvailable")} className={formFieldClass} />
              <FieldError message={errors.timeAvailable?.message} />
            </div>
            <div className="min-w-0">
              <Label>Available for onboarding, training, documentation, and screening? *</Label>
              <Select
                value={watch("availableForOnboarding")}
                onValueChange={(v) => setValue("availableForOnboarding", v as string)}
              >
                <SelectTrigger className={formFieldClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {yesNoMore.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.availableForOnboarding?.message} />
            </div>
            <div className="min-w-0">
              <Label>Comfortable using approved digital systems for referrals? *</Label>
              <Select
                value={watch("digitalSystems")}
                onValueChange={(v) => setValue("digitalSystems", v as string)}
              >
                <SelectTrigger className={formFieldClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {digitalComfort.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.digitalSystems?.message} />
            </div>
            <div className="min-w-0 md:col-span-2">
              <Label htmlFor="startWhen">
                When would you be available to begin if selected and authorized? *
              </Label>
              <Input id="startWhen" {...register("startWhen")} className={formFieldClass} />
              <FieldError message={errors.startWhen?.message} />
            </div>
          </div>
        </fieldset>
      )}

      {currentStep.id === "declarations" && (
        <div className="space-y-8">
          <fieldset className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="min-w-0">
                <Label>Willing to provide professional references if requested? *</Label>
                <Select
                  value={watch("provideReferences")}
                  onValueChange={(v) => setValue("provideReferences", v as string)}
                >
                  <SelectTrigger className={formFieldClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yesNo.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.provideReferences?.message} />
              </div>
              <div className="min-w-0">
                <Label>
                  Willing to complete background or vulnerable-sector screening if required? *
                </Label>
                <Select
                  value={watch("backgroundScreening")}
                  onValueChange={(v) => setValue("backgroundScreening", v as string)}
                >
                  <SelectTrigger className={formFieldClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yesNoMore.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.backgroundScreening?.message} />
              </div>
              <div className="min-w-0">
                <Label>
                  Anything in your history that could affect suitability to represent an organization
                  serving children and families? *
                </Label>
                <Select
                  value={watch("suitabilityDisclosure")}
                  onValueChange={(v) => setValue("suitabilityDisclosure", v as string)}
                >
                  <SelectTrigger className={formFieldClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yesNo.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.suitabilityDisclosure?.message} />
              </div>
              <div className="min-w-0">
                <Label>Any actual or potential conflict of interest? *</Label>
                <Select
                  value={watch("conflictOfInterest")}
                  onValueChange={(v) => setValue("conflictOfInterest", v as string)}
                >
                  <SelectTrigger className={formFieldClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yesNo.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.conflictOfInterest?.message} />
              </div>
              <div className="min-w-0">
                <Label>Previously represented SpherEarth or a related organization? *</Label>
                <Select
                  value={watch("previouslyRepresented")}
                  onValueChange={(v) => setValue("previouslyRepresented", v as string)}
                >
                  <SelectTrigger className={formFieldClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yesNo.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.previouslyRepresented?.message} />
              </div>
              <div className="min-w-0">
                <Label>Already introduced or referred any family to the academy? *</Label>
                <Select
                  value={watch("alreadyReferred")}
                  onValueChange={(v) => setValue("alreadyReferred", v as string)}
                >
                  <SelectTrigger className={formFieldClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yesNo.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.alreadyReferred?.message} />
              </div>
              <div className="min-w-0 md:col-span-2">
                <Label>How did you learn about this opportunity? *</Label>
                <Select
                  value={watch("heardAbout")}
                  onValueChange={(v) => setValue("heardAbout", v as string)}
                >
                  <SelectTrigger className={formFieldClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {heardAboutOptions.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError message={errors.heardAbout?.message} />
              </div>
            </div>
            {watch("suitabilityDisclosure") === "Yes" && (
              <div className="min-w-0">
                <Label htmlFor="suitabilityDetails">Please provide relevant information</Label>
                <Textarea
                  id="suitabilityDetails"
                  {...register("suitabilityDetails")}
                  className={formTextareaClass}
                />
              </div>
            )}
            {watch("conflictOfInterest") === "Yes" && (
              <div className="min-w-0">
                <Label htmlFor="conflictDetails">Please explain</Label>
                <Textarea
                  id="conflictDetails"
                  {...register("conflictDetails")}
                  className={formTextareaClass}
                />
              </div>
            )}
            {watch("alreadyReferred") === "Yes" && (
              <div className="min-w-0">
                <Label htmlFor="alreadyReferredDetails">Please provide relevant details</Label>
                <Textarea
                  id="alreadyReferredDetails"
                  {...register("alreadyReferredDetails")}
                  className={formTextareaClass}
                />
              </div>
            )}
            <div className="min-w-0">
              <Label htmlFor="additionalInfo">
                Additional information that may support your application
              </Label>
              <Textarea
                id="additionalInfo"
                {...register("additionalInfo")}
                className={formTextareaClass}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="mb-2 text-base font-bold uppercase">Applicant Declarations</legend>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-1"
                checked={watch("consentAccurate") === true}
                onChange={(e) => setValue("consentAccurate", e.target.checked as true)}
              />
              <span>
                The information I have provided is accurate and complete to the best of my knowledge.
                I understand that submitting an application does not authorize me to represent
                SpherEarth Football Academy.
              </span>
            </label>
            <FieldError message={errors.consentAccurate?.message} />
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-1"
                checked={watch("consentNoRepresent") === true}
                onChange={(e) => setValue("consentNoRepresent", e.target.checked as true)}
              />
              <span>
                I will not use the academy&apos;s name, logo, materials, or identity, or contact
                families on its behalf, unless formally authorized.
              </span>
            </label>
            <FieldError message={errors.consentNoRepresent?.message} />
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-1"
                checked={watch("consentContact") === true}
                onChange={(e) => setValue("consentContact", e.target.checked as true)}
              />
              <span>
                I consent to SpherEarth Football Academy and SpherEarth Inc. contacting me regarding
                this application and related opportunities.
              </span>
            </label>
            <FieldError message={errors.consentContact?.message} />
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-1"
                checked={watch("consentPrivacy") === true}
                onChange={(e) => setValue("consentPrivacy", e.target.checked as true)}
              />
              <span>
                I consent to the collection, use, and review of the information submitted for
                recruitment, selection, screening, authorization, administration, and related
                legitimate purposes, in accordance with the applicable privacy policy.
              </span>
            </label>
            <FieldError message={errors.consentPrivacy?.message} />
          </fieldset>
        </div>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {!isFirstStep ? (
          <Button
            type="button"
            variant="outline"
            onClick={goBack}
            className="h-12 rounded-none"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        ) : (
          <span />
        )}

        {isLastStep ? (
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 rounded-none bg-brand-green hover:bg-brand-green/90"
          >
            Submit Expression of Interest
            <ArrowRight className="size-4" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={goNext}
            className="h-12 rounded-none bg-brand-green hover:bg-brand-green/90"
          >
            Next
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
    </form>
  );
}
