import { useState } from 'react';
import { Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const CONTACT_EMAIL = 'tihomira.psiholog@gmail.com';
const INSTAGRAM_URL = 'https://instagram.com/';
const SERVICE_ID = 'service_e5e9hho';
const TEMPLATE_ID = 'template_43a1p3l';
const PUBLIC_KEY = '5iomSKfBXui4AQYwo';

export default function ContactPage({ t, language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handlePathSelect = (message) => {
  setFormData((prev) => ({
    ...prev,
    message,
  }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot anti-spam protection:
    // Real users do not see this field. Bots often fill it in.
    if (formData.website) {
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        website: '',
      });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto max-w-3xl bg-[#0b1220] px-4 py-20 sm:px-6 lg:px-8">
      <SEO
  title={
    language === 'sr'
      ? 'Kontakt | Tiha Psiha i Zoom Maestra'
      : 'Contact | Tiha Psiha and Zoom Maestra'
  }
  description={
    language === 'sr'
      ? 'Kontaktirajte Tihomiru Stanojević za individualne susrete, radionice, zvučne kupke ili Zoom Maestra podršku za online događaje.'
      : 'Contact Tihomira Stanojević about individual sessions, workshops, sound baths or Zoom Maestra online event support.'
  }
  url={
    language === 'sr'
      ? 'https://tihomira.info/sr/contact'
      : 'https://tihomira.info/en/contact'
  }
  language={language}
  alternateUrls={{
    en: 'https://tihomira.info/en/contact',
    sr: 'https://tihomira.info/sr/contact',
    xDefault: 'https://tihomira.info/en/contact',
  }}
/>
      <h1 className="mb-6 font-serif text-5xl text-white">
        {t.contact.title}
      </h1>

      <p className="mb-12 text-lg leading-relaxed text-slate-300">
        {t.contact.intro}
      </p>
      <section className="mb-14 rounded-3xl border border-yellow-700/20 bg-[#10192c] p-6 sm:p-8">
  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
    {t.contact.contactFlowTitle}
  </p>

  <p className="mb-8 text-sm leading-relaxed text-slate-400">
    {t.contact.contactFlowIntro}
  </p>

  <div className="grid gap-4 md:grid-cols-3">
    <button
      type="button"
      onClick={() => handlePathSelect(t.contact.path1Message)}
      className="rounded-2xl border border-yellow-700/20 bg-[#0b1220] p-5 text-left transition hover:border-yellow-400/50 hover:bg-[#121c31]"
    >
      <h2 className="font-serif text-xl text-white">
        {t.contact.path1Title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {t.contact.path1Text}
      </p>
      <span className="mt-5 inline-block text-sm text-yellow-400">
        {t.contact.path1Button}
      </span>
    </button>

    <button
      type="button"
      onClick={() => handlePathSelect(t.contact.path2Message)}
      className="rounded-2xl border border-yellow-700/20 bg-[#0b1220] p-5 text-left transition hover:border-yellow-400/50 hover:bg-[#121c31]"
    >
      <h2 className="font-serif text-xl text-white">
        {t.contact.path2Title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {t.contact.path2Text}
      </p>
      <span className="mt-5 inline-block text-sm text-yellow-400">
        {t.contact.path2Button}
      </span>
    </button>

    <button
      type="button"
      onClick={() => handlePathSelect(t.contact.path3Message)}
      className="rounded-2xl border border-yellow-700/20 bg-[#0b1220] p-5 text-left transition hover:border-yellow-400/50 hover:bg-[#121c31]"
    >
      <h2 className="font-serif text-xl text-white">
        {t.contact.path3Title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {t.contact.path3Text}
      </p>
      <span className="mt-5 inline-block text-sm text-yellow-400">
        {t.contact.path3Button}
        </span>
        </button>
      </div>
      </section>
    
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h3 className="mb-2 font-serif text-white">{t.contact.email}</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-yellow-400 transition-colors hover:text-yellow-300"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-white">{t.contact.follow}</h3>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-yellow-400 transition-colors hover:text-yellow-300"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>

          <div className="pt-8">
            <p className="text-sm leading-relaxed text-slate-500">
              {t.contact.response}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-[#121c31] p-6"
        >
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              {t.contact.yourName}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border border-slate-700 bg-[#0f172a] px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-yellow-500 focus:outline-none"
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              {t.contact.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border border-slate-700 bg-[#0f172a] px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-yellow-500 focus:outline-none"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              {t.contact.message}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full resize-none rounded border border-slate-700 bg-[#0f172a] px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-yellow-500 focus:outline-none"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          {status === 'success' && (
          <p className="text-center text-green-400">
         {t.contact.successMessage}
        </p>
          )}

          {status === 'error' && (
         <p className="text-center text-red-400">
         {t.contact.errorMessage}
        </p>
        )}

          <button
           type="submit"
           disabled={status === 'sending'}
           className="w-full rounded-full bg-yellow-500 px-6 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400 disabled:opacity-50"
            >
         {status === 'sending' ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
}