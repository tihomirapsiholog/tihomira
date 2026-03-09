import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Instagram, ArrowRight } from 'lucide-react';

// Language translations
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
      tagline: '"I don\'t lead people to destinations.\nI help them find their path."',
      intro: 'Life\'s most profound moments often occur at crossroads—when an old story ends and a new one begins. I support individuals and groups navigating these transitions with psychology, embodied awareness, and symbolic work. Together, we explore what wants to emerge.',
      howIWork: 'How I Work',
      workDescription: 'My work integrates psychology, process facilitation, embodied practices, and symbolic awareness to create spaces where transformation can unfold naturally.',
      pillar1Title: 'Individual Sessions',
      pillar1Desc: 'One-on-one work for personal transition, self-discovery, and finding clarity in moments of change.',
      pillar2Title: 'Group Processes',
      pillar2Desc: 'Experiential workshops and group facilitation, including Soul Theater and transformational group work.',
      pillar3Title: 'Embodied & Symbolic Work',
      pillar3Desc: 'Spaces combining sound, ritual elements, and embodied awareness for deeper integration.',
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
      inviteText: 'Whether you\'re at a crossroads, seeking clarity, or ready for transformation, there\'s a path forward. Let\'s explore it together.',
      cta: 'Get in Touch',
    },
    about: {
      title: 'About My Work',
      intro: 'My presence, my practice, my commitment to transformation',
      para1: 'My journey began with a question: What helps people find themselves when they\'re lost? This curiosity led me to psychology, to group process work, and ultimately to the understanding that transformation happens not through instruction, but through creating the conditions for authentic discovery.',
      para2: 'I\'ve spent years studying how people navigate change—the fear, the confusion, the moments of unexpected clarity. I\'ve learned that our bodies hold wisdom we\'ve forgotten, that symbols speak to us in ways words cannot, and that when we gather intentionally, something powerful emerges from the space between us.',
      atCrossroads: 'At the Crossroads',
      crossroadsText: '"Many important moments in life happen at crossroads—when an old story ends and a new one begins. These are not problems to be solved quickly. They are invitations to become more fully ourselves."',
      para3: 'I\'ve dedicated my practice to supporting people in these liminal spaces. Whether you\'re questioning your direction, grieving what was, or sensing that something is asking to be born, my work is to help you find clarity not through answers I provide, but through awakening what you already know.',
      guidesWork: 'What Guides My Work',
      psychologyTitle: 'Psychology',
      psychologyText: 'Understanding the human psyche—patterns, wounds, strengths, and untapped potential.',
      processTitle: 'Group Process',
      processText: 'The wisdom that emerges when people gather authentically, holding space for individual and collective transformation.',
      embodiedTitle: 'Embodied Awareness',
      embodiedText: 'Reconnecting with the body\'s knowing—breath, sensation, movement, presence.',
      symbolicTitle: 'Symbolic & Artistic Work',
      symbolicText: 'Engaging metaphor, image, sound, and ritual to access deeper layers of awareness and transformation.',
      archetype: 'The Archetype of the Crossroads',
      archetypeText: 'Many ancient cultures describe guides who appear at life\'s pivotal moments—those standing at the threshold between what was and what might be. The archetype of Aurethra represents this—a presence that illuminates the path forward, not by forcing direction, but by awakening your own inner knowing.',
      archetypeText2: 'This is the spirit of my work: to be a steady presence as you navigate your own transformation, honoring both the depth of where you\'ve been and the potential of where you\'re going.',
    },
    work: {
      title: 'Work With Me',
      intro: 'I offer three primary ways to engage in transformational work. Each is designed to meet you where you are and support the unfolding of what wants to emerge.',
      service1: 'Service 1',
      service1Title: 'Individual Sessions',
      service1Sub: 'One-on-One Transformational Work',
      service1Desc: 'Private sessions for those navigating personal transition, questioning their direction, or seeking clarity in moments of change.',
      service1Feature1: 'Psychological support and insight',
      service1Feature2: 'Embodied awareness practices',
      service1Feature3: 'Symbolic exploration',
      service1Feature4: 'Personalized pacing and depth',
      service1ForWho: 'People at crossroads, seekers, those in transition',
      service2: 'Service 2',
      service2Title: 'Group Workshops & Gatherings',
      service2Sub: 'Experiential Collective Processes',
      service2Desc: 'Facilitated group experiences including Soul Theater, transformational workshops, and gathering processes that create space for collective and individual transformation.',
      service2Feature1: 'Shared exploration and witness',
      service2Feature2: 'Group process dynamics',
      service2Feature3: 'Soul Theater and dramatic work',
      service2Feature4: 'Ritual and symbolic elements',
      service2ForWho: 'Groups seeking depth, teams, communities, organizations',
      service3: 'Service 3',
      service3Title: 'Sound & Symbolic Experiences',
      service3Sub: 'Immersive Embodied Journeys',
      service3Desc: 'Carefully crafted experiences combining sound, movement, ritual, and symbolic awareness to facilitate integration and awakening.',
      service3Feature1: 'Sonic immersion',
      service3Feature2: 'Embodied movement',
      service3Feature3: 'Symbolic and ritual work',
      service3Feature4: 'Sensory integration',
      service3ForWho: 'Those seeking immersive transformation, artistic practitioners, spiritual explorers',
      experience: 'What You Experience',
      forWhom: 'For Whom',
      questionsTitle: 'Questions? Let\'s talk.',
      questionsText: 'Each journey is unique. I\'m happy to discuss what might serve you best.',
      reach: 'Reach Out',
    },
    events: {
      title: 'Gatherings & Workshops',
      noEvents: 'New gatherings and workshops are announced periodically.',
      stayConnected: 'Stay connected for invitations to upcoming transformational experiences.',
      joinEmail: 'Join the mailing list for announcements:',
      notify: 'Notify Me',
      interested: 'Interested in bringing me to your community?',
      custom: 'I offer custom facilitation for organizations, teams, and communities seeking transformational experiences.',
      customText: 'Get in touch about custom processes →',
    },
    contact: {
      title: 'Get in Touch',
      intro: 'Whether you\'re seeking individual sessions, interested in group work, or curious about what\'s possible, I\'m here to listen and support your journey.',
      email: 'Email',
      follow: 'Follow',
      response: 'I typically respond to inquiries within 2-3 days. Thank you for reaching out.',
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
      work: 'Radim sa mnom',
      events: 'Događanja',
      contact: 'Kontakt',
    },
    home: {
      welcome: 'Dobrodošli',
      tagline: '"Ne vodim ljude do odredišta.\nPomagam im da pronađu svoju putanju."',
      intro: 'Najdublji momenti u životu često se dešavaju na raskršćima — kada jedna priča završi, a nova počinje. Podržavam pojedince i grupe dok kreću kroz ove prelaze primenom psihologije, telesne svesti i simboličkog rada. Zajedno istražujemo ono što se želi da izrazi.',
      howIWork: 'Kako radim',
      workDescription: 'Moj rad integrišu psihologiju, grupni proces, telesne prakse i simboličku svest da bi se stvorili prostori u kojima se transformacija prirodno može razvijati.',
      pillar1Title: 'Individualne sesije',
      pillar1Desc: 'Rad jedan-na-jedan za ličnu transformaciju, samootkrivanje i nalaženje jasnoće u trenucima promene.',
      pillar2Title: 'Grupni procesi',
      pillar2Desc: 'Empirijski radionici i grupne fasilitacije, uključujući Pozorište duše i transformacijski grupni rad.',
      pillar3Title: 'Telesni i simbolični rad',
      pillar3Desc: 'Prostori koji kombinuju zvuk, ritualne elemente i telesnu svest za dublju integraciju.',
      offerings: 'Ponude',
      offering1: 'Individualne sesije',
      offering1Sub: 'Privatni transformacijski rad',
      offering2: 'Grupni radionici',
      offering2Sub: 'Empirijski kolektivni procesi',
      offering3: 'Zvučne i simbolične iskustva',
      offering3Sub: 'Imerzivna telesna putovanja',
      offering4: 'Prilagođena fasilitacija',
      offering4Sub: 'Procesi prilagođeni organizacijama',
      ready: 'Spremni za istraživanje?',
      inviteText: 'Bez obzira da li ste na raskršću, tražite jasnoću ili ste spremni za transformaciju, postoji put napred. Krećimo ga zajedno.',
      cta: 'Stupite u kontakt',
    },
    about: {
      title: 'O mom radu',
      intro: 'Moja prisutnost, moja praksa, moja posvećenost transformaciji',
      para1: 'Moja putanja je počela pitanjem: Šta pomaže ljudima da se pronađu kada su izgubljeni? Ta radoznalost me je odvela do psihologije, grupnog procesnog rada, i na kraju do razumevanja da se transformacija ne dešava kroz poučavanje, već kroz stvaranje uslova za autentično otkrivanje.',
      para2: 'Godinama sam proučavala kako ljudи prolaze kroz promene — strah, zabunu, trenuci neočekivane jasnoće. Naučila sam da naša tela nose mudrost koju smo zaboravili, da simboli govore na način na koji reči ne mogu, i da kada se namerno skupimo, nešto moćno iznikne iz prostora između nas.',
      atCrossroads: 'Na raskršću',
      crossroadsText: '"Mnogi važni trenutci u životu se dešavaju na raskršćima — kada jedna priča završi, a nova počinje. To nisu problemi koji se brzo rešavaju. To su pozivi da postanemo potpunije sami sebi."',
      para3: 'Svoju praksu sam posvetila podržavanju ljudi u ovim liminalnim prostorima. Bez obzira da li ispravaljte svoju smer, tugujete za onim što je bilo, ili osećate da nešto želi da se rodi, moj rad je da vam pomognem da pronađete jasnoću — ne kroz odgovore koje pružam, već kroz buđenje onog što već znate.',
      guidesWork: 'Šta vodi moj rad',
      psychologyTitle: 'Psihologija',
      psychologyText: 'Razumevanje čovekove psihe — obrazaca, rana, snaga i neisplaćenog potencijala.',
      processTitle: 'Grupni proces',
      processText: 'Mudrost koja iznikne kada se ljudi autentično skupu, čuvajući prostor za individualnu i kolektivnu transformaciju.',
      embodiedTitle: 'Telesna svest',
      embodiedText: 'Ponovna veza sa telesnim znanjem — dahom, senzacijom, kretanjem, prisustvom.',
      symbolicTitle: 'Simbolični i umetnički rad',
      symbolicText: 'Angažovanje metafore, slike, zvuka i rituala za pristup dubljim slojevima svesti i transformacije.',
      archetype: 'Arhetip raskršća',
      archetypeText: 'Mnoge drevne kulture opisuju vodiče koji se pojavljuju u životnim zaokretnim momentima — one koji stoje na pragu između onoga što je bilo i onoga što bi moglo biti. Arhetip Aurete predstavlja upravo to — prisustvo koje osvetljava put napred, ne silovanje smera, već buđenjem vašeg sopstvenog unutrašnjeg znanja.',
      archetypeText2: 'To je duh mog rada: biti stabilna prisutnost dok krećete kroz svoju transformaciju, pozitivno priznavajući i dubinu toga odakle ste došli i potencijal toga kuda idete.',
    },
    work: {
      title: 'Radim sa mnom',
      intro: 'Nudim tri primarna načina angažovanja u transformacijskom radu. Svaka je dizajnirana da vas sretne gde ste i podržи razvoj onoga što želi da se javi.',
      service1: 'Usluga 1',
      service1Title: 'Individualne sesije',
      service1Sub: 'Rad jedan-na-jedan za transformaciju',
      service1Desc: 'Privatne sesije za one koji prolaze kroz ličnu transformaciju, ispravaljaju svoju smer, ili traže jasnoću u trenucima promene.',
      service1Feature1: 'Psihološka podrška i uvid',
      service1Feature2: 'Telesne vežbe svesti',
      service1Feature3: 'Simbolično istraživanje',
      service1Feature4: 'Prilagođen tempo i dubina',
      service1ForWho: 'Ljudi na raskršćima, tragači, oni u transformaciji',
      service2: 'Usluga 2',
      service2Title: 'Grupni radionici i okupljanja',
      service2Sub: 'Empirijski kolektivni procesi',
      service2Desc: 'Fasilitirani grupni procesi uključujući Pozorište duše, transformacijske radionice i okupljanja koja čine prostor za kolektivnu i individualnu transformaciju.',
      service2Feature1: 'Deljeno istraživanje i svedočenje',
      service2Feature2: 'Dinamika grupnog procesa',
      service2Feature3: 'Pozorište duše i dramski rad',
      service2Feature4: 'Ritualni i simbolični elementi',
      service2ForWho: 'Grupe koje traže dubinu, timovi, zajednice, organizacije',
      service3: 'Usluga 3',
      service3Title: 'Zvučne i simbolične iskustva',
      service3Sub: 'Imerzivna telesna putovanja',
      service3Desc: 'Pažljivo sastavljena iskustva koja kombinuju zvuk, kretanje, ritual i simboličnu svest da olakšaju integraciju i buđenje.',
      service3Feature1: 'Sonična imerzija',
      service3Feature2: 'Telesno kretanje',
      service3Feature3: 'Simbolični i ritualni rad',
      service3Feature4: 'Senzorna integracija',
      service3ForWho: 'Oni koji traže imerzivnu transformaciju, umetnički praktičari, duhovni istraživači',
      experience: 'Šta doživite',
      forWhom: 'Za koga je namenjeno',
      questionsTitle: 'Pitanja? Razgovarajmo.',
      questionsText: 'Svaka putanja je jedinstvena. Zadovoljan sam da razgovaram o tome šta bi vam moglo biti od koristi.',
      reach: 'Stupite u kontakt',
    },
    events: {
      title: 'Okupljanja i radionici',
      noEvents: 'Nova okupljanja i radionici se periodično objavljuju.',
      stayConnected: 'Ostanite povezani za pozive za predstojećа transformacijska iskustva.',
      joinEmail: 'Pridružite se listi za poštu za objave:',
      notify: 'Obavesti me',
      interested: 'Zainteresovani da me donesete u vašu zajednicu?',
      custom: 'Nudim prilagođenu fasilitaciju za organizacije, timove i zajednice koje traže transformacijska iskustva.',
      customText: 'Stupite u kontakt zbog prilagođenih procesa →',
    },
    contact: {
      title: 'Stupite u kontakt',
      intro: 'Bez obzira da li tražite individualne sesije, zainteresovani ste za grupni rad ili radoznali šta je moguće, ovde sam da sluša i podržim vašu putanju.',
      email: 'Imejl',
      follow: 'Pratite',
      response: 'Obično odgovorim na upite unutar 2-3 dana. Hvala što ste nas kontaktirali.',
      yourName: 'Vaše ime',
      namePlaceholder: 'Vaše ime',
      emailLabel: 'Imejl',
      emailPlaceholder: 'vase@ime.com',
      message: 'Poruka',
      messagePlaceholder: 'Recite mi šta vas dovodи ovde...',
      send: 'Pošalite poruku',
    },
    footer: {
      brand: 'Tiha Psiha',
      desc: 'Transformacijska fasilitacija i psihologija',
      rights: '© 2024 Tihomira Stanojević. Sva prava zadržana.',
      tagline: 'Prostor za one koji traže jasnoću na raskršću.',
    },
  },
};

export default function TihomiraWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  const pages = {
    home: <HomePage setCurrentPage={setCurrentPage} t={t} />,
    about: <AboutPage t={t} />,
    work: <WorkPage t={t} />,
    events: <EventsPage t={t} />,
    contact: <ContactPage t={t} />,
  };

  const navItems = [
    [t.nav.home, 'home'],
    [t.nav.about, 'about'],
    [t.nav.work, 'work'],
    [t.nav.events, 'events'],
    [t.nav.contact, 'contact'],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gold/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => {
              setCurrentPage('home');
              menuOpen && setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            title="Tiha Psiha - Aurethra"
          >
            <img 
              src="/logo-aurethra.png" 
              alt="Aurethra - Tiha Psiha" 
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map(([label, page]) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo(0, 0);
                }}
                className={`text-sm transition-all ${
                  currentPage === page
                    ? 'text-gold font-medium'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {label}
              </button>
            ))}
            {/* Language Switcher */}
            <div className="flex gap-2 ml-4 pl-4 border-l border-gold/20">
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs px-2 py-1 rounded transition-all ${
                  language === 'en'
                    ? 'bg-gold text-slate-900 font-medium'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('sr')}
                className={`text-xs px-2 py-1 rounded transition-all ${
                  language === 'sr'
                    ? 'bg-gold text-slate-900 font-medium'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                SR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-900"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gold/20 p-4 space-y-4">
            {navItems.map(([label, page]) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block w-full text-left text-sm transition-all ${
                  currentPage === page
                    ? 'text-gold font-medium'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {label}
              </button>
            ))}
            <div className="flex gap-2 pt-4 border-t border-gold/20">
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs px-3 py-2 rounded transition-all flex-1 ${
                  language === 'en'
                    ? 'bg-gold text-slate-900 font-medium'
                    : 'text-slate-500 hover:text-slate-700 border border-slate-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('sr')}
                className={`text-xs px-3 py-2 rounded transition-all flex-1 ${
                  language === 'sr'
                    ? 'bg-gold text-slate-900 font-medium'
                    : 'text-slate-500 hover:text-slate-700 border border-slate-200'
                }`}
              >
                Srpski
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-24">
        {pages[currentPage]}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 mt-20 pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Brand */}
          <div className="text-center mb-12">
            <img 
              src="/logo-aurethra.png" 
              alt="Aurethra" 
              className="h-20 w-auto mx-auto mb-6 opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-lg">
              <span className="text-gold font-serif text-xl">{t.footer.brand}</span>
            </p>
            <p className="text-slate-400 text-sm mt-2">{t.footer.desc}</p>
          </div>

          {/* Footer content */}
          <div className="border-t border-gold/20 pt-8 text-center">
            <p className="text-slate-400 mb-4">
              {t.footer.rights}
            </p>
            <p className="text-xs text-slate-500">
              {t.footer.tagline}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HOME PAGE ====================
function HomePage({ setCurrentPage, t }) {
  return (
    <div className="space-y-0">
      {/* Hero with Silhouette Image */}
      <section className="relative h-96 sm:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <img 
            src="/api/placeholder/1200/800"
            alt="Contemplative silhouette in warm light"
            className="w-full h-full object-cover opacity-70 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Aurethra Logo */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <img 
                src="/logo-aurethra.png" 
                alt="Aurethra" 
                className="h-32 w-auto drop-shadow-2xl"
              />
            </div>
            <p className="text-sm uppercase tracking-widest text-gold mb-4 animate-fade-in">{t.home.welcome}</p>
            <h1 className="text-5xl sm:text-7xl font-serif text-white mb-6 leading-tight animate-fade-in-delay">
              Tihomira Stanojević
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 font-light mb-8 italic whitespace-pre-line animate-fade-in-delay-2">
              {t.home.tagline}
            </p>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t.home.intro}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-gold opacity-60 text-sm">↓</div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-slate-900 text-center mb-4">
            {t.home.howIWork}
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto text-lg">
            {t.home.workDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '↻', title: t.home.pillar1Title, desc: t.home.pillar1Desc },
              { icon: '◯', title: t.home.pillar2Title, desc: t.home.pillar2Desc },
              { icon: '✦', title: t.home.pillar3Title, desc: t.home.pillar3Desc },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-slate-50 to-white border border-gold/20 rounded-lg hover:border-gold/40 transition-all group hover:shadow-lg"
              >
                <div className="text-4xl text-gold mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments Section with Image */}
      <section className="bg-gradient-to-r from-slate-900/5 to-forest-green/5 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-slate-900 mb-6">Sound & Symbolic Tools</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                My practice incorporates instruments and symbolic objects that support the journey of transformation. Sound bowls, drums, and ritual elements create spaces where deeper awareness can emerge.
              </p>
              <p className="text-slate-600 italic">
                "Every instrument is a voice. Every sound is an invitation to listen more deeply to what wants to be heard within."
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/api/placeholder/500/400"
                alt="Sound bowls, drums, and symbolic instruments in natural light"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif text-slate-900 mb-12 text-center">{t.home.offerings}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: t.home.offering1, subtitle: t.home.offering1Sub },
            { title: t.home.offering2, subtitle: t.home.offering2Sub },
            { title: t.home.offering3, subtitle: t.home.offering3Sub },
            { title: t.home.offering4, subtitle: t.home.offering4Sub },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border-l-4 border-gold/40 hover:border-gold/80 transition-colors cursor-pointer group hover:pl-8"
            >
              <h3 className="font-serif text-lg text-slate-900 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 mt-2">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Invitation */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">{t.home.ready}</h2>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            {t.home.inviteText}
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-slate-900 font-medium rounded hover:bg-gold/90 transition-colors"
          >
            {t.home.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ==================== ABOUT PAGE ====================
function AboutPage({ t }) {
  return (
    <div className="space-y-0">
      {/* Hero Section with Personal Photo */}
      <section className="relative h-96 flex items-center overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1200/400"
            alt="Tihomira - personal portrait"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-serif mb-4">{t.about.title}</h1>
          <p className="text-xl text-slate-300 italic">{t.about.intro}</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="prose prose-slate max-w-none text-lg leading-relaxed space-y-8">
          <p className="text-slate-700">
            {t.about.para1}
          </p>

          <p className="text-slate-700">
            {t.about.para2}
          </p>

          <div className="bg-gradient-to-r from-gold/5 to-forest-green/5 border-l-4 border-gold p-8 my-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">{t.about.atCrossroads}</h2>
            <p className="text-slate-700 italic text-lg">
              {t.about.crossroadsText}
            </p>
          </div>

          <p className="text-slate-700">
            {t.about.para3}
          </p>

          <h2 className="text-3xl font-serif text-slate-900 pt-8">{t.about.guidesWork}</h2>

          <div className="space-y-8 pt-4">
            {[
              { title: t.about.psychologyTitle, text: t.about.psychologyText },
              { title: t.about.processTitle, text: t.about.processText },
              { title: t.about.embodiedTitle, text: t.about.embodiedText },
              { title: t.about.symbolicTitle, text: t.about.symbolicText },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gold/20 p-8 rounded-lg my-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/logo-aurethra.png" 
                alt="Aurethra" 
                className="h-24 w-auto opacity-80"
              />
            </div>
            <h2 className="text-3xl font-serif text-slate-900 mb-4 text-center">{t.about.archetype}</h2>
            <p className="text-slate-700 mb-4">
              {t.about.archetypeText}
            </p>
            <p className="text-slate-700">
              {t.about.archetypeText2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== WORK WITH ME PAGE ====================
function WorkPage({ t }) {
  const services = [
    {
      title: t.work.service1Title,
      subtitle: t.work.service1Sub,
      description: t.work.service1Desc,
      features: [t.work.service1Feature1, t.work.service1Feature2, t.work.service1Feature3, t.work.service1Feature4],
      forWho: t.work.service1ForWho,
    },
    {
      title: t.work.service2Title,
      subtitle: t.work.service2Sub,
      description: t.work.service2Desc,
      features: [t.work.service2Feature1, t.work.service2Feature2, t.work.service2Feature3, t.work.service2Feature4],
      forWho: t.work.service2ForWho,
    },
    {
      title: t.work.service3Title,
      subtitle: t.work.service3Sub,
      description: t.work.service3Desc,
      features: [t.work.service3Feature1, t.work.service3Feature2, t.work.service3Feature3, t.work.service3Feature4],
      forWho: t.work.service3ForWho,
    },
  ];

  return (
    <div className="space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif text-slate-900 mb-6">{t.work.title}</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          {t.work.intro}
        </p>
      </div>

      {services.map((service, i) => (
        <section key={i} className={`py-16 ${i % 2 === 0 ? 'bg-white/50 backdrop-blur' : ''}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-gold text-sm uppercase tracking-widest mb-2">{t.work[`service${i + 1}`]}</p>
              <h2 className="text-4xl font-serif text-slate-900 mb-2">{service.title}</h2>
              <p className="text-lg text-slate-500 italic">{service.subtitle}</p>
            </div>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
              <div>
                <h3 className="font-serif text-slate-900 mb-4">{t.work.experience}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-slate-700 flex gap-3">
                      <span className="text-gold mt-1">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-slate-900 mb-4">{t.work.forWhom}</h3>
                <p className="text-slate-700 leading-relaxed">{service.forWho}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-forest-green/10 to-slate-900/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">{t.work.questionsTitle}</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {t.work.questionsText}
          </p>
          <a
            href="mailto:hello@tihomira.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-slate-900 font-medium rounded hover:bg-gold/90 transition-colors"
          >
            {t.work.reach}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

// ==================== EVENTS PAGE ====================
function EventsPage({ t }) {
  const upcomingEvents = [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-serif text-slate-900 mb-8">{t.events.title}</h1>

      {upcomingEvents.length === 0 ? (
        <div className="bg-gradient-to-br from-slate-50 to-white border border-gold/20 rounded-lg p-12 text-center">
          <p className="text-xl text-slate-600 mb-4">
            {t.events.noEvents}
          </p>
          <p className="text-slate-500 mb-8">
            {t.events.stayConnected}
          </p>
          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              {t.events.joinEmail}
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full max-w-xs px-4 py-2 border border-gold/30 rounded bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold"
            />
            <button className="block w-full max-w-xs px-4 py-2 bg-gold text-slate-900 font-medium rounded hover:bg-gold/90 transition-colors">
              {t.events.notify}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="border-l-4 border-gold/60 pl-6 py-4">
              <h3 className="text-2xl font-serif text-slate-900 mb-2">{event.title}</h3>
              <p className="text-slate-600 mb-2">{event.date}</p>
              <p className="text-slate-700 mb-4">{event.description}</p>
              <a
                href={event.link}
                className="inline-block text-gold hover:text-gold/80 font-medium transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Info Section */}
      <div className="mt-16 p-8 bg-slate-900/5 border border-slate-200/50 rounded-lg">
        <h3 className="font-serif text-slate-900 mb-4">{t.events.interested}</h3>
        <p className="text-slate-700 mb-4">
          {t.events.custom}
        </p>
        <a
          href="mailto:hello@tihomira.com"
          className="text-gold hover:text-gold/80 font-medium transition-colors"
        >
          {t.events.customText}
        </a>
      </div>
    </div>
  );
}

// ==================== CONTACT PAGE ====================
function ContactPage({ t }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:hello@tihomira.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-serif text-slate-900 mb-6">{t.contact.title}</h1>
      <p className="text-lg text-slate-600 mb-12 leading-relaxed">
        {t.contact.intro}
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-slate-900 mb-2">{t.contact.email}</h3>
            <a
              href="mailto:hello@tihomira.com"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              hello@tihomira.com
            </a>
          </div>

          <div>
            <h3 className="font-serif text-slate-900 mb-3">{t.contact.follow}</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>

          <div className="pt-8">
            <p className="text-sm text-slate-500 leading-relaxed">
              {t.contact.response}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.yourName}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gold/30 rounded bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold transition-colors"
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.emailLabel}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gold/30 rounded bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold transition-colors"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.message}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-2 border border-gold/30 rounded bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gold text-slate-900 font-medium rounded hover:bg-gold/90 transition-colors"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
}

// Add these styles to your CSS
const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-delay {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    50% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-delay-2 {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    70% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.6s ease-out;
  }

  .animate-fade-in-delay {
    animation: fade-in-delay 1s ease-out;
  }

  .animate-fade-in-delay-2 {
    animation: fade-in-delay-2 1.4s ease-out;
  }
`;