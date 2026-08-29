import { howItWorks } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function HowItWorks() {
  return (
    <section id="process" className="bg-[var(--color-ivory)] px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
              How it works
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-navy)] md:text-4xl">
              From inquiry to confirmed supply
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
              Three steps to specify equipment, confirm availability, and
              coordinate delivery for your project.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorks.map((step) => (
            <li key={step.step} className="h-full">
              <Reveal className="h-full">
                <div className="h-full rounded-xl border border-[var(--color-navy)]/10 bg-white p-8">
                  <p className="font-mono text-sm font-medium text-[var(--color-gold)]">
                    {step.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-navy)]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--color-steel)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
