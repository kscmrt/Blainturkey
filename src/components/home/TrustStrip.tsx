import Reveal from "@/components/ui/Reveal";

const FACTS = [
  { value: "1971", label: "Kuruluş yılı" },
  { value: "60+", label: "Ülkeye sevkiyat" },
  { value: "ISO 9001", label: "Sertifikalı üretim" },
  { value: "%100", label: "Almanya'da üretim" },
] as const;

/** Rakamlarla güven şeridi — tamamen statik, Server Component. */
export default function TrustStrip() {
  return (
    <section
      aria-label="Blain hakkında rakamlar"
      className="border-y border-steel-200 bg-steel-50 px-5 py-16 sm:px-8"
    >
      <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 md:grid-cols-4">
        {FACTS.map((fact, index) => (
          <Reveal key={fact.label} delay={index * 0.07}>
            <div className="text-center md:text-left">
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-bold tracking-tight text-brand-600 tabular-nums">
                {fact.value}
              </dd>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-steel-500">
                {fact.label}
              </p>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
