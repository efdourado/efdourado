"use client";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";
import { useHydration } from "@/hooks/useHydration";
import React from "react";

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
  const isMounted = useHydration();

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-surface transition-shadow duration-300 hover:shadow-xl">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={isMounted ? t(titleKey) : titleKey}
      ></a>

      <div className="transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="relative h-64">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={isMounted ? t(titleKey) : titleKey}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary to-secondary"></div>
          )}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-3 text-xl font-semibold">
            {isMounted ? t(titleKey) : titleKey.replace("_title", "")}
          </h3>
          {isMounted && (
            <p className="text-sm text-text-secondary">
              <Trans
                i18nKey={descriptionKey}
                components={{ 1: <strong />, 3: <strong />, 5: <strong />, 7: <strong /> }}
              />
            </p>
          )}
        </div>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={isMounted ? t("case_study") : "View on GitHub"}
        className="absolute top-4 right-4 z-20 text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:text-white"
      >
        <i className="fab fa-github text-2xl"></i>
      </a>
    </article>
); }