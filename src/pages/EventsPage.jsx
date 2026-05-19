import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EventsPage({ t, language = 'en' }) {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const currentLanguage = location.pathname.startsWith('/sr') ? 'sr' : language;
  const isSerbian = currentLanguage === 'sr';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/mwvyywkd', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  const upcomingEvents = t.events.upcomingItems || [];

  return (
    <div className="overflow-hidden bg-[#0b1220] text-slate-100">
      <SEO
        title={
          isSerbian
            ? 'Događaji | Radionice, grupni susreti i iskustveni prostori'
            : 'Events | Workshops, Gatherings and Experiential Spaces'
        }
        description={
          isSerbian
            ? 'Aktuelne i buduće radionice, grupni susreti i iskustveni prostori za psihološko istraživanje, grupni rad i simbolički proces.'
            : 'Current and upcoming workshops, gatherings and experiential spaces for psychological exploration, group work and symbolic process.'
        }
        url={
          isSerbian
            ? 'https://tihomira.info/sr/events'
            : 'https://tihomira.info/en/events'
        }
        language={currentLanguage}
        alternateUrls={{
          en: 'https://tihomira.info/en/events',
          sr: 'https://tihomira.info/sr/events',
          xDefault: 'https://tihomira.info/en/events',
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-yellow-700/10 bg-[#0b1220] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,181,109,0.13),transparent_30%),radial-gradient(circle_at_84%_24%,rgba(95,113,80,0.20),transparent_34%),linear-gradient(180deg,#0b1220,#101b18)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.34em] text-yellow-400/80">
            {t.events.label}
          </p>

          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-yellow-50 md:text-6xl">
            {t.events.heroTitle}
          </h1>

          <div className="my-8 h-px w-36 bg-gradient-to-r from-yellow-400/60 to-transparent" />

          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            {t.events.heroIntro}
          </p>
        </div>
      </section>

      {/* CURRENT EVENT */}
      <section className="relative overflow-hidden bg-[#101b18] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(95,113,80,0.22),transparent_34%),radial-gradient(circle_at_90%_65%,rgba(215,181,109,0.09),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
              {t.events.currentTitle}
            </p>

            <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-yellow-50 md:text-4xl">
              {t.events.event1RealTitle}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="rounded-[2.25rem] border border-yellow-700/20 bg-[#0b1220]/60 p-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur md:p-10">
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-yellow-400/75">
                {t.events.event1Type}
              </p>

              <h3 className="mb-8 font-serif text-3xl leading-tight text-yellow-50 md:text-4xl">
                {t.events.event1Title}
              </h3>

              <div className="space-y-5 text-lg leading-8 text-slate-300">
                <p>{t.events.event1Para1}</p>
                <p>{t.events.event1Para2}</p>
                <p>{t.events.event1Para3}</p>
                <p>{t.events.event1Para4}</p>
              </div>

              <div className="mt-9 grid gap-3 rounded-[1.5rem] border border-yellow-700/20 bg-[#0b1220]/70 p-5 text-sm text-slate-300 sm:grid-cols-2">
                <p>
                  <span className="text-yellow-400">
                    {t.events.eventDateLabel}
                  </span>{' '}
                  {t.events.eventDateValue}
                </p>

                <p>
                  <span className="text-yellow-400">
                    {t.events.eventTimeLabel}
                  </span>{' '}
                  {t.events.eventTimeValue}
                </p>

                <p>
                  <span className="text-yellow-400">
                    {t.events.eventFormatLabel}
                  </span>{' '}
                  {t.events.eventFormatValue}
                </p>

                <p>
                  <span className="text-yellow-400">
                    {t.events.eventLanguageLabel}
                  </span>{' '}
                  {t.events.eventLanguageValue}
                </p>

                <p>
                  <span className="text-yellow-400">
                    {t.events.eventPriceLabel}
                  </span>{' '}
                  {t.events.eventPriceValue}
                </p>

                <p>
                  <span className="text-yellow-400">
                    {t.events.eventGroupLabel}
                  </span>{' '}
                  {t.events.eventGroupValue}
                </p>
              </div>
            </article>

            {/* REGISTRATION FORM */}
            <aside className="rounded-[2.25rem] border border-yellow-700/20 bg-[#111827]/78 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur">
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-yellow-400/75">
                {isSerbian ? 'ulaz u grupu' : 'enter the group'}
              </p>

              <h3 className="mb-8 font-serif text-3xl text-yellow-50">
                {t.events.formTitle}
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <input
                  type="hidden"
                  name="event"
                  value={t.events.eventHiddenValue}
                />

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    {t.events.formNameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-yellow-700/20 bg-[#0b1220] px-4 py-3 text-white outline-none transition-colors focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    {t.events.formEmailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-yellow-700/20 bg-[#0b1220] px-4 py-3 text-white outline-none transition-colors focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    {t.events.formLocationLabel}
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full rounded-xl border border-yellow-700/20 bg-[#0b1220] px-4 py-3 text-white outline-none transition-colors focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    {t.events.formMessageLabel}
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full resize-none rounded-xl border border-yellow-700/20 bg-[#0b1220] px-4 py-3 text-white outline-none transition-colors focus:border-yellow-400"
                  />
                </div>

                <p className="text-sm leading-7 text-slate-500">
                  {t.events.formNote}
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
                >
                  {t.events.formButton}
                  <ArrowRight size={18} />
                </button>

                {submitted && (
                  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5 text-sm leading-relaxed text-yellow-50">
                    <p className="font-serif text-lg text-yellow-300">
                      {t.events.formSuccessTitle}
                    </p>
                    <p className="mt-2 text-slate-300">
                      {t.events.formSuccessText}
                    </p>
                  </div>
                )}
              </form>
            </aside>
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="relative overflow-hidden bg-[#0b1220] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,181,109,0.10),transparent_32%)]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-yellow-400/80">
            {t.events.upcomingTitle}
          </p>

          <h2 className="mb-12 max-w-3xl font-serif text-3xl text-yellow-50 md:text-4xl">
            {isSerbian
              ? 'Teme koje čekaju pravi trenutak.'
              : 'Themes waiting for the right moment.'}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-yellow-700/15 bg-[#111827]/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-yellow-400/55">
                  {t.events.upcomingType} {index + 1}
                </p>

                <h3 className="mt-5 font-serif text-2xl text-yellow-50">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONGOING GROUPS */}
      <section className="relative overflow-hidden bg-[#131f19] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.58),rgba(19,31,25,0.96)),radial-gradient(circle_at_18%_15%,rgba(215,181,109,0.10),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(95,113,80,0.22),transparent_34%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-yellow-400/80">
            {t.events.ongoingGroupsTitle}
          </p>

          <div className="rounded-[2.25rem] border border-yellow-700/20 bg-[#0b1220]/55 p-8 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur md:p-10">
            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-yellow-50 md:text-4xl">
              {isSerbian
                ? 'Kontinuitet, odnos i zajedničko istraživanje.'
                : 'Continuity, relationship and shared exploration.'}
            </h2>

            <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-300">
              {t.events.ongoingGroupsText1}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              {t.events.ongoingGroupsText2}
            </p>
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="relative overflow-hidden bg-[#0b1220] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(215,181,109,0.09),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-yellow-400/80">
            {t.events.themesTitle}
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-yellow-50 md:text-4xl">
            {isSerbian
              ? 'Prostori se otvaraju oko onoga što je živo sada.'
              : 'Spaces open around what is alive now.'}
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            {t.events.themesText}
          </p>
        </div>
      </section>
    </div>
  );
}