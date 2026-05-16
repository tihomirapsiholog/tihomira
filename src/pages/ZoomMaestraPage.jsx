import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Monitor,
  MousePointerClick,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from 'lucide-react';
import SEO from '../components/SEO';

const zoomSectionItems = [
  {
    id: 'overview',
    en: 'Overview',
    sr: 'Pregled',
  },
  {
    id: 'for-whom',
    en: 'For whom',
    sr: 'Za koga',
  },
  {
    id: 'support',
    en: 'Support',
    sr: 'Podrška',
  },
  {
    id: 'packages',
    en: 'Packages',
    sr: 'Paketi',
  },
  {
    id: 'why-me',
    en: 'Why me',
    sr: 'Zašto ja',
  },
  {
    id: 'testimonials',
    en: 'Testimonials',
    sr: 'Iskustva',
  },
  {
    id: 'contact-zoom',
    en: 'Contact',
    sr: 'Kontakt',
  },
];

export default function ZoomMaestraPage({ t, setCurrentPage, language = 'en' }) {
  const [activeSection, setActiveSection] = useState('overview');
  const isSerbian = language === 'sr';
  const zoom = t.zoom;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      }
    );

    zoomSectionItems.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const goToZoomInquiry = (message) => {
    const fallbackMessage = isSerbian
      ? 'Zanima me Zoom Maestra podrška. Ovo su detalji online ili hibridnog događaja...'
      : 'I am interested in Zoom Maestra support. Here are the details of the online or hybrid event...';

    const encodedMessage = encodeURIComponent(message || fallbackMessage);
    setCurrentPage(`/contact?message=${encodedMessage}`);
  };

  const audienceItems = [
    zoom.audienceList1,
    zoom.audienceList2,
    zoom.audienceList3,
    zoom.audienceList4,
    zoom.audienceList5,
  ];

  const supportBlocks = [
    {
      icon: CalendarCheck,
      title: zoom.supportBlock1Title,
      items: [
        zoom.supportBlock1Item1,
        zoom.supportBlock1Item2,
        zoom.supportBlock1Item3,
      ],
    },
    {
      icon: Users,
      title: zoom.supportBlock2Title,
      items: [
        zoom.supportBlock2Item1,
        zoom.supportBlock2Item2,
        zoom.supportBlock2Item3,
      ],
    },
    {
      icon: Video,
      title: zoom.supportBlock3Title,
      items: [
        zoom.supportBlock3Item1,
        zoom.supportBlock3Item2,
        zoom.supportBlock3Item3,
      ],
    },
    {
      icon: Network,
      title: zoom.supportBlock4Title,
      items: [zoom.supportBlock4Item1, zoom.supportBlock4Item2],
    },
  ];

  const packages = [
    {
      icon: MousePointerClick,
      title: zoom.package1Title,
      text: zoom.package1Text,
      items: [
        zoom.package1Item1,
        zoom.package1Item2,
        zoom.package1Item3,
        zoom.package1Item4,
        zoom.package1Item5,
      ],
      ideal: zoom.package1Ideal,
    },
    {
      icon: MonitorCog,
      title: zoom.package2Title,
      text: zoom.package2Text,
      items: [
        zoom.package2Item1,
        zoom.package2Item2,
        zoom.package2Item3,
        zoom.package2Item4,
        zoom.package2Item5,
        zoom.package2Item6,
      ],
      ideal: zoom.package2Ideal,
    },
    {
      icon: ShieldCheck,
      title: zoom.package3Title,
      text: zoom.package3Text,
      items: [
        zoom.package3Item1,
        zoom.package3Item2,
        zoom.package3Item3,
        zoom.package3Item4,
        zoom.package3Item5,
        zoom.package3Item6,
      ],
      ideal: zoom.package3Ideal,
    },
  ];

  const whyItems = [
    {
      title: zoom.why1Title,
      text: zoom.why1Text,
    },
    {
      title: zoom.why2Title,
      text: zoom.why2Text,
    },
    {
      title: zoom.why3Title,
      text: zoom.why3Text,
    },
    {
      title: zoom.why4Title,
      text: zoom.why4Text,
    },
  ];

  const testimonials = [
    {
      name: zoom.testimonial1Name,
      text: zoom.testimonial1Text,
      role: zoom.testimonial1Role,
    },
    {
      name: zoom.testimonial2Name,
      text: zoom.testimonial2Text,
      role: zoom.testimonial2Role,
    },
    {
      name: zoom.testimonial3Name,
      text: zoom.testimonial3Text,
      role: zoom.testimonial3Role,
    },
    {
      name: zoom.testimonial4Name,
      text: zoom.testimonial4Text,
      role: zoom.testimonial4Role,
    },
  ];

  const packageInquiryMessage = (packageTitle) =>
    isSerbian
      ? `Zanima me Zoom Maestra podrška, posebno paket: ${packageTitle}. Ovo su detalji događaja koji pripremam...`
      : `I am interested in Zoom Maestra support, especially the package: ${packageTitle}. Here are the details of the event I am preparing...`;

  return (
    <div className="bg-[#0b1220] text-slate-100">
      <SEO
        title={
          isSerbian
            ? 'Zoom Maestra | Zoom podrška za online i hibridne događaje'
            : 'Zoom Maestra | Zoom Support for Online and Hybrid Events'
        }
        description={
          isSerbian
            ? 'Zoom Maestra pruža mirnu tehničku podršku, Zoom hosting, breakout sobe i podršku toku učesnika za online i hibridne događaje.'
            : 'Zoom Maestra provides calm technical hosting, Zoom support, breakout room management and participant flow for online and hybrid events, workshops, trainings and conferences.'
        }
        url={
          isSerbian
            ? 'https://tihomira.info/sr/zoom-maestra'
            : 'https://tihomira.info/en/zoom-maestra'
        }
        language={language}
        alternateUrls={{
          en: 'https://tihomira.info/en/zoom-maestra',
          sr: 'https://tihomira.info/sr/zoom-maestra',
          xDefault: 'https://tihomira.info/en/zoom-maestra',
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0b1220] py-24 sm:py-28">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-yellow-400">
              {zoom.eyebrow}
            </p>

            <h1 className="font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              {zoom.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              {zoom.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => goToZoomInquiry()}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-3 text-sm font-medium text-slate-950 transition hover:bg-yellow-400"
              >
                {zoom.ctaButton}
                <ArrowRight size={18} />
              </button>

              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 px-7 py-3 text-sm font-medium text-yellow-300 transition hover:border-yellow-300 hover:text-white"
              >
                {isSerbian ? 'Pogledaj pakete' : 'See packages'}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-yellow-700/20 bg-[#111827]/95 p-8 shadow-2xl shadow-black/30">
            <div className="mb-6 inline-flex rounded-full bg-yellow-500/10 p-3 text-yellow-300">
              <Sparkles size={28} />
            </div>

            <h2 className="font-serif text-3xl leading-snug text-white">
              {isSerbian
                ? 'Da facilitator ostane sa ljudima, a ne sa tehničkim problemima.'
                : 'So the facilitator can stay with people, not with technical problems.'}
            </h2>

            <div className="mt-8 space-y-5">
              {[
                isSerbian
                  ? 'Breakout sobe, ulazak učesnika, prelazi i tehnička stabilnost.'
                  : 'Breakout rooms, participant entry, transitions and technical stability.',
                isSerbian
                  ? 'Mirna prisutnost iza scene tokom radionice, treninga ili programa.'
                  : 'Calm behind-the-scenes presence during workshops, trainings or programs.',
                isSerbian
                  ? 'Jasnija struktura pre događaja, tokom događaja i između sesija.'
                  : 'Clearer structure before, during and between sessions.',
              ].map((item, index) => (
                <div key={index} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 border-b border-yellow-700/10 bg-[#0b1220]/95 shadow-lg shadow-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 text-xs uppercase tracking-[0.12em] sm:px-6 lg:px-8">
          {zoomSectionItems.map((item) => {
            const isActive = activeSection === item.id;
            const label = isSerbian ? item.sr : item.en;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={[
                  'shrink-0 rounded-full px-3 py-2 transition',
                  isActive
                    ? 'bg-yellow-500/15 text-yellow-100'
                    : 'text-slate-400 hover:bg-yellow-500/10 hover:text-yellow-100',
                ].join(' ')}
              >
                {label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* OVERVIEW */}
      <section id="overview" className="scroll-mt-32 bg-[#0b1220] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {isSerbian ? 'Problem' : 'The problem'}
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
              {isSerbian
                ? 'Online događaji ne pucaju samo zbog tehnologije.'
                : 'Online events do not break only because of technology.'}
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-slate-300">
            <p>{zoom.lead1}</p>
            <p>{zoom.lead2}</p>
            <p>{zoom.lead3}</p>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section id="for-whom" className="scroll-mt-32 bg-[#0e1628] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {isSerbian ? 'Za koga' : 'For whom'}
            </p>

            <h2 className="mt-4 font-serif text-4xl text-white">
              {zoom.audienceTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {zoom.audienceText}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audienceItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-[#111827] p-6"
              >
                <div className="mb-4 inline-flex rounded-full bg-yellow-500/10 p-2 text-yellow-300">
                  <Users size={20} />
                </div>

                <p className="text-lg leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-8 text-slate-400">
            {zoom.audienceClosing}
          </p>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="scroll-mt-32 bg-[#10192c] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {isSerbian ? 'Šta radim' : 'What I support'}
            </p>

            <h2 className="mt-4 font-serif text-4xl text-white">
              {zoom.supportTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {zoom.supportIntro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {supportBlocks.map((block, index) => {
              const Icon = block.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-yellow-700/20 bg-[#121c31] p-8 shadow-xl shadow-black/10"
                >
                  <Icon className="h-8 w-8 text-yellow-400" />

                  <h3 className="mt-5 font-serif text-2xl text-white">
                    {block.title}
                  </h3>

                  <ul className="mt-6 space-y-4 text-slate-300">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3">
                        <span className="mt-1 text-yellow-400">→</span>
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-12 max-w-4xl text-lg leading-8 text-slate-300">
            {zoom.supportClosing}
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="scroll-mt-32 bg-[#0b1220] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {isSerbian ? 'Paketi' : 'Packages'}
            </p>

            <h2 className="mt-4 font-serif text-4xl text-white">
              {zoom.packagesTitle}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col rounded-3xl border border-yellow-700/20 bg-[#121c31] p-8 shadow-xl shadow-black/10"
                >
                  <Icon className="h-8 w-8 text-yellow-400" />

                  <h3 className="mt-5 font-serif text-3xl leading-snug text-white">
                    {pkg.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-300">
                    {pkg.text}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3 text-slate-300">
                    {pkg.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3">
                        <span className="mt-1 text-yellow-400">→</span>
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 border-t border-slate-700 pt-5 text-sm leading-7 text-slate-400">
                    {pkg.ideal}
                  </p>

                  <button
                    onClick={() => goToZoomInquiry(packageInquiryMessage(pkg.title))}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-medium text-yellow-300 transition hover:border-yellow-300 hover:text-white"
                  >
                    {isSerbian ? 'Pošalji upit' : 'Ask about this'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section id="why-me" className="scroll-mt-32 bg-[#10192c] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {isSerbian ? 'Zašto Zoom Maestra' : 'Why Zoom Maestra'}
            </p>

            <h2 className="mt-4 font-serif text-4xl text-white">
              {zoom.whyTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {zoom.whyIntro}
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              {zoom.whyIntro2}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {whyItems.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-700 bg-[#121c31] p-8"
              >
                <h3 className="font-serif text-2xl text-white">
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

      {/* TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-32 bg-[#0b1220] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-yellow-400">
            {zoom.testimonialsLabel}
          </p>

          <h2 className="mb-12 text-center font-serif text-4xl text-white">
            {zoom.testimonialsTitle}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl border border-yellow-700/20 bg-[#121c31] p-8"
              >
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-yellow-400">
                  {testimonial.name}
                </div>

                <div className="mb-4 font-serif text-5xl text-yellow-700/35">
                  ”
                </div>

                <p className="text-base leading-8 text-slate-200/90">
                  {testimonial.text}
                </p>

                <div className="mt-8 border-t border-slate-700 pt-6">
                  <p className="text-xs leading-relaxed text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact-zoom"
        className="scroll-mt-32 bg-gradient-to-r from-[#0a0f1a] via-[#111827] to-[#0a0f1a] py-24 text-white"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            {isSerbian ? 'Sledeći korak' : 'Next step'}
          </p>

          <h2 className="mb-6 font-serif text-4xl leading-tight sm:text-5xl">
            {zoom.ctaTitle}
          </h2>

          <p className="mb-4 text-lg leading-8 text-slate-300">
            {zoom.ctaText}
          </p>

          <p className="mb-9 text-lg leading-8 text-slate-300">
            {zoom.ctaText2}
          </p>

          <button
            onClick={() => goToZoomInquiry()}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
          >
            {zoom.ctaButton}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}