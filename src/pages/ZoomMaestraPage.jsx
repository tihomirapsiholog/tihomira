import { ArrowRight } from 'lucide-react';

export default function ZoomMaestraPage({ t, setCurrentPage }) {
  return (
    <div className="bg-[#0b1220]">
      <section className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            {t.zoom.eyebrow}
          </p>
          <h1 className="mb-6 font-serif text-5xl text-white sm:text-6xl">
            {t.zoom.title}
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-300">
            {t.zoom.intro}
          </p>
        </div>
      </section>
              <nav className="sticky top-24 z-30 border-y border-yellow-700/20 bg-[#0b1220]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-4 text-sm text-slate-300 sm:px-6 lg:px-8">
          {[
            ['Overview', '#overview'],
            ['For whom', '#for-whom'],
            ['Support', '#support'],
            ['Packages', '#packages'],
            ['Why me', '#why-me'],
            ['Testimonials', '#testimonials'],
            ['Contact', '#contact-zoom'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-full border border-transparent px-4 py-2 transition hover:border-yellow-500/40 hover:bg-yellow-500/10 hover:text-yellow-100"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
      <section id="overview" className="scroll-mt-40 bg-[#10192c] py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-slate-300">{t.zoom.lead1}</p>
          <p className="text-lg leading-relaxed text-slate-300">{t.zoom.lead2}</p>
          <p className="text-lg leading-relaxed text-slate-300">{t.zoom.lead3}</p>
        </div>
      </section>

      <section id="for-whom" className="scroll-mt-40 bg-[#0b1220] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-3xl text-white">
            {t.zoom.audienceTitle}
          </h2>
          <p className="mb-6 leading-relaxed text-slate-300">
            {t.zoom.audienceText}
          </p>
          <div className="rounded-2xl bg-[#121c31] p-8">
            <ul className="space-y-4 text-slate-300">
              {[t.zoom.audienceList1, t.zoom.audienceList2, t.zoom.audienceList3, t.zoom.audienceList4, t.zoom.audienceList5].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 text-yellow-400">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-slate-400">
              {t.zoom.audienceClosing}
            </p>
          </div>
        </div>
      </section>

      <section id="support" className="scroll-mt-40 bg-[#10192c] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-3xl text-white">
            {t.zoom.supportTitle}
          </h2>
          <p className="mb-10 leading-relaxed text-slate-300">
            {t.zoom.supportIntro}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: t.zoom.supportBlock1Title,
                items: [t.zoom.supportBlock1Item1, t.zoom.supportBlock1Item2, t.zoom.supportBlock1Item3],
              },
              {
                title: t.zoom.supportBlock2Title,
                items: [t.zoom.supportBlock2Item1, t.zoom.supportBlock2Item2, t.zoom.supportBlock2Item3],
              },
              {
                title: t.zoom.supportBlock3Title,
                items: [t.zoom.supportBlock3Item1, t.zoom.supportBlock3Item2, t.zoom.supportBlock3Item3],
              },
              {
                title: t.zoom.supportBlock4Title,
                items: [t.zoom.supportBlock4Item1, t.zoom.supportBlock4Item2],
              },
            ].map((block, i) => (
              <div key={i} className="rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8">
                <h3 className="mb-4 text-xl font-serif text-white">{block.title}</h3>
                <ul className="space-y-3 text-slate-300">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-1 text-yellow-400">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl leading-relaxed text-slate-300">
            {t.zoom.supportClosing}
          </p>
        </div>
      </section>

      <section id="packages" className="scroll-mt-40 bg-[#0b1220] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl text-white">
            {t.zoom.packagesTitle}
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: t.zoom.package1Title,
                text: t.zoom.package1Text,
                items: [t.zoom.package1Item1, t.zoom.package1Item2, t.zoom.package1Item3, t.zoom.package1Item4, t.zoom.package1Item5],
                ideal: t.zoom.package1Ideal,
              },
              {
                title: t.zoom.package2Title,
                text: t.zoom.package2Text,
                items: [t.zoom.package2Item1, t.zoom.package2Item2, t.zoom.package2Item3, t.zoom.package2Item4, t.zoom.package2Item5, t.zoom.package2Item6],
                ideal: t.zoom.package2Ideal,
              },
              {
                title: t.zoom.package3Title,
                text: t.zoom.package3Text,
                items: [t.zoom.package3Item1, t.zoom.package3Item2, t.zoom.package3Item3, t.zoom.package3Item4, t.zoom.package3Item5, t.zoom.package3Item6],
                ideal: t.zoom.package3Ideal,
              },
            ].map((pkg, i) => (
              <div key={i} className="rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8">
                <h3 className="mb-3 text-2xl font-serif text-white">{pkg.title}</h3>
                <p className="mb-5 leading-relaxed text-slate-300">{pkg.text}</p>
                <ul className="mb-5 space-y-3 text-slate-300">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-1 text-yellow-400">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed text-slate-400">{pkg.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-me" className="scroll-mt-40 bg-[#10192c] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-3xl text-white">
            {t.zoom.whyTitle}
          </h2>
          <p className="mb-4 leading-relaxed text-slate-300">{t.zoom.whyIntro}</p>
          <p className="mb-10 leading-relaxed text-slate-300">{t.zoom.whyIntro2}</p>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: t.zoom.why1Title, text: t.zoom.why1Text },
              { title: t.zoom.why2Title, text: t.zoom.why2Text },
              { title: t.zoom.why3Title, text: t.zoom.why3Text },
              { title: t.zoom.why4Title, text: t.zoom.why4Text },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-[#121c31] p-8">
                <h3 className="mb-3 text-xl font-serif text-white">{item.title}</h3>
                <p className="leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-40 bg-[#0b1220] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400 text-center">
            {t.zoom.testimonialsLabel}
          </p>
          <h2 className="mb-12 font-serif text-3xl text-white text-center">
            {t.zoom.testimonialsTitle}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8">
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-yellow-400">{t.zoom.testimonial1Name}</div>
              <div className="mb-6 text-4xl font-serif text-yellow-700/40">"</div>
              <p className="font-serif text-lg font-light italic leading-relaxed text-slate-200">
                {t.zoom.testimonial1Text}
              </p>
              <div className="mt-8 border-t border-slate-700 pt-6">
                <p className="text-xs leading-relaxed text-slate-500">{t.zoom.testimonial1Role}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8">
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-yellow-400">{t.zoom.testimonial2Name}</div>
              <div className="mb-6 text-4xl font-serif text-yellow-700/40">"</div>
              <p className="font-serif text-lg font-light italic leading-relaxed text-slate-200">
                {t.zoom.testimonial2Text}
              </p>
              <div className="mt-8 border-t border-slate-700 pt-6">
                <p className="text-xs leading-relaxed text-slate-500">{t.zoom.testimonial2Role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

          <section id="contact-zoom" className="scroll-mt-40 bg-gradient-to-r from-[#0a0f1a] via-[#111827] to-[#0a0f1a] py-20 text-white">        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-4xl">{t.zoom.ctaTitle}</h2>
          <p className="mb-4 text-lg leading-relaxed text-slate-300">
            {t.zoom.ctaText}
          </p>
          <p className="mb-8 text-lg leading-relaxed text-slate-300">
            {t.zoom.ctaText2}
          </p>
          <button
            onClick={() => setCurrentPage('/contact')}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
          >
            {t.zoom.ctaButton}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
