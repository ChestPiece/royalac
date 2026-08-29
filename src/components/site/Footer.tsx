import Image from "next/image";
import Link from "next/link";
import { navLinks, offices, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="space-y-4 lg:col-span-2">
          <Image
            src="/images/logo.png"
            alt="Royal Cool FZCO logo"
            width={180}
            height={48}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="max-w-md text-pretty text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-gold)]">
            Navigation
          </h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-gold)]">
            Contact
          </h2>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>{offices[0].location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between md:px-6">
          <p>Royal Cool © {new Date().getFullYear()}</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white/80">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white/80">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
