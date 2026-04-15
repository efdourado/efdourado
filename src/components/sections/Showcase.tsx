"use client";

import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    imageUrl: "",
    techStack: ["FastAPI", "LangChain", "Pinecone", "SvelteKit"],
    titleKey: "project0_title",
    descriptionKey: "project0_description",
    statusKey: "case_summary",
    featured: true,
  },
  {
    liveUrl: "https://fs-memphis.onrender.com",
    imageUrl: "/fs-memphis.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    titleKey: "project1_title",
    descriptionKey: "project1_description",
    githubUrl: "https://github.com/efdourado/fs-memphis",
  },
  {
    liveUrl: "https://fs-cairo.vercel.app",
    imageUrl: "/fs-cairo.png",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    titleKey: "project2_title",
    descriptionKey: "project2_description",
    githubUrl: "https://github.com/efdourado/fs-cairo",
  },
];

export function Showcase() {
  const { t } = useTranslation();

  return (
    <section
      id="showcase"
      className="px-3 pt-20 sm:px-8 sm:pt-24 md:px-14"
    >
      <div className="mx-auto mb-12 max-w-screen-xl sm:mb-16">
        <h2
          className="mb-4 text-2xl sm:text-3xl font-light"
          suppressHydrationWarning
        >
          {t("showcase_title")}
        </h2>

        <p
          className="text-text-secondary text-sm sm:text-base"
          suppressHydrationWarning
        >
          {t("showcase_subtitle")}
        </p>
      </div>

      <div className="mx-auto grid max-w-screen-xl gap-6 sm:gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.titleKey} {...project} />
        ))}
      </div>
    </section>
); }
