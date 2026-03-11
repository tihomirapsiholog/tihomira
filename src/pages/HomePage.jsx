import { ArrowRight } from 'lucide-react';

export default function HomePage({ setCurrentPage, t }) {
  return (
    <div className="space-y-0">
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <img
          src="/silhouette.jpg"
          alt="Silhouette"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            <h1 className="font-serif text-6xl leading-tight text-yellow-100 lg:text-7xl">
              Tihomira Stanojević
            </h1>
            <p className="whitespace-pre-line text-xl font-light italic text-slate-200">
              {t.home.tagline}
            </p>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-300">
              {t.home.intro}
            </p>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              {t.home.subline}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0e1628] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center font-serif text-4xl text-white">
            {t.home.howIWork}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-400">
            {t.home.workDescription}
          </p>

         <div className="grid gap-8 md:grid-cols-3">
            {[
             { icon: '↻', title: t.home.pillar1Title, desc: t.home.pillar1Desc, question: t.home.pillar1Question },
              { icon: '◯', title: t.home.pillar2Title, desc: t.home.pillar2Desc, question: t.home.pillar2Question },
            { icon: '✦', title: t.home.pillar3Title, desc: t.home.pillar3Desc, question: t.home.pillar3Question },
            ].map((item, i) => (
              <div
                key={i}
                className="group h-80 cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative h-full w-full transition-transform duration-700"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'rotateY(180deg)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'rotateY(0deg)'}
                >
                  <div
                    className="absolute inset-0 rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8 hover:border-yellow-500/40 hover:shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="mb-4 text-4xl text-yellow-400">{item.icon}</div>
                    <h3 className="mb-3 font-serif text-xl text-white">{item.title}</h3>
                    <p className="leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl border border-yellow-500/40 bg-[#1a2540] p-8 flex items-center justify-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <p className="text-center text-lg italic leading-relaxed text-yellow-100">
                      {item.question}
                    </p>
                  </div>
                </div>
              </div>
            ))}
         </div>
        </div>
      </section>

      <section className="bg-[#0b1220] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 font-serif text-3xl text-white">
              {t.home.toolsTitle}
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t.home.toolsText}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-yellow-700/20 shadow-2xl">
            <img
              src="/instruments.jpg"
              alt="Instruments"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0e1628] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl text-white">
            {t.home.offerings}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: t.home.offering1, subtitle: t.home.offering1Sub, href: '/work-with-me#individual' },
              { title: t.home.offering2, subtitle: t.home.offering2Sub, href: '/work-with-me#groups' },
              { title: t.home.offering3, subtitle: t.home.offering3Sub, href: '/work-with-me#sound' },
              { title: t.home.offering4, subtitle: t.home.offering4Sub, href: '/zoom-maestra' },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(item.href)}
                className="rounded-xl border-l-4 border-yellow-500/50 bg-[#121c31] p-6 text-left transition-all hover:border-yellow-400 hover:bg-[#16223b]"
              >
                <h3 className="text-lg font-serif text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10192c] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
                Zoom Maestra
              </p>
              <h2 className="mb-4 font-serif text-3xl text-white">
                {t.home.zoomTitle}
              </h2>
              <p className="leading-relaxed text-slate-300">
                {t.home.zoomText}
              </p>
            </div>
            <div className="flex md:justify-end">
              <button
                onClick={() => setCurrentPage('/zoom-maestra')}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
              >
                {t.home.zoomButton}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0a0f1a] via-[#111827] to-[#0a0f1a] py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-4xl">{t.home.ready}</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-300">
            {t.home.inviteText}
          </p>
          <button
            onClick={() => setCurrentPage('/contact')}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
          >
            {t.home.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
