"use client";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from 'react-i18next';
import { useHydration } from "@/hooks/useHydration";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const isMounted = useHydration();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };
  
  if (!isMounted) {
    return null;
  }

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100%-4rem)] max-w-7xl items-center justify-between gap-4 rounded-full bg-surface px-6 py-3 shadow-lg backdrop-blur-sm">
      <div className="flex-1">
        <div className="max-w-[22px] cursor-pointer text-2xl font-bold transition-transform hover:scale-105" id="scrollToTop">
          <span className="gradient-text">❍</span>
        </div>
      </div>

      <div className="hidden flex-2 items-center justify-center gap-6 whitespace-nowrap md:flex">
        <a href="#showcase" className="text-text-secondary transition-colors hover:text-text">{t('showcase')}</a>
        <a href="#about" className="text-text-secondary transition-colors hover:text-text">{t('about')}</a>
        <a href="#footer" className="text-text-secondary transition-colors hover:text-text">{t('send_message')}</a>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <button className="theme-toggle pr-4 text-lg text-text-secondary" onClick={toggleTheme}>
          <i className={theme === "dark" ? "fas fa-moon" : "fas fa-sun"}></i>
        </button>

        <button 
          className="flex cursor-pointer items-center gap-2 rounded-full border border-primary px-4 py-1 text-sm font-semibold text-primary transition-transform hover:scale-105"
          onClick={toggleLanguage}
        >
          <span className="language-text">{i18n.language.toUpperCase()}</span>
          <i className="fas fa-language"></i>
        </button>
      </div>
    </nav>
); }