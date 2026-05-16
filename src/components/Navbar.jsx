import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({
  language,
  t,
  navItems,
  menuOpen,
  setMenuOpen,
  changeLanguage,
  isActive,
}) {
  const handleNavClick = (path) => {
    setMenuOpen(false);

    // Ako link ima hash, npr. /zoom-maestra#contact-zoom,
    // ne vraćamo stranicu na vrh.
    if (path.includes('#')) {
      return;
    }

    window.scrollTo(0, 0);
  };

  const isItemActive = (path) => {
    const cleanPath = path.split('#')[0];
    return isActive(cleanPath);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-yellow-700/10 bg-[#0b1220]/70 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to={`/${language}`}
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-3 text-xl font-serif text-white transition-colors hover:text-yellow-400"
        >
          <img
            src="/favicon.png"
            alt="Tihomira symbol"
            className="h-7 w-7 object-contain"
          />
          <span>Tihomira</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, path]) => (
            <Link
              key={path || 'home'}
              to={`/${language}${path}`}
              onClick={() => handleNavClick(path)}
              className={`text-sm transition-all ${
                isItemActive(path)
                  ? 'font-medium text-yellow-400'
                  : 'border-b border-transparent text-slate-300 hover:border-yellow-400 hover:text-yellow-400'
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
              key={path || 'mobile-home'}
              to={`/${language}${path}`}
              onClick={() => handleNavClick(path)}
              className={`block w-full text-left text-sm transition-all ${
                isItemActive(path)
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
  );
}