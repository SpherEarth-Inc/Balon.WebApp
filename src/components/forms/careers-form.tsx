"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { careerFormRoles } from "@/lib/content/pages/careers";
import {
  formCheckboxClass,
  formFieldClass,
  formTextareaClass,
} from "@/components/forms/form-field-styles";
import { RequiredMark } from "@/components/forms/required-mark";
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
import { FORM_SLUGS, isFormsNotConfigured, submitForm } from "@/lib/api/forms";
import { cn } from "@/lib/utils";

const careersSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Required"),
  role: z.string().min(1, "Required"),
  message: z.string().min(10, "Required"),
  consent: z.literal(true, { message: "" }),
});

type CareersFormData = z.infer<typeof careersSchema>;

function getInitialRole(roleParam: string | null) {
  if (!roleParam) return careerFormRoles[0];
  const decoded = decodeURIComponent(roleParam);
  return careerFormRoles.find((role) => role === decoded) ?? careerFormRoles[0];
}

export function CareersForm() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const initialRole = getInitialRole(roleParam);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
    defaultValues: { role: initialRole },
  });

  useEffect(() => {
    const role = getInitialRole(roleParam);
    setValue("role", role);
  }, [roleParam, setValue]);

  const selectedRole = watch("role");

  async function onSubmit(data: CareersFormData) {
    try {
      await submitForm(FORM_SLUGS.careers, { data });
      toast.success("Application received!", {
        description:
          "Our team will review your submission and respond if there is a suitable opportunity.",
      });
      reset();
    } catch (error) {
      if (isFormsNotConfigured(error)) {
        toast.error("Form submission is not configured yet.");
        return;
      }
      toast.error(error instanceof Error ? error.message : "Unable to submit application.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="min-w-0">
          <Label htmlFor="name">Full Name<RequiredMark /></Label>
          <Input id="name" {...register("name")} className={formFieldClass} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="min-w-0">
          <Label htmlFor="email">Email<RequiredMark /></Label>
          <Input id="email" type="email" {...register("email")} className={formFieldClass} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="min-w-0">
          <Label htmlFor="phone">Phone<RequiredMark /></Label>
          <Input id="phone" {...register("phone")} className={formFieldClass} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="min-w-0">
          <Label>Role of Interest<RequiredMark /></Label>
          <Select value={selectedRole} onValueChange={(v) => setValue("role", v as string)}>
            <SelectTrigger className={formFieldClass}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {careerFormRoles.map((r) => (
                <SelectItem key={r} value={r}>{r}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="min-w-0">
        <Label htmlFor="message">Tell us about yourself<RequiredMark /></Label>
        <Textarea id="message" {...register("message")} className={cn(formTextareaClass, "min-h-32")} />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          className={formCheckboxClass}
          checked={watch("consent") === true}
          onChange={(e) => setValue("consent", e.target.checked as true)}
        />
        <span>
          I consent to SpherEarth Football Academy contacting me regarding career opportunities.
          <RequiredMark />
        </span>
      </label>
      {errors.consent?.message?.trim() ? (
        <p className="text-xs text-destructive">{errors.consent.message}</p>
      ) : null}
      <Button type="submit" disabled={isSubmitting} className="h-12 rounded-none bg-brand-green hover:bg-brand-green/90">
        Submit Application
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
