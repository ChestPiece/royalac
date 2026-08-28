import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use for the Royal Cool FZCO website.",
};

export default function TermsPage() {
  return (
    <div className="bg-[var(--color-ivory)]">
      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-navy)] px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Legal
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of use
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <div className="space-y-6 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
          <p>
            This website is provided by Royal Cool FZCO for general information
            about our air conditioning, refrigeration, and HVAC/R distribution
            activities. Product specifications, availability, and pricing are
            subject to confirmation by our sales team.
          </p>
          <p>
            Content on this site does not constitute a binding offer. Commercial
            terms are agreed separately in quotations, purchase orders, or
            supply contracts.
          </p>
          <p>
            For commercial inquiries, contact{" "}
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
