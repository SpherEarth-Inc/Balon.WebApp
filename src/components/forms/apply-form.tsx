"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
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
import { trainingLocations } from "@/lib/content/navigation";
import {
  formCheckboxClass,
  formFieldClass,
  formTextareaClass,
} from "@/components/forms/form-field-styles";
import { RequiredMark } from "@/components/forms/required-mark";
import { trackAdmissionsApplyConversion } from "@/lib/analytics";
import { FORM_SLUGS, isFormsNotConfigured, submitForm } from "@/lib/api/forms";
import { cn } from "@/lib/utils";

const applySchema = z.object({
  parentName: z.string().min(2, "Required"),
  relationship: z.string().min(1, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  contactMethod: z.string().min(1, "Required"),
  contactTime: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  postalCode: z.string().min(1, "Required"),
  playerName: z.string().min(2, "Required"),
  dateOfBirth: z.string().min(1, "Required"),
  gender: z.string().min(1, "Required"),
  position: z.string().min(1, "Required"),
  dominantFoot: z.string().min(1, "Required"),
  playsFootball: z.string().min(1, "Required"),
  experience: z.string().min(1, "Required"),
  program: z.string().min(1, "Required"),
  location: z.string().min(1, "Required"),
  heardAbout: z.string().min(1, "Required"),
  startWhen: z.string().min(1, "Required"),
  commitment: z.string().min(1, "Required"),
  interestReason: z.string().min(10, "Please provide more detail"),
  expectations: z.string().min(10, "Please provide more detail"),
  scholarshipInterest: z.string().optional(),
  consent: z.literal(true, { message: "" }),
});

type ApplyFormData = z.infer<typeof applySchema>;
type ApplyField = keyof ApplyFormData;

const STEPS = [
  {
    id: "parent",
    title: "Parent / Guardian Information",
    fields: [
      "parentName",
      "relationship",
      "email",
      "phone",
      "city",
      "postalCode",
    ] as const satisfies readonly ApplyField[],
  },
  {
    id: "player",
    title: "Player Information",
    fields: [
      "playerName",
      "dateOfBirth",
      "gender",
      "position",
      "dominantFoot",
    ] as const satisfies readonly ApplyField[],
  },
  {
    id: "program",
    title: "Program Interest",
    fields: [
      "program",
      "location",
      "interestReason",
      "expectations",
    ] as const satisfies readonly ApplyField[],
  },
  {
    id: "consent",
    title: "Confirmation",
    fields: ["consent"] as const satisfies readonly ApplyField[],
  },
] as const;

interface ApplyFormProps {
  onSuccess?: () => void;
}

function FieldError({ message }: { message?: string }) {
  if (!message?.trim()) return null;
  return <p className="text-xs text-destructive">{message}</p>;
}

export function ApplyForm({ onSuccess }: ApplyFormProps) {
  const router = useRouter();
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
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      relationship: "",
      gender: "",
      contactMethod: "Email",
      contactTime: "Afternoon",
      position: "Unsure",
      dominantFoot: "Right",
      playsFootball: "Yes",
      experience: "1–3 years",
      program: "Not Sure (Request Guidance)",
      location: "Toronto Core",
      heardAbout: "Website",
      startWhen: "Not Sure",
      commitment: "I'd like more information",
      scholarshipInterest: "No",
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

  async function onSubmit(data: ApplyFormData) {
    try {
      await submitForm(FORM_SLUGS.admissionsApply, { data });
      trackAdmissionsApplyConversion();
      toast.success("Application submitted!", {
        description: "Our Admissions Team will contact you through verified channels.",
      });
      reset();
      setStepIndex(0);
      if (onSuccess) {
        onSuccess();
        return;
      }
      router.push("/admissions/apply/thank-you/");
    } catch (error) {
      if (isFormsNotConfigured(error)) {
        toast.error("Form submission is not configured yet.");
        return;
      }
      toast.error(error instanceof Error ? error.message : "Unable to submit application.");
    }
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

      {currentStep.id === "parent" && (
        <fieldset className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="min-w-0">
              <Label htmlFor="parentName">Parent / Guardian Full Name<RequiredMark /></Label>
              <Input id="parentName" {...register("parentName")} className={formFieldClass} />
              <FieldError message={errors.parentName?.message} />
            </div>
            <div className="min-w-0">
              <Label>Relationship to Player<RequiredMark /></Label>
              <Select
                value={watch("relationship") ?? ""}
                onValueChange={(v) => setValue("relationship", v as string, { shouldValidate: true })}
              >
                <SelectTrigger className={formFieldClass}><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {["Mother", "Father", "Guardian", "Other"].map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.relationship?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="email">Email Address<RequiredMark /></Label>
              <Input id="email" type="email" {...register("email")} className={formFieldClass} />
              <FieldError message={errors.email?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="phone">Mobile Phone Number<RequiredMark /></Label>
              <Input id="phone" {...register("phone")} className={formFieldClass} />
              <FieldError message={errors.phone?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="city">City<RequiredMark /></Label>
              <Input id="city" {...register("city")} className={formFieldClass} />
              <FieldError message={errors.city?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="postalCode">Postal Code<RequiredMark /></Label>
              <Input id="postalCode" {...register("postalCode")} className={formFieldClass} />
              <FieldError message={errors.postalCode?.message} />
            </div>
          </div>
        </fieldset>
      )}

      {currentStep.id === "player" && (
        <fieldset className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="min-w-0">
              <Label htmlFor="playerName">Player Full Name<RequiredMark /></Label>
              <Input id="playerName" {...register("playerName")} className={formFieldClass} />
              <FieldError message={errors.playerName?.message} />
            </div>
            <div className="min-w-0">
              <Label htmlFor="dateOfBirth">Date of Birth<RequiredMark /></Label>
              <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} className={formFieldClass} />
              <FieldError message={errors.dateOfBirth?.message} />
            </div>
            <div className="min-w-0">
              <Label>Gender<RequiredMark /></Label>
              <Select
                value={watch("gender") ?? ""}
                onValueChange={(v) => setValue("gender", v as string, { shouldValidate: true })}
              >
                <SelectTrigger className={formFieldClass}><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {["Male", "Female", "Prefer not to say"].map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.gender?.message} />
            </div>
            <div className="min-w-0">
              <Label>Preferred Playing Position<RequiredMark /></Label>
              <Select
                value={watch("position") ?? ""}
                onValueChange={(v) => setValue("position", v as string, { shouldValidate: true })}
              >
                <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Goalkeeper", "Defender", "Midfielder", "Forward", "Unsure"].map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.position?.message} />
            </div>
            <div className="min-w-0">
              <Label>Dominant Foot<RequiredMark /></Label>
              <Select
                value={watch("dominantFoot") ?? ""}
                onValueChange={(v) => setValue("dominantFoot", v as string, { shouldValidate: true })}
              >
                <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Right", "Left", "Both"].map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.dominantFoot?.message} />
            </div>
          </div>
        </fieldset>
      )}

      {currentStep.id === "program" && (
        <fieldset className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="min-w-0">
              <Label>Program of Interest<RequiredMark /></Label>
              <Select
                value={watch("program") ?? ""}
                onValueChange={(v) => setValue("program", v as string, { shouldValidate: true })}
              >
                <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Founding Program", "Premier Program", "Signature Program", "Not Sure (Request Guidance)"].map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.program?.message} />
            </div>
            <div className="min-w-0">
              <Label>Preferred Training Location<RequiredMark /></Label>
              <Select
                value={watch("location") ?? ""}
                onValueChange={(v) => setValue("location", v as string, { shouldValidate: true })}
              >
                <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
                <SelectContent>
                  {trainingLocations.map((o) => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError message={errors.location?.message} />
            </div>
          </div>
          <div className="min-w-0">
            <Label htmlFor="interestReason">Why are you interested in SpherEarth Football Academy?<RequiredMark /></Label>
            <Textarea id="interestReason" {...register("interestReason")} className={formTextareaClass} />
            <FieldError message={errors.interestReason?.message} />
          </div>
          <div className="min-w-0">
            <Label htmlFor="expectations">What are your family&apos;s expectations?<RequiredMark /></Label>
            <Textarea id="expectations" {...register("expectations")} className={formTextareaClass} />
            <FieldError message={errors.expectations?.message} />
          </div>
        </fieldset>
      )}

      {currentStep.id === "consent" && (
        <div className="space-y-3">
          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              className={formCheckboxClass}
              checked={watch("consent") === true}
              onChange={(e) => setValue("consent", e.target.checked as true, { shouldValidate: true })}
            />
            <span>
              I confirm the information is accurate, consent to contact, have read the Privacy Policy,
              and understand submission does not guarantee admission.
              <RequiredMark />
            </span>
          </label>
          <FieldError message={errors.consent?.message} />
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
            Start My Admissions Journey
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
