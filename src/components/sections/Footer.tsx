"use client";
import { useTranslation } from "react-i18next";
import { useHydration } from "@/hooks/useHydration";

export function Footer() {
  const { t } = useTranslation();
  const isMounted = useHydration();

  if (!isMounted) {
    return null;
  }

  return (
    <footer id="footer" className="bg-surface px-8 py-14">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-6 text-[clamp(1.5rem,2vw,3rem)] font-bold leading-tight">
          <span>{t("thank_you")}</span>
        </h2>

        <p className="mb-12 max-w-lg text-lg text-text-secondary">
          {t("footer_subtitle")}
          
          <div className="text-sm mt-8">
            <a href="mailto:ed320819@gmail.com" className="flex items-center hover:text-black/0 dark:hover:text-white/70">
              <i className="far fa-envelope mr-2"></i>  
              ed320819@gmail.com
            </a>
          </div>
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-xs text-text-secondary border-t border-black/40 dark:border-white/10 pt-9">
          <p>
            &copy; 2025 Eduardo Dourado.{' '}
            <span>{t("rights_reserved")}</span>
          </p>

          <div className="flex items-center gap-4">
            <span>{t("color_palette")}</span>
            <div className="flex -space-x-1">
                <span className="h-3 w-3 rounded-full bg-[#6c63ff] ring-2 ring-background"></span>
                <span className="h-3 w-3 rounded-full bg-[#ff6584] ring-2 ring-background"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
); }