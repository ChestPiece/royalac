import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for Royal Cool FZCO website visitors and inquiry contacts.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--color-ivory)]">
      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-navy)] px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Legal
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy policy
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <div className="space-y-6 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
          <p>
            Royal Cool FZCO collects information you provide through email, phone,
            or the contact inquiry form, such as your name, company, email
            address, phone number, and project requirements.
          </p>
          <p>
            We use this information only to respond to commercial inquiries,
            prepare quotations, and coordinate product supply or project support.
            We do not sell personal data to third parties.
          </p>
          <p>
            For questions about how your data is handled, contact{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-[var(--color-teal)] hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
        <p className="mt-10 text-sm text-[var(--color-steel)]">
          <Link href="/" className="text-[var(--color-teal)] hover:underline">
            Return home
          </Link>
        </p>
      </section>
    </div>
  );
}
