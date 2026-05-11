import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomePage({ setCurrentPage, t }) {
  const [scrollY, setScrollY] = useState(0);

  const fadeUpStyle = `
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.8s ease, transform 0.8s ease;
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
        600px circle at var(--x, 50%) var(--y, 50%),
        rgba(255, 220, 140, 0.12),
        transparent 60%
      );
      transition: background 0.15s ease;
      z-index: 1;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(14px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
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
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
    @keyframes heroZoom {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.08);
      }
    }

    @keyframes dividerBreath {
      0%, 100% {
        opacity: 0.6;
        transform: scaleX(1);
      }
      50% {
        opacity: 1;
        transform: scaleX(1.15);
      }
    }

    @keyframes scrollCue {
      0% {
        opacity: 0;
        transform: translateY(-4px);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translateY(8px);
      }
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
      { threshold: 0.15 }
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

  return (
    <>
      <style>{fadeUpStyle}</style>

      <div className="space-y-0 font-sans">
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-20 md:pt-16 reveal">
          <div className="absolute inset-0">
           <img
          src="/silhouette.jpg"
          alt="Silhouette"
           className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
          />
          </div>
custom-cursor
          <div className="hero-light"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/30 to-transparent"></div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 py-8 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
       <h1 className="animate-[gentleRise_700ms_ease-out_both] font-serif text-6xl font-light leading-[1.05] tracking-[0.08em] text-yellow-50 [text-shadow:0_4px_20px_rgba(0,0,0,0.7)] lg:text-7xl">
         Tihomira Stanojević
         </h1>

        <p className="mx-auto max-w-[22ch] text-[1.9rem] font-light italic leading-[1.35] text-yellow-100/75 animate-[softFade_1200ms_ease-out_180ms_both]">
  {t.home.tagline}
</p>

        <div className="mx-auto mt-8 max-w-[58ch] text-[1.18rem] font-light leading-[1.95] text-slate-200">
  <p>{t.home.intro}</p>
</div>

        <div className="mt-2 h-px w-16 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent animate-[dividerBreath_4s_ease-in-out_infinite]"></div>
        </div>
      </div>
        </section>

        <section className="bg-[#0e1628] py-24 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-center font-serif text-4xl text-white md:text-5xl reveal">
              {t.home.howIWork}
            </h2>

            <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-400 reveal">
              {t.home.workDescription}
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: '↻',
                  title: t.home.pillar1Title,
                  desc: t.home.pillar1Desc,
                  question: t.home.pillar1Question,
                },
                {
                  icon: '◯',
                  title: t.home.pillar2Title,
                  desc: t.home.pillar2Desc,
                  question: t.home.pillar2Question,
                },
                {
                  icon: '✦',
                  title: t.home.pillar3Title,
                  desc: t.home.pillar3Desc,
                  question: t.home.pillar3Question,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group h-80 cursor-pointer reveal"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="relative h-full w-full transition-transform duration-700"
                    style={{ transformStyle: 'preserve-3d' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'rotateY(180deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'rotateY(0deg)';
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8 hover:border-yellow-500/40 hover:shadow-xl"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="mb-4 text-4xl text-yellow-400">{item.icon}</div>
                      <h3 className="mb-3 font-serif text-xl text-white">{item.title}</h3>
                      <p className="leading-relaxed text-slate-400">{item.desc}</p>
                    </div>

                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-2xl border border-yellow-500/40 bg-[#1a2540] p-8"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <p className="text-center font-serif text-lg italic leading-relaxed text-yellow-100">
                        {item.question}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b1220] py-24 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="reveal">
              <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
                {t.home.toolsTitle}
              </h2>
              <p className="mb-4 leading-relaxed text-slate-300">
                {t.home.toolsText}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-yellow-700/20 shadow-2xl reveal">
              <img
                src="/instruments.jpg"
                alt="Instruments"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="bg-[#0e1628] py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl text-white md:text-4xl reveal">
              {t.home.offerings}
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                { title: t.home.offering1, subtitle: t.home.offering1Sub, href: '/work#individual' },
                { title: t.home.offering2, subtitle: t.home.offering2Sub, href: '/work#groups' },
                { title: t.home.offering3, subtitle: t.home.offering3Sub, href: '/work#sound' },
                { title: t.home.offering4, subtitle: t.home.offering4Sub, href: '/zoom-maestra' },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(item.href)}
                  className="rounded-xl border-l-4 border-yellow-500/50 bg-[#121c31] p-8 text-left transition-all hover:border-yellow-400 hover:bg-[#16223b] reveal"
                >
                  <h3 className="text-lg font-serif text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.subtitle}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
<section className="bg-[#111827] py-24 md:py-28">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="overflow-hidden rounded-[32px] border border-yellow-700/20 bg-[#161f33] reveal">

      <div className="grid lg:grid-cols-2">
        
        <div className="flex flex-col justify-center p-10 md:p-14">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400/80">
            The Practice of Silence
          </p>

          <h2 className="mb-6 font-serif text-4xl leading-tight text-white md:text-5xl">
            A real-time exploration of silence, attention, and the nervous system.
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
            A three-month preparation process for ten days of silence —
            documented through field notes, embodiment, and psychological observation.
          </p>

          <div>
            <button
              onClick={() => setCurrentPage('/en/silence-practice')}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 px-7 py-3 text-sm tracking-wide text-yellow-100 transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-950"
            >
              Enter the practice
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden">
          <img
            src="/silhouette.jpg"
            alt="Silence Practice"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#161f33] via-[#161f33]/40 to-transparent lg:bg-gradient-to-l"></div>
        </div>

      </div>
    </div>
  </div>
</section>
        <section className="bg-[#10192c] py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8 md:grid-cols-2 reveal">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
                  Zoom Maestra
                </p>
                <h2 className="mb-4 font-serif text-3xl text-white md:text-4xl">
                  {t.home.zoomTitle}
                </h2>
                <p className="leading-relaxed text-slate-300">
                  {t.home.zoomText}
                </p>
              </div>

              <div className="flex md:justify-end">
                <button
                  onClick={() => setCurrentPage('/zoom-maestra')}
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
                >
                  {t.home.zoomButton}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#0a0f1a] via-[#111827] to-[#0a0f1a] py-24 md:py-28 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 reveal">
            <h2 className="mb-6 font-serif text-4xl md:text-5xl">{t.home.ready}</h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-300">
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