import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-4 py-24 md:px-6">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-teal)]">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-[var(--color-navy)]">
        Page not found
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-steel)]">
        The page you requested is not available. Contact Royal Cool sales for
        product or project inquiries.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
        <Button asChild variant="secondary">
          <a href={`mailto:${site.email}`}>Email sales</a>
        </Button>
      </div>
    </div>
  );
}
