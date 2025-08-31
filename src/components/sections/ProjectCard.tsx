"use client";

import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";

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
    <article className="overflow-hidden rounded-2xl bg-surface transition-transform duration-300 hover:scale-[1.02]">
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative h-64">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${t(titleKey)} project screenshot`}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary to-secondary"></div>
          )}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent p-6">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-3 text-xl font-semibold">{t(titleKey)}</h3>
          <p className="mb-6 text-sm text-text-secondary">
            <Trans
              i18nKey={descriptionKey}
              components={{
                1: <strong />,
                3: <strong />,
                5: <strong />,
                7: <strong />,
              }}
            />
          </p>
          <span className="project-link font-semibold text-primary">
            {t("case_study")}
          </span>
        </div>
      </a>
    </article>
); }