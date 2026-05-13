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

      <div className="space-y-0 font-sans overflow-x-hidden">
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-20 md:pt-16 reveal">
          <div className="absolute inset-0">
           <img
          src="/silhouette.jpg"
          alt="Silhouette"
           className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
          />
          </div>
          <div className="hero-light"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/30 to-transparent"></div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 py-8 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
       <h1 className="animate-[gentleRise_700ms_ease-out_both] px-2 font-serif text-[3.2rem] font-light leading-[0.98] tracking-[0.01em] text-yellow-50 [text-shadow:0_4px_20px_rgba(0,0,0,0.7)] sm:text-6xl lg:text-7xl lg:tracking-[0.08em]">
        Tihomira Stanojević
      </h1>

        <p className="mx-auto max-w-[85vw] text-[1.2rem] font-light italic leading-[1.35] text-yellow-100/75 animate-[softFade_1200ms_ease-out_180ms_both] sm:max-w-[28ch] sm:text-[1.9rem]">
  {t.home.tagline}
</p>

        <div className="mx-auto mt-8 max-w-[58ch] px-2 text-[1rem] font-light leading-[1.8] text-slate-200 sm:text-[1.18rem] sm:leading-[1.95]">
  <p>{t.home.intro}</p>
</div>
        </div>
      </div>
        </section>
      <section className="bg-[#0e1628] px-6 py-28 md:py-32">
  <div className="mx-auto max-w-4xl reveal">
    <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
      {t.home.encounterLabel}
    </p>

    <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white md:text-4xl">
      {t.home.encounterTitle1}
      <br />
      {t.home.encounterTitle2}
    </h2>

    <div className="mt-12 space-y-10 text-slate-300">

      <div className="max-w-3xl space-y-4">
        <p className="font-serif text-2xl leading-tight text-yellow-50">
          {t.home.encounterBlock1Title}
        </p>

        <p className="text-lg leading-relaxed">
          {t.home.encounterBlock1Text}
        </p>
      </div>

      <div className="max-w-3xl space-y-4">
        <p className="font-serif text-2xl leading-tight text-yellow-50">
          {t.home.encounterBlock2Title}
        </p>

        <p className="text-lg leading-relaxed">
          {t.home.encounterBlock2Text}
        </p>
      </div>

      <div className="max-w-3xl space-y-4">
        <p className="font-serif text-2xl leading-tight text-yellow-50">
          {t.home.encounterBlock3Title}
        </p>
      </div>

    </div>
  </div>

</section>
<section className="bg-[#0b1220] px-6 py-20 md:py-24">
  <div className="mx-auto max-w-4xl reveal">
    <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
      {t.home.recognitionLabel}
    </p>

    <div className="space-y-8">
      {t.home.recognitionItems.map((item, index) => (
        <div key={index} className="border-t border-yellow-700/10 pt-6">
          <h3 className="font-serif text-2xl leading-tight text-yellow-50 md:text-3xl">
            {item.title}
          </h3>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#0b1220] px-6 py-24 md:py-28">
  <div className="mx-auto max-w-5xl reveal">
    <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
  {t.home.methodLabel}
</p>

   <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white md:text-4xl">
  {t.home.methodTitle}
</h2>

   v<p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
  {t.home.methodIntro}
</p>

    <div className="mt-16 grid gap-px border border-yellow-700/10 bg-yellow-700/10 md:grid-cols-2">
      
      <div className="bg-[#111827] p-8 md:p-10">
      <h3 className="font-serif text-xl text-yellow-50">
  {t.home.method1Title}
</h3>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
  {t.home.method1Text}
</p>
      </div>

      <div className="bg-[#111827] p-8 md:p-10">
        <h3 className="font-serif text-xl text-yellow-50">
  {t.home.method2Title}
</h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
  {t.home.method2Text}
</p>
      </div>

      <div className="bg-[#111827] p-8 md:p-10">
      <h3 className="font-serif text-xl text-yellow-50">
  {t.home.method3Title}
</h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
  {t.home.method3Text}
</p>
      </div>

      <div className="bg-[#111827] p-8 md:p-10">
       <h3 className="font-serif text-xl text-yellow-50">
  {t.home.method4Title}
</h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
  {t.home.method4Text}
</p>
      </div>

      <div className="bg-[#111827] p-8 md:p-10 md:col-span-2">
       <h3 className="font-serif text-xl text-yellow-50">
  {t.home.method5Title}
</h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
  {t.home.method5Text}
</p>
      </div>
    </div>
  </div>
</section>
<div className="flex justify-center py-8 opacity-10">
  <img
    src="/psychodrama-divider.png"
    alt=""
    className="w-14 object-contain"
  />
</div>
<section className="bg-[#0e1628] px-6 py-24 md:py-28">
  <div className="mx-auto max-w-5xl reveal">
    <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
     {t.home.spacesLabel}
    </p>

    <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white md:text-4xl">
     {t.home.spacesTitle}
    </h2>

    <div className="mt-16 grid gap-10 md:grid-cols-3">

      <div className="border-t border-yellow-700/20 pt-6">
        <h3 className="font-serif text-2xl text-yellow-50">
          {t.home.space1Title}
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
        {t.home.space1Text1}        
        </p>

        <p className="mt-4 text-base leading-relaxed text-slate-400">
      {t.home.space1Text2}        
      </p>
      </div>

      <div className="border-t border-yellow-700/20 pt-6">
        <h3 className="font-serif text-2xl text-yellow-50">
          {t.home.space2Title}
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          {t.home.space2Text}
        </p>
      </div>

      <div className="border-t border-yellow-700/20 pt-6">
        <h3 className="font-serif text-2xl text-yellow-50">
          {t.home.space3Title}
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          {t.home.space13Text}
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-[#0b1220] px-6 py-14">
  <div className="mx-auto max-w-5xl reveal">
    <div className="border-y border-yellow-700/10 py-8">
      <p className="text-center text-sm leading-relaxed tracking-[0.02em] text-slate-400">
        {t.home.credibility}
      </p>
    </div>
  </div>
</section>
<section className="bg-[#111827] py-24 md:py-28">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="overflow-hidden rounded-[32px] border border-yellow-700/20 bg-[#161f33] reveal">

      <div className="grid lg:grid-cols-2">
        
        <div className="flex flex-col justify-center p-10 md:p-14">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400/80">
            {t.home.silenceLabel}
          </p>

          <h2 className="mb-6 font-serif text-3xl leading-tight text-white md:text-4xl">
            {t.home.silenceTitle}
            </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
          {t.home.silenceText}          
          </p>

          <div>
            <button
              onClick={() =>
           setCurrentPage(
             t.nav.home === 'Početak'
             ? '/sr/praksa-tisine'
            : '/en/silence-practice'
             )
            }
              className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 px-7 py-3 text-sm tracking-wide text-yellow-100 transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-950"
            >
              {t.home.silenceBlockButton}
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