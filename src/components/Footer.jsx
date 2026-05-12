import { Link } from 'react-router-dom';

export default function Footer({ t, language }) {
  return (
    <footer className="mt-20 border-t border-yellow-700/10 bg-[#090e18] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-lg text-yellow-400">
          {t.footer.brand}
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          Prostor za iskustveno istraživanje unutrašnjeg života.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-500">
          Master psihologije sa 15+ godina iskustva u grupnom radu,
          psihodrami i međunarodnim facilitacijskim okruženjima.
        </p>

        <div className="mx-auto mt8 max-w-xl">
          <Link
            to={`/${language}/zoom-maestra`}
            className="group inline-block transition-colors"
          >
            <span className="block font-serif text-lg text-yellow-400 group-hover:text-yellow-300">
              Zoom Maestra
            </span>

            <span className="mt-2 block text-xs leading-relaxed text-slate-500 group-hover:text-slate-300">
              Support for online group spaces and facilitators.
            </span>
          </Link>
        </div>

        <p className="mt8 text-xs text-slate-600">
          © {new Date().getFullYear()} Tihomira Stanojević. All rights reserved.
        </p>
      </div>
    </footer>
  );
}