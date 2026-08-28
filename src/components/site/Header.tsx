"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Envelope, Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span
        className={cn(
          "absolute left-0 top-[5px] block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          open && "top-[9px] rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
          open ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[13px] block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          open && "top-[9px] -rotate-45"
        )}
      />
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-4 pt-6">
      <a
        href="#main"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-navy)]"
      >
        Skip to content
      </a>

      <div
        className={cn(
          "pointer-events-auto mx-auto flex w-max max-w-full items-center gap-3 rounded-full border border-[var(--color-navy)]/10 bg-[var(--color-ivory)]/80 px-3 py-2 shadow-sm backdrop-blur-xl transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:gap-5 lg:px-5",
          open && "border-[var(--color-navy)]/15 bg-[var(--color-ivory)]/95 shadow-md"
        )}
      >
        <Link href="/" className="shrink-0" aria-label="Royal Cool FZCO home">
          <Image
            src="/images/logo.png"
            alt="Royal Cool FZCO logo"
            width={180}
            height={48}
            className="h-9 w-auto md:h-10"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-teal)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-steel)] transition-colors hover:text-[var(--color-navy)]"
          >
            <Phone className="size-4" weight="regular" aria-hidden="true" />
            {site.phone}
          </a>
          <Button asChild size="sm">
            <a href={`mailto:${site.email}`}>
              <Envelope className="size-4" weight="regular" aria-hidden="true" />
              Email sales
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="relative z-[60] inline-flex size-10 items-center justify-center rounded-full text-[var(--color-navy)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={cn(
          "pointer-events-none fixed inset-0 z-[55] lg:hidden",
          open && "pointer-events-auto"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/80 backdrop-blur-3xl transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <nav
          className="relative mx-auto flex h-full max-w-7xl flex-col px-4 pb-8 pt-28"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium text-white transition-[opacity,transform,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              )}
              style={{
                transitionDelay: open ? `${100 + index * 50}ms` : "0ms",
              }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={cn(
              "mt-4 flex flex-col gap-3 border-t border-white/15 pt-4 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            )}
            style={{
              transitionDelay: open
                ? `${100 + navLinks.length * 50}ms`
                : "0ms",
            }}
          >
            <a
              href={site.phoneHref}
              tabIndex={open ? 0 : -1}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white/75"
            >
              <Phone className="size-4" weight="regular" aria-hidden="true" />
              {site.phone}
            </a>
            <Button asChild className="w-full">
              <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>
                <Envelope className="size-4" weight="regular" aria-hidden="true" />
                Email sales
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
