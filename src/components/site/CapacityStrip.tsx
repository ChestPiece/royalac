import { capacityData } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";

export function CapacityStrip() {
  return (
    <section
      aria-label="Verified capacity ranges"
      className="border-y border-[var(--color-navy)]/10 bg-[var(--color-navy)] text-white"
    >
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-3">
          {capacityData.map((item, index) => (
            <div
              key={item.label}
              className={`px-6 py-8 md:px-8 ${
                index > 0
                  ? "border-t border-white/10 md:border-t-0 md:border-l md:border-white/10"
                  : ""
              }`}
            >
              <p className="font-mono text-3xl font-medium tracking-tight text-[var(--color-gold)] md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/65">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
