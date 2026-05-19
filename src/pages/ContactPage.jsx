import { useEffect, useState } from 'react';
import { Instagram, Mail, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const CONTACT_EMAIL = 'tihomira.psiholog@gmail.com';
const INSTAGRAM_URL = 'https://instagram.com/';
const SERVICE_ID = 'service_e5e9hho';
const TEMPLATE_ID = 'template_43a1p3l';
const PUBLIC_KEY = '5iomSKfBXui4AQYwo';

export default function ContactPage({ t, language = 'en' }) {
  const location = useLocation();
  const currentLanguage = location.pathname.startsWith('/sr') ? 'sr' : language;
  const isSerbian = currentLanguage === 'sr';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });

  const [status, setStatus] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const message = params.get('message');

    if (message) {
      setFormData((prev) => ({
        ...prev,
        message,
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePathSelect = (message) => {
    setFormData((prev) => ({
      ...prev,
      message,
    }));

    setTimeout(() => {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
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

  const paths = [
    {
      title: t.contact.path1Title,
      text: t.contact.path1Text,
      button: t.contact.path1Button,
      message: t.contact.path1Message,
    },
    {
      title: t.contact.path2Title,
      text: t.contact.path2Text,
      button: t.contact.path2Button,
      message: t.contact.path2Message,
    },
    {
      title: t.contact.path3Title,
      text: t.contact.path3Text,
      button: t.contact.path3Button,
      message: t.contact.path3Message,
    },
  ];

  return (
    <div className="overflow-hidden bg-[#0b1220] text-slate-100">
      <SEO
        title={isSerbian ? 'Kontakt | Tiha Psiha' : 'Contact | Tiha Psiha'}
        description={
          isSerbian
            ? 'Kontaktirajte Tihomiru Stanojević za individualne susrete, radionice, grupne procese i zvučna iskustva uživo.'
            : 'Contact Tihomira Stanojević about individual sessions, workshops, group processes and in-person sound experiences.'
        }
        url={
          isSerbian
            ? 'https://tihomira.info/sr/contact'
            : 'https://tihomira.info/en/contact'
        }
        language={currentLanguage}
        alternateUrls={{
          en: 'https://tihomira.info/en/contact',
          sr: 'https://tihomira.info/sr/contact',
          xDefault: 'https://tihomira.info/en/contact',
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-yellow-700/10 bg-[#0b1220] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,181,109,0.13),transparent_30%),radial-gradient(circle_at_84%_24%,rgba(95,113,80,0.20),transparent_34%),linear-gradient(180deg,#0b1220,#101b18)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.34em] text-yellow-400/80">
            {isSerbian ? 'Kapija za javljanje' : 'A gate for reaching out'}
          </p>

          <h1 className="font-serif text-4xl leading-tight text-yellow-50 sm:text-5xl lg:text-6xl">
            {t.contact.title}
          </h1>

          <div className="mx-auto my-8 h-px w-40 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            {t.contact.intro}
          </p>
        </div>
      </section>

      {/* PATHS */}
      <section className="relative overflow-hidden bg-[#101b18] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(95,113,80,0.22),transparent_34%),radial-gradient(circle_at_90%_65%,rgba(215,181,109,0.09),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
              {t.contact.contactFlowTitle}
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-yellow-50 sm:text-4xl">
              {isSerbian
                ? 'Izaberi stazu koja je najbliža onome što tražiš.'
                : 'Choose the path closest to what you are looking for.'}
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              {t.contact.contactFlowIntro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {paths.map((path, index) => (
              <button
                key={path.title}
                type="button"
                onClick={() => handlePathSelect(path.message)}
                className="group rounded-[2rem] border border-yellow-700/20 bg-[#0b1220]/60 p-8 text-left shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/35"
              >
                <p className="mb-6 text-xs uppercase tracking-[0.24em] text-yellow-400/55">
                  {isSerbian ? 'staza' : 'path'} {index + 1}
                </p>

                <h3 className="font-serif text-2xl leading-tight text-yellow-50">
                  {path.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {path.text}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition group-hover:text-yellow-100">
                  {path.button}
                  <Send size={15} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section
        id="contact-form"
        className="relative overflow-hidden bg-[#0b1220] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,181,109,0.10),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[2.25rem] border border-yellow-700/20 bg-[#0b1220]/55 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-yellow-400/75">
              {isSerbian ? 'direktan kontakt' : 'direct contact'}
            </p>

            <h2 className="font-serif text-3xl leading-tight text-yellow-50">
              {isSerbian
                ? 'Možeš mi pisati i direktno.'
                : 'You can also write to me directly.'}
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="mb-3 font-serif text-xl text-yellow-50">
                  {t.contact.email}
                </h3>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-yellow-300 transition-colors hover:text-yellow-100"
                >
                  <Mail size={18} />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-xl text-yellow-50">
                  {t.contact.follow}
                </h3>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-300 transition-colors hover:text-yellow-100"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </div>

              <div className="border-t border-yellow-700/20 pt-8">
                <p className="text-sm leading-7 text-slate-500">
                  {t.contact.response}
                </p>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2.25rem] border border-yellow-700/20 bg-[#111827]/78 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur md:p-10"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-yellow-400/75">
              {isSerbian ? 'poruka' : 'message'}
            </p>

            <h2 className="mb-8 font-serif text-3xl leading-tight text-yellow-50">
              {isSerbian ? 'Napiši šta te dovodi.' : 'Write what brings you here.'}
            </h2>

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

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.yourName}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-yellow-700/20 bg-[#0b1220] px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-yellow-400"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-yellow-700/20 bg-[#0b1220] px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-yellow-400"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full resize-none rounded-xl border border-yellow-700/20 bg-[#0b1220] px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-yellow-400"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              {status === 'success' && (
                <p className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center text-sm text-green-300">
                  {t.contact.successMessage}
                </p>
              )}

              {status === 'error' && (
                <p className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-center text-sm text-red-300">
                  {t.contact.errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400 disabled:opacity-50"
              >
                {status === 'sending' ? t.contact.sending : t.contact.send}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}