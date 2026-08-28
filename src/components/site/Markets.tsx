import { marketsNote, offices, projectMarkets } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function Markets() {
  return (
    <section id="markets" className="bg-[var(--color-ivory)] px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
              Regional presence
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-navy)] md:text-4xl">
              Dubai headquarters and documented project markets
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
              {marketsNote}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-[var(--color-navy)]/10 bg-white p-8">
              <h3 className="text-lg font-semibold text-[var(--color-navy)]">
                Contact locations
              </h3>
              <ul className="mt-6 space-y-8">
                {offices.map((office) => (
                  <li key={office.name} className="border-t border-[var(--color-navy)]/10 pt-6 first:border-t-0 first:pt-0">
                    <p className="font-medium text-[var(--color-navy)]">{office.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-steel)]">
                      {office.location}
                    </p>
                    <div className="mt-3 flex flex-col gap-1 text-sm">
                      <a
                        href={office.phoneHref}
                        className="text-[var(--color-teal)] hover:underline"
                      >
                        {office.phone}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[var(--color-teal)] hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-xl border border-[var(--color-navy)]/10 bg-white p-8">
              <h3 className="text-lg font-semibold text-[var(--color-navy)]">
                Documented project markets
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-steel)]">
                Markets listed on the Royal Cool projects page. These are not
                presented as current office locations.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {projectMarkets.map((market) => (
                  <li
                    key={market}
                    className="rounded-lg bg-[var(--color-ivory)] px-3 py-3 text-center text-sm font-medium text-[var(--color-ink)]"
                  >
                    {market}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
