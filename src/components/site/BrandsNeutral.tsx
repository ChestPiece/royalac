import { distributedBrands, distributedNote } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function BrandsNeutral() {
  return (
    <section
      id="brands"
      className="border-y border-[var(--color-navy)]/10 bg-white px-4 py-24 md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
              Distribution
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-navy)] md:text-4xl">
              HVAC/R brands and equipment distributed by Royal Cool
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
              {distributedNote}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {distributedBrands.map((brand) => (
              <div
                key={brand}
                className="rounded-lg border border-[var(--color-navy)]/10 bg-[var(--color-ivory)] px-5 py-4"
              >
                <p className="text-base font-medium text-[var(--color-navy)]">
                  {brand}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--color-steel)]">
            Royal Cool products and distributed equipment are supplied separately.
            Contact sales for product selection and current availability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
