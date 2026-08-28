import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { commercialAcTypes, images, productPillars } from "@/lib/content";

export function ProductPillars() {
  return (
    <section id="products" className="bg-[var(--color-ivory)] px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
              Products
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-navy)] md:text-4xl">
              Air conditioning, refrigeration, and HVAC/R components
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
              Royal Cool manufactures air-conditioning equipment and distributes
              HVAC/R products across commercial and industrial applications.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {productPillars.map((pillar) => (
            <Reveal key={pillar.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-navy)]/10 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    className="product-card-image object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-[var(--color-steel)]">
                    {pillar.description}
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-2 border-t border-[var(--color-navy)]/10 pt-6">
                    {pillar.categories.slice(0, 6).map((category) => (
                      <li
                        key={category}
                        className="text-sm text-[var(--color-ink)] before:mr-2 before:text-[var(--color-gold)] before:content-['•']"
                      >
                        {category}
                      </li>
                    ))}
                    {pillar.categories.length > 6 && (
                      <li className="text-sm text-[var(--color-steel)]">
                        + {pillar.categories.length - 6} more categories
                      </li>
                    )}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="grid overflow-hidden rounded-xl border border-[var(--color-navy)]/10 bg-white lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <Image
                src={images.commercialVrf}
                alt={images.commercialVrfAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
                Commercial AC
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-navy)]">
                Commercial air conditioning range
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--color-steel)]">
                Documented commercial AC types supplied by Royal Cool include
                duct, cassette, VRF, package units, and chillers.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {commercialAcTypes.map((type) => (
                  <li
                    key={type}
                    className="rounded-lg bg-[var(--color-ivory)] px-3 py-2 text-sm text-[var(--color-ink)]"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-[var(--color-navy)]/10">
              <Image
                src={images.chillers}
                alt={images.chillersAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-[var(--color-navy)]/10">
              <Image
                src={images.ammonia}
                alt={images.ammoniaAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
