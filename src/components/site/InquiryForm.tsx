"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  requirement: "",
};

export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.requirement.trim()) next.requirement = "Requirement is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent("Royal Cool inquiry");
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company || "Not provided"}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        "",
        "Requirement:",
        form.requirement,
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const fields: Array<{
    id: keyof FormState;
    label: string;
    type?: string;
    required?: boolean;
    multiline?: boolean;
  }> = [
    { id: "name", label: "Name", required: true },
    { id: "company", label: "Company" },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "phone", label: "Phone", type: "tel" },
    { id: "requirement", label: "Requirement / Message", required: true, multiline: true },
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {fields.map((field) => {
        const common = cn(
          "mt-2 w-full rounded-lg border bg-white px-3 py-2 text-base text-[var(--color-ink)] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)]/20",
          errors[field.id]
            ? "border-red-500"
            : "border-[var(--color-navy)]/15"
        );

        return (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="text-sm font-medium text-[var(--color-navy)]"
            >
              {field.label}
              {field.required ? " *" : ""}
            </label>
            {field.multiline ? (
              <textarea
                id={field.id}
                rows={5}
                value={form.requirement}
                onChange={(event) => update("requirement", event.target.value)}
                className={common}
                aria-invalid={Boolean(errors.requirement)}
                aria-describedby={errors.requirement ? `${field.id}-error` : undefined}
              />
            ) : (
              <input
                id={field.id}
                type={field.type ?? "text"}
                value={form[field.id]}
                onChange={(event) => update(field.id, event.target.value)}
                className={common}
                aria-invalid={Boolean(errors[field.id])}
                aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
              />
            )}
            {errors[field.id] && (
              <p id={`${field.id}-error`} className="mt-2 text-sm text-red-600">
                {errors[field.id]}
              </p>
            )}
          </div>
        );
      })}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send inquiry by email
      </Button>
    </form>
  );
}
