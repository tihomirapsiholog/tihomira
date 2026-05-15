import SEO from '../components/SEO';

export default function PrivacyPolicyPage({ language = 'en' }) {
  const isSerbian = language === 'sr';

  return (
    <>
      <SEO
        title={
          isSerbian
            ? 'Politika privatnosti | Tiha Psiha & Zoom Maestra'
            : 'Privacy Policy | Tiha Psiha & Zoom Maestra'
        }
        description={
          isSerbian
            ? 'Politika privatnosti za tihomira.info, Tiha Psiha i Zoom Maestra.'
            : 'Privacy Policy for tihomira.info, Tiha Psiha, and Zoom Maestra.'
        }
        url={
          isSerbian
            ? 'https://tihomira.info/sr/privacy-policy'
            : 'https://tihomira.info/en/privacy-policy'
        }
      />

      <main className="min-h-screen bg-[#f3eee4] px-6 py-20 text-[#182018] sm:px-8 lg:px-12">
        <article className="mx-auto max-w-3xl rounded-[2rem] bg-white/55 px-6 py-10 shadow-sm ring-1 ring-[#172018]/10 backdrop-blur sm:px-10 sm:py-12">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#6f6759]">
            tihomira.info
          </p>

          <h1 className="font-serif text-4xl font-normal leading-tight text-[#172018] sm:text-5xl">
            {isSerbian ? 'Politika privatnosti' : 'Privacy Policy'}
          </h1>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-[#3f493d] sm:text-lg">
            {isSerbian ? (
              <>
                <section>
                  <p>
                    Ova Politika privatnosti objašnjava kako se podaci
                    prikupljaju i koriste kada posećujete sajt tihomira.info
                    ili stupate u kontakt putem kontakt forme.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Ko vodi ovaj sajt
                  </h2>
                  <p>
                    Sajt tihomira.info predstavlja rad Tihomire Stanojević kroz
                    projekte Tiha Psiha i Zoom Maestra.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Koje podatke prikupljamo
                  </h2>
                  <p>
                    Kada koristite kontakt formu, možemo prikupiti podatke koje
                    sami unesete, kao što su ime, email adresa i sadržaj poruke.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Kako koristimo podatke
                  </h2>
                  <p>
                    Podaci se koriste isključivo za odgovor na vašu poruku,
                    dogovor oko saradnje, individualnih susreta, radionica,
                    Zoom Maestra podrške ili drugih usluga za koje ste pokazali
                    interesovanje.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Deljenje podataka
                  </h2>
                  <p>
                    Vaši lični podaci se ne prodaju i ne dele sa trećim
                    stranama, osim kada je to tehnički neophodno za
                    funkcionisanje sajta ili kada to zakon zahteva.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Kontakt forma i zaštita od spama
                  </h2>
                  <p>
                    Kontakt forma može koristiti osnovne tehničke mere zaštite
                    od neželjenih poruka, uključujući honeypot polje koje nije
                    vidljivo korisnicima.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Analitika
                  </h2>
                  <p>
                    Sajt trenutno može biti pripremljen za buduću upotrebu
                    analitike. Ako se analitika uvede, koristiće se za
                    razumevanje opšte posete sajtu i poboljšanje sadržaja, bez
                    namere da se identifikuju pojedinačni posetioci.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Vaša prava
                  </h2>
                  <p>
                    Možete zatražiti pristup, ispravku ili brisanje svojih
                    podataka koje ste poslali putem kontakt forme.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Kontakt
                  </h2>
                  <p>
                    Za pitanja u vezi sa privatnošću možete me kontaktirati
                    putem kontakt forme na sajtu.
                  </p>
                </section>

                <p className="pt-4 text-sm text-[#6f6759]">
                  Poslednje ažuriranje: maj 2026.
                </p>
              </>
            ) : (
              <>
                <section>
                  <p>
                    This Privacy Policy explains how information is collected
                    and used when you visit tihomira.info or contact me through
                    the contact form.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Who runs this website
                  </h2>
                  <p>
                    The website tihomira.info represents the work of Tihomira
                    Stanojević through Tiha Psiha and Zoom Maestra.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    What information is collected
                  </h2>
                  <p>
                    When you use the contact form, I may collect the information
                    you choose to provide, such as your name, email address, and
                    message content.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    How your information is used
                  </h2>
                  <p>
                    The information is used only to respond to your message and
                    communicate about possible collaboration, individual
                    sessions, workshops, Zoom Maestra support, or other services
                    you have asked about.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Sharing of information
                  </h2>
                  <p>
                    Your personal information is not sold or shared with third
                    parties, except where technically necessary for the website
                    to function or where required by law.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Contact form and spam protection
                  </h2>
                  <p>
                    The contact form may use basic technical spam-prevention
                    measures, including a honeypot field that is not visible to
                    users.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Analytics
                  </h2>
                  <p>
                    This website may be prepared for future analytics use. If
                    analytics are added, they will be used to understand general
                    website traffic and improve the content, not to personally
                    identify individual visitors.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Your rights
                  </h2>
                  <p>
                    You may request access to, correction of, or deletion of
                    personal information you have sent through the contact form.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 font-serif text-2xl text-[#172018]">
                    Contact
                  </h2>
                  <p>
                    For privacy-related questions, you can contact me through
                    the contact form on this website.
                  </p>
                </section>

                <p className="pt-4 text-sm text-[#6f6759]">
                  Last updated: May 2026.
                </p>
              </>
            )}
          </div>
        </article>
      </main>
    </>
  );
}