export default function Footer({ t }) {
  return (
    <footer className="mt-20 border-t border-yellow-700/10 bg-[#090e18] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center text-sm sm:px-6 lg:px-8">
        <p className="mb-6">
          <span className="font-serif text-yellow-400">{t.footer.brand}</span> — {t.footer.desc}
        </p>
        <p className="mb-6 text-slate-500">© {new Date().getFullYear()} Tihomira Stanojević. All rights reserved.</p>
        <p className="text-xs text-slate-600">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}