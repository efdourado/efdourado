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
    <footer id="footer" className="bg-surface px-8 py-14 mt-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">

          {/* Col.1 */}
          <div className="">
            <h2 className="mb-8 pr-10 text-[clamp(1.5rem,2vw,3rem)] font-bold leading-tight">
              <span>{t("thank_you")}</span>
            </h2>

            <div className="mb-12 max-w-lg text-md text-text-secondary">
              {t("footer_subtitle")}
              
              <div className="text-sm mt-8">
                <a href="mailto:ed320819@gmail.com" className="flex items-center hover:text-black/70 dark:hover:text-white/70">
                  <i className="far fa-envelope mr-2"></i>  
                  ed320819@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col.2 */}
          <div className="my-4">
            <h2 className="text-lg font-bold leading-tight mb-9">
              Social
            </h2>

            <div className="flex gap-5">
              <a
                href="https://instagram.com/efdourado"
                className="text-xl text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/efdourado"
                className="text-xl text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/efdourado"
                className="text-xl text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://wa.me/5561999653131"
                className="text-xl text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row justify-between items-center mt-16 text-xs text-text-secondary border-t border-black/40 dark:border-white/10 pt-9">
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