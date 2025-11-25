"use client";

import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="
        bg-surface px-14 py-12 sm:py-14 mt-16
        max-[400px]:px-7
        max-[400px]:pt-24 
        max-[400px]:pb-6
      "
    >
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-10">
          <div>
            <h2 className="mb-6 sm:mb-8 pr-4 sm:pr-10 text-[clamp(1.25rem,3vw,3rem)] font-bold leading-tight">
              <span suppressHydrationWarning>{t("thank_you")}</span>
            </h2>

            <div
              className="mb-10 sm:mb-12 max-w-lg text-sm sm:text-md text-text-secondary leading-relaxed"
              suppressHydrationWarning
            >
              {t("footer_subtitle")}

              <div className="text-sm mt-6 sm:mt-8">
                <a
                  href="mailto:ed320819@gmail.com"
                  className="flex items-center hover:text-black/70 dark:hover:text-white/70"
                >
                  <i className="far fa-envelope mr-2"></i>
                  ed320819@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="my-2 sm:my-4">
            <h2 className="text-base sm:text-lg font-bold leading-tight mb-6 sm:mb-9">
              Social
            </h2>

            <div className="flex gap-4 sm:gap-5">
              <a
                href="https://instagram.com/efdourado"
                className="text-lg sm:text-xl text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://github.com/efdourado"
                className="text-lg sm:text-xl text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/in/efdourado"
                className="text-lg sm:text-xl text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://wa.me/5561999653131"
                className="text-lg sm:text-xl text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-5 md:flex-row justify-between items-center mt-14 sm:mt-16 text-[10px] sm:text-xs text-text-secondary border-t border-black/40 dark:border-white/10 pt-8">

          <p className="text-center md:text-left leading-relaxed">
            &copy; 2025 Eduardo Dourado.{" "}
            <span suppressHydrationWarning>{t("rights_reserved")}</span>
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[10px] sm:text-xs" suppressHydrationWarning>
              {t("color_palette")}
            </span>

            <div className="flex -space-x-1">
              <span className="h-3 w-3 rounded-full bg-tertiary ring-2 ring-background"></span>
              <span className="h-3 w-3 rounded-full bg-secondary ring-2 ring-background"></span>
              <span className="h-3 w-3 rounded-full bg-primary ring-2 ring-background"></span>
            </div>
          </div>
        </div>

      </div>
    </footer>
); }