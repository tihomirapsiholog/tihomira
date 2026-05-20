import { ArrowRight, Gift, Mail, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function WorkPage({ t, setCurrentPage, language = 'en' }) {
  const location = useLocation();
  const currentLanguage = location.pathname.startsWith('/sr') ? 'sr' : language;
  const work = t.work || {};
  const isSerbian = currentLanguage === 'sr';

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(
          () => el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
          100
        );
      }
    }
  }, [location.hash]);

  const fallback = isSerbian
    ? {
        eyebrow: 'Rad sa mnom',
        title:
          'Psihološki utemeljena podrška za periode promene, neizvesnosti i unutrašnjeg procesa.',
        intro:
          'Tiha Psiha je psihološki utemeljena praksa u razvoju, kroz individualne susrete, male iskustvene radionice i zvučna iskustva uživo za ljude koji prolaze kroz promenu, neizvesnost ili unutrašnji proces.',
        intro2:
          'Rad je utemeljen u psihologiji, iskustvenim metodama, simboličkom istraživanju i pažljivom praćenju onoga što je stvarno prisutno sada.',
        heroBadge1: 'Trenutno dostupno',
        heroBadge2: 'Po pozivu',
        heroBadge3: 'U razvoju',

        availableLabel: 'Trenutno dostupno',
        availableTitle: 'Odavde možeš da počneš.',
        availableIntro:
          'Ovo su formati koji su trenutno dostupni online. Jednostavni su, fokusirani i namenjeni ljudima koji žele prizemljen prostor za refleksiju, uvid i unutrašnje orijentisanje.',

        orientationTitle: 'Besplatan uvodni razgovor',
        orientationMeta: '15 minuta · Online',
        orientationText:
          'Kratak razgovor da vidimo šta tražiš, da li je ovaj rad dobar okvir za tebe i koji format bi ti najviše služio.',
        orientationPrice: 'Besplatno',
        orientationCta: 'Zakaži uvodni razgovor',
        orientationMessage:
          'Zanima me besplatan uvodni razgovor. Želim ukratko da podelim šta me dovodi...',

        dreamTitle: 'Vođena sesija istraživanja sna',
        dreamMeta: 'Do 60 minuta · Online',
        dreamText:
          'Vođeni intervju sa snom, simbolom ili unutrašnjom slikom. Ovo nije klasično tumačenje sna. Cilj su praktični uvidi, unutrašnji odgovori i jasnije sagledavanje situacije u kojoj se nalaziš.',
        dreamPrice: '6.000 RSD',
        buyForMyself: 'Zakaži sesiju',
        buyAsGift: 'Raspitaj se za poklon sesiju',
        dreamMessage:
          'Zanima me kupovina vođene sesije istraživanja sna za sebe.',
        dreamGiftMessage:
          'Zanima me kupovina vođene sesije istraživanja sna kao poklon.',

        packageTitle: 'Paketi individualne podrške',
        packageMeta: 'Online · Jedan na jedan',
        packageText:
          'Individualni susreti za ljude koji prolaze kroz promenu, unutrašnji konflikt, neizvesnost ili potrebu za jasnijim kontaktom sa sobom. Rad može uključivati razgovor, simboličko istraživanje, telesnu svesnost i iskustvenu refleksiju.',
        packagePrice: 'Od 6.000 RSD',
        packageCta: 'Raspitaj se o individualnoj podršci',
        packageMessage:
          'Zanima me paket individualne podrške. Želim da podelim kakav proces mi je potreban...',

        pricingLabel: 'Cene',
        pricingTitle: 'Sesije i paketi',
        pricingIntro:
          'Paketi su namenjeni refleksivnom i razvojnom radu. Nisu namenjeni hitnim kriznim situacijama.',
        singleSessionTitle: '1 sesija',
        singleSessionPrice: '6.000 RSD',
        singleSessionValidity:
          'Jedna sesija važi 3 meseca od datuma kupovine.',
        threeSessionsTitle: '3 sesije',
        threeSessionsPrice: '15.000 RSD',
        threeSessionsValidity:
          'Paket od 3 sesije važi 2 meseca od datuma kupovine.',
        fiveSessionsTitle: '5 sesija',
        fiveSessionsPrice: '24.000 RSD',
        fiveSessionsValidity:
          'Paket od 5 sesija važi 3 meseca od datuma kupovine.',
        giftSessionTitle: 'Poklon sesija',
        giftSessionPrice: '6.000 RSD',
        giftSessionValidity:
          'Poklon sesija važi 3 meseca od datuma kupovine.',
        termsNotice:
          'Kupovinom sesije ili paketa prihvatate uslove zakazivanja, pomeranja i otkazivanja.',
        termsLink: 'Pročitaj uslove',

        invitationLabel: 'Po pozivu',
        invitationTitle: 'Radionice, grupni procesi i zvučna iskustva.',
        invitationIntro:
          'Neki formati se otvaraju kroz saradnju, poziv ili lokalnu organizaciju. Mogu se oblikovati prema grupi, gradu, zajednici ili određenoj temi.',
        invite1Title: 'Radionice i grupni procesi',
        invite1Text:
          'Mali online ili uživo prostori za iskustveno istraživanje kroz susret, akciju, simbol, ulogu, prisustvo grupe i ono što se formira između ljudi.',
        invite2Title: 'Zvučna iskustva uživo',
        invite2Text:
          'Zvučni susreti se nude uživo, u zavisnosti od lokacije, saradnje i dostupnog prostora. Nisu performansi, već pažljivo držani iskustveni prostori.',
        invitationCta: 'Pozovi ili organizuj format',
        invitationMessage:
          'Zanima me da ugostim ili pozovem radionicu, grupni proces ili zvučno iskustvo. Evo šta imam na umu...',

        developmentLabel: 'U razvoju',
        developmentTitle: 'Ono što se još oblikuje.',
        developmentIntro:
          'Tiha Psiha se namerno razvija korak po korak. Neki formati se oblikuju polako i pažljivo, da bi postali jasni, korisni i održivi.',
        development1Title: 'Male kontinuirane grupe',
        development1Text:
          'Kontinuirane online grupe mogu se otvoriti kasnije za ljude koji žele kontinuitet, zajedničku refleksiju i iskustveno istraživanje tokom vremena.',
        development2Title: 'Snimljena zvučna iskustva',
        development2Text:
          'Snimljeni zvučni materijali su u razvoju kao buduća digitalna ponuda. Biće kreirani pažljivo, uz jasan okvir i jednostavan pristup.',

        questionsTitle: 'Nisi sigurna odakle da počneš?',
        questionsText:
          'Ne moraš unapred da znaš tačan format. Kratak uvodni razgovor je često dovoljan da se razjasni sledeći korak.',
        reach: 'Javi se',
        finalMessage:
          'Zanima me rad sa tobom, ali još nisam sigurna koji format je najbolji za mene.',
      }
    : {
        eyebrow: 'Work With Me',
        title:
          'Psychology-informed support for moments of transition, uncertainty and inner change.',
        intro:
          'Tiha Psiha is a psychology-informed practice in development, offering individual sessions, small experiential workshops and in-person sound experiences for people moving through transition, uncertainty or inner change.',
        intro2:
          'The work is grounded in psychology, experiential methods, symbolic exploration and careful attention to what is actually present now.',
        heroBadge1: 'Currently available',
        heroBadge2: 'By invitation',
        heroBadge3: 'In development',

        availableLabel: 'Currently available',
        availableTitle: 'You can start here.',
        availableIntro:
          'These are the formats currently available online. They are simple, focused and designed for people who want a grounded space for reflection, insight and inner orientation.',

        orientationTitle: 'Free Orientation Call',
        orientationMeta: '15 minutes · Online',
        orientationText:
          'A short conversation to see what you are looking for, whether this work is a good fit, and which format would serve you best.',
        orientationPrice: 'Free',
        orientationCta: 'Book an orientation call',
        orientationMessage:
          'I am interested in a free orientation call. I would like to briefly share what brings me here...',

        dreamTitle: 'Guided Dream Exploration Session',
        dreamMeta: 'Up to 60 minutes · Online',
        dreamText:
          'A guided interview with a dream, symbol or inner image. This is not classical dream interpretation. The aim is practical insight, inner answers and a clearer view of the situation you are in.',
        dreamPrice: '50 EUR',
        buyForMyself: 'Schedule session',
        buyAsGift: 'Ask about gift session',
        dreamMessage:
          'I am interested in buying a Guided Dream Exploration Session for myself.',
        dreamGiftMessage:
          'I am interested in buying a Guided Dream Exploration Session as a gift.',

        packageTitle: 'Individual Support Packages',
        packageMeta: 'Online · One-to-one',
        packageText:
          'Individual sessions for people who are moving through transition, inner conflict, uncertainty or a need for clearer contact with themselves. The work may include conversation, symbolic exploration, body awareness and experiential reflection.',
        packagePrice: 'From 50 EUR',
        packageCta: 'Ask about individual support',
        packageMessage:
          'I am interested in individual support packages. I would like to share what kind of process I am looking for...',

        pricingLabel: 'Prices',
        pricingTitle: 'Sessions and packages',
        pricingIntro:
          'Packages are intended for reflective and developmental work. They are not intended for crisis situations.',
        singleSessionTitle: '1 session',
        singleSessionPrice: '50 EUR',
        singleSessionValidity:
          'A single session is valid for 3 months from the date of purchase.',
        threeSessionsTitle: '3 sessions',
        threeSessionsPrice: '130 EUR',
        threeSessionsValidity:
          'The 3-session package is valid for 2 months from the date of purchase.',
        fiveSessionsTitle: '5 sessions',
        fiveSessionsPrice: '200 EUR',
        fiveSessionsValidity:
          'The 5-session package is valid for 3 months from the date of purchase.',
        giftSessionTitle: 'Gift session',
        giftSessionPrice: '50 EUR',
        giftSessionValidity:
          'Gift sessions are valid for 3 months from the date of purchase.',
        termsNotice:
          'By purchasing a session or package, you agree to the scheduling, rescheduling and cancellation terms.',
        termsLink: 'Read terms',

        invitationLabel: 'By invitation',
        invitationTitle: 'Workshops, group processes and sound experiences.',
        invitationIntro:
          'Some formats are offered through collaboration, invitation or local organization. They can be shaped around a group, city, community or specific theme.',
        invite1Title: 'Workshops & Group Processes',
        invite1Text:
          'Small online or in-person spaces for experiential exploration through encounter, action, symbol, role, group presence and what forms between people.',
        invite2Title: 'In-Person Sound Experiences',
        invite2Text:
          'Sound-based gatherings are offered in person, depending on location, collaboration and available space. They are not performances, but carefully held experiential spaces.',
        invitationCta: 'Invite or host a format',
        invitationMessage:
          'I am interested in hosting or inviting a workshop, group process or sound experience. Here is what I have in mind...',

        developmentLabel: 'In development',
        developmentTitle: 'What is still taking shape.',
        developmentIntro:
          'Tiha Psiha is intentionally developing step by step. Some formats are being shaped slowly, with care, so they can become clear, useful and sustainable.',
        development1Title: 'Small ongoing groups',
        development1Text:
          'Ongoing online groups may open later for people who want continuity, shared reflection and experiential exploration over time.',
        development2Title: 'Recorded sound experiences',
        development2Text:
          'Recorded sound-based materials are in development as a future digital offer. They will be created carefully, with clear framing and simple access.',

        questionsTitle: 'Not sure where to begin?',
        questionsText:
          'You do not need to know the exact format before reaching out. A short orientation conversation is often enough to clarify the next step.',
        reach: 'Get in touch',
        finalMessage:
          'I am interested in working with you, but I am not sure which format is the best fit yet.',
      };

  const getText = (key) => work[key] || fallback[key];

  const calendlyLinks = {
    freeSession: 'https://calendly.com/tihomira-psiholog/free-session',
    dreamWork: 'https://calendly.com/tihomira-psiholog/60-min-dream-work',
  };

  const openExternal = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const availableOffers = [
    {
      title: getText('orientationTitle'),
      meta: getText('orientationMeta'),
      text: getText('orientationText'),
      price: getText('orientationPrice'),
      cta: getText('orientationCta'),
      icon: Mail,
      contactMessage: getText('orientationMessage'),
      actionType: 'dreamCalendly',
    },
    {
      title: getText('dreamTitle'),
      meta: getText('dreamMeta'),
      text: getText('dreamText'),
      price: getText('dreamPrice'),
      cta: getText('buyForMyself'),
      giftCta: getText('buyAsGift'),
      icon: Sparkles,
      contactMessage: getText('dreamMessage'),
      giftMessage: getText('dreamGiftMessage'),
    },
    {
      title: getText('packageTitle'),
      meta: getText('packageMeta'),
      text: getText('packageText'),
      price: getText('packagePrice'),
      cta: getText('packageCta'),
      icon: Gift,
      contactMessage: getText('packageMessage'),
    },
  ];

  const packages = [
    {
      title: getText('singleSessionTitle'),
      price: getText('singleSessionPrice'),
      validity: getText('singleSessionValidity'),
    },
    {
      title: getText('threeSessionsTitle'),
      price: getText('threeSessionsPrice'),
      validity: getText('threeSessionsValidity'),
    },
    {
      title: getText('fiveSessionsTitle'),
      price: getText('fiveSessionsPrice'),
      validity: getText('fiveSessionsValidity'),
    },
    {
      title: getText('giftSessionTitle'),
      price: getText('giftSessionPrice'),
      validity: getText('giftSessionValidity'),
    },
  ];

  const invitationFormats = [
    {
      title: getText('invite1Title'),
      text: getText('invite1Text'),
    },
    {
      title: getText('invite2Title'),
      text: getText('invite2Text'),
    },
  ];

  const inDevelopment = [
    {
      title: getText('development1Title'),
      text: getText('development1Text'),
    },
    {
      title: getText('development2Title'),
      text: getText('development2Text'),
    },
  ];

  const goToContact = (message) => {
    const encodedMessage = encodeURIComponent(message || getText('finalMessage'));
    setCurrentPage(`/contact?message=${encodedMessage}`);
  };

  return (
    <div className="overflow-hidden bg-[#0b1220] text-slate-100">
      <SEO
        title={
          isSerbian
            ? 'Rad sa mnom | Individualni susreti, sesije istraživanja sna i radionice'
            : 'Work With Me | Individual Sessions, Dream Exploration and Workshops'
        }
        description={
          isSerbian
            ? 'Psihološki utemeljen individualni rad, vođene sesije istraživanja sna, paketi podrške, radionice po pozivu i zvučna iskustva uživo.'
            : 'Psychology-informed individual work, guided dream exploration sessions, support packages, workshops by invitation and in-person sound experiences.'
        }
        url={
          isSerbian
            ? 'https://tihomira.info/sr/work'
            : 'https://tihomira.info/en/work'
        }
        language={currentLanguage}
        alternateUrls={{
          en: 'https://tihomira.info/en/work',
          sr: 'https://tihomira.info/sr/work',
          xDefault: 'https://tihomira.info/en/work',
        }}
      />

      {/* HERO */}
<section className="relative overflow-hidden border-b border-yellow-700/10 bg-[#07100d] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(215,181,109,0.14),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(95,113,80,0.24),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(56,97,67,0.20),transparent_38%),linear-gradient(180deg,#07100d,#101b18)]" />

  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,rgba(255,244,214,0.7)_1px,transparent_0)] bg-[length:18px_18px]" />

  <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
    <div className="text-left">
      <span className="text-sm uppercase tracking-[0.34em] text-yellow-400/80">
        {getText('eyebrow')}
      </span>

      <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-yellow-50 sm:text-5xl lg:text-6xl">
        {getText('title')}
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
        {getText('intro')}
      </p>

      <p className="mt-5 max-w-3xl leading-8 text-slate-400">
        {getText('intro2')}
      </p>
    </div>

    <div className="rounded-[2.25rem] border border-yellow-700/20 bg-[#102019]/62 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur">
      <p className="text-xs uppercase tracking-[0.3em] text-yellow-300/70">
        {isSerbian ? 'kako možeš da uđeš u rad' : 'ways into the work'}
      </p>

      <div className="mt-6 space-y-4">
        <div className="rounded-[1.5rem] border border-yellow-700/15 bg-[#07100d]/64 px-5 py-4">
          <p className="font-serif text-xl text-yellow-50">
            {getText('heroBadge1')}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {isSerbian
              ? 'Sesije i paketi koje možeš da zakažeš sada.'
              : 'Sessions and packages you can book now.'}
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-yellow-700/15 bg-[#07100d]/64 px-5 py-4">
          <p className="font-serif text-xl text-yellow-50">
            {getText('heroBadge2')}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {isSerbian
              ? 'Radionice, grupni procesi i zvučna iskustva kroz saradnju.'
              : 'Workshops, group processes and sound experiences through collaboration.'}
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-yellow-700/15 bg-[#07100d]/64 px-5 py-4">
          <p className="font-serif text-xl text-yellow-50">
            {getText('heroBadge3')}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {isSerbian
              ? 'Formati koji se polako oblikuju i otvaraju kasnije.'
              : 'Formats that are slowly taking shape and opening later.'}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* AVAILABLE */}
<section className="relative overflow-hidden bg-[#101b18] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(95,113,80,0.24),transparent_34%),radial-gradient(circle_at_88%_68%,rgba(215,181,109,0.10),transparent_30%),linear-gradient(180deg,#101b18,#07100d)]" />

  <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,rgba(255,244,214,0.7)_1px,transparent_0)] bg-[length:18px_18px]" />

  <div className="relative mx-auto max-w-6xl">
    <div className="mb-14 max-w-3xl">
      <span className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
        {getText('availableLabel')}
      </span>

      <h2 className="mt-4 font-serif text-3xl leading-tight text-yellow-50 sm:text-4xl">
        {getText('availableTitle')}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-300">
        {getText('availableIntro')}
      </p>
    </div>

    <div className="grid gap-7 lg:grid-cols-3">
      {availableOffers.map((offer, index) => {
        const Icon = offer.icon;

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[2rem] border border-yellow-700/20 bg-[#07100d]/68 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/35 md:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(215,181,109,0.10),transparent_28%),radial-gradient(circle_at_85%_88%,rgba(95,113,80,0.18),transparent_34%)] opacity-80" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-700/25 bg-yellow-500/10">
                  <Icon className="h-6 w-6 text-yellow-400" />
                </div>

                <p className="pt-2 text-xs uppercase tracking-[0.24em] text-yellow-400/45">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.22em] text-yellow-300/75">
                {offer.meta}
              </p>

              <h3 className="mt-4 font-serif text-3xl leading-snug text-yellow-50">
                {offer.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                {offer.text}
              </p>

              <div className="mt-7 h-px w-full bg-gradient-to-r from-yellow-400/35 via-yellow-400/10 to-transparent" />

              <p className="mt-6 font-serif text-3xl text-yellow-300">
                {offer.price}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => {
                    if (offer.actionType === 'freeCalendly') {
                      openExternal(calendlyLinks.freeSession);
                      return;
                    }

                    if (offer.actionType === 'dreamCalendly') {
                      openExternal(calendlyLinks.dreamWork);
                      return;
                    }

                    goToContact(offer.contactMessage);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-yellow-400"
                >
                  {offer.cta}
                  <ArrowRight size={16} />
                </button>

                {offer.giftCta && (
                  <button
                    onClick={() => goToContact(offer.giftMessage)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-400/35 px-5 py-3 text-sm font-medium text-yellow-200 transition hover:border-yellow-300 hover:bg-yellow-400/10 hover:text-white"
                  >
                    {offer.giftCta}
                    <Gift size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* PRICING */}
<section className="relative overflow-hidden bg-[#07100d] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,181,109,0.11),transparent_32%),radial-gradient(circle_at_12%_78%,rgba(95,113,80,0.18),transparent_34%),linear-gradient(180deg,#07100d,#0b1220)]" />

  <div className="relative mx-auto max-w-6xl">
    <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <span className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
          {getText('pricingLabel')}
        </span>

        <h2 className="mt-4 font-serif text-3xl leading-tight text-yellow-50 sm:text-4xl">
          {getText('pricingTitle')}
        </h2>
      </div>

      <p className="max-w-3xl text-base leading-8 text-slate-300 lg:ml-auto">
        {getText('pricingIntro')}
      </p>
    </div>

    <div className="overflow-hidden rounded-[2.25rem] border border-yellow-700/20 bg-[#101b18]/72 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item, index) => (
          <div
            key={index}
            className={`relative p-7 md:p-8 ${
              index !== packages.length - 1
                ? 'border-b border-yellow-700/15 md:border-r lg:border-b-0'
                : ''
            } ${
              index === 1 ? 'bg-yellow-500/[0.035]' : ''
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_14%,rgba(215,181,109,0.08),transparent_28%)] opacity-0 transition duration-300 hover:opacity-100" />

            <div className="relative">
              <p className="mb-6 text-xs uppercase tracking-[0.24em] text-yellow-400/50">
                {String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="font-serif text-2xl leading-tight text-yellow-50">
                {item.title}
              </h3>

              <p className="mt-5 font-serif text-3xl text-yellow-300">
                {item.price}
              </p>

              <div className="my-6 h-px w-20 bg-gradient-to-r from-yellow-400/40 to-transparent" />

              <p className="text-base leading-7 text-slate-300">
                {item.validity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <p className="mx-auto mt-9 max-w-3xl text-center text-sm leading-7 text-slate-400">
      {getText('termsNotice')}{' '}
      <button
        type="button"
        onClick={() => {
          window.location.href = isSerbian ? '/sr/terms' : '/en/terms';
        }}
        className="text-yellow-300 underline-offset-4 hover:underline"
      >
        {getText('termsLink')}
      </button>
    </p>
  </div>
</section>

      {/* BY INVITATION */}
      <section className="relative overflow-hidden bg-[#131f19] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.55),rgba(19,31,25,0.96)),radial-gradient(circle_at_18%_15%,rgba(215,181,109,0.10),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(95,113,80,0.22),transparent_34%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
              {getText('invitationLabel')}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-yellow-50 sm:text-4xl">
              {getText('invitationTitle')}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {getText('invitationIntro')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {invitationFormats.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-yellow-700/20 bg-[#0b1220]/55 p-8 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur"
              >
                <p className="mb-6 text-xs uppercase tracking-[0.24em] text-yellow-400/55">
                  {isSerbian ? 'poziv' : 'invitation'} {index + 1}
                </p>

                <h3 className="font-serif text-3xl leading-snug text-yellow-50">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => goToContact(getText('invitationMessage'))}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 px-6 py-3 text-sm font-medium text-yellow-200 transition hover:border-yellow-300 hover:bg-yellow-400/10 hover:text-white"
            >
              {getText('invitationCta')}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* IN DEVELOPMENT */}
      <section className="relative overflow-hidden bg-[#0b1220] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(215,181,109,0.09),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.32em] text-yellow-400/80">
              {getText('developmentLabel')}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-yellow-50 sm:text-4xl">
              {getText('developmentTitle')}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {getText('developmentIntro')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {inDevelopment.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-yellow-700/15 bg-[#111827]/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
              >
                <h3 className="font-serif text-3xl leading-snug text-yellow-50">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="relative overflow-hidden bg-[#101b18] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(215,181,109,0.12),transparent_32%),linear-gradient(180deg,#101b18,#07100d)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-yellow-50 sm:text-4xl">
            {getText('questionsTitle')}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            {getText('questionsText')}
          </p>

          <button
            onClick={() => goToContact(getText('finalMessage'))}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-3 font-medium text-slate-950 transition-colors hover:bg-yellow-400"
          >
            {getText('reach')}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}