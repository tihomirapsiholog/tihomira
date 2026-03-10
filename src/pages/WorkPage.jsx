import { ArrowRight } from 'lucide-react';

const CONTACT_EMAIL = 'tihomira.psiholog@gmail.com';

export default function WorkPage({ t }) {
  const services = [
    {
      title: t.work.service1Title,
      subtitle: t.work.service1Sub,
      description: t.work.service1Desc,
      features: [
        t.work.service1Feature1,
        t.work.service1Feature2,
        t.work.service1Feature3,
        t.work.service1Feature4,
      ],
      forWho: t.work.service1ForWho,
    },
    {
      title: t.work.service2Title,
      subtitle: t.work.service2Sub,
      description: t.work.service2Desc,
      features: [
        t.work.service2Feature1,
        t.work.service2Feature2,
        t.work.service2Feature3,
        t.work.service2Feature4,
      ],
      forWho: t.work.service2ForWho,
    },
    {
      title: t.work.service3Title,
      subtitle: t.work.service3Sub,
      description: t.work.service3Desc,
      features: [
        t.work.service3Feature1,
        t.work.service3Feature2,
        t.work.service3Feature3,
        t.work.service3Feature4,
      ],
      forWho: t.work.service3ForWho,
    },
  ];

  return (
    <div className="space-y-16 bg-[#0b1220] py-8">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-6 font-serif text-5xl text-white">{t.work.title}</h1>
        <p className="text-xl leading-relaxed text-slate-300">{t.work.intro}</p>
      </div>

      {services.map((service, i) => (
        <section
          key={i}
          className={`py-12 ${i % 2 === 0 ? 'bg-[#10192c]' : 'bg-[#0b1220]'}`}
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="mb-2 font-serif text-4xl text-white">{service.title}</h2>
              <p className="text-lg italic text-slate-400">{service.subtitle}</p>
            </div>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              {service.description}
            </p>

            <div className="grid max-w-3xl gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-[#121c31] p-6">
                <h3 className="mb-4 font-serif text-white">{t.work.experience}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-slate-300">
                      <span className="mt-1 text-yellow-400">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[#121c31] p-6">
                <h3 className="mb-4 font-serif text-white">{t.work.forWhom}</h3>
                <p className="leading-relaxed text-slate-300">{service.forWho}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#10192c] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-3xl text-white">
            {t.work.questionsTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            {t.work.questionsText}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
          >
            {t.work.reach}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}