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
    liveUrl: "https://fs-cairo.vercel.app",
    imageUrl: "",
    techStack: ["Prisma", "Next.js", "Tailwind CSS"],
    titleKey: "project2_title",
    descriptionKey: "project2_description",
    githubUrl: "https://github.com/efdourado/fs-cairo",
  },
  {
    liveUrl: "https://fs-oslo.vercel.app",
    imageUrl: "/fs-oslo.png",
    techStack: ["TypeScript", "Supabase", "Next.js"],
    titleKey: "project3_title",
    descriptionKey: "project3_description",
    githubUrl: "https://github.com/efdourado/fs-oslo",
}, ];

export function Showcase() {
  const { t } = useTranslation();
  const isMounted = useHydration();

  if (!isMounted) {
    return null;
  }

  return (
    <section id="showcase" className="px-8 pt-24 pb-6">
      <div className="mx-auto mb-16 max-w-screen-2xl">
        <h2 className="mb-6 text-2xl font-bold">{t("showcase_title")}</h2>
        <p className="text-text-secondary">{t("showcase_subtitle")}</p>
      </div>

      <div className="mx-auto grid max-w-screen-2xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.titleKey} {...project} />
        ))}
      </div>
    </section>
); }