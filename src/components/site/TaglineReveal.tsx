"use client";

import { useEffect, useRef, useState } from "react";
import { taglineReveal } from "@/lib/content";
import { cn } from "@/lib/utils";

const TRIGGER_MARGIN = "0px 0px -50% 0px";

function Word({ word }: { word: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0, rootMargin: TRIGGER_MARGIN }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block transition-[color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
        active ? "text-[var(--color-navy)]" : "text-[var(--color-navy)]/50"
      )}
    >
      {word}
      {"\u00A0"}
    </span>
  );
}

export function TaglineReveal() {
  const words = `${taglineReveal.line1} ${taglineReveal.line2}`.split(" ");

  return (
    <section
      id="tagline"
      aria-label="Company tagline"
      className="bg-[var(--color-ivory)] px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[680px]">
        <p className="text-balance text-4xl font-semibold leading-tight tracking-tight text-[var(--color-navy)] md:text-5xl">
          {words.map((word, index) => (
            <Word key={`${word}-${index}`} word={word} />
          ))}
        </p>
      </div>
    </section>
  );
}
