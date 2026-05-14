import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const gates = [
  {
    id: 'tiha-psiha',
    title: 'Tiha Psiha',
    description:
      'Prostor za psihološki, iskustveni i simbolički rad — kroz susret, telo, zvuk, grupu i unutrašnje slike.',
    page: '/tiha-psiha',
    closedImage: '/gates/tiha-closed.png',
    halfImage: '/gates/tiha-half.png',
    openImage: '/gates/tiha-open.png',
    theme: 'tiha',
  },
  {
    id: 'zoom-maestra',
    title: 'Zoom Maestra',
    description:
      'Prostor za facilitatore, edukatore i terapeute kojima je potrebna mirna, precizna i pouzdana podrška za online i hibridne događaje.',
    page: '/zoom-maestra',
    closedImage: '/gates/zoom-closed.png',
    halfImage: '/gates/zoom-half.png',
    openImage: '/gates/zoom-open.png',
    theme: 'zoom',
  },
];

export default function HomePage({ setCurrentPage, t }) {
  const [activeGate, setActiveGate] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');

    const updateDeviceType = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    updateDeviceType();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateDeviceType);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateDeviceType);
      }
    };
  }, []);

  const handleMouseEnter = (gateId) => {
    if (!isTouchDevice) {
      setActiveGate(gateId);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setActiveGate(null);
    }
  };

  const handleGateClick = (gateId) => {
    if (!isTouchDevice) return;

    setActiveGate((currentGate) =>
      currentGate === gateId ? null : gateId
    );
  };

  const handleGateKeyDown = (event, gateId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      setActiveGate((currentGate) =>
        currentGate === gateId ? null : gateId
      );
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3eee4] text-[#182018]">
      <section className="relative px-6 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(190,154,82,0.22),transparent_34%),linear-gradient(135deg,#f7f1e7_0%,#eef2ea_48%,#e7edf5_100%)]" />

        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#6f6759]">
            tihomira.info
          </p>

          <h1 className="font-serif text-5xl font-normal leading-none text-[#172018] sm:text-6xl lg:text-7xl">
            Dve kapije
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4f574d] sm:text-xl">
            Izaberi onu koja te vodi tamo gde ćeš naći ono što tražiš.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {gates.map((gate) => {
            const isActive = activeGate === gate.id;

            return (
              <article
                key={gate.id}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`Otvori kapiju ${gate.title}`}
                onMouseEnter={() => handleMouseEnter(gate.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleGateClick(gate.id)}
                onKeyDown={(event) => handleGateKeyDown(event, gate.id)}
                className={[
                  'group relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-2xl outline-none transition-all duration-500 ease-out sm:min-h-[620px]',
                  'focus-visible:ring-4 focus-visible:ring-[#c7a65d] focus-visible:ring-offset-4',
                  isActive ? '-translate-y-1' : '',
                ].join(' ')}
              >
                <img
                  src={gate.closedImage}
                  alt=""
                  className={[
                    'absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out',
                    isActive
                      ? 'scale-[1.02] opacity-0'
                      : 'scale-100 opacity-100 group-hover:scale-[1.02] group-hover:opacity-0',
                  ].join(' ')}
                />

                <img
                  src={gate.halfImage}
                  alt=""
                  className={[
                    'absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out',
                    isActive
                      ? 'scale-[1.04] opacity-0'
                      : 'scale-[1.02] opacity-0 group-hover:opacity-100',
                  ].join(' ')}
                />

                <img
                  src={gate.openImage}
                  alt=""
                  className={[
                    'absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out',
                    isActive
                      ? 'scale-[1.06] opacity-100'
                      : 'scale-[1.03] opacity-0 group-hover:scale-[1.06] group-hover:opacity-100',
                  ].join(' ')}
                />

                <div
                  className={[
                    'absolute inset-0 transition-opacity duration-500',
                    gate.theme === 'tiha'
                      ? 'bg-[linear-gradient(to_top,rgba(13,31,18,0.86),rgba(13,31,18,0.38),rgba(13,31,18,0.08))]'
                      : 'bg-[linear-gradient(to_top,rgba(5,18,42,0.88),rgba(5,18,42,0.42),rgba(5,18,42,0.1))]',
                  ].join(' ')}
                />

                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                  <h2 className="font-serif text-4xl font-normal leading-none drop-shadow-xl sm:text-5xl">
                    {gate.title}
                  </h2>

                  <div
                    className={[
                      'max-w-xl overflow-hidden transition-all duration-500 ease-out',
                      isActive
                        ? 'mt-5 max-h-72 translate-y-0 opacity-100'
                        : 'max-h-0 translate-y-4 opacity-0 group-hover:mt-5 group-hover:max-h-72 group-hover:translate-y-0 group-hover:opacity-100',
                    ].join(' ')}
                  >
                    <p className="text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg">
                      {gate.description}
                    </p>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setCurrentPage(gate.page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d6ad5b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#17130b] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#e4c274] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80"
                    >
                      Uđi
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}