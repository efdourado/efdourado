"use client";

import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="
        relative flex flex-col justify-center px-3 sm:px-8 md:px-14 pt-32 pb-10 md:pt-40
        max-[400px]:pt-24
        max-[400px]:pb-6
      "
    >
      <div className="mx-auto w-full max-w-screen-2xl">
        <h1
          className="mb-6 md:mb-8 font-bold leading-tight text-[clamp(1.7rem,6vw,3rem)]
            max-[400px]:mb-4"
        >
          <span className="gradient-text" suppressHydrationWarning>
            {t("hello")}
          </span>
          <br />
          <span suppressHydrationWarning>{t("im_eduardo")}</span>
        </h1>

        <p
          className="mb-10 md:mb-20 max-w-xl text-md md:text-lg text-text-secondary
            max-[400px]:text-sm 
            max-[400px]:mb-8"
          suppressHydrationWarning
        >
          {t("bio")}
        </p>

        <div
          className="flex flex-col items-start gap-6 md:flex-row md:items-center
            max-[400px]:gap-4"
        >
          <a
            href="#showcase"
            className="rounded-full border-2 border-secondary bg-secondary px-6 py-3 font-semibold text-[#f5f5f5] text-sm transition-transform hover:scale-102
              max-[400px]:px-4 
              max-[400px]:py-1.5 
              max-[400px]:text-xs"
            suppressHydrationWarning
          >
            {t("services")}
          </a>

          <a
            href="#about"
            className="rounded-full flex flex-row items-center border-2 border-primary pl-6 pr-3 py-3 font-semibold text-text text-sm transition-transform hover:scale-102
              max-[400px]:pl-4 
              max-[400px]:pr-2 
              max-[400px]:py-1.5
              max-[400px]:text-xs"
            suppressHydrationWarning
          >
            {t("about")}
            <i
              className="far fa-circle-down text-primary text-xl ml-5
                max-[400px]:text-lg 
                max-[400px]:ml-3"
            ></i>
          </a>

          <div className="flex gap-5 max-[400px]:gap-3">
            <a
              href="https://github.com/efdourado"
              className="text-xl text-text-secondary transition-colors hover:text-text
                max-[400px]:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/efdourado"
              className="text-xl text-text-secondary transition-colors hover:text-text
                max-[400px]:text-lg"
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