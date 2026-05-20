import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

export default function TihaPsihaPage({ setCurrentPage, t, language = 'en' }) {
  const [scrollY, setScrollY] = useState(0);

  const gardenStyle = `
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
        rgba(244, 205, 126, 0.18),
        transparent 62%
      );
      transition: background 0.18s ease;
      z-index: 2;
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
        opacity: 0.45;
        transform: scaleX(1);
      }
      50% {
        opacity: 0.9;
        transform: scaleX(1.08);
      }
    }

    .engraved-divider {
      position: relative;
      height: 1px;
      width: 190px;
      margin-left: auto;
      margin-right: auto;
      background: linear-gradient(90deg, transparent, rgba(244, 205, 126, 0.74), transparent);
      animation: gardenBreath 5.6s ease-in-out infinite;
    }

    .engraved-divider::before,
    .engraved-divider::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 7px;
      height: 7px;
      border: 1px solid rgba(244, 205, 126, 0.58);
      transform: translateY(-50%) rotate(45deg);
      background: rgba(11, 18, 32, 0.86);
    }

    .engraved-divider::before {
      left: 33px;
    }

    .engraved-divider::after {
      right: 33px;
    }

    .garden-atmosphere {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 18% 12%, rgba(244, 205, 126, 0.12), transparent 28%),
        radial-gradient(circle at 83% 18%, rgba(114, 142, 72, 0.20), transparent 34%),
        radial-gradient(circle at 18% 76%, rgba(154, 82, 66, 0.10), transparent 28%),
        radial-gradient(circle at 78% 82%, rgba(56, 97, 67, 0.22), transparent 32%);
    }

    .garden-texture {
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0.10;
      mix-blend-mode: overlay;
      background-image:
        radial-gradient(circle at 1px 1px, rgba(255, 244, 214, 0.65) 1px, transparent 0),
        linear-gradient(120deg, transparent 0%, rgba(244, 205, 126, 0.12) 1px, transparent 2px);
      background-size: 18px 18px, 42px 42px;
    }

    .leaf-shadow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0.16;
      mix-blend-mode: screen;
      background:
        radial-gradient(ellipse at 22% 16%, rgba(137, 163, 90, 0.28), transparent 18%),
        radial-gradient(ellipse at 31% 22%, rgba(137, 163, 90, 0.22), transparent 14%),
        radial-gradient(ellipse at 72% 12%, rgba(137, 163, 90, 0.24), transparent 18%),
        radial-gradient(ellipse at 84% 35%, rgba(137, 163, 90, 0.20), transparent 16%),
        radial-gradient(ellipse at 18% 82%, rgba(137, 163, 90, 0.22), transparent 18%),
        radial-gradient(ellipse at 78% 78%, rgba(137, 163, 90, 0.25), transparent 20%);
      filter: blur(1px);
    }

    .candle-halo {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 9999px;
      pointer-events: none;
      background:
        radial-gradient(circle, rgba(244, 205, 126, 0.18) 0%, rgba(215, 181, 109, 0.08) 34%, transparent 68%);
      filter: blur(12px);
      opacity: 0.74;
    }

    .botanical-corner {
      position: absolute;
      width: 145px;
      height: 145px;
      pointer-events: none;
      opacity: 0.20;
      background:
        radial-gradient(ellipse at center, transparent 38%, rgba(215, 181, 109, 0.22) 39%, transparent 42%),
        linear-gradient(135deg, transparent 44%, rgba(215, 181, 109, 0.28) 45%, transparent 47%);
      mask-image: radial-gradient(circle at center, black 0%, transparent 72%);
    }

    .botanical-corner::before,
    .botanical-corner::after {
      content: "";
      position: absolute;
      border: 1px solid rgba(215, 181, 109, 0.55);
      border-left: 0;
      border-bottom: 0;
      border-radius: 999px 999px 0 0;
      transform: rotate(-35deg);
    }

    .botanical-corner::before {
      width: 68px;
      height: 34px;
      top: 38px;
      left: 28px;
    }

    .botanical-corner::after {
      width: 46px;
      height: 24px;
      top: 68px;
      left: 60px;
      opacity: 0.75;
    }

    .etched-panel {
      position: relative;
      isolation: isolate;
      overflow: hidden;
    }

    .etched-panel::before {
      content: "";
      position: absolute;
      inset: 10px;
      border: 1px solid rgba(244, 205, 126, 0.14);
      border-radius: inherit;
      pointer-events: none;
      z-index: 1;
    }

    .etched-panel::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background:
        radial-gradient(circle at 18% 12%, rgba(244, 205, 126, 0.085), transparent 24%),
        radial-gradient(circle at 84% 88%, rgba(95, 113, 80, 0.12), transparent 28%),
        linear-gradient(135deg, rgba(255,255,255,0.035), transparent 42%);
      opacity: 0.95;
      z-index: 0;
    }

    .etched-panel > * {
      position: relative;
      z-index: 2;
    }

    .stone-path {
      position: absolute;
      left: 50%;
      bottom: -5%;
      width: 620px;
      height: 220px;
      transform: translateX(-50%);
      pointer-events: none;
      opacity: 0.18;
      background:
        radial-gradient(ellipse at 50% 82%, rgba(214, 199, 151, 0.28), transparent 58%),
        radial-gradient(ellipse at 42% 58%, rgba(244, 205, 126, 0.18), transparent 13%),
        radial-gradient(ellipse at 56% 50%, rgba(244, 205, 126, 0.16), transparent 12%),
        radial-gradient(ellipse at 48% 32%, rgba(244, 205, 126, 0.14), transparent 10%),
        radial-gradient(ellipse at 54% 20%, rgba(244, 205, 126, 0.12), transparent 9%);
      filter: blur(0.2px);
    }

    .water-glimmer {
      position: absolute;
      width: 340px;
      height: 120px;
      border-radius: 9999px;
      pointer-events: none;
      opacity: 0.20;
      background:
        linear-gradient(90deg, transparent, rgba(184, 211, 191, 0.28), transparent),
        radial-gradient(ellipse, rgba(121, 163, 139, 0.34), transparent 64%);
      filter: blur(7px);
    }

    .rose-glow {
      position: absolute;
      width: 170px;
      height: 170px;
      border-radius: 9999px;
      pointer-events: none;
      opacity: 0.17;
      background: radial-gradient(circle, rgba(196, 118, 101, 0.34), transparent 62%);
      filter: blur(9px);
    }

    .section-label {
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: rgba(250, 204, 21, 0.78);
      font-size: 0.78rem;
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
    const isSerbianPage = window.location.pathname.startsWith('/sr');

    window.location.href = isSerbianPage
      ? '/sr/praksa-tisine'
      : '/en/silence-practice';
  };

  const DecorativeDivider = ({ className = '' }) => (
    <div className={`engraved-divider ${className}`} />
  );

  const GardenAtmosphere = ({ children }) => (
    <>
      <div className="garden-atmosphere" />
      <div className="leaf-shadow" />
      <div className="garden-texture" />
      {children}
    </>
  );

  const BotanicalCorners = () => (
    <>
      <div className="botanical-corner left-4 top-4 rotate-[-8deg]" />
      <div className="botanical-corner bottom-4 right-4 rotate-180" />
    </>
  );

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

      <style>{gardenStyle}</style>

      <div className="overflow-x-hidden bg-[#07100d] font-sans text-slate-100">
        {/* HERO / FIRST BREATH */}
        <section className="reveal relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 pt-20 md:pt-16">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-garden.jpg"
              alt={
              language === 'sr'
               ? 'Tihomira u starom šumskom vrtu sa gongom, u prostoru tišine, susreta i unutrašnjeg rada'
                : 'Tihomira in an old forest garden with a gong, in a space of silence, encounter and inner work'
                }
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
              style={{ transform: `translateY(${scrollY * 0.04}px)` }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/90 via-[#0b1220]/38 to-[#07100d]/92" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/16 to-[#07100d]" />
          <div className="hero-light" />
          <GardenAtmosphere />
          <div className="candle-halo left-[10%] top-[16%]" />
          <div className="candle-halo bottom-[7%] right-[9%]" />
          <div className="stone-path" />
          <div className="water-glimmer bottom-[12%] left-[9%]" />
          <div className="rose-glow bottom-[22%] right-[14%]" />
          <BotanicalCorners />

          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#07100d] via-[#07100d]/76 to-transparent" />

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

            <DecorativeDivider className="my-9" />

            <p className="mx-auto max-w-[62ch] animate-[softFade_1400ms_ease-out_300ms_both] text-[1rem] font-light leading-[1.9] text-slate-100/90 sm:text-[1.16rem] sm:leading-[2]">
              {t.home.intro}
            </p>
          </div>
        </section>

        {/* THRESHOLD */}
        <section className="relative overflow-hidden bg-[#07100d] px-6 py-24 md:py-32">
          <GardenAtmosphere>
            <div className="candle-halo right-[8%] top-[8%]" />
            <div className="water-glimmer bottom-[8%] left-[12%]" />
          </GardenAtmosphere>

          <div className="reveal relative mx-auto max-w-5xl">
            <p className="section-label mb-6">{t.home.encounterLabel}</p>

            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-yellow-50 md:text-5xl">
              {t.home.encounterTitle1}
              <br />
              <span className="text-yellow-100/78">
                {t.home.encounterTitle2}
              </span>
            </h2>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              <div className="etched-panel rounded-[2rem] border border-yellow-700/20 bg-[#102019]/68 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur">
                <p className="font-serif text-2xl leading-tight text-yellow-50">
                  {t.home.encounterBlock1Title}
                </p>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  {t.home.encounterBlock1Text}
                </p>
              </div>

              <div className="etched-panel rounded-[2rem] border border-yellow-700/20 bg-[#102019]/68 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur">
                <p className="font-serif text-2xl leading-tight text-yellow-50">
                  {t.home.encounterBlock2Title}
                </p>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  {t.home.encounterBlock2Text}
                </p>
              </div>

              <div className="etched-panel rounded-[2rem] border border-yellow-700/20 bg-[#102019]/68 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur">
                <p className="font-serif text-2xl leading-tight text-yellow-50">
                  {t.home.encounterBlock3Title}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RECOGNITION */}
        <section className="relative overflow-hidden bg-[#0d1b14] px-6 py-24 md:py-28">
          <GardenAtmosphere>
            <div className="rose-glow left-[7%] top-[26%]" />
            <div className="candle-halo bottom-[4%] right-[16%]" />
          </GardenAtmosphere>

          <div className="reveal relative mx-auto max-w-4xl">
            <p className="section-label mb-8">{t.home.recognitionLabel}</p>

            <div className="space-y-6">
              {recognitionItems.map((item, index) => (
                <div
                  key={index}
                  className="etched-panel rounded-[1.75rem] border border-yellow-700/15 bg-[#07100d]/55 p-6 transition duration-300 hover:border-yellow-500/30 hover:bg-[#102019]/74 md:p-7"
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
        <section className="relative overflow-hidden bg-[#07100d] px-6 py-24 md:py-32">
          <GardenAtmosphere>
            <div className="water-glimmer right-[8%] top-[14%]" />
            <div className="candle-halo left-[10%] bottom-[8%]" />
          </GardenAtmosphere>

          <div className="reveal relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label mb-6">{t.home.methodLabel}</p>

              <h2 className="font-serif text-3xl leading-tight text-yellow-50 md:text-5xl">
                {t.home.methodTitle}
              </h2>

              <DecorativeDivider className="my-8" />

              <p className="text-lg leading-8 text-slate-300">
                {t.home.methodIntro}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {methodItems.map((item, index) => (
                <div
                  key={index}
                  className={`etched-panel rounded-[2rem] border border-yellow-700/15 bg-[#102019]/72 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/35 ${
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
        <div className="relative bg-[#07100d] px-6 py-10">
          <GardenAtmosphere />
          <DecorativeDivider />
          <img
            src="/psychodrama-divider.png"
            alt=""
            className="relative mx-auto mt-8 w-14 object-contain opacity-24"
          />
        </div>

        {/* PATHS THROUGH THE GARDEN */}
<section className="relative overflow-hidden bg-[#102019] px-6 py-24 md:py-32">
  <GardenAtmosphere>
    <div className="stone-path" />
    <div className="water-glimmer bottom-[8%] left-[10%]" />
    <div className="rose-glow top-[18%] right-[10%]" />
  </GardenAtmosphere>

  <div className="reveal relative mx-auto max-w-6xl">
    <p className="section-label mb-6">{t.home.spacesLabel}</p>

    <h2 className="max-w-3xl font-serif text-3xl leading-tight text-yellow-50 md:text-5xl">
      {t.home.spacesTitle}
    </h2>

    <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-yellow-700/20 bg-[#07100d]/70 shadow-[0_28px_90px_rgba(0,0,0,0.30)]">
      <div className="relative min-h-[280px] md:min-h-[420px]">
        <img
          src="/images/group/group-encounter-main.webp"
          alt={
            language === 'sr'
              ? 'Grupni iskustveni rad u online prostoru, sa stvarnim ljudima u susretu'
              : 'Group experiential work in an online space, with real people in encounter'
          }
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07100d]/88 via-[#07100d]/35 to-[#07100d]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/72 via-transparent to-transparent" />
        <div className="leaf-shadow" />

        <div className="absolute bottom-0 left-0 max-w-2xl p-7 md:p-10">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
            {language === 'sr' ? 'živi susreti' : 'living encounters'}
          </p>

          <p className="font-serif text-2xl leading-tight text-yellow-50 md:text-4xl">
            {language === 'sr'
              ? 'Vrt nije samo unutrašnji. U njemu se ljudi stvarno sreću.'
              : 'The garden is not only inner. People actually meet here.'}
          </p>
        </div>
      </div>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {pathItems.map((item, index) => (
        <div
          key={index}
          className="etched-panel group rounded-[2rem] border border-yellow-700/20 bg-[#07100d]/58 p-7 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
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
{/* ACROSS DISTANCE */}
<section className="relative overflow-hidden bg-[#07100d] px-6 py-20 md:py-28">
  <GardenAtmosphere>
    <div className="water-glimmer right-[8%] top-[14%]" />
    <div className="candle-halo left-[8%] bottom-[6%]" />
  </GardenAtmosphere>

  <div className="reveal relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div>
      <p className="section-label mb-6">
        {language === 'sr' ? 'preko distance' : 'across distance'}
      </p>

      <h2 className="font-serif text-3xl leading-tight text-yellow-50 md:text-5xl">
        {language === 'sr'
          ? 'Online prostor može da postane stvaran prostor susreta.'
          : 'Online space can become a real space of encounter.'}
      </h2>

      <p className="mt-7 text-lg leading-8 text-slate-300">
        {language === 'sr'
          ? 'Kada je pažnja stvarna, a struktura dovoljno jasna, ljudi iz različitih mesta mogu da uđu u isti psihološki prostor — kroz sliku, glas, simbol, akciju i svedočenje.'
          : 'When attention is real and the structure is clear enough, people from different places can enter the same psychological space — through image, voice, symbol, action and witnessing.'}
      </p>
    </div>

    <div className="etched-panel overflow-hidden rounded-[2.25rem] border border-yellow-700/20 bg-[#102019]/62 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
      <div className="relative min-h-[280px] md:min-h-[420px]">
        <img
          src="/images/group/group-encounter-map.webp"
          alt={
            language === 'sr'
              ? 'Mapa međunarodne online grupe i ljudi povezani preko distance'
              : 'Map of an international online group and people connected across distance'
          }
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/70 via-transparent to-[#07100d]/10" />
        <div className="absolute inset-0 bg-[#07100d]/10" />
      </div>
    </div>
  </div>
</section>

          {/* PROCESS IN ACTION */}
<section className="relative overflow-hidden bg-[#0d1b14] px-6 py-20 md:py-28">
  <GardenAtmosphere>
    <div className="rose-glow right-[10%] top-[18%]" />
    <div className="water-glimmer bottom-[10%] left-[12%]" />
  </GardenAtmosphere>

  <div className="reveal relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
    <div className="etched-panel overflow-hidden rounded-[2.25rem] border border-yellow-700/20 bg-[#07100d]/70 shadow-[0_28px_90px_rgba(0,0,0,0.30)]">
      <div className="relative min-h-[280px] md:min-h-[420px]">
        <img
          src="/images/group/group-encounter-workshop.webp"
          alt={
            language === 'sr'
              ? 'Online radionica u toku, sa grupom i konkretnim procesom rada'
              : 'An online workshop in process, with a group and a concrete work moment'
          }
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/76 via-[#07100d]/12 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#07100d]/35" />
      </div>
    </div>

    <div>
      <p className="section-label mb-6">
        {language === 'sr' ? 'proces u toku' : 'process in action'}
      </p>

      <h2 className="font-serif text-3xl leading-tight text-yellow-50 md:text-5xl">
        {language === 'sr'
          ? 'Rad nije samo razgovor. Ponekad prostor počne da se pomera.'
          : 'The work is not only conversation. Sometimes the space begins to move.'}
      </h2>

      <p className="mt-7 text-lg leading-8 text-slate-300">
        {language === 'sr'
          ? 'U grupnom radu koristimo reč, sliku, ulogu, telo, akciju, humor, tišinu i ono što se neočekivano pojavi između ljudi. Online prostor ostaje stvaran kada u njemu ima pažnje, strukture i živog odgovora.'
          : 'In group work, we use words, images, roles, body, action, humour, silence and what unexpectedly appears between people. Online space remains real when it holds attention, structure and living response.'}
      </p>
    </div>
  </div>
</section>
        {/* CREDIBILITY */}
        <section className="relative bg-[#07100d] px-6 py-14">
          <GardenAtmosphere />

          <div className="reveal relative mx-auto max-w-5xl">
            <div className="etched-panel rounded-[2rem] border border-yellow-700/15 bg-[#102019]/54 px-6 py-8">
              <p className="text-center text-sm leading-8 tracking-[0.02em] text-slate-400">
                {t.home.credibility}
              </p>
            </div>
          </div>
        </section>

        {/* SILENCE PRACTICE */}
        <section className="relative overflow-hidden bg-[#0d1b14] px-4 py-24 md:py-28">
          <GardenAtmosphere>
            <div className="candle-halo left-[8%] top-[12%]" />
            <div className="water-glimmer bottom-[12%] right-[8%]" />
          </GardenAtmosphere>

          <div className="relative mx-auto max-w-5xl">
            <div className="reveal etched-panel overflow-hidden rounded-[2.25rem] border border-yellow-700/20 bg-[#07100d]/72 shadow-[0_28px_90px_rgba(0,0,0,0.30)] backdrop-blur">
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center p-9 md:p-14">
                  <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400/80">
                    {t.home.silenceLabel}
                  </p>

                  <h2 className="mb-6 font-serif text-3xl leading-tight text-yellow-50 md:text-4xl">
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

                  <div className="absolute inset-0 bg-gradient-to-r from-[#07100d] via-[#07100d]/40 to-transparent lg:bg-gradient-to-l" />
                  <div className="leaf-shadow" />
                  <div className="rose-glow bottom-[16%] right-[14%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL INVITATION */}
        <section className="relative overflow-hidden bg-[#07100d] px-6 py-24 text-white md:py-32">
          <GardenAtmosphere>
            <div className="candle-halo left-[50%] top-[12%] -translate-x-1/2" />
            <div className="stone-path" />
          </GardenAtmosphere>

          <div className="reveal relative mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-400/75">
              Tiha Psiha
            </p>

            <h2 className="mb-7 font-serif text-4xl leading-tight text-yellow-50 md:text-5xl">
              {t.home.ready}
            </h2>

            <DecorativeDivider className="mb-9" />

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