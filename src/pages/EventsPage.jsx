import { ArrowRight } from 'lucide-react';

export default function EventsPage({ t, setCurrentPage }) {
  return (
    <div className="mx-auto max-w-4xl bg-[#0b1220] px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-8 font-serif text-5xl text-white">{t.events.title}</h1>
      <div className="rounded-2xl border border-yellow-700/20 bg-[#121c31] p-12 text-center">
        <p className="mb-4 text-xl text-slate-300">{t.events.noEvents}</p>
        <p className="text-slate-400">{t.events.stayConnected}</p>
      </div>
      <div className="mt-16 rounded-2xl border border-yellow-700/20 bg-[#10192c] p-8">
        <h3 className="mb-4 font-serif text-white">{t.events.interested}</h3>
        <p className="mb-6 text-slate-300">{t.events.custom}</p>
        <button
          onClick={() => setCurrentPage('/contact')}
          className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
        >
          {t.events.customText}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
