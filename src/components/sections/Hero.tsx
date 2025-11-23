"use client";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex flex-col justify-center px-14 pt-32 pb-10 md:pt-40">
      <div className="mx-auto w-full max-w-screen-2xl">
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

        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <a
            href="#showcase"
            className="rounded-full border-2 border-secondary bg-secondary px-8 py-2 font-semibold text-[#f5f5f5] text-sm transition-transform hover:scale-102"
            suppressHydrationWarning
          >
            {t("showcase_title")}
          </a>
          <a
            href="#about"
            className="rounded-full border-2 border-primary px-8 py-2 font-semibold text-text text-sm transition-transform hover:scale-102"
            suppressHydrationWarning
          >
            {t("details_title")}
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


    </section>
); }