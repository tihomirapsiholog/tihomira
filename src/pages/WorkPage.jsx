import { ArrowRight, Gift, Mail, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function WorkPage({ t, setCurrentPage, language = 'en' }) {
  const location = useLocation();
  const work = t.work || {};
  const isSerbian = language === 'sr';

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
        buyForMyself: 'Kupi za sebe',
        buyAsGift: 'Kupi kao poklon',
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
        buyForMyself: 'Buy for myself',
        buyAsGift: 'Buy as a gift',
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

  const availableOffers = [
    {
      title: getText('orientationTitle'),
      meta: getText('orientationMeta'),
      text: getText('orientationText'),
      price: getText('orientationPrice'),
      cta: getText('orientationCta'),
      icon: Mail,
      contactMessage: getText('orientationMessage'),
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
    <div className="bg-[#0b1220] text-slate-100">
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
        language={language}
        alternateUrls={{
          en: 'https://tihomira.info/en/work',
          sr: 'https://tihomira.info/sr/work',
          xDefault: 'https://tihomira.info/en/work',
        }}
      />

      <section className="border-b border-white/5 bg-[#0b1220] py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            {getText('eyebrow')}
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {getText('title')}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            {getText('intro')}
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-400">
            {getText('intro2')}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200">
              {getText('heroBadge1')}
            </span>
            <span className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200">
              {getText('heroBadge2')}
            </span>
            <span className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200">
              {getText('heroBadge3')}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#0e1628] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {getText('availableLabel')}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              {getText('availableTitle')}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {getText('availableIntro')}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {availableOffers.map((offer, index) => {
              const Icon = offer.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-700 bg-[#111827] p-8 transition hover:border-yellow-400/40 hover:shadow-xl hover:shadow-black/30"
                >
                  <Icon className="h-8 w-8 text-yellow-400" />

                  <p className="mt-5 text-sm uppercase tracking-[0.18em] text-yellow-300">
                    {offer.meta}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl leading-snug text-white">
                    {offer.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-200">
                    {offer.text}
                  </p>

                  <p className="mt-6 font-serif text-3xl text-yellow-300">
                    {offer.price}
                  </p>

                  <div className="mt-8 flex flex-col gap-3">
                    <button
                      onClick={() => goToContact(offer.contactMessage)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-yellow-400"
                    >
                      {offer.cta}
                      <ArrowRight size={16} />
                    </button>

                    {offer.giftCta && (
                      <button
                        onClick={() => goToContact(offer.giftMessage)}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-medium text-yellow-300 transition hover:border-yellow-300 hover:text-white"
                      >
                        {offer.giftCta}
                        <Gift size={16} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {getText('pricingLabel')}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              {getText('pricingTitle')}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {getText('pricingIntro')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-[#111827] p-6"
              >
                <h3 className="font-serif text-2xl text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-3xl text-yellow-300">
                  {item.price}
                </p>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  {item.validity}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-400">
            {getText('termsNotice')}{' '}
            <Link
              to={`/${language}/terms`}
              className="text-yellow-300 underline-offset-4 hover:underline"
            >
              {getText('termsLink')}
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-[#0e1628] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {getText('invitationLabel')}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              {getText('invitationTitle')}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {getText('invitationIntro')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {invitationFormats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-[#111827] p-8"
              >
                <h3 className="font-serif text-3xl leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-200">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => goToContact(getText('invitationMessage'))}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 px-6 py-3 text-sm font-medium text-yellow-300 transition hover:border-yellow-300 hover:text-white"
            >
              {getText('invitationCta')}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              {getText('developmentLabel')}
            </span>

            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
              {getText('developmentTitle')}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {getText('developmentIntro')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {inDevelopment.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-[#111827] p-8"
              >
                <h3 className="font-serif text-3xl leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-200">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10192c] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">
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