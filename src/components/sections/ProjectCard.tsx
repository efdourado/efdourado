"use client";

import React from "react";
import { useTranslation, Trans } from "react-i18next";
import Image from "next/image";

type ProjectCardProps = {
  liveUrl: string;
  imageUrl: string;
  techStack: string[];
  titleKey: string;
  descriptionKey: string;
  githubUrl: string;
};

export function ProjectCard({
  liveUrl,
  imageUrl,
  techStack,
  titleKey,
  descriptionKey,
  githubUrl,
}: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl bg-surface transition-shadow duration-300 hover:shadow-xl
        max-[400px]:rounded-xl
      "
    >
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        suppressHydrationWarning
        aria-label={t(titleKey)}
      ></a>

      <div className="transition-transform duration-300 group-hover:scale-[1.01]">
        <div className="relative h-64 max-[400px]:h-48">
          {imageUrl ? (
            <Image
              src={imageUrl}
              suppressHydrationWarning
              alt={t(titleKey)}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="h-full w-full bg-primary"></div>
          )}

          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/30 to-transparent p-6
            max-[400px]:p-4
          ">
            <div className="flex flex-wrap gap-2 max-[400px]:gap-1">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm
                    max-[400px]:px-2 max-[400px]:py-[2px] max-[400px]:text-[10px]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3
            className="mt-2 mb-5 text-xl font-semibold max-[400px]:text-lg max-[600px]:mb-4"
            suppressHydrationWarning
          >
            {t(titleKey)}
          </h3>

          <p
            className="text-sm text-text-secondary max-[400px]:text-xs"
            suppressHydrationWarning
          >
            <Trans i18nKey={descriptionKey} />
          </p>
        </div>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        suppressHydrationWarning
        title={t("case_study")}
        className="
          absolute top-4 right-4 z-20 text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:text-white
          max-[400px]:top-3 max-[400px]:right-3 max-[400px]:text-lg
        "
      >
        <i className="fab fa-github text-2xl max-[400px]:text-xl"></i>
      </a>
    </article>
); }