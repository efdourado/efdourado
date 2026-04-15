"use client";

import { useTranslation, Trans } from "react-i18next";
import Image from "next/image";

type ProjectCardProps = {
  liveUrl?: string;
  imageUrl?: string;
  techStack: string[];
  titleKey: string;
  descriptionKey: string;
  githubUrl?: string;
  statusKey?: string;
  featured?: boolean;
};

export function ProjectCard({
  liveUrl,
  imageUrl,
  techStack,
  titleKey,
  descriptionKey,
  githubUrl,
  statusKey,
  featured = false,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const hasLinks = Boolean(liveUrl || githubUrl);

  const media = (
    <div
      className={`relative min-h-[220px] overflow-hidden bg-black/5 dark:bg-white/5 ${
        featured ? "aspect-[16/10] lg:aspect-[21/8]" : "aspect-[16/10]"
      }`}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          suppressHydrationWarning
          alt={t(titleKey)}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-between bg-text p-6 text-background">
          <span className="w-fit rounded-md border border-background/20 px-3 py-1 text-xs text-background/70">
            {statusKey ? t(statusKey) : t("case_summary")}
          </span>

          <div>
            <p
              className="mb-4 text-3xl font-light leading-tight"
              suppressHydrationWarning
            >
              {t(titleKey)}
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-background/10 px-2 py-1 text-[10px] text-background/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {imageUrl ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
      ) : null}
    </div>
  );

  return (
    <article
      className={`group overflow-hidden rounded-lg border border-black/10 bg-surface shadow-sm shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.08] dark:border-white/10 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          suppressHydrationWarning
          aria-label={`${t("view_live")}: ${t(titleKey)}`}
          className="block"
        >
          {media}
        </a>
      ) : (
        media
      )}

      <div className="p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2 max-[400px]:gap-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-md border border-black/10 bg-black/5 px-3 py-1 text-xs text-text-secondary
                dark:border-white/10 dark:bg-white/5
                max-[400px]:px-2 max-[400px]:py-[2px] max-[400px]:text-[10px]
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <h3
          className="mb-4 text-2xl font-light max-[400px]:text-lg"
          suppressHydrationWarning
        >
          {t(titleKey)}
        </h3>

        <p
          className="text-sm leading-relaxed text-text-secondary max-[400px]:text-xs"
          suppressHydrationWarning
        >
          <Trans i18nKey={descriptionKey} />
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm max-[400px]:text-xs">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              suppressHydrationWarning
              className="inline-flex items-center gap-2 rounded-md bg-text px-4 py-2 font-medium text-background transition-transform hover:scale-102"
            >
              {t("view_live")}
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
          ) : null}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              suppressHydrationWarning
              title={t("case_study")}
              className="inline-flex items-center gap-2 rounded-md border border-black/10 px-4 py-2 font-medium text-text transition-colors hover:border-primary hover:text-primary dark:border-white/10"
            >
              <i className="fab fa-github"></i>
              {t("view_code")}
            </a>
          ) : null}

          {!hasLinks ? (
            <span
              className="inline-flex items-center rounded-md border border-black/10 px-4 py-2 font-medium text-text-secondary dark:border-white/10"
              suppressHydrationWarning
            >
              {statusKey ? t(statusKey) : t("case_summary")}
            </span>
          ) : null}
        </div>
      </div>
    </article>
); }
