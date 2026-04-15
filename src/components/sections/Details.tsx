"use client";

import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/ui/FadeIn";

const experience = [
  {
    role: "experience1_role",
    organization: "experience1_organization",
    period: "experience1_period",
    bullets: [
      "experience1_bullet1",
      "experience1_bullet2",
      "experience1_bullet3",
      "experience1_bullet4",
      "experience1_bullet5",
      "experience1_bullet6",
    ],
  },
  {
    role: "experience2_role",
    organization: "experience2_organization",
    period: "experience2_period",
    bullets: [
      "experience2_bullet1",
      "experience2_bullet2",
      "experience2_bullet3",
      "experience2_bullet4",
    ],
  },
];

export function Details() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24">

      <div className="px-3 sm:px-8 md:px-14 py-20 border-y border-black/10 dark:border-white/10">
        <div className="mx-auto w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <FadeIn>
            <div>
              <h2
                className="text-3xl font-light mb-6"
                suppressHydrationWarning
              >
                {t("experience_title")}
              </h2>
              <p
                className="text-text-secondary text-sm md:text-base font-light"
                suppressHydrationWarning
              >
                {t("experience_subtitle")}
              </p>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-8">
            {experience.map((item, index) => (
              <FadeIn key={index}>
                <div className="rounded-lg bg-surface p-6 border border-black/10 dark:border-white/10 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-5 gap-3">
                    <div>
                      <h3
                        className="text-xl font-light text-secondary"
                        suppressHydrationWarning
                      >
                        {t(item.organization)}
                      </h3>
                      <p
                        className="mt-1 text-sm text-text"
                        suppressHydrationWarning
                      >
                        {t(item.role)}
                      </p>
                    </div>
                    <span
                      className="text-xs font-light bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md w-fit"
                      suppressHydrationWarning
                    >
                      {t(item.period)}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"></span>
                        <span suppressHydrationWarning>{t(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
); }
