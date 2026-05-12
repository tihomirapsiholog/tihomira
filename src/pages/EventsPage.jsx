import { ArrowRight } from 'lucide-react';

export default function EventsPage({ t, setCurrentPage }) {
  return (
    <div className="bg-[#0b1220] text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
          {t.events.label}
        </p>

        <h1 className="max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl">
          {t.events.heroTitle}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
          {t.events.heroIntro}
        </p>
      </section>

      <section className="border-t border-yellow-700/10 bg-[#0e1628] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 font-serif text-3xl text-white md:text-4xl">
            {t.events.currentTitle}
          </h2>

          <div className="rounded-[28px] border border-yellow-700/20 bg-[#121c31] p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-yellow-400/80">
              {t.events.event1Type}
            </p>

            <h3 className="mb-4 font-serif text-3xl leading-tight text-white md:text-4xl">
              {t.events.event1Title}
            </h3>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              {t.events.event1Text}
            </p>

            <button
              onClick={() => setCurrentPage('/contact')}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 px-7 py-3 text-sm tracking-wide text-yellow-100 transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-950"
            >
              {t.events.event1Button}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-yellow-700/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
            {t.events.inquiryTitle}
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            {t.events.inquiryText}
          </p>
        </div>
      </section>
    </div>
  );
}