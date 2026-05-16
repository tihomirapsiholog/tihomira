import SEO from '../components/SEO';

export default function TermsPage({ language = 'en' }) {
  const isSerbian = language === 'sr';

  const content = isSerbian
    ? {
        title: 'Zakazivanje i uslovi korišćenja',
        description:
          'Uslovi zakazivanja, pomeranja i otkazivanja sesija i paketa u okviru Tiha Psiha rada.',
        url: 'https://tihomira.info/sr/terms',
        label: 'Uslovi korišćenja',
        intro:
          'Nakon kupovine sesije ili paketa, termin se dogovara putem emaila ili kontakt forme.',
        validity: [
          'Jedna sesija važi 3 meseca od datuma kupovine.',
          'Paket od 3 sesije važi 2 meseca od datuma kupovine.',
          'Paket od 5 sesija važi 3 meseca od datuma kupovine.',
          'Poklon sesija važi 3 meseca od datuma kupovine.',
        ],
        terms: [
          'Termin se može pomeriti bez dodatne naplate najkasnije 24 sata pre zakazanog susreta.',
          'Ako se termin otkaže manje od 24 sata pre susreta, sesija se računa kao iskorišćena, osim u slučaju ozbiljne nepredviđene situacije.',
          'Ako klijent ne dođe na zakazanu sesiju bez prethodne najave, sesija se računa kao iskorišćena.',
          'Ako ja moram da pomerim termin, ponudiću novi termin u najkraćem mogućem roku.',
          'Razumem da se život dešava. Ova politika postoji da bi vreme, energija i dogovor bili poštovani sa obe strane.',
          'Paketi nisu namenjeni hitnim kriznim situacijama. Termini se dogovaraju u skladu sa dostupnošću.',
        ],
      }
    : {
        title: 'Scheduling & Terms',
        description:
          'Scheduling, rescheduling and cancellation terms for Tiha Psiha sessions and packages.',
        url: 'https://tihomira.info/en/terms',
        label: 'Terms',
        intro:
          'After purchasing a session or package, the appointment is scheduled by email or through the contact form.',
        validity: [
          'A single session is valid for 3 months from the date of purchase.',
          'The 3-session package is valid for 2 months from the date of purchase.',
          'The 5-session package is valid for 3 months from the date of purchase.',
          'Gift sessions are valid for 3 months from the date of purchase.',
        ],
        terms: [
          'A session can be rescheduled without additional charge up to 24 hours before the scheduled appointment.',
          'If a session is cancelled less than 24 hours before the appointment, it is considered used, except in cases of serious unforeseen circumstances.',
          'If the client does not attend the scheduled session without prior notice, the session is considered used.',
          'If I need to reschedule, I will offer a new appointment as soon as possible.',
          'I understand that life happens. This policy exists so that time, energy and agreements are respected on both sides.',
          'Packages are not intended for crisis situations. Sessions are scheduled according to availability.',
        ],
      };

  return (
    <div className="bg-[#0b1220] text-slate-100">
      <SEO
        title={`${content.title} | Tiha Psiha`}
        description={content.description}
        url={content.url}
        language={language}
        alternateUrls={{
          en: 'https://tihomira.info/en/terms',
          sr: 'https://tihomira.info/sr/terms',
          xDefault: 'https://tihomira.info/en/terms',
        }}
      />

      <section className="border-b border-white/5 bg-[#0b1220] py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            {content.label}
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl">
            {content.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            {content.intro}
          </p>
        </div>
      </section>

      <section className="bg-[#0e1628] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-700 bg-[#111827] p-8 sm:p-10">
            <div className="space-y-4">
              {content.validity.map((item, index) => (
                <p key={index} className="leading-8 text-slate-300">
                  {item}
                </p>
              ))}
            </div>

            <div className="my-10 h-px bg-slate-700" />

            <div className="space-y-6">
              {content.terms.map((item, index) => (
                <p key={index} className="leading-8 text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}