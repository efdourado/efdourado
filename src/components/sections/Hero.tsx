"use client";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-14 pt-32 pb-10 md:pt-40 lg:pt-60">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="mb-6 md:mb-8 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">
          <span
            className="gradient-text"
            suppressHydrationWarning
          >
            {t("hello")}
          </span>
          <br />
          
          <span suppressHydrationWarning>
            {t("im_eduardo")}
          </span>
        </h1>

        <p
          className="mb-10 md:mb-20 max-w-xl text-md md:text-lg text-text-secondary"
          suppressHydrationWarning
        >
          {t("bio")}
        </p>

        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <a
            href="#showcase"
            className="rounded-full bg-gradient-to-br from-primary to-secondary px-8 py-3 font-semibold text-white text-sm transition-transform hover:scale-105"
            suppressHydrationWarning
          >
            {t("showcase_title")}
          </a>
          <div className="flex gap-5">
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
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center text-text-secondary md:mt-auto">
        <span>Explore</span>
        <div className="mt-2 h-12 w-px bg-text-secondary"></div>
      </div>
    </section>
); }