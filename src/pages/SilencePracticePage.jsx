import { useLocation } from "react-router-dom";
import translations from "../translations";

export default function SilencePracticePage() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/sr") ? "sr" : "en";
  const t = translations[lang].silencePractice;

  return (
    <main className="min-h-screen bg-bg-[#1f1f1c] text-[#f3efe6]">
      <section className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.28em] text-xs md:text-sm mb-8 text-[#9b9488]">
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
            className="inline-flex items-center rounded-full border border-[#2b2b2b]/20 px-6 py-3 text-sm tracking-wide text-[#2b2b2b] hover:bg-[#f3efe6] hover:text-[#1f1f1c] transition-colors duration-300"
          >
            {t.cta}
          </a>
        </div>
      </section>
<section className="px-6 py-24 border-t border-[#2b2b2b]/10">
  <div className="max-w-3xl mx-auto">
    <p className="uppercase tracking-[0.25em] text-xs mb-8 text-[#6f6a61]">
      {t.experimentLabel}
    </p>

    <div className="space-y-6">
      <p className="font-serif text-3xl md:text-4xl leading-tight">
        {t.experimentText1}
      </p>

      <p className="text-lg md:text-xl text-[#c8c2b8] leading-relaxed">
        {t.experimentText2}
      </p>

      <p className="text-lg leading-relaxed text-[#4a4741] max-w-2xl pt-4">
        {t.experimentText3}
      </p>
    </div>
  </div>
</section>
      <section
  id="field-notes"
  className="px-6 py-24 border-t border-[#f3efe6]/10"
>
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <p className="uppercase tracking-[0.25em] text-xs mb-6 text-[#9b9488]">
        Field Notes
      </p>

      <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#f3efe6]">
        Notes from the threshold.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <article className="border border-[#f3efe6]/10 rounded-[28px] p-8 bg-[#242420]">
        <p className="text-sm text-[#9b9488] mb-8">01</p>

        <h3 className="font-serif text-2xl leading-tight mb-6 text-[#f3efe6]">
          The body reaches for stimulation faster than I thought.
        </h3>

        <p className="text-[#c8c2b8] leading-relaxed">
          I notice how quickly silence becomes uncomfortable.
          Not dramatic silence. Just the absence of interruption.
        </p>
      </article>

      <article className="border border-[#f3efe6]/10 rounded-[28px] p-8 bg-[#242420]">
        <p className="text-sm text-[#9b9488] mb-8">02</p>

        <h3 className="font-serif text-2xl leading-tight mb-6 text-[#f3efe6]">
          Nicotine is not only addiction. It is rhythm.
        </h3>

        <p className="text-[#c8c2b8] leading-relaxed">
          Certain moments of the day seem to collapse without it.
          The body keeps searching for punctuation.
        </p>
      </article>

      <article className="border border-[#f3efe6]/10 rounded-[28px] p-8 bg-[#242420]">
        <p className="text-sm text-[#9b9488] mb-8">03</p>

        <h3 className="font-serif text-2xl leading-tight mb-6 text-[#f3efe6]">
          Attention has weight.
        </h3>

        <p className="text-[#c8c2b8] leading-relaxed">
          What we repeatedly return to slowly becomes
          the architecture of the nervous system.
        </p>
      </article>

    </div>
  </div>
</section>
    </main>
  );
}