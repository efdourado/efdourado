"use client";

import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="
        bg-surface px-3 sm:px-8 md:px-14 py-12 sm:py-14 mt-16
        max-[400px]:pt-8
        max-[400px]:pb-6
      "
    >
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid gap-3 justify-center md:flex md:justify-between items-center my-3 sm:my-6">
          <h2 className="text-2xl sm:text-3xl font-light leading-tight">
            <span suppressHydrationWarning>{t("thank_you")}</span>
          </h2>

          <div>
            <div className="flex justify-center gap-4 sm:gap-5">
              <a
                href="https://instagram.com/efdourado"
                className="text-sm sm:text-lg text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/efdourado"
                className="text-sm sm:text-lg text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/efdourado"
                className="text-sm sm:text-lg text-text-secondary transition-colors hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="mailto:ed320819@gmail.com"
                className="text-sm sm:text-lg text-text-secondary transition-colors hover:text-text pl-4 sm:pl-5 border-l border-black/10 dark:border-white/10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              > 
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-0 md:flex-row justify-between items-center text-[10px] text-text-secondary border-t border-black/10 dark:border-white/10 pt-6">

          <p className="text-center md:text-left leading-relaxed">
            &copy; 2026 Eduardo Dourado.{" "}
            <span suppressHydrationWarning>{t("rights_reserved")}</span>
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[10px]" suppressHydrationWarning>
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
