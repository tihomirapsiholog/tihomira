const CONTACT_EMAIL = 'tihomira.psiholog@gmail.com';

export default function EventsPage({ t }) {
  return (
    <div className="mx-auto max-w-4xl bg-[#0b1220] px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-serif text-5xl text-white">{t.events.title}</h1>

      <div className="rounded-2xl border border-yellow-700/20 bg-[#121c31] p-12 text-center">
        <p className="mb-4 text-xl text-slate-300">{t.events.noEvents}</p>
        <p className="text-slate-400">{t.events.stayConnected}</p>
      </div>

      <div className="mt-16 rounded-2xl border border-yellow-700/20 bg-[#10192c] p-8">
        <h3 className="mb-4 font-serif text-white">{t.events.interested}</h3>
        <p className="mb-4 text-slate-300">{t.events.custom}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-yellow-400 transition-colors hover:text-yellow-300"
        >
          {t.events.customText}
        </a>
      </div>
    </div>
  );
}