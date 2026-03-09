import React, { useEffect, useState } from 'react';
import { Menu, X, Instagram, ArrowRight } from 'lucide-react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

const CONTACT_EMAIL = 'tihomira.psiholog@gmail.com';
const INSTAGRAM_URL = 'https://instagram.com/';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Work With Me',
      events: 'Events',
      contact: 'Contact',
    },
    home: {
      welcome: 'Welcome',
      tagline: `"I don't lead people to destinations.\nI help them find their path."`,
      intro:
        "Life's most profound moments often occur at crossroads—when an old story ends and a new one begins. I support individuals and groups navigating these transitions with psychology, embodied awareness, and symbolic work. Together, we explore what wants to emerge.",
      howIWork: 'How I Work',
      workDescription:
        'My work integrates psychology, process facilitation, embodied practices, and symbolic awareness to create spaces where transformation can unfold naturally.',
      pillar1Title: 'Individual Sessions',
      pillar1Desc:
        'One-on-one work for personal transition, self-discovery, and finding clarity in moments of change.',
      pillar2Title: 'Group Processes',
      pillar2Desc:
        'Experiential workshops and group facilitation, including Soul Theater and transformational group work.',
      pillar3Title: 'Embodied & Symbolic Work',
      pillar3Desc:
        'Spaces combining sound, ritual elements, and embodied awareness for deeper integration.',
      offerings: 'Offerings',
      offering1: 'Individual Sessions',
      offering1Sub: 'Private transformational work',
      offering2: 'Group Workshops',
      offering2Sub: 'Experiential collective processes',
      offering3: 'Sound & Symbolic Experiences',
      offering3Sub: 'Immersive embodied journeys',
      offering4: 'Custom Facilitation',
      offering4Sub: 'Tailored processes for organizations',
      ready: 'Ready to explore?',
      inviteText:
        "Whether you're at a crossroads, seeking clarity, or ready for transformation, there's a path forward. Let's explore it together.",
      cta: 'Get in Touch',
      toolsTitle: 'Sound & Symbolic Tools',
      toolsText:
        'My practice incorporates instruments and symbolic objects that support the journey of transformation. Sound bowls, drums, and ritual elements create spaces where deeper awareness can emerge.',
    },
    about: {
      title: 'About My Work',
      intro: 'My presence, my practice, my commitment to transformation',
      para1:
        "My journey began with a question: What helps people find themselves when they're lost? This curiosity led me to psychology, to group process work, and ultimately to the understanding that transformation happens not through instruction, but through creating the conditions for authentic discovery.",
      para2:
        "I've spent years studying how people navigate change—the fear, the confusion, the moments of unexpected clarity. I've learned that our bodies hold wisdom we've forgotten, that symbols speak to us in ways words cannot, and that when we gather intentionally, something powerful emerges from the space between us.",
      atCrossroads: 'At the Crossroads',
      crossroadsText:
        '"Many important moments in life happen at crossroads—when an old story ends and a new one begins. These are not problems to be solved quickly. They are invitations to become more fully ourselves."',
      para3:
        "I've dedicated my practice to supporting people in these liminal spaces. Whether you're questioning your direction, grieving what was, or sensing that something is asking to be born, my work is to help you find clarity not through answers I provide, but through awakening what you already know.",
      guidesWork: 'What Guides My Work',
      psychologyTitle: 'Psychology',
      psychologyText:
        'Understanding the human psyche—patterns, wounds, strengths, and untapped potential.',
      processTitle: 'Group Process',
      processText:
        'The wisdom that emerges when people gather authentically, holding space for individual and collective transformation.',
      embodiedTitle: 'Embodied Awareness',
      embodiedText:
        "Reconnecting with the body's knowing—breath, sensation, movement, presence.",
      symbolicTitle: 'Symbolic & Artistic Work',
      symbolicText:
        'Engaging metaphor, image, sound, and ritual to access deeper layers of awareness and transformation.',
      archetype: 'The Archetype of the Crossroads',
      archetypeText:
        "Many ancient cultures describe guides who appear at life's pivotal moments—those standing at the threshold between what was and what might be. The archetype of Aurethra represents this—a presence that illuminates the path forward, not by forcing direction, but by awakening your own inner knowing.",
      archetypeText2:
        "This is the spirit of my work: to be a steady presence as you navigate your own transformation, honoring both the depth of where you've been and the potential of where you're going.",
    },
    work: {
      title: 'Work With Me',
      intro:
        'I offer three primary ways to engage in transformational work. Each is designed to meet you where you are and support the unfolding of what wants to emerge.',
      service1Title: 'Individual Sessions',
      service1Sub: 'One-on-One Transformational Work',
      service1Desc:
        'Private sessions for those navigating personal transition, questioning their direction, or seeking clarity in moments of change.',
      service1Feature1: 'Psychological support and insight',
      service1Feature2: 'Embodied awareness practices',
      service1Feature3: 'Symbolic exploration',
      service1Feature4: 'Personalized pacing and depth',
      service1ForWho: 'People at crossroads, seekers, those in transition',
      service2Title: 'Group Workshops & Gatherings',
      service2Sub: 'Experiential Collective Processes',
      service2Desc:
        'Facilitated group experiences including Soul Theater, transformational workshops, and gathering processes that create space for collective and individual transformation.',
      service2Feature1: 'Shared exploration and witness',
      service2Feature2: 'Group process dynamics',
      service2Feature3: 'Soul Theater and dramatic work',
      service2Feature4: 'Ritual and symbolic elements',
      service2ForWho:
        'Groups seeking depth, teams, communities, organizations',
      service3Title: 'Sound & Symbolic Experiences',
      service3Sub: 'Immersive Embodied Journeys',
      service3Desc:
        'Carefully crafted experiences combining sound, movement, ritual, and symbolic awareness to facilitate integration and awakening.',
      service3Feature1: 'Sonic immersion',
      service3Feature2: 'Embodied movement',
      service3Feature3: 'Symbolic and ritual work',
      service3Feature4: 'Sensory integration',
      service3ForWho:
        'Those seeking immersive transformation, artistic practitioners, spiritual explorers',
      experience: 'What You Experience',
      forWhom: 'For Whom',
      questionsTitle: "Questions? Let's talk.",
      questionsText:
        "Each journey is unique. I'm happy to discuss what might serve you best.",
      reach: 'Reach Out',
    },
    events: {
      title: 'Gatherings & Workshops',
      noEvents: 'New gatherings and workshops are announced periodically.',
      stayConnected:
        'Stay connected for invitations to upcoming transformational experiences.',
      interested: 'Interested in bringing me to your community?',
      custom:
        'I offer custom facilitation for organizations, teams, and communities seeking transformational experiences.',
      customText: 'Get in touch about custom processes →',
    },
    contact: {
      title: 'Get in Touch',
      intro:
        "Whether you're seeking individual sessions, interested in group work, or curious about what's possible, I'm here to listen and support your journey.",
      email: 'Email',
      follow: 'Follow',
      response:
        'I typically respond to inquiries within 2–3 days. Thank you for reaching out.',
      yourName: 'Your Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about what brings you here...',
      send: 'Send Message',
    },
    footer: {
      brand: 'Tiha Psiha',
      desc: 'Transformational facilitation and psychology',
      rights: '© 2024 Tihomira Stanojević. All rights reserved.',
      tagline: 'A space for those seeking clarity at the crossroads.',
    },
  },

  sr: {
    nav: {
      home: 'Početak',
      about: 'O meni',
      work: 'Rad sa mnom',
      events: 'Događaji',
      contact: 'Kontakt',
    },
    home: {
      welcome: 'Dobrodošli',
      tagline: `"Ne vodim ljude do odredišta.\nPomažem im da pronađu svoj put."`,
      intro:
        'Najdublji trenuci u životu često se dešavaju na raskršćima — kada se jedna priča završava, a nova počinje. Podržavam pojedince i grupe u ovim prelazima kroz psihologiju, telesnu svesnost i simbolički rad. Zajedno istražujemo ono što želi da se pojavi.',
      howIWork: 'Kako radim',
      workDescription:
        'Moj rad integriše psihologiju, facilitaciju procesa, telesne prakse i simboličku svesnost kako bi se stvorio prostor u kome transformacija može prirodno da se odvija.',
      pillar1Title: 'Individualne sesije',
      pillar1Desc:
        'Rad jedan na jedan za lične prelaze, samootkrivanje i pronalaženje jasnoće u trenucima promene.',
      pillar2Title: 'Grupni procesi',
      pillar2Desc:
        'Iskustvene radionice i grupna facilitacija, uključujući Soul Theater i transformativni grupni rad.',
      pillar3Title: 'Telesni i simbolički rad',
      pillar3Desc:
        'Prostori koji spajaju zvuk, ritualne elemente i telesnu svesnost radi dublje integracije.',
      offerings: 'Ponuda',
      offering1: 'Individualne sesije',
      offering1Sub: 'Privatan transformativni rad',
      offering2: 'Grupne radionice',
      offering2Sub: 'Iskustveni kolektivni procesi',
      offering3: 'Zvučna i simbolička iskustva',
      offering3Sub: 'Imerzivna telesna putovanja',
      offering4: 'Prilagođena facilitacija',
      offering4Sub: 'Procesi prilagođeni organizacijama',
      ready: 'Spremni za istraživanje?',
      inviteText:
        'Bilo da ste na raskršću, tražite jasnoću ili ste spremni za transformaciju, postoji put napred. Hajde da ga istražimo zajedno.',
      cta: 'Javite se',
      toolsTitle: 'Zvučni i simbolički alati',
      toolsText:
        'U svom radu koristim instrumente i simboličke objekte koji podržavaju proces transformacije. Zvučne činije, bubnjevi i ritualni elementi stvaraju prostor u kome može da se pojavi dublja svesnost.',
    },
    about: {
      title: 'O mom radu',
      intro: 'Moje prisustvo, moja praksa, moja posvećenost transformaciji',
      para1:
        'Moj put je počeo jednim pitanjem: šta pomaže ljudima da pronađu sebe kada su izgubljeni? Ta radoznalost me je odvela ka psihologiji, radu sa grupnim procesima i, na kraju, ka razumevanju da se transformacija ne događa kroz davanje instrukcija, već kroz stvaranje uslova za autentično otkrivanje.',
      para2:
        'Godinama proučavam kako ljudi prolaze kroz promene — strah, zbunjenost i trenutke neočekivane jasnoće. Naučila sam da telo nosi mudrost koju smo zaboravili, da simboli govore na način na koji reči ne mogu i da se, kada se okupimo sa namerom, nešto snažno rađa u prostoru između nas.',
      atCrossroads: 'Na raskršću',
      crossroadsText:
        '"Mnogi važni trenuci u životu dešavaju se na raskršćima — kada se jedna priča završava, a nova počinje. To nisu problemi koje treba brzo rešiti. To su pozivi da postanemo potpunije ono što jesmo."',
      para3:
        'Svoju praksu posvetila sam podršci ljudima u ovim liminalnim prostorima. Bilo da preispitujete svoj pravac, tugujete za onim što je bilo ili osećate da nešto novo želi da se rodi, moj rad je da vam pomognem da pronađete jasnoću — ne kroz odgovore koje ja dajem, već kroz buđenje onoga što već znate.',
      guidesWork: 'Šta vodi moj rad',
      psychologyTitle: 'Psihologija',
      psychologyText:
        'Razumevanje ljudske psihe — obrazaca, rana, snaga i neiskorišćenog potencijala.',
      processTitle: 'Grupni proces',
      processText:
        'Mudrost koja se pojavljuje kada se ljudi okupe autentično, čuvajući prostor za individualnu i kolektivnu transformaciju.',
      embodiedTitle: 'Telesna svesnost',
      embodiedText:
        'Ponovno povezivanje sa mudrošću tela — kroz dah, senzaciju, pokret i prisustvo.',
      symbolicTitle: 'Simbolički i umetnički rad',
      symbolicText:
        'Korišćenje metafore, slike, zvuka i rituala kako bi se pristupilo dubljim slojevima svesti i transformacije.',
      archetype: 'Arhetip raskršća',
      archetypeText:
        'Mnoge drevne kulture opisuju vodiče koji se pojavljuju u ključnim životnim trenucima — one koji stoje na pragu između onoga što je bilo i onoga što bi moglo da bude. Arhetip Aurethre predstavlja upravo to — prisustvo koje osvetljava put napred, ne namećući smer, već budeći vaše unutrašnje znanje.',
      archetypeText2:
        'To je duh mog rada: da budem stabilno prisustvo dok prolazite kroz sopstvenu transformaciju, poštujući i dubinu onoga odakle dolazite i potencijal onoga kuda idete.',
    },
    work: {
      title: 'Rad sa mnom',
      intro:
        'Nudim tri osnovna načina ulaska u transformativni rad. Svaki je osmišljen da vas susretne tamo gde jeste i podrži razvoj onoga što želi da se pojavi.',
      service1Title: 'Individualne sesije',
      service1Sub: 'Transformativni rad jedan na jedan',
      service1Desc:
        'Privatne sesije za one koji prolaze kroz lične prelaze, preispituju svoj pravac ili traže jasnoću u trenucima promene.',
      service1Feature1: 'Psihološka podrška i uvid',
      service1Feature2: 'Prakse telesne svesnosti',
      service1Feature3: 'Simboličko istraživanje',
      service1Feature4: 'Prilagođen ritam i dubina',
      service1ForWho:
        'Ljudi na raskršću, tragaoci, oni koji prolaze kroz promene',
      service2Title: 'Grupne radionice i okupljanja',
      service2Sub: 'Iskustveni kolektivni procesi',
      service2Desc:
        'Vođeni grupni procesi koji uključuju Soul Theater, transformativne radionice i susrete koji stvaraju prostor za kolektivnu i individualnu transformaciju.',
      service2Feature1: 'Zajedničko istraživanje i svedočenje',
      service2Feature2: 'Dinamika grupnog procesa',
      service2Feature3: 'Soul Theater i dramski rad',
      service2Feature4: 'Ritualni i simbolički elementi',
      service2ForWho:
        'Grupe koje traže dubinu, timovi, zajednice, organizacije',
      service3Title: 'Zvučna i simbolička iskustva',
      service3Sub: 'Imerzivna telesna putovanja',
      service3Desc:
        'Pažljivo oblikovana iskustva koja kombinuju zvuk, pokret, ritual i simboličku svesnost kako bi podržala integraciju i buđenje.',
      service3Feature1: 'Zvučna imerzija',
      service3Feature2: 'Telesni pokret',
      service3Feature3: 'Simbolički i ritualni rad',
      service3Feature4: 'Senzorna integracija',
      service3ForWho:
        'Oni koji traže duboku transformaciju, umetnički praktičari i duhovni istraživači',
      experience: 'Šta doživljavate',
      forWhom: 'Za koga je namenjeno',
      questionsTitle: 'Pitanja? Hajde da razgovaramo.',
      questionsText:
        'Svako putovanje je jedinstveno. Rado ću razgovarati o tome šta bi vas moglo najbolje podržati.',
      reach: 'Javite se',
    },
    events: {
      title: 'Okupljanja i radionice',
      noEvents: 'Nova okupljanja i radionice objavljuju se periodično.',
      stayConnected:
        'Ostanite povezani za pozive na predstojeća transformativna iskustva.',
      interested: 'Želite da me dovedete u svoju zajednicu?',
      custom:
        'Nudim prilagođenu facilitaciju za organizacije, timove i zajednice koje traže transformativna iskustva.',
      customText: 'Javite se povodom prilagođenih procesa →',
    },
    contact: {
      title: 'Kontakt',
      intro:
        'Bilo da vas zanimaju individualne sesije, grupni rad ili samo želite da istražite šta je moguće, tu sam da saslušam i podržim vaš put.',
      email: 'Email',
      follow: 'Pratite',
      response:
        'Na upite obično odgovaram u roku od 2–3 dana. Hvala vam što ste se javili.',
      yourName: 'Vaše ime',
      namePlaceholder: 'Vaše ime',
      emailLabel: 'Email',
      emailPlaceholder: 'vas@email.com',
      message: 'Poruka',
      messagePlaceholder: 'Recite mi šta vas dovodi ovde...',
      send: 'Pošalji poruku',
    },
    footer: {
      brand: 'Tiha Psiha',
      desc: 'Transformativna facilitacija i psihologija',
      rights: '© 2024 Tihomira Stanojević. Sva prava zadržana.',
      tagline: 'Prostor za one koji traže jasnoću na raskršću.',
    },
  },
};

function getLangFromURL() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');

  if (lang === 'sr' || lang === 'en') return lang;

  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang?.startsWith('sr')) return 'sr';

  return 'en';
}

function usePageTitle(t) {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': `Tihomira | ${t.nav.home}`,
      '/about': `Tihomira | ${t.nav.about}`,
      '/work': `Tihomira | ${t.nav.work}`,
      '/events': `Tihomira | ${t.nav.events}`,
      '/contact': `Tihomira | ${t.nav.contact}`,
    };

    document.title = titles[location.pathname] || 'Tihomira';
  }, [location.pathname, t]);
}

export default function App() {
  const [language, setLanguage] = useState(getLangFromURL());
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[language];

  usePageTitle(t);

  const navItems = [
    [t.nav.home, '/'],
    [t.nav.about, '/about'],
    [t.nav.work, '/work'],
    [t.nav.events, '/events'],
    [t.nav.contact, '/contact'],
  ];

  const changeLanguage = (lang) => {
    setLanguage(lang);
    const params = new URLSearchParams(window.location.search);
    params.set('lang', lang);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#111827] to-[#0a0f1a] text-slate-100">
      <nav className="fixed top-0 z-50 w-full border-b border-yellow-700/20 bg-[#0c1322]/80 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to={`/?lang=${language}`}
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-3 text-xl font-serif text-white transition-colors hover:text-yellow-400"
          >
            <img
              src="/logo-aurethra.png"
              alt="Aurethra logo"
              className="h-8 w-8 rounded object-contain"
            />
            <span>Tihomira</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, path]) => (
              <Link
                key={path}
                to={`${path}?lang=${language}`}
                onClick={() => window.scrollTo(0, 0)}
                className={`text-sm transition-all ${
                  isActive(path)
                    ? 'font-medium text-yellow-400'
                    : 'text-slate-300 hover:text-yellow-400 border-b border-transparent hover:border-yellow-400'
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="ml-4 flex gap-2 border-l border-yellow-700/20 pl-4">
              <button
                onClick={() => changeLanguage('en')}
                className={`rounded px-2 py-1 text-xs transition-all ${
                  language === 'en'
                    ? 'bg-yellow-500 font-medium text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('sr')}
                className={`rounded px-2 py-1 text-xs transition-all ${
                  language === 'sr'
                    ? 'bg-yellow-500 font-medium text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SR
              </button>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="space-y-4 border-t border-yellow-700/20 bg-[#0c1322] p-4 md:hidden">
            {navItems.map(([label, path]) => (
              <Link
                key={path}
                to={`${path}?lang=${language}`}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block w-full text-left text-sm transition-all ${
                  isActive(path)
                    ? 'font-medium text-yellow-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="flex gap-2 border-t border-yellow-700/20 pt-4">
              <button
                onClick={() => changeLanguage('en')}
                className={`flex-1 rounded px-3 py-2 text-xs transition-all ${
                  language === 'en'
                    ? 'bg-yellow-500 font-medium text-slate-950'
                    : 'border border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('sr')}
                className={`flex-1 rounded px-3 py-2 text-xs transition-all ${
                  language === 'sr'
                    ? 'bg-yellow-500 font-medium text-slate-950'
                    : 'border border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                Srpski
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={(path) => navigate(`${path}?lang=${language}`)} t={t} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
          <Route path="/work" element={<WorkPage t={t} />} />
          <Route path="/events" element={<EventsPage t={t} />} />
          <Route path="/contact" element={<ContactPage t={t} />} />
        </Routes>
      </main>

      <footer className="mt-20 border-t border-yellow-700/10 bg-[#090e18] text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center text-sm sm:px-6 lg:px-8">
          <p className="mb-6">
            <span className="font-serif text-yellow-400">{t.footer.brand}</span> — {t.footer.desc}
          </p>
          <p className="mb-6 text-slate-500">{t.footer.rights}</p>
          <p className="text-xs text-slate-600">{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setCurrentPage, t }) {
  return (
    <div className="space-y-0">
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <img
          src="/silhouette.jpg"
          alt="Silhouette"
          className="absolute inset-0 h-full w-full object-cover"
           />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-[#0b1220]/40"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            {t.home.welcome}
          </p>
          <h1 className="mb-6 font-serif text-5xl leading-tight text-yellow-100 sm:text-7xl">
            Tihomira Stanojević
          </h1>
          <p className="mb-8 whitespace-pre-line text-xl font-light italic text-slate-100 sm:text-2xl">
            {t.home.tagline}
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
            {t.home.intro}
          </p>
        </div>
      </section>

      <section className="bg-[#0e1628] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center font-serif text-4xl text-white">
            {t.home.howIWork}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-400">
            {t.home.workDescription}
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: '↻', title: t.home.pillar1Title, desc: t.home.pillar1Desc },
              { icon: '◯', title: t.home.pillar2Title, desc: t.home.pillar2Desc },
              { icon: '✦', title: t.home.pillar3Title, desc: t.home.pillar3Desc },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-yellow-700/20 bg-[#121c31] p-8 transition-all hover:border-yellow-500/40 hover:shadow-xl"
              >
                <div className="mb-4 text-4xl text-yellow-400">{item.icon}</div>
                <h3 className="mb-3 text-xl font-serif text-white">{item.title}</h3>
                <p className="leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 font-serif text-3xl text-white">
              {t.home.toolsTitle}
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t.home.toolsText}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-yellow-700/20 shadow-2xl">
            <img
              src="/instruments.jpg"
              alt="Instruments"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0e1628] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl text-white">
            {t.home.offerings}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: t.home.offering1, subtitle: t.home.offering1Sub },
              { title: t.home.offering2, subtitle: t.home.offering2Sub },
              { title: t.home.offering3, subtitle: t.home.offering3Sub },
              { title: t.home.offering4, subtitle: t.home.offering4Sub },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border-l-4 border-yellow-500/50 bg-[#121c31] p-6 transition-all hover:border-yellow-400 hover:bg-[#16223b]"
              >
                <h3 className="text-lg font-serif text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0a0f1a] via-[#111827] to-[#0a0f1a] py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-4xl">{t.home.ready}</h2>
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
  );
}

function AboutPage({ t }) {
  return (
    <div className="bg-[#0b1220]">
      <section className="relative overflow-hidden py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="mb-4 font-serif text-5xl text-white">{t.about.title}</h1>
            <p className="text-xl italic text-slate-300">{t.about.intro}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-yellow-700/20 shadow-2xl">
            <img
              src="/portrait.jpg"
              alt="Portrait of Tihomira"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-slate-300">{t.about.para1}</p>
          <p className="text-slate-300">{t.about.para2}</p>

          <div className="rounded-2xl border-l-4 border-yellow-500 bg-[#121c31] p-8">
            <h2 className="mb-4 font-serif text-3xl text-white">
              {t.about.atCrossroads}
            </h2>
            <p className="italic text-slate-300">{t.about.crossroadsText}</p>
          </div>

          <p className="text-slate-300">{t.about.para3}</p>

          <h2 className="pt-8 font-serif text-3xl text-white">
            {t.about.guidesWork}
          </h2>

          <div className="space-y-8 pt-4">
            {[
              { title: t.about.psychologyTitle, text: t.about.psychologyText },
              { title: t.about.processTitle, text: t.about.processText },
              { title: t.about.embodiedTitle, text: t.about.embodiedText },
              { title: t.about.symbolicTitle, text: t.about.symbolicText },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-[#121c31] p-6">
                <h3 className="mb-2 text-xl font-serif text-white">{item.title}</h3>
                <p className="text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-yellow-700/20 bg-[#10192c] p-8">
            <h2 className="mb-4 font-serif text-3xl text-white">
              {t.about.archetype}
            </h2>
            <p className="mb-4 text-slate-300">{t.about.archetypeText}</p>
            <p className="text-slate-300">{t.about.archetypeText2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkPage({ t }) {
  const services = [
    {
      title: t.work.service1Title,
      subtitle: t.work.service1Sub,
      description: t.work.service1Desc,
      features: [
        t.work.service1Feature1,
        t.work.service1Feature2,
        t.work.service1Feature3,
        t.work.service1Feature4,
      ],
      forWho: t.work.service1ForWho,
    },
    {
      title: t.work.service2Title,
      subtitle: t.work.service2Sub,
      description: t.work.service2Desc,
      features: [
        t.work.service2Feature1,
        t.work.service2Feature2,
        t.work.service2Feature3,
        t.work.service2Feature4,
      ],
      forWho: t.work.service2ForWho,
    },
    {
      title: t.work.service3Title,
      subtitle: t.work.service3Sub,
      description: t.work.service3Desc,
      features: [
        t.work.service3Feature1,
        t.work.service3Feature2,
        t.work.service3Feature3,
        t.work.service3Feature4,
      ],
      forWho: t.work.service3ForWho,
    },
  ];

  return (
    <div className="space-y-16 bg-[#0b1220] py-8">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-6 font-serif text-5xl text-white">{t.work.title}</h1>
        <p className="text-xl leading-relaxed text-slate-300">{t.work.intro}</p>
      </div>

      {services.map((service, i) => (
        <section
          key={i}
          className={`py-12 ${i % 2 === 0 ? 'bg-[#10192c]' : 'bg-[#0b1220]'}`}
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="mb-2 font-serif text-4xl text-white">{service.title}</h2>
              <p className="text-lg italic text-slate-400">{service.subtitle}</p>
            </div>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              {service.description}
            </p>

            <div className="grid max-w-3xl gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-[#121c31] p-6">
                <h3 className="mb-4 font-serif text-white">{t.work.experience}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-slate-300">
                      <span className="mt-1 text-yellow-400">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[#121c31] p-6">
                <h3 className="mb-4 font-serif text-white">{t.work.forWhom}</h3>
                <p className="leading-relaxed text-slate-300">{service.forWho}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#10192c] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-3xl text-white">
            {t.work.questionsTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            {t.work.questionsText}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
          >
            {t.work.reach}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

function EventsPage({ t }) {
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

function ContactPage({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-3xl bg-[#0b1220] px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-6 font-serif text-5xl text-white">{t.contact.title}</h1>
      <p className="mb-12 text-lg leading-relaxed text-slate-300">
        {t.contact.intro}
      </p>

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

        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-[#121c31] p-6">
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

          <button
            type="submit"
            className="w-full rounded-full bg-yellow-500 px-6 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
}
