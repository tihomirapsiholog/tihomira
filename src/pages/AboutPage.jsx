export default function AboutPage({ t, setCurrentPage }) {
  const chapters = [
    {
      id: 'ch1',
      label: t.about.chapter1Label,
      title: t.about.chapter1Title,
      titleEm: t.about.chapter1TitleEm,
      body: [t.about.chapter1Para1, t.about.chapter1Para2, t.about.chapter1Para3, t.about.chapter1Para4],
      aside: t.about.chapter1Aside,
    },
    {
      id: 'ch2',
      label: t.about.chapter2Label,
      title: t.about.chapter2Title,
      titleEm: t.about.chapter2TitleEm,
      body: [t.about.chapter2Para1, t.about.chapter2Para2, t.about.chapter2Para3],
      aside: t.about.chapter2Aside,
    },
    {
      id: 'ch3',
      label: t.about.chapter3Label,
      title: t.about.chapter3Title,
      titleEm: t.about.chapter3TitleEm,
      body: [t.about.chapter3Para1, t.about.chapter3Para2, t.about.chapter3Para3],
      aside: t.about.chapter3Aside,
    },
    {
      id: 'ch4',
      label: t.about.chapter4Label,
      title: t.about.chapter4Title,
      titleEm: t.about.chapter4TitleEm,
      body: [t.about.chapter4Para1, t.about.chapter4Para2, t.about.chapter4Para3],
      aside: t.about.chapter4Aside,
    },
    {
      id: 'ch5',
      label: t.about.chapter5Label,
      title: t.about.chapter5Title,
      titleEm: t.about.chapter5TitleEm,
      body: [t.about.chapter5Para1, t.about.chapter5Para2, t.about.chapter5Para3],
      aside: t.about.chapter5Aside,
    },
  ];

  const drives = [
    { num: '01', title: t.about.drive1Title, text: t.about.drive1Text },
    { num: '02', title: t.about.drive2Title, text: t.about.drive2Text },
    { num: '03', title: t.about.drive3Title, text: t.about.drive3Text },
    { num: '04', title: t.about.drive4Title, text: t.about.drive4Text },
  ];

  const instruments = [
    { name: t.about.inst1, origin: t.about.inst1Origin },
    { name: t.about.inst2, origin: t.about.inst2Origin },
    { name: t.about.inst3, origin: t.about.inst3Origin },
    { name: t.about.inst4, origin: t.about.inst4Origin },
    { name: t.about.inst5, origin: t.about.inst5Origin },
    { name: t.about.inst6, origin: t.about.inst6Origin },
    { name: t.about.inst7, origin: t.about.inst7Origin },
    { name: t.about.inst8, origin: t.about.inst8Origin },
    { name: t.about.inst9, origin: t.about.inst9Origin },
    { name: t.about.inst10, origin: t.about.inst10Origin },
    { name: t.about.inst11, origin: t.about.inst11Origin },
    { name: t.about.inst12, origin: t.about.inst12Origin },
    { name: t.about.inst13, origin: t.about.inst13Origin },
  ];

  const locations = [
    'Ecuador',
    'India',
    'China',
    'Slovenia',
    'Montenegro',
    'Spain',
    'Russia',
    'Malta',
    'Surdulica',
    'Novi Sad',
    'Belgrade',
  ];

  return (
    <div className="bg-[#0b1220]">
      {/* HERO */}
      <section className="min-h-screen px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-yellow-400">
              {t.about.eyebrow}
            </p>

            <h1 className="mb-8 font-serif text-5xl font-light leading-tight text-white sm:text-6xl">
              Neke stvari postaju vidljive tek u prisustvu drugog.
              <em className="mt-2 block italic text-yellow-400">
                Susret kao praksa.
              </em>
            </h1>

            <div className="max-w-2xl space-y-6 text-lg font-light leading-relaxed text-slate-400">
              <p>
                Moj rad je iskustven i akciono orijentisan. Kroz encounter,
                grupni proces, psihodramu, simbol i rad sa telom istražujemo
                ono što postaje vidljivo tek kada iskustvo dobije prostor da se
                odigra.
              </p>

              <p>
                Tiha Psiha nije prostor za novo ja, već za drugačiji odnos prema
                istom ja.
              </p>
            </div>
          </div>

          <div className="lg:pb-4">
            <p className="mb-5 max-w-md text-sm font-light leading-relaxed text-slate-500">
              Život i rad u različitim kulturnim kontekstima promenili su način
              na koji posmatram identitet, grupu, pripadanje i unutrašnje
              promene.
            </p>

            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="border border-yellow-700/20 px-3 py-1 text-xs uppercase tracking-widest text-slate-400"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[220px_1fr]">
          <div className="sticky top-28 hidden lg:block">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-yellow-400">
              {t.about.storyLabel}
            </p>

            <ul className="space-y-3">
              {chapters.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={`#${ch.id}`}
                    className="block border-l border-transparent pl-4 text-sm font-light text-slate-500 transition-all hover:border-yellow-500 hover:text-slate-200"
                  >
                    {ch.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-20">
            {chapters.map((ch, i) => (
              <div key={ch.id} id={ch.id}>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
                  {String(i + 1).padStart(2, '0')} — {ch.label}
                </p>

                <h2 className="mb-6 font-serif text-4xl font-light leading-snug text-white">
                  {ch.title}
                  {ch.titleEm && (
                    <em className="block italic text-yellow-400">
                      {ch.titleEm}
                    </em>
                  )}
                </h2>

                <div className="max-w-2xl space-y-4 text-base font-light leading-relaxed text-slate-400">
                  {ch.body.map((para, j) => (
                    <p key={j} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>

                {ch.aside && (
                  <blockquote className="mt-6 max-w-xl border-l-2 border-yellow-700/40 pl-6 font-serif text-lg italic font-light leading-relaxed text-slate-300">
                    {ch.aside}
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUMENTS */}
      <div className="border-t border-yellow-700/10 bg-[#10192c] px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-yellow-400">
          {t.about.instrumentsLabel}
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-center text-base font-light leading-relaxed text-slate-400">
          Zvuk koristim kao produžetak iskustvenog rada — ne kao performans, već
          kao način rada sa ritmom, pažnjom i prisustvom.
        </p>

        <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
          {instruments.map((inst, i) => (
            <span
              key={i}
              className="border border-yellow-700/20 px-4 py-2 text-sm font-light text-slate-400 transition-colors hover:border-yellow-700/50 hover:text-yellow-400"
            >
              {inst.name}{' '}
              <span className="text-xs text-slate-600">{inst.origin}</span>
            </span>
          ))}
        </div>
      </div>

      {/* WHAT I RETURN TO */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
            Ono čemu se vraćam
          </p>

          <h2 className="mb-12 font-serif text-4xl font-light leading-snug text-white">
            Susret, pažnja i iskustvo.
          </h2>

          <div className="grid gap-px border border-yellow-700/10 bg-yellow-700/10 sm:grid-cols-2">
            {drives.map((d) => (
              <div
                key={d.num}
                className="bg-[#0b1220] p-8 transition-colors hover:bg-[#10192c]"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-yellow-400">
                  {d.num}
                </p>
                <h3 className="mb-3 font-serif text-xl font-light text-white">
                  {d.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-slate-400">
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="border-t border-yellow-700/10 bg-[#10192c] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
            {t.about.trainingLabel}
          </p>

          <h2 className="mb-8 font-serif text-4xl font-light leading-snug text-white">
            {t.about.trainingTitle}
            <em className="block italic text-yellow-400">
              {t.about.trainingTitleEm}
            </em>
          </h2>

          <div className="space-y-4 text-base font-light leading-relaxed text-slate-400">
            <p dangerouslySetInnerHTML={{ __html: t.about.trainingPara1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.trainingPara2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.trainingPara3 }} />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-yellow-700/10 bg-[#0b1220] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="mb-12 font-serif text-2xl font-light italic leading-relaxed text-white sm:text-3xl">
            Ne novo ja.
            <em className="not-italic text-yellow-400">
              {' '}
              Drugačiji odnos prema istom ja.
            </em>
          </blockquote>

          <div className="space-y-6 text-base font-light leading-relaxed text-slate-400">
            <p>
              Naziv Tiha Psiha nastao je spontano, tokom razgovora u dnevnoj
              sobi prijatelja na Umci. Bio je to prvi i poslednji put da smo
              sedeli u tom prostoru pre nego što su se preselili na Staru
              Planinu, gde danas zajedno sa svoje tri ćerke grade drugačiji
              odnos prema vremenu, prirodi i svakodnevnom životu.
            </p>

            <p>
              Od tada se naši susreti nastavljaju tamo — uz sporiji ritam, više
              tišine i onu vrstu encountera koja ne nastaje iz spektakla, već iz
              kontinuiteta prisustva.
            </p>
          </div>

          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setCurrentPage('/contact')}
              className="rounded-full border border-yellow-500/30 px-8 py-3 text-sm tracking-wide text-yellow-100 transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-950"
            >
              Istraži mogućnost susreta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}