import Image from "next/image";
import { Reveal } from "@/components/site/Reveal";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { authority, images } from "@/lib/content";

export function Authority() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--color-navy)] text-white">
      <ParallaxImage
        src={images.port}
        alt={images.portAlt}
        className="absolute inset-0 opacity-20"
      />
      <div className="absolute inset-0 bg-[var(--color-navy)]/85" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
                About Royal Cool
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Established in {authority.established}
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-white/75">
                Royal Cool FZCO is an {authority.identity.toLowerCase()} based
                in {authority.location}. The company manufactures and distributes
                air-conditioning equipment while supplying HVAC/R equipment and
                components from established manufacturers.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {authority.footnote}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Established", value: authority.established },
                { label: "Location", value: "JAFZA, Dubai" },
                { label: "Company type", value: authority.identity },
                { label: "Product scope", value: "AC manufacturing and HVAC/R distribution" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-wide text-white/70">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative min-h-[240px] overflow-hidden rounded-xl border border-white/10">
            <Image
              src={images.macro}
              alt={images.macroAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
