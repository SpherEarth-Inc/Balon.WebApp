"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
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
import { formFieldClass, formTextareaClass } from "@/components/forms/form-field-styles";
import { FORM_SLUGS, isFormsNotConfigured, submitForm } from "@/lib/api/forms";

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
  consent: z.literal(true, { message: "Consent required" }),
});

type ApplyFormData = z.infer<typeof applySchema>;

interface ApplyFormProps {
  onSuccess?: () => void;
}

export function ApplyForm({ onSuccess }: ApplyFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
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

  async function onSubmit(data: ApplyFormData) {
    try {
      await submitForm(FORM_SLUGS.admissionsApply, { data });
      toast.success("Application submitted!", {
        description: "Our Admissions Team will contact you through verified channels.",
      });
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
      <fieldset className="space-y-4">
        <legend className="mb-4 text-lg font-bold uppercase">Parent / Guardian Information</legend>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="min-w-0">
            <Label htmlFor="parentName">Parent / Guardian Full Name *</Label>
            <Input id="parentName" {...register("parentName")} className={formFieldClass} />
            {errors.parentName && <p className="text-xs text-destructive">{errors.parentName.message}</p>}
          </div>
          <div className="min-w-0">
            <Label>Relationship to Player *</Label>
            <Select onValueChange={(v) => setValue("relationship", v as string)}>
              <SelectTrigger className={formFieldClass}><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                {["Mother", "Father", "Guardian", "Other"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.relationship && <p className="text-xs text-destructive">{errors.relationship.message}</p>}
          </div>
          <div className="min-w-0">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" {...register("email")} className={formFieldClass} />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div className="min-w-0">
            <Label htmlFor="phone">Mobile Phone Number *</Label>
            <Input id="phone" {...register("phone")} className={formFieldClass} />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
          </div>
          <div className="min-w-0">
            <Label htmlFor="city">City *</Label>
            <Input id="city" {...register("city")} className={formFieldClass} />
            {errors.city && <p className="text-xs text-destructive">{errors.city.message}</p>}
          </div>
          <div className="min-w-0">
            <Label htmlFor="postalCode">Postal Code *</Label>
            <Input id="postalCode" {...register("postalCode")} className={formFieldClass} />
            {errors.postalCode && <p className="text-xs text-destructive">{errors.postalCode.message}</p>}
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="mb-4 text-lg font-bold uppercase">Player Information</legend>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="min-w-0">
            <Label htmlFor="playerName">Player Full Name *</Label>
            <Input id="playerName" {...register("playerName")} className={formFieldClass} />
            {errors.playerName && <p className="text-xs text-destructive">{errors.playerName.message}</p>}
          </div>
          <div className="min-w-0">
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} className={formFieldClass} />
            {errors.dateOfBirth && <p className="text-xs text-destructive">{errors.dateOfBirth.message}</p>}
          </div>
          <div className="min-w-0">
            <Label>Gender *</Label>
            <Select onValueChange={(v) => setValue("gender", v as string)}>
              <SelectTrigger className={formFieldClass}><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                {["Male", "Female", "Prefer not to say"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-0">
            <Label>Preferred Playing Position *</Label>
            <Select defaultValue="Unsure" onValueChange={(v) => setValue("position", v as string)}>
              <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
              <SelectContent>
                {["Goalkeeper", "Defender", "Midfielder", "Forward", "Unsure"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-0">
            <Label>Dominant Foot *</Label>
            <Select defaultValue="Right" onValueChange={(v) => setValue("dominantFoot", v as string)}>
              <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
              <SelectContent>
                {["Right", "Left", "Both"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="mb-4 text-lg font-bold uppercase">Program Interest</legend>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="min-w-0">
            <Label>Program of Interest *</Label>
            <Select defaultValue="Not Sure (Request Guidance)" onValueChange={(v) => setValue("program", v as string)}>
              <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
              <SelectContent>
                {["Founding Program", "Premier Program", "Signature Program", "Not Sure (Request Guidance)"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-0">
            <Label>Preferred Training Location *</Label>
            <Select defaultValue="Toronto Core" onValueChange={(v) => setValue("location", v as string)}>
              <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
              <SelectContent>
                {trainingLocations.map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="min-w-0">
          <Label htmlFor="interestReason">Why are you interested in SpherEarth Football Academy? *</Label>
          <Textarea id="interestReason" {...register("interestReason")} className={formTextareaClass} />
          {errors.interestReason && <p className="text-xs text-destructive">{errors.interestReason.message}</p>}
        </div>
        <div className="min-w-0">
          <Label htmlFor="expectations">What are your family&apos;s expectations? *</Label>
          <Textarea id="expectations" {...register("expectations")} className={formTextareaClass} />
          {errors.expectations && <p className="text-xs text-destructive">{errors.expectations.message}</p>}
        </div>
      </fieldset>

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={watch("consent") === true}
            onChange={(e) => setValue("consent", e.target.checked as true)}
          />
          <span>
            I confirm the information is accurate, consent to contact, have read the Privacy Policy,
            and understand submission does not guarantee admission.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="h-12 rounded-none bg-brand-green hover:bg-brand-green/90">
        Start My Admissions Journey
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
