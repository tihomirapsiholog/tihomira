import { ArrowRight, Globe2, GraduationCap, Users, Waves } from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutPage({ t, setCurrentPage, language = 'en' }) {
  const about = t.about;

  const foundations = [
    {
      icon: GraduationCap,
      title: about.foundation1Title,
      text: about.foundation1Text,
    },
    {
      icon: Users,
      title: about.foundation2Title,
      text: about.foundation2Text,
    },
    {
      icon: Waves,
      title: about.foundation3Title,
      text: about.foundation3Text,
    },
    {
      icon: Globe2,
      title: about.foundation4Title,
      text: about.foundation4Text,
    },
  ];

  const training = [
    about.trainingItem1,
    about.trainingItem2,
    about.trainingItem3,
    about.trainingItem4,
    about.trainingItem5,
    about.trainingItem6,
  ];

  const story = [
    {
      title: about.story1Title,
      text: about.story1Text,
    },
    {
      title: about.story2Title,
      text: about.story2Text,
    },
    {
      title: about.story3Title,
      text: about.story3Text,
    },
  ];

  return (
  <div className="relative overflow-hidden bg-[#07100d] text-slate-100">
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.18] mix-blend-soft-light">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,244,214,0.08),transparent_26%,rgba(74,93,67,0.10)_48%,transparent_72%,rgba(215,181,109,0.07))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_18%,rgba(255,244,214,0.10),transparent_34%),radial-gradient(ellipse_at_78%_22%,rgba(88,114,82,0.12),transparent_38%),radial-gradient(ellipse_at_50%_82%,rgba(82,55,38,0.10),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,244,214,0.035),transparent),linear-gradient(0deg,rgba(0,0,0,0.08),transparent_22%,rgba(255,244,214,0.035)_48%,transparent_74%,rgba(0,0,0,0.10))]" />
    </div>
    <div className="relative z-10">

      <SEO
        title={
          language === 'sr'
            ? 'O meni | Tihomira Stanojević'
            : 'About | Tihomira Stanojević'
        }
        description={
          language === 'sr'
            ? 'Tihomira Stanojević je master psihologije, facilitator i praktičarka iskustvenog rada, sa dugogodišnjim iskustvom u grupnom procesu, psihodrami, embodimentu, online i uživo prostorima.'
            : 'Tihomira Stanojević is a psychologist, facilitator and experiential practitioner with long-term experience in group process, psychodrama, embodiment, online and in-person spaces.'
        }
        url={
          language === 'sr'
            ? 'https://tihomira.info/sr/about'
            : 'https://tihomira.info/en/about'
        }
        language={language}
        alternateUrls={{
          en: 'https://tihomira.info/en/about',
          sr: 'https://tihomira.info/sr/about',
          xDefault: 'https://tihomira.info/en/about',
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-yellow-700/10 bg-[#0b1220] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,181,109,0.13),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(95,113,80,0.20),transparent_34%),linear-gradient(180deg,#0b1220,#101b18)]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.34em] text-yellow-400/80">
              {about.eyebrow}
            </span>

            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-yellow-50 sm:text-5xl lg:text-6xl">
              {about.heroTitle}
            </h1>

            <div className="my-8 h-px w-36 bg-gradient-to-r from-yellow-400/60 to-transparent" />

            <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              {about.heroIntro}
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-slate-400">
              {about.heroIntro2}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentPage('/work')}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-yellow-400"
              >
                {about.ctaWork}
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setCurrentPage('/contact')}
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 px-6 py-3 text-sm font-medium text-yellow-200 transition hover:border-yellow-300 hover:bg-yellow-400/10 hover:text-white"
              >
                {about.ctaContact}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <aside className="rounded-[2.25rem] border border-yellow-700/20 bg-[#0b1220]/55 p-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-yellow-400/80">
              {about.identityLabel}
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-yellow-50">
              {about.identityTitle}
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              {about.identityText}
            </p>

            <div className="mt-8 border-t border-yellow-700/20 pt-6">
              <p className="text-sm leading-7 text-slate-400">
                {about.identityNote}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FOUNDATIONS */}
      <section className="relative overflow-hidden bg-[#101b18] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(95,113,80,0.22),transparent_34%),radial-gradient(circle_at_90%_65%,rgba(215,181,109,0.09),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
              {about.foundationsLabel}
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-yellow-50 sm:text-4xl">
              {about.foundationsTitle}
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              {about.foundationsIntro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {foundations.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[2rem] border border-yellow-700/20 bg-[#0b1220]/60 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/35"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-700/20 bg-yellow-500/10">
                    <Icon className="h-6 w-6 text-yellow-400" />
                  </div>

                  <p className="mt-6 text-xs uppercase tracking-[0.22em] text-yellow-400/55">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <h3 className="mt-4 font-serif text-2xl text-yellow-50">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="relative overflow-hidden bg-[#0b1220] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,181,109,0.10),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
              {about.trainingLabel}
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-yellow-50 sm:text-4xl">
              {about.trainingTitle}
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              {about.trainingIntro}
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-700/15 bg-[#111827]/75 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
            <ul className="space-y-5">
              {training.map((item, index) => (
                <li key={index} className="flex gap-4 text-slate-300">
                  <span className="mt-1 text-yellow-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative overflow-hidden bg-[#131f19] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.58),rgba(19,31,25,0.96)),radial-gradient(circle_at_18%_15%,rgba(215,181,109,0.10),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(95,113,80,0.22),transparent_34%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
            {about.experienceLabel}
          </span>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-yellow-50 sm:text-4xl">
            {about.experienceTitle}
          </h2>

          <div className="mx-auto my-8 h-px w-40 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            {about.experienceText}
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
            {about.experienceText2}
          </p>
        </div>
      </section>

      {/* SHORT STORY */}
      <section className="relative overflow-hidden bg-[#0b1220] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(215,181,109,0.09),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
              {about.storyLabel}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-yellow-50 sm:text-4xl">
              {about.storyTitle}
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              {about.storyIntro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {story.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-yellow-700/15 bg-[#111827]/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30"
              >
                <p className="mb-6 text-xs uppercase tracking-[0.24em] text-yellow-400/55">
                  {language === 'sr' ? 'nit' : 'thread'} {index + 1}
                </p>

                <h3 className="font-serif text-2xl text-yellow-50">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="relative overflow-hidden bg-[#101b18] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(215,181,109,0.12),transparent_32%),linear-gradient(180deg,#101b18,#07100d)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-slate-200 sm:text-3xl">
            “{about.closingQuote}”
          </p>

          <button
            onClick={() => setCurrentPage('/work')}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition hover:bg-yellow-400"
          >
            {about.closingButton}
            <ArrowRight size={18} />
          </button>
        </div>
            </section>
    </div>
  </div>
  );
}