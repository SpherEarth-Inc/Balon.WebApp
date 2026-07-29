"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
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
import { formFieldClass, formTextareaClass } from "@/components/forms/form-field-styles";
import { FORM_SLUGS, isFormsNotConfigured, submitForm } from "@/lib/api/forms";
import { cn } from "@/lib/utils";
import { enquiryDepartments } from "@/lib/content/navigation";

const enquirySchema = z.object({
  department: z.string().min(1, "Required"),
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  subject: z.string().min(3, "Required"),
  message: z.string().min(10, "Please provide more detail"),
  contactMethod: z.string().min(1, "Required"),
  consent: z.literal(true, { message: "Consent required" }),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export function EnquiryForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { contactMethod: "Email", department: enquiryDepartments[0] },
  });

  async function onSubmit(data: EnquiryFormData) {
    try {
      await submitForm(FORM_SLUGS.enquiry, { data });
      toast.success("Enquiry sent!", {
        description: "Our team will respond through official SpherEarth channels.",
      });
      reset();
    } catch (error) {
      if (isFormsNotConfigured(error)) {
        toast.error("Form submission is not configured yet.");
        return;
      }
      toast.error(error instanceof Error ? error.message : "Unable to send enquiry.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="min-w-0">
        <Label>Department *</Label>
        <Select defaultValue={enquiryDepartments[0]} onValueChange={(v) => setValue("department", v as string)}>
          <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
          <SelectContent>
            {enquiryDepartments.map((d) => (
              <SelectItem key={d} value={d}>{d}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="min-w-0">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" {...register("name")} className={formFieldClass} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="min-w-0">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" {...register("email")} className={formFieldClass} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="min-w-0">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" {...register("phone")} className={formFieldClass} />
        </div>
        <div className="min-w-0">
          <Label htmlFor="organization">Organization</Label>
          <Input id="organization" {...register("organization")} className={formFieldClass} />
        </div>
      </div>
      <div className="min-w-0">
        <Label htmlFor="subject">Subject *</Label>
        <Input id="subject" {...register("subject")} className={formFieldClass} />
        {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
      </div>
      <div className="min-w-0">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" {...register("message")} className={cn(formTextareaClass, "min-h-32")} />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <div className="min-w-0">
        <Label>Preferred Method of Contact *</Label>
        <Select defaultValue="Email" onValueChange={(v) => setValue("contactMethod", v as string)}>
          <SelectTrigger className={formFieldClass}><SelectValue /></SelectTrigger>
          <SelectContent>
            {["Email", "Telephone", "WhatsApp"].map((m) => (
              <SelectItem key={m} value={m}>{m}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          className="mt-1"
          checked={watch("consent") === true}
          onChange={(e) => setValue("consent", e.target.checked as true)}
        />
        <span>I consent to SpherEarth Football Academy contacting me regarding my enquiry.</span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}
      <Button type="submit" disabled={isSubmitting} className="h-12 rounded-none bg-brand-green hover:bg-brand-green/90">
        Send Enquiry
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
