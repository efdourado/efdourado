"use client";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from 'react-i18next';
import { useHydration } from "@/hooks/useHydration";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const isMounted = useHydration();
  const scrollDirection = useScrollDirection();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  }); };

  return (
    <nav 
      className={`
        fixed top-8 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100%-4rem)] max-w-7xl items-center justify-between gap-4 
        rounded-full bg-surface px-6 py-3 shadow-lg backdrop-blur-sm
        transition-transform duration-300
        ${scrollDirection === 'down' ? '-translate-y-[200%]' : 'translate-y-0'}
      `}
    >
      <div className="flex-1">
        <div className="max-w-[22px] cursor-pointer text-2xl font-bold transition-transform hover:scale-105" id="scrollToTop" onClick={scrollToTop}>
          <span className="gradient-text">❍</span>
        </div>
      </div>

      <div className="flex flex-2 items-center justify-start text-sm gap-1 mr-3 overflow-x-auto whitespace-nowrap no-scrollbar md:justify-end md:gap-6 lg:gap-8">
        <a href="#showcase" className="text-text-secondary transition-colors hover:text-black/70 dark:hover:text-white/70">
          {isMounted ? t('showcase') : 'Showcase'}
        </a>
        <a href="#about" className="text-text-secondary transition-colors hover:text-black/70 dark:hover:text-white/70">
          {isMounted ? t('about') : 'About me'}
        </a>
        <a href="#footer" className="text-text-secondary transition-colors hover:text-black/70 dark:hover:text-white/70">
          {isMounted ? t('send_message') : 'Get in touch'}
        </a>
      </div>

      <div className="flex items-center justify-end gap-2 pl-6 border-l border-black/40 dark:border-white/10">
        <button className="theme-toggle pr-4 text-sm text-text-secondary" onClick={toggleTheme}>
          {isMounted ? (
            <i className={theme === "dark" ? "fas fa-moon" : "fas fa-sun"}></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>

        <button 
          className="flex cursor-pointer items-center gap-2 rounded-full border border-primary px-4 py-1 text-xs font-semibold text-primary transition-transform hover:scale-105"
          onClick={toggleLanguage}
        >
          {isMounted ? (
            <>
              <span className="language-text">{i18n.language.toUpperCase()}</span>
              <i className="fas fa-language"></i>
            </>
          ) : (
            <>
              <span className="language-text">EN</span>
              <i className="fas fa-language"></i>
            </>
          )}
        </button>
      </div>
    </nav>
); }