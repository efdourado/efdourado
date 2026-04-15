"use client";

import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  const highlights = [
    "hero_highlight_1",
    "hero_highlight_2",
    "hero_highlight_3",
  ];

  return (
    <section
      className="
        relative flex flex-col justify-center px-3 sm:px-8 md:px-14 pt-32 pb-14 md:pt-40 md:pb-20
        max-[400px]:pt-24
        max-[400px]:pb-6
      "
    >
      <div className="mx-auto w-full max-w-screen-xl">
        <h1
          className="mb-6 max-w-4xl text-3xl font-light leading-tight text-text sm:text-4xl lg:text-5xl"
        >
          Eduardo Dourado
        </h1>

        <p
          className="mb-6 max-w-4xl text-xl font-light leading-tight text-text sm:text-2xl lg:text-3xl"
          suppressHydrationWarning
        >
          {t("hero_title")}
        </p>

        <p
          className="mb-10 max-w-3xl text-sm font-light text-text-secondary md:mb-14 md:text-base max-[400px]:mb-8 max-[400px]:text-xs"
          suppressHydrationWarning
        >
          {t("bio")}
        </p>

        <div
          className="flex flex-col items-start gap-6 md:flex-row md:items-center max-[400px]:gap-4"
        >
          <a
            href="#showcase"
            className="rounded-lg border border-secondary bg-secondary px-6 py-2 font-medium text-[#f5f5f5] text-sm transition-transform hover:scale-102
              max-[400px]:px-4 
              max-[400px]:py-1.5 
              max-[400px]:text-xs"
            suppressHydrationWarning
          >
            {t("view_work")}
          </a>

          <a
            href="#experience"
            className="rounded-lg flex flex-row items-center border border-primary pl-6 pr-3 py-2 font-medium text-text text-sm transition-transform hover:scale-102
              max-[400px]:pl-4 
              max-[400px]:pr-2 
              max-[400px]:py-1.5
              max-[400px]:text-xs"
            suppressHydrationWarning
          >
            {t("experience_nav")}
            <i
              className="far fa-circle-down text-primary text-xl ml-5
                max-[400px]:text-lg 
                max-[400px]:ml-3"
            ></i>
          </a>

          <div className="flex gap-5 max-[400px]:gap-3">
            <a
              href="https://github.com/efdourado"
              className="text-lg text-text-secondary transition-colors hover:text-text
                max-[400px]:text-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/efdourado"
              className="text-lg text-text-secondary transition-colors hover:text-text
                max-[400px]:text-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="mt-14 grid border-y border-black/10 text-sm text-text-secondary dark:border-white/10 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item}
              className={`py-4 font-light sm:px-5 ${
                index > 0 ? "sm:border-l sm:border-black/10 sm:dark:border-white/10" : ""
              }`}
            >
              <span suppressHydrationWarning>{t(item)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
); }
