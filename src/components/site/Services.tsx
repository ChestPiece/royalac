import { services } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function Services() {
  return (
    <section id="services" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
              Services
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-navy)] md:text-4xl">
              Installation and maintenance support
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
              Supporting services for equipment supplied through Royal Cool. Product
              supply remains the primary commercial focus.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Reveal key={service.title}>
              <article className="h-full rounded-xl border border-[var(--color-navy)]/10 bg-[var(--color-ivory)] p-8">
                <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--color-steel)]">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
