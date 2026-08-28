import Link from "next/link";
import { Envelope } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/site/ParallaxImage";
import { Reveal } from "@/components/site/Reveal";
import { images, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[var(--color-navy)] text-white md:min-h-[85vh]">
      <ParallaxImage
        src={images.hero}
        alt={images.heroAlt}
        className="absolute inset-0 opacity-40"
        imageClassName="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-[var(--color-navy)]/80" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-20 md:min-h-[85vh] md:px-6 md:py-28">
        <Reveal>
          <div className="max-w-[680px]">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
              Established 2001 · Jebel Ali Free Zone
            </p>
            <h1 className="text-balance bg-gradient-to-r from-white to-[#9B9B9B] bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent md:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-[680px] text-pretty text-lg leading-relaxed text-white/75">
              {site.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href={`mailto:${site.email}`}>
                  <Envelope className="size-4" weight="regular" aria-hidden="true" />
                  Discuss your requirement
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#products">Explore products</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
