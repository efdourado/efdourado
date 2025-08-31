"use client";
import { useTranslation } from "react-i18next";
import { useHydration } from "@/hooks/useHydration";
import "../../i18n";

export function Hero() {
  const { t } = useTranslation();
  const isMounted = useHydration();

  return (
    <section className="relative flex min-h-screen items-center px-8 pt-32 pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="mb-8 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">
          <span className="gradient-text">{isMounted ? t("hello") : "Hello,"}</span>
          <br />
          <span>{isMounted ? t("im_eduardo") : "I'm Eduardo Dourado;"}</span>
        </h1>
        <p className="mb-12 max-w-xl text-lg text-text-secondary">
          {isMounted ? t("bio") : "a student really interested in AI and full-stack development. I focus on efficiency and seek a positive environment for everyone!"}
        </p>

        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <a
            href="#showcase"
            className="rounded-full bg-gradient-to-br from-primary to-secondary px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
          >
            {isMounted ? t("showcase_title") : "Selected Projects"}
          </a>
          <div className="flex gap-4">
            <a
              href="https://github.com/efdourado"
              className="text-xl text-text-secondary transition-colors hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://instagram.com/efdourado"
              className="text-xl text-text-secondary transition-colors hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center text-text-secondary">
        <span>Explore</span>
        <div className="mt-2 h-12 w-px bg-text-secondary"></div>
      </div>
    </section>
); }