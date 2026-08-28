import { faqItems } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-white px-4 py-24 md:px-6">
      <FaqJsonLd />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
              FAQ
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-navy)] md:text-4xl">
              Common questions from project teams
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
              Answers based on information documented for Royal Cool FZCO. Contact
              sales for project specific details.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqItems.map((item) => (
            <Reveal key={item.question}>
              <details className="group rounded-xl border border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
                <summary className="cursor-pointer list-none rounded-xl px-6 py-5 text-base font-semibold text-[var(--color-navy)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[var(--color-teal)] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-[var(--color-navy)]/10 px-6 py-5 text-pretty text-sm leading-relaxed text-[var(--color-steel)]">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
