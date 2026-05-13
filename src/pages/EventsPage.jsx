import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function EventsPage({ t }) {
const [submitted, setSubmitted] = useState(false);

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
  const upcomingEvents = [
    {
      title: 'Zagrevanje za nove uloge',
      subtitle: 'Kada stari identitet više ne stoji, a novi još nije živ.',
    },
    {
      title: 'Zaglavljeni u promenama',
      subtitle: 'Kad prošlost drži, a budućnost zove.',
    },
    {
      title: 'Ko u nama protestuje',
      subtitle: 'Osvetljavanje unutrašnjeg sabotera.',
    },
  ];

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
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-serif text-3xl text-white md:text-4xl">
         {t.events.currentTitle}
        </h2>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-yellow-700/20 bg-[#121c31] p-8 md:p-10">
             <p className="mb-4 text-xs uppercase tracking-[0.25em] text-yellow-400/80">
            {t.events.event1Type}
            </p>

              <h3 className="mb-6 font-serif text-3xl leading-tight text-white md:text-4xl">
              {t.events.event1RealTitle}
              </h3>

              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                <p>
              {t.events.event1Para1}                
              </p>

                <p>
                 {t.events.event1Para2}
                </p>

                <p>
                  {t.events.event1Para3}
                </p>

                <p>
                {t.events.event1Para4}                
                </p>

               <div className="mt-8 grid gap-3 rounded-2xl border border-yellow-700/20 bg-[#0b1220] p-5 text-sm text-slate-300 sm:grid-cols-2">
               <p>
              <span className="text-yellow-400">{t.events.eventDateLabel}</span>{' '}
              {t.events.eventDateValue}
              </p>

              <p>
              <span className="text-yellow-400">{t.events.eventTimeLabel}</span>{' '}
             {t.events.eventTimeValue}
             </p>

              <p>
             <span className="text-yellow-400">{t.events.eventFormatLabel}</span>{' '}
              {t.events.eventFormatValue}
              </p>

             <p>
             <span className="text-yellow-400">{t.events.eventLanguageLabel}</span>{' '}
            {t.events.eventLanguageValue}
            </p>

           <p>
             <span className="text-yellow-400">{t.events.eventPriceLabel}</span>{' '}
            {t.events.eventPriceValue}
            </p>

           <p>
            <span className="text-yellow-400">{t.events.eventGroupLabel}</span>{' '}
           {t.events.eventGroupValue}
           </p>
            </div>
            </div>
            </div>
            <div className="rounded-[28px] border border-yellow-700/20 bg-[#10192c] p-8">
              <h3 className="mb-8 font-serif text-2xl text-white">Prijava</h3>

              <form
              onSubmit={handleSubmit}
             noValidate
             className="space-y-5"
              >
              <input
             type="hidden"
              name="event"
              value="Kako se zapravo osećam u vezi sa AI-jem? — 04.06.2026"
                />
                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Ime i prezime
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
                    Email
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
                 Odakle se javljate?
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
                    Šta vas trenutno najviše zanima u ovoj temi?
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full rounded-xl border border-yellow-700/20 bg-[#0b1220] px-4 py-3 text-white outline-none transition-colors focus:border-yellow-400"
                  />
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                   Nakon prijave dobićete email sa potvrdom mesta i informacijama za uplatu.
                  </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
                >
                  Pošalji prijavu
                  <ArrowRight size={18} />
                </button>
             {submitted && (
              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5 text-sm leading-relaxed text-yellow-50">
              <p className="font-serif text-lg text-yellow-300">
                Hvala, prijava je poslata.
              </p>
              <p className="mt-2 text-slate-300">
             Javiću vam se uskoro sa potvrdom.
              </p>
           </div>
            )}

              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-yellow-700/10 bg-[#0b1220] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-serif text-3xl text-white md:text-4xl">
            U najavi
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-yellow-700/10 bg-[#10192c] p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-yellow-400/60">
                  Istraživanje
                </p>

                <h3 className="mt-4 font-serif text-2xl text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-yellow-700/10 bg-[#0e1628] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 font-serif text-3xl text-white md:text-4xl">
            Grupe u toku
          </h2>

          <div className="rounded-[28px] border border-yellow-700/20 bg-[#121c31] p-8 md:p-10">
            <p className="max-w-3xl text-xl leading-relaxed text-slate-300">
              Nedeljni online grupni susreti za ljude koji žele kontinuitet
              u radu sa sobom i drugima.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
              Mali online grupni prostori za kontinuirano iskustveno istraživanje
              kroz encounter, odnos, akciju i grupnu dinamiku.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-yellow-700/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
            Teme koje istražujem
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            Trenutne teme istraživanja uključuju pažnju, odnos čoveka i AI-a,
            grupni susret, telo, impuls, preplavljenost, simbolički proces i
            relacione dinamike.
          </p>
        </div>
      </section>
    </div>
  );
}