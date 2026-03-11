import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Divider = ({ text }) => (
  <div className="py-16 text-center">
    <p className="font-serif text-xl italic font-light text-slate-400 tracking-wide">{text}</p>
  </div>
);

export default function WorkPage({ t, setCurrentPage }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [location.hash]);
  const services = [
    {
      label: t.work.service1Label,
      title: t.work.service1Title,
      description: t.work.service1Desc,
      features: [
        t.work.service1Feature1,
        t.work.service1Feature2,
        t.work.service1Feature3,
        t.work.service1Feature4,
      ],
      forWho: t.work.service1ForWho,
      aside: null,
    },
    {
      label: t.work.service2Label,
      title: t.work.service2Title,
      description: t.work.service2Desc,
      features: [
        t.work.service2Feature1,
        t.work.service2Feature2,
        t.work.service2Feature3,
        t.work.service2Feature4,
      ],
      forWho: t.work.service2ForWho,
      aside: t.work.service2Aside,
    },
    {
      label: t.work.service3Label,
      title: t.work.service3Title,
      description: t.work.service3Desc,
      features: [
        t.work.service3Feature1,
        t.work.service3Feature2,
        t.work.service3Feature3,
        t.work.service3Feature4,
      ],
      forWho: t.work.service3ForWho,
      aside: null,
    },
  ];

  const cities = [
    {
      status: t.work.city1Status,
      name: t.work.city1Name,
      text: t.work.city1Text,
    },
    {
      status: t.work.city2Status,
      name: t.work.city2Name,
      text: t.work.city2Text,
    },
    {
      status: t.work.city3Status,
      name: t.work.city3Name,
      text: t.work.city3Text,
    },
  ];

  return (
    <div className="bg-[#0b1220] text-slate-100">

      {/* HERO */}
      <section className="border-b border-white/5 bg-[#0b1220] py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            {t.work.eyebrow}
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.work.title}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            {t.work.intro}
          </p>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-400">
            {t.work.intro2}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200">
              {t.work.heroBadge1}
            </span>
            <span className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200">
              {t.work.heroBadge2}
            </span>
            <span className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200">
              {t.work.heroBadge3}
            </span>
          </div>
        </div>
      </section>

      <Divider text={t.work.divider1} />

      {/* SERVICES */}
      <section className="bg-[#0e1628] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              {t.work.servicesTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              {t.work.servicesIntro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const anchors = ['individual', 'groups', 'sound'];
              return (
              <div
                key={i}
                id={anchors[i]}
                onClick={() => setCurrentPage('/contact')}
                className="cursor-pointer rounded-2xl border border-slate-700 bg-[#111a2e] p-8 transition hover:border-yellow-400/40 hover:shadow-xl hover:shadow-black/30"
              >
                <span className="inline-flex rounded-full border border-yellow-400/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-yellow-300">
                  {service.label}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>
                {service.aside && (
                  <blockquote className="mt-6 border-l-2 border-yellow-700/40 pl-5 font-serif text-base italic font-light leading-relaxed text-slate-300">
                    {service.aside}
                  </blockquote>
                )}
                <div className="mt-8">
                  <h4 className="mb-4 text-sm uppercase tracking-[0.18em] text-slate-400">
                    {t.work.includes}
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex gap-3 text-slate-300">
                        <span className="mt-1 text-yellow-400">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 border-t border-slate-700 pt-6">
                  <h4 className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-400">
                    {t.work.forWhom}
                  </h4>
                  <p className="leading-7 text-slate-300">{service.forWho}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <Divider text={t.work.divider2} />

      {/* CONNECTING INTENTION */}
      <section className="bg-[#0b1220] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            {t.work.acrossTitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {t.work.acrossText1}
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            {t.work.acrossText2}
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            {t.work.acrossText3}
          </p>
        </div>
      </section>

      <Divider text={t.work.divider3} />

      {/* CITIES */}
      <section className="bg-[#0e1628] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              {t.work.citiesTitle}
            </h2>
            <p className="mt-4 text-slate-300">{t.work.citiesIntro}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-700 bg-[#111827] p-8 transition hover:border-yellow-400/40 hover:shadow-xl hover:shadow-black/30"
              >
                <span className="inline-flex rounded-full border border-yellow-400/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-yellow-300">
                  {city.status}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-white">
                  {city.name}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{city.text}</p>
              </div>
            ))}
          </div>

          {/* Your City — visually distinct */}
          <div className="mt-8 rounded-2xl border border-yellow-400/30 bg-[#111827] p-8 text-center">
            <span className="inline-flex rounded-full border border-yellow-400/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-yellow-300">
              {t.work.city4Status}
            </span>
            <h3 className="mt-4 font-serif text-2xl text-white">{t.work.city4Name}</h3>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">{t.work.city4Text}</p>
            <button
              onClick={() => setCurrentPage('/contact')}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 px-6 py-2 text-sm font-medium text-yellow-300 transition hover:border-yellow-300 hover:text-white"
            >
              {t.work.hostButton}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <Divider text={t.work.divider4} />

      {/* FINAL CTA */}
      <section className="bg-[#10192c] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
            {t.work.questionsTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            {t.work.questionsText}
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            {t.work.questionsText2}
          </p>
          <button
            onClick={() => setCurrentPage('/contact')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
          >
            {t.work.reach}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
}
