import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

export default function TihaPsihaPage({ setCurrentPage, t, language = 'en' }) {
  const [scrollY, setScrollY] = useState(0);

  const fadeUpStyle = `
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.9s ease, transform 0.9s ease;
    }

    .revealed {
      opacity: 1;
      transform: translateY(0);
    }

    .hero-light {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: radial-gradient(
        620px circle at var(--x, 50%) var(--y, 50%),
        rgba(215, 181, 109, 0.16),
        transparent 62%
      );
      transition: background 0.18s ease;
      z-index: 1;
    }

    @keyframes softFade {
      from {
        opacity: 0;
        filter: blur(6px);
      }
      to {
        opacity: 1;
        filter: blur(0);
      }
    }

    @keyframes gentleRise {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes gardenBreath {
      0%, 100% {
        opacity: 0.35;
        transform: scaleX(1);
      }
      50% {
        opacity: 0.85;
        transform: scaleX(1.12);
      }
    }

    .garden-divider {
      animation: gardenBreath 5s ease-in-out infinite;
    }
  `;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.querySelector('.hero-light');

    const move = (e) => {
      if (!hero) return;
      hero.style.setProperty('--x', `${e.clientX}px`);
      hero.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', move);

    return () => window.removeEventListener('mousemove', move);
  }, []);

  const recognitionItems = t.home.recognitionItems || [];

  const methodItems = [
    {
      title: t.home.method1Title,
      text: t.home.method1Text,
    },
    {
      title: t.home.method2Title,
      text: t.home.method2Text,
    },
    {
      title: t.home.method3Title,
      text: t.home.method3Text,
    },
    {
      title: t.home.method4Title,
      text: t.home.method4Text,
    },
    {
      title: t.home.method5Title,
      text: t.home.method5Text,
    },
  ];

  const pathItems = [
    {
      title: t.home.space1Title,
      text: t.home.space1Text1,
      note: t.home.space1Text2,
    },
    {
      title: t.home.space2Title,
      text: t.home.space2Text,
    },
    {
      title: t.home.offering3,
      text: t.home.pillar3Desc,
    },
    {
      title: t.home.space3Title,
      text: t.home.space3Text,
    },
  ];

 const goToSilencePractice = () => {
  window.location.href =
    language === 'sr'
      ? '/sr/praksa-tisine'
      : '/en/silence-practice';
};

  return (
    <>
      <SEO
        title={
          language === 'sr'
            ? 'Tiha Psiha | Individualni susreti, radionice i zvučna iskustva'
            : 'Tiha Psiha | Individual Sessions, Workshops & Sound Experiences'
        }
        description={
          language === 'sr'
            ? 'Tiha Psiha nudi psihološki, iskustveni i simbolički rad kroz individualne susrete, grupne radionice i zvučna iskustva uživo.'
            : 'Tiha Psiha offers psychological, experiential and symbolic work through individual sessions, group workshops and in-person sound experiences.'
        }
        url={
          language === 'sr'
            ? 'https://tihomira.info/sr/tiha-psiha'
            : 'https://tihomira.info/en/tiha-psiha'
        }
        language={language}
        alternateUrls={{
          en: 'https://tihomira.info/en/tiha-psiha',
          sr: 'https://tihomira.info/sr/tiha-psiha',
          xDefault: 'https://tihomira.info/en/tiha-psiha',
        }}
      />

      <style>{fadeUpStyle}</style>

      <div className="overflow-x-hidden bg-[#0b1220] font-sans text-slate-100">
        {/* HERO / FIRST BREATH */}
        <section className="reveal relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 pt-20 md:pt-16">
          <div className="absolute inset-0">
            <img
              src="/silhouette.jpg"
              alt={
                language === 'sr'
                  ? 'Silueta osobe u prostoru tišine i unutrašnjeg rada'
                  : 'Silhouette of a person in a space of silence and inner work'
              }
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
              style={{ transform: `translateY(${scrollY * 0.04}px)` }}
            />
          </div>

          <div className="hero-light" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/85 via-[#0b1220]/45 to-[#07100d]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-[#0b1220]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/70 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl py-14 text-center">
            <p className="animate-[softFade_1000ms_ease-out_both] mb-6 text-xs uppercase tracking-[0.38em] text-yellow-200/75">
              Tiha Psiha
            </p>

            <h1 className="animate-[gentleRise_800ms_ease-out_both] font-serif text-[3.2rem] font-light leading-[0.98] tracking-[0.01em] text-yellow-50 [text-shadow:0_4px_24px_rgba(0,0,0,0.75)] sm:text-6xl lg:text-7xl">
              Tihomira Stanojević
            </h1>

            <p className="mx-auto mt-7 max-w-[28ch] animate-[softFade_1200ms_ease-out_180ms_both] text-[1.25rem] font-light italic leading-[1.45] text-yellow-100/85 sm:text-[1.9rem]">
              {t.home.tagline}
            </p>

            <div className="garden-divider mx-auto my-9 h-px w-40 bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent" />

            <p className="mx-auto max-w-[62ch] animate-[softFade_1400ms_ease-out_300ms_both] text-[1rem] font-light leading-[1.9] text-slate-100/90 sm:text-[1.16rem] sm:leading-[2]">
              {t.home.intro}
            </p>
          </div>
        </section>

        {/* THRESHOLD */}
        <section className="relative overflow-hidden bg-[#0b1220] px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(215,181,109,0.10),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(95,113,80,0.12),transparent_32%)]" />

          <div className="reveal relative mx-auto max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-yellow-400/80">
              {t.home.encounterLabel}
            </p>

            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-yellow-50 md:text-5xl">
              {t.home.encounterTitle1}
              <br />
              <span className="text-yellow-100/80">
                {t.home.encounterTitle2}
              </span>
            </h2>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-yellow-700/20 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur">
                <p className="font-serif text-2xl leading-tight text-yellow-50">
                  {t.home.encounterBlock1Title}
                </p>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  {t.home.encounterBlock1Text}
                </p>
              </div>

              <div className="rounded-[2rem] border border-yellow-700/20 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur">
                <p className="font-serif text-2xl leading-tight text-yellow-50">
                  {t.home.encounterBlock2Title}
                </p>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  {t.home.encounterBlock2Text}
                </p>
              </div>

              <div className="rounded-[2rem] border border-yellow-700/20 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur">
                <p className="font-serif text-2xl leading-tight text-yellow-50">
                  {t.home.encounterBlock3Title}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RECOGNITION */}
        <section className="relative overflow-hidden bg-[#101b18] px-6 py-24 md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.88),rgba(16,27,24,0.95)),radial-gradient(circle_at_15%_30%,rgba(95,113,80,0.20),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(215,181,109,0.10),transparent_32%)]" />

          <div className="reveal relative mx-auto max-w-4xl">
            <p className="mb-8 text-sm uppercase tracking-[0.28em] text-yellow-400/80">
              {t.home.recognitionLabel}
            </p>

            <div className="space-y-6">
              {recognitionItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-yellow-700/15 bg-[#0b1220]/45 p-6 transition duration-300 hover:border-yellow-500/30 hover:bg-[#0b1220]/65 md:p-7"
                >
                  <h3 className="font-serif text-2xl leading-tight text-yellow-50 md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section className="relative overflow-hidden bg-[#0b1220] px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,181,109,0.10),transparent_34%)]" />

          <div className="reveal relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-6 text-sm uppercase tracking-[0.28em] text-yellow-400/80">
                {t.home.methodLabel}
              </p>

              <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">
                {t.home.methodTitle}
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                {t.home.methodIntro}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {methodItems.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-[2rem] border border-yellow-700/15 bg-[#111827]/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.20)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/35 ${
                    index === methodItems.length - 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  <p className="mb-5 text-xs uppercase tracking-[0.28em] text-yellow-400/60">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <h3 className="font-serif text-2xl text-yellow-50">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SMALL BREATHING DIVIDER */}
        <div className="bg-[#0b1220] px-6 py-10">
          <div className="garden-divider mx-auto h-px w-44 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          <img
            src="/psychodrama-divider.png"
            alt=""
            className="mx-auto mt-8 w-14 object-contain opacity-20"
          />
        </div>

        {/* PATHS THROUGH THE GARDEN */}
        <section className="relative overflow-hidden bg-[#131f19] px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.75),rgba(19,31,25,0.96)),radial-gradient(circle_at_20%_20%,rgba(215,181,109,0.12),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(95,113,80,0.22),transparent_34%)]" />

          <div className="reveal relative mx-auto max-w-6xl">
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-yellow-400/80">
              {t.home.spacesLabel}
            </p>

            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              {t.home.spacesTitle}
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pathItems.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-[2rem] border border-yellow-700/20 bg-[#0b1220]/55 p-7 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
                >
                  <p className="mb-6 text-xs uppercase tracking-[0.25em] text-yellow-400/55">
                    {language === 'sr' ? 'staza' : 'path'} {index + 1}
                  </p>

                  <h3 className="font-serif text-2xl leading-tight text-yellow-50">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-300">
                    {item.text}
                  </p>

                  {item.note && (
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDIBILITY */}
        <section className="bg-[#0b1220] px-6 py-14">
          <div className="reveal mx-auto max-w-5xl">
            <div className="rounded-[2rem] border border-yellow-700/15 bg-white/[0.025] px-6 py-8">
              <p className="text-center text-sm leading-8 tracking-[0.02em] text-slate-400">
                {t.home.credibility}
              </p>
            </div>
          </div>
        </section>

        {/* SILENCE PRACTICE */}
        <section className="relative overflow-hidden bg-[#0e1628] px-4 py-24 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(215,181,109,0.10),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(95,113,80,0.16),transparent_34%)]" />

          <div className="relative mx-auto max-w-5xl">
            <div className="reveal overflow-hidden rounded-[2.25rem] border border-yellow-700/20 bg-[#111827]/85 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur">
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center p-9 md:p-14">
                  <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400/80">
                    {t.home.silenceLabel}
                  </p>

                  <h2 className="mb-6 font-serif text-3xl leading-tight text-white md:text-4xl">
                    {t.home.silenceTitle}
                  </h2>

                  <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
                    {t.home.silenceText}
                  </p>

                  <button
                    onClick={goToSilencePractice}
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-500/30 px-7 py-3 text-sm tracking-wide text-yellow-100 transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-950"
                  >
                    {t.home.silenceBlockButton}
                    <ArrowRight size={18} />
                  </button>
                </div>

                <div className="relative min-h-[320px] overflow-hidden">
                  <img
                    src="/silhouette.jpg"
                    alt={
                      language === 'sr'
                        ? 'Praksa tišine i istraživanje pažnje'
                        : 'The Practice of Silence and attention exploration'
                    }
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/35 to-transparent lg:bg-gradient-to-l" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL INVITATION */}
        <section className="relative overflow-hidden bg-[#0b1220] px-6 py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(215,181,109,0.12),transparent_32%),linear-gradient(180deg,#0b1220,#07100d)]" />

          <div className="reveal relative mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-400/75">
              Tiha Psiha
            </p>

            <h2 className="mb-7 font-serif text-4xl leading-tight md:text-5xl">
              {t.home.ready}
            </h2>

            <p className="mx-auto mb-9 max-w-2xl text-lg leading-8 text-slate-300">
              {t.home.inviteText}
            </p>

            <button
              onClick={() => setCurrentPage('/contact')}
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
            >
              {t.home.cta}
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}