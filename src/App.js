import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { Mail } from "lucide-react";
import translations from "./translations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import EventsPage from "./pages/EventsPage";
import ZoomMaestraPage from "./pages/ZoomMaestraPage";
import ContactPage from "./pages/ContactPage";
import SilencePracticePage from "./pages/SilencePracticePage";
import TihaPsihaPage from './pages/TihaPsihaPage';

function getLangFromPath(pathname) {
  if (pathname.startsWith("/sr")) return "sr";
  return "en";
}

function usePageTitle() {
  const location = useLocation();
  useEffect(() => {
    const titles = {
      "/en": "Tihomira | Home",
      "/sr": "Tihomira | Početak",
      "/en/tiha-psiha": "Tiha Psiha | Tihomira",
      "/sr/tiha-psiha": "Tiha Psiha | Tihomira",
      "/en/about": "Tihomira | About",
      "/sr/about": "Tihomira | O meni",
      "/en/work": "Tihomira | Work With Me",
      "/sr/work": "Tihomira | Rad sa mnom",
      //"/en/events": "Tihomira | Events",
      //"/sr/events": "Tihomira | Događaji",
      "/en/zoom-maestra": "Zoom Maestra | Technical Support for Online Facilitators",
      "/sr/zoom-maestra": "Zoom Maestra | Podrška za online facilitatore",
      "/en/contact": "Tihomira | Contact",
      "/sr/contact": "Tihomira | Kontakt"
    };
    document.title = titles[location.pathname] || "Tihomira";
  }, [location.pathname]);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const language = getLangFromPath(location.pathname);
  const t = translations[language];
  usePageTitle();

  const usesPortalNav =
  location.pathname === "/en" ||
  location.pathname === "/sr" ||
  location.pathname === "/en/zoom-maestra" ||
  location.pathname === "/sr/zoom-maestra";

  const navItems = usesPortalNav
  ? [
      ["Tiha Psiha", "/tiha-psiha"],
      ["Zoom Maestra", "/zoom-maestra"],
      [t.nav.contact, "/contact"],
    ]
  : [
      [t.nav.home, ""],
      [t.nav.about, "/about"],
      [t.nav.work, "/work"],
      [t.nav.events, "/events"],
      [t.nav.contact, "/contact"],
    ];

    const changeLanguage = (lang) => {
    const pathWithoutLang = location.pathname.replace(/^\/(en|sr)/, "");
    navigate(`/${lang}${pathWithoutLang || ""}`);
    setMenuOpen(false);
  };

  const isActive = (path) => {
    const fullPath = `/${language}${path}`;
    return location.pathname === fullPath;
  };

  const goToPage = (path) => {
    navigate(`/${language}${path}`);
  };

  const isContactPage = location.pathname.includes('/contact');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#111827] to-[#0a0f1a] text-slate-100">
      <Navbar
        language={language}
        t={t}
        navItems={navItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        changeLanguage={changeLanguage}
        isActive={isActive}
      />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/en" element={<HomePage setCurrentPage={goToPage} t={translations.en} />} />
          <Route path="/sr" element={<HomePage setCurrentPage={goToPage} t={translations.sr} />} />
          <Route path="/en/tiha-psiha" element={<TihaPsihaPage setCurrentPage={goToPage} t={translations.en} />} />
          <Route path="/sr/tiha-psiha" element={<TihaPsihaPage setCurrentPage={goToPage} t={translations.sr} />} />
          <Route path="/en/about" element={<AboutPage setCurrentPage={goToPage} t={translations.en} />} />
          <Route path="/sr/about" element={<AboutPage setCurrentPage={goToPage} t={translations.sr} />} />
          <Route path="/en/work" element={<WorkPage setCurrentPage={goToPage} t={translations.en} />} />
          <Route path="/sr/work" element={<WorkPage setCurrentPage={goToPage} t={translations.sr} />} />
          <Route path="/en/events" element={<EventsPage setCurrentPage={goToPage} t={translations.en} />} />
          <Route path="/sr/events" element={<EventsPage setCurrentPage={goToPage} t={translations.sr} />} />
          <Route path="/en/zoom-maestra" element={<ZoomMaestraPage setCurrentPage={goToPage} t={translations.en} />} />
          <Route path="/sr/zoom-maestra" element={<ZoomMaestraPage setCurrentPage={goToPage} t={translations.sr} />} />
          <Route path="/en/contact" element={<ContactPage t={translations.en} language="en" />} />
          <Route path="/sr/contact" element={<ContactPage t={translations.sr} language="sr" />} />
          <Route path="/en/silence-practice" element={<SilencePracticePage />} />
          <Route path="/sr/praksa-tisine" element={<SilencePracticePage />} />  
        </Routes>
      </main>
      <Footer t={t} language={language} />

      {!isContactPage && (
        <button
          onClick={() => goToPage('/contact')}
          className="group fixed bottom-8 right-8 z-50 flex items-center gap-2 overflow-hidden rounded-full bg-yellow-500 px-4 py-4 font-medium text-slate-950 shadow-lg transition-all duration-300 hover:px-6 hover:shadow-yellow-500/20"
        >
          <Mail size={20} className="shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-xs">
            {language === 'sr' ? 'Javi se' : 'Get in touch'}
          </span>
        </button>
      )}
    </div>
  );
}
