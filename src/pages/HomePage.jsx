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
        <section className="bg-[#0b1220] px-6 py-20 md:py-24">
  <div className="mx-auto max-w-5xl reveal">
    <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
      Možda ste ovde jer...
    </p>

    <div className="grid gap-10 md:grid-cols-2">
      <div className="space-y-3">
        <h3 className="font-serif text-2xl leading-tight text-yellow-50">
          se nalazite u životnom prelazu
        </h3>

        <p className="text-lg leading-relaxed text-slate-300">
          i stari način funkcionisanja više ne radi.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-serif text-2xl leading-tight text-yellow-50">
          osećate da držite previše toga predugo
        </h3>

        <p className="text-lg leading-relaxed text-slate-300">
          bez prostora da zaista stanete.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-serif text-2xl leading-tight text-yellow-50">
          tražite drugačiji odnos prema sebi
        </h3>

        <p className="text-lg leading-relaxed text-slate-300">
          ne još jedan pokušaj da se „popravite“.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-serif text-2xl leading-tight text-yellow-50">
          želite prostor u kome ne morate odmah da znate
        </h3>

        <p className="text-lg leading-relaxed text-slate-300">
          šta dalje.
        </p>
      </div>

      <div className="space-y-3 md:col-span-2">
        <h3 className="font-serif text-2xl leading-tight text-yellow-50">
          radite sa ljudima
        </h3>

        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          i osećate da vam je potreban dublji kontakt sa sopstvenim impulsom,
          telom i prisustvom.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#0e1628] px-6 py-28 md:py-32">
  <div className="mx-auto max-w-4xl reveal">
    <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
      Encounter
    </p>

    <h2 className="max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl">
      Ne novo ja.
      <br />
      Drugačiji odnos prema istom ja.
    </h2>

    <div className="mt-12 space-y-10 text-slate-300">
      <div className="max-w-3xl space-y-4">
        <p className="font-serif text-2xl leading-tight text-yellow-50">
          Neka iskustva postaju jasnija tek kada ih sretnemo.
        </p>

        <p className="text-lg leading-relaxed">
          Ne samo kroz razgovor, već kroz odnos, akciju, telo, simbol i
          prisustvo drugih ljudi.
        </p>
      </div>

      <div className="max-w-3xl space-y-4">
        <p className="font-serif text-2xl leading-tight text-yellow-50">
          Iskustvo ne mora odmah da bude objašnjeno da bi bilo stvarno.
        </p>

        <p className="text-lg leading-relaxed">
          U radu obraćamo pažnju na ono što se formira između impulsa,
          akcije, unutrašnjeg života i odnosa sa drugima.
        </p>
      </div>

      <div className="max-w-3xl space-y-4">
        <p className="font-serif text-2xl leading-tight text-yellow-50">
          Ponekad osoba prvi put primeti sopstveni impuls tek kada ga vidi
          odigranog ispred sebe.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#0b1220] px-6 py-24 md:py-28">
  <div className="mx-auto max-w-5xl reveal">
    <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
      Kako radim
    </p>

    <h2 className="max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl">
      Psihologija, akcija, telo i grupni proces.
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
      Moj rad kombinuje psihologiju, psihodramske i akcione metode, telo,
      simbol, pokret i iskustveni grupni rad.
    </p>

    <div className="mt-16 grid gap-px border border-yellow-700/10 bg-yellow-700/10 md:grid-cols-2">
      
      <div className="bg-[#111827] p-8 md:p-10">
        <h3 className="font-serif text-2xl text-yellow-50">
          Psihologija
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Unutrašnji život ne posmatramo kao problem koji treba brzo rešiti,
          već kao prostor koji može postati čitljiviji.
        </p>
      </div>

      <div className="bg-[#111827] p-8 md:p-10">
        <h3 className="font-serif text-2xl text-yellow-50">
          Psihodramske i akcione metode
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Neka iskustva postaju jasna tek kada ih vidimo, odigramo ili sretnemo
          iz druge perspektive.
        </p>
      </div>

      <div className="bg-[#111827] p-8 md:p-10">
        <h3 className="font-serif text-2xl text-yellow-50">
          Telo i pokret
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Telo često registruje promenu pre nego što je um ume objasniti.
        </p>
      </div>

      <div className="bg-[#111827] p-8 md:p-10">
        <h3 className="font-serif text-2xl text-yellow-50">
          Simbolički rad
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Slike, uloge, metafore i unutrašnje scene ponekad nose više
          informacija od objašnjenja.
        </p>
      </div>

      <div className="bg-[#111827] p-8 md:p-10 md:col-span-2">
        <h3 className="font-serif text-2xl text-yellow-50">
          Grupni proces
        </h3>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
          Odnos sa drugima često postaje prostor u kome prvi put vidimo
          sopstvene obrasce, impulse i granice.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#0e1628] px-6 py-24 md:py-28">
  <div className="mx-auto max-w-5xl reveal">
    <p className="mb-6 text-sm uppercase tracking-[0.25em] text-yellow-400/80">
      Prostori rada
    </p>

    <h2 className="max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl">
      Različiti formati rada za različite faze procesa.
    </h2>

    <div className="mt-16 grid gap-10 md:grid-cols-3">

      <div className="border-t border-yellow-700/20 pt-6">
        <h3 className="font-serif text-2xl text-yellow-50">
          Individualni susreti
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Rad jedan na jedan kroz razgovor, simbol, telo i iskustveno istraživanje.
        </p>

        <p className="mt-4 text-base leading-relaxed text-slate-400">
          Za periode tranzicije, preplavljenosti, unutrašnjih konflikata ili
          potrebe za jasnijim kontaktom sa sobom.
        </p>
      </div>

      <div className="border-t border-yellow-700/20 pt-6">
        <h3 className="font-serif text-2xl text-yellow-50">
          Radionice i grupni prostori
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Online i uživo susreti u kojima se iskustvo istražuje kroz encounter,
          akciju, grupni proces i simbolički rad.
        </p>
      </div>

      <div className="border-t border-yellow-700/20 pt-6">
        <h3 className="font-serif text-2xl text-yellow-50">
          Praksa tišine
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Istraživanje pažnje, stimulacije, nervnog sistema i odnosa prema
          unutrašnjem ritmu kroz pisanje, praksu i iskustvene procese.
        </p>
      </div>

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