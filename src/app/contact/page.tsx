import type { Metadata } from "next";
import { Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { offices, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Royal Cool FZCO in Jebel Ali Free Zone, Dubai, or the Iraq branch for HVAC and refrigeration equipment inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-ivory)]">
      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-navy)] px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Contact
          </p>
          <h1 className="mt-3 max-w-[680px] text-balance bg-gradient-to-r from-white to-[#9B9B9B] bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent md:text-5xl">
            Discuss your HVAC/R requirement
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75">
            Reach Royal Cool sales by email or phone. Use the inquiry form to
            prepare a structured message.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-8">
            <div className="rounded-xl border border-[var(--color-navy)]/10 bg-white p-8">
              <h2 className="text-xl font-semibold text-[var(--color-navy)]">
                Primary contact
              </h2>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-[var(--color-teal)] hover:underline"
                >
                  <Envelope className="size-5" weight="regular" aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-[var(--color-teal)] hover:underline"
                >
                  <Phone className="size-5" weight="regular" aria-hidden="true" />
                  {site.phone}
                </a>
              </div>
            </div>

            {offices.map((office) => (
              <div
                key={office.name}
                className="rounded-xl border border-[var(--color-navy)]/10 bg-white p-8"
              >
                <h2 className="text-lg font-semibold text-[var(--color-navy)]">
                  {office.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-steel)]">
                  {office.location}
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href={office.phoneHref}
                    className="block text-[var(--color-teal)] hover:underline"
                  >
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="block text-[var(--color-teal)] hover:underline"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-[var(--color-navy)]/10 bg-white p-8">
            <h2 className="text-xl font-semibold text-[var(--color-navy)]">
              Inquiry form
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-steel)]">
              Submitting opens your email client with a prepared message to{" "}
              {site.email}.
            </p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
