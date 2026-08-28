import { benefits } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function Benefits() {
  return (
    <section id="benefits" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
              Why Royal Cool
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-navy)] md:text-4xl">
              Equipment supply built for commercial projects
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
              Royal Cool combines in house air conditioning manufacturing with
              established HVAC/R distribution from Jebel Ali Free Zone.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <Reveal key={benefit.title}>
              <article className="h-full rounded-xl border border-[var(--color-navy)]/10 bg-[var(--color-ivory)] p-8">
                <h3 className="text-lg font-semibold text-[var(--color-navy)]">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--color-steel)]">
                  {benefit.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
