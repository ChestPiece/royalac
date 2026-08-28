import Link from "next/link";
import { Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/content";

export function ContactBand() {
  return (
    <section className="bg-[var(--color-navy)] px-4 py-24 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  Contact
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Discuss your HVAC/R requirement with Royal Cool sales
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70">
                  Email is the primary contact route for commercial inquiries.
                  Phone support is also available during business hours.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full">
                  <a href={`mailto:${site.email}`}>
                    <Envelope className="size-4" weight="regular" aria-hidden="true" />
                    {site.email}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" weight="regular" aria-hidden="true" />
                    {site.phone}
                  </a>
                </Button>
                <Link
                  href="/contact"
                  className="text-center text-sm text-white/70 transition-colors hover:text-white"
                >
                  View contact page and inquiry form
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
