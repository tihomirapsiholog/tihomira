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
    <div className="bg-[#0b1220] text-slate-100">
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
      <section className="border-b border-white/5 bg-[#0b1220] py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {about.eyebrow}
            </span>

            <h1 className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {about.heroTitle}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
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
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 px-6 py-3 text-sm font-medium text-yellow-300 transition hover:border-yellow-300 hover:text-white"
              >
                {about.ctaContact}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-700 bg-[#111827] p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
              {about.identityLabel}
            </p>

            <h2 className="mt-4 font-serif text-2xl text-white">
              {about.identityTitle}
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              {about.identityText}
            </p>

            <div className="mt-8 border-t border-slate-700 pt-6">
              <p className="text-sm leading-7 text-slate-400">
                {about.identityNote}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FOUNDATIONS */}
      <section className="bg-[#0e1628] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {about.foundationsLabel}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              {about.foundationsTitle}
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              {about.foundationsIntro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {foundations.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-700 bg-[#111827] p-8"
                >
                  <Icon className="h-7 w-7 text-yellow-400" />

                  <h3 className="mt-5 font-serif text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="bg-[#0b1220] py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {about.trainingLabel}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              {about.trainingTitle}
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              {about.trainingIntro}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#111827] p-8">
            <ul className="space-y-5">
              {training.map((item, index) => (
                <li key={index} className="flex gap-4 text-slate-300">
                  <span className="mt-1 text-yellow-400">→</span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#0e1628] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            {about.experienceLabel}
          </span>

          <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
            {about.experienceTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {about.experienceText}
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
            {about.experienceText2}
          </p>
        </div>
      </section>

      {/* SHORT STORY */}
      <section className="bg-[#0b1220] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {about.storyLabel}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              {about.storyTitle}
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              {about.storyIntro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {story.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-[#111827] p-8"
              >
                <h3 className="font-serif text-2xl text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-[#10192c] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
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
  );
}