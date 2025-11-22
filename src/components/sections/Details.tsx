"use client";
import { useTranslation } from "react-i18next";
import { useHydration } from "@/hooks/useHydration";
import { FadeIn } from "@/components/ui/FadeIn";

export function Details() {
  const { t } = useTranslation();
  const isMounted = useHydration();
  const skills = ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6"];

  if (!isMounted) {
    return null;
  }

  return (
    <section id="about" className="px-8 py-24">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <FadeIn>
          <h2 className="mb-6 text-4xl font-bold">{t("details_title")}</h2>
        </FadeIn>
        <FadeIn>
          <p className="text-text-secondary">{t("details_subtitle")}</p>
        </FadeIn>
      </div>
      <FadeIn>
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
          {skills.map((skillKey) => (
            <span
              key={skillKey}
              className="rounded-full bg-surface px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
            >
              {t(skillKey)}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
); }