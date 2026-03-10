export default function AboutPage({ t }) {
    return (
      <div className="bg-[#0b1220]">
        <section className="relative overflow-hidden py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h1 className="mb-4 font-serif text-5xl text-white">{t.about.title}</h1>
              <p className="text-xl italic text-slate-300">{t.about.intro}</p>
            </div>
  
            <div className="overflow-hidden rounded-2xl border border-yellow-700/20 shadow-2xl">
              <img
                src="/portrait.jpg"
                alt="Portrait of Tihomira"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </section>
  
        <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-slate-300">{t.about.para1}</p>
            <p className="text-slate-300">{t.about.para2}</p>
  
            <div className="rounded-2xl border-l-4 border-yellow-500 bg-[#121c31] p-8">
              <h2 className="mb-4 font-serif text-3xl text-white">
                {t.about.atCrossroads}
              </h2>
              <p className="italic text-slate-300">{t.about.crossroadsText}</p>
            </div>
  
            <p className="text-slate-300">{t.about.para3}</p>
  
            <h2 className="pt-8 font-serif text-3xl text-white">
              {t.about.guidesWork}
            </h2>
  
            <div className="space-y-8 pt-4">
              {[
                { title: t.about.psychologyTitle, text: t.about.psychologyText },
                { title: t.about.processTitle, text: t.about.processText },
                { title: t.about.embodiedTitle, text: t.about.embodiedText },
                { title: t.about.symbolicTitle, text: t.about.symbolicText },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-[#121c31] p-6">
                  <h3 className="mb-2 text-xl font-serif text-white">{item.title}</h3>
                  <p className="text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
  
            <div className="rounded-2xl border border-yellow-700/20 bg-[#10192c] p-8">
              <h2 className="mb-4 font-serif text-3xl text-white">
                {t.about.archetype}
              </h2>
              <p className="mb-4 text-slate-300">{t.about.archetypeText}</p>
              <p className="text-slate-300">{t.about.archetypeText2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }