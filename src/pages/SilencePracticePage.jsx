import { useLocation } from "react-router-dom";
import translations from "../translations";

export default function SilencePracticePage() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/sr") ? "sr" : "en";
  const t = translations[lang].silencePractice;

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#2b2b2b]">
      <section className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.28em] text-xs md:text-sm mb-8 text-[#6f6a61]">
            Tiha Psiha · {t.label}
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-[-0.03em] max-w-4xl mb-8">
            {t.heroTitle}
            <br />
            <span className="italic text-[#6f6a61]">{t.heroTitleEm}</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-[#4a4741] mb-10">
            {t.heroSubtitle}
          </p>

          <a
            href="#field-notes"
            className="inline-flex items-center rounded-full border border-[#2b2b2b]/20 px-6 py-3 text-sm tracking-wide text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-[#f5f1ea] transition-colors duration-300"
          >
            {t.cta}
          </a>
        </div>
      </section>

      <section id="field-notes" className="px-6 py-24 border-t border-[#2b2b2b]/10">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-xs mb-6 text-[#6f6a61]">
            Field Notes
          </p>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Coming soon.
          </h2>

          <p className="text-lg leading-relaxed text-[#4a4741]">
            This space will gather short reflections from the process — notes on
            attention, impulses, silence, body, and the subtle ways we return to
            ourselves.
          </p>
        </div>
      </section>
    </main>
  );
}