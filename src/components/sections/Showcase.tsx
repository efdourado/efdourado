"use client";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";
import { useHydration } from "@/hooks/useHydration";

const projects = [
  {
    liveUrl: "https://fs-memphis.onrender.com",
    imageUrl: "/fs-memphis.png",
    techStack: ["Node.js", "MongoDB", "React", "Vite"],
    titleKey: "project1_title",
    descriptionKey: "project1_description",
    githubUrl: "https://github.com/efdourado/fs-memphis",
  },
  {
    liveUrl: "http://fs-cairo.vercel.app",
    imageUrl: "",
    techStack: ["Prisma", "Tailwind CSS", "Next.js"],
    titleKey: "project2_title",
    descriptionKey: "project2_description",
    githubUrl: "https://github.com/efdourado/fs-cairo",
  },
];

export function Showcase() {
  const { t } = useTranslation();
  const isMounted = useHydration();

  if (!isMounted) {
    return null;
  }

  return (
    <section id="showcase" className="px-8 py-24">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <h2 className="mb-4 text-4xl font-bold">{t("showcase_title")}</h2>
        <p className="text-text-secondary">{t("showcase_subtitle")}</p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.titleKey} {...project} />
        ))}
      </div>
    </section>
); }