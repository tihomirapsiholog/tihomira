import { useLocation } from "react-router-dom";
import translations from "../translations";
import SEO from "../components/SEO";

export default function SilencePracticePage({ language = "en" }) {
  const location = useLocation();
  const lang = location.pathname.startsWith("/sr") ? "sr" : language;
  const isSerbian = lang === "sr";
  const content = translations[lang].silencePractice;

  return (
    <>
      <SEO
        title={
          isSerbian
            ? "Praksa tišine | Tiha Psiha"
            : "The Practice of Silence | Tiha Psiha"
        }
        description={
          isSerbian
            ? "Istraživanje tišine, pažnje, stimulacije i nervnog sistema tokom pripreme za deset dana tišine."
            : "A real-time exploration of silence, attention, stimulation and the nervous system during preparation for ten days of silence."
        }
        url={
          isSerbian
            ? "https://tihomira.info/sr/praksa-tisine"
            : "https://tihomira.info/en/silence-practice"
        }
      />

      <main className="min-h-screen bg-[#1f1f1c] text-[#f3efe6]">
        <section className="min-h-screen flex items-center px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <p className="uppercase tracking-[0.28em] text-xs md:text-sm mb-8 text-[#9b9488]">
              Tiha Psiha · {content.label}
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-[-0.03em] max-w-4xl mb-8">
              {content.heroTitle}
              <br />
              <span className="italic text-[#9b9488]">
                {content.heroTitleEm}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-[#c8c2b8] mb-10">
              {content.heroSubtitle}
            </p>

            <a
              href="#field-notes"
              className="inline-flex items-center rounded-full border border-[#f3efe6]/20 px-6 py-3 text-sm tracking-wide text-[#f3efe6] hover:bg-[#f3efe6] hover:text-[#1f1f1c] transition-colors duration-300"
            >
              {content.cta}
            </a>
          </div>
        </section>

        <section className="px-6 py-24 border-t border-[#f3efe6]/10">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.25em] text-xs mb-8 text-[#9b9488]">
              {content.experimentLabel}
            </p>

            <div className="space-y-6">
              <p className="font-serif text-3xl md:text-4xl leading-tight text-[#f3efe6]">
                {content.experimentText1}
              </p>

              <p className="text-lg md:text-xl text-[#c8c2b8] leading-relaxed">
                {content.experimentText2}
              </p>

              <p className="text-lg leading-relaxed text-[#c8c2b8] max-w-2xl pt-4">
                {content.experimentText3}
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
                {content.fieldNotesLabel}
              </p>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#f3efe6]">
                {content.fieldNotesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.fieldNotes.map((note, index) => (
                <article
                  key={index}
                  className="border border-[#f3efe6]/10 rounded-[28px] p-8 bg-[#242420]"
                >
                  <p className="text-sm text-[#9b9488] mb-8">
                    {note.number}
                  </p>

                  <h3 className="font-serif text-2xl leading-tight mb-6 text-[#f3efe6]">
                    {note.title}
                  </h3>

                  <p className="text-[#c8c2b8] leading-relaxed">
                    {note.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}