"use client";

import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";

const coreTech = [
  { name: "Python", icon: "fab fa-python" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "TypeScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "PostgreSQL", icon: "fas fa-database" },
  { name: "AWS", icon: "fab fa-aws" },
  { name: "TensorFlow", icon: "fas fa-brain" },
];

const allTechRow1 = [
  "Django", "FastAPI", "Express", "NestJS", "Prisma", "TypeORM", "MongoDB", "Redis", "GraphQL", "REST API", "gRPC"
];
const allTechRow2 = [
  "Tailwind CSS", "Framer Motion", "Radix UI", "Zustand", "Redux", "Figma", "Storybook", "Jest", "Cypress", "CI/CD"
];
const allTechRow3 = [
  "Scikit-Learn", "Pandas", "NumPy", "OpenAI API", "LangChain", "Hugging Face", "Git", "Linux", "Nginx", "Vercel"
];

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

  return (
    <section
      id="showcase"
      className="px-3 sm:px-8 md:px-14 pt-20 pb-6"
    >
      <div className="mx-auto mb-12 max-w-screen-2xl sm:mb-16">
        <h2
          className="mb-4 text-2xl sm:text-3xl font-bold"
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

      <div className="mx-auto grid max-w-screen-2xl gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.titleKey} {...project} />
        ))}
      </div>

      {/* Core Tech */}
      <div className="px-3 md:px-14 py-16 sm:py-20 border-b border-white/5">
        <div className="mx-auto w-full max-w-screen-2xl text-center">
          <FadeIn>
            <h2
              className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold"
              suppressHydrationWarning
            >
              {t("core_tech")}
            </h2>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
            {coreTech.map((tech, index) => (
              <FadeIn key={index}>
                <div className="group flex flex-col items-center gap-3 p-2 sm:p-3 rounded-full transition-transform hover:scale-102 cursor-default">
                  <div
                    className="
                      h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20
                      rounded-full bg-surface flex items-center justify-center
                      text-xl sm:text-2xl md:text-3xl text-text
                      group-hover:bg-text group-hover:text-primary
                      transition-colors duration-300 shadow-lg border border-white/5 cursor-crosshair
                    "
                  >
                    <i className={tech.icon}></i>
                  </div>

                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-text-secondary group-hover:text-text transition-colors">
                    {tech.name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20 bg-gray-200 dark:bg-black/20 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-10 sm:w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-10 sm:w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10"></div>

        <div className="mx-auto w-full max-w-screen-2xl mb-10 sm:mb-16">
          <FadeIn>
            <h2
              className="text-xl sm:text-2xl font-bold text-text-secondary border-l-4 border-secondary pl-3 sm:pl-4"
              suppressHydrationWarning
            >
              {t("complete_toolkit")}
            </h2>
          </FadeIn>
        </div>

        <div className="flex mb-4 sm:mb-5 mask-linear-gradient">
          <div className="flex flex-nowrap gap-2 sm:gap-4 animate-marquee whitespace-nowrap [animation-play-state:paused] hover:[animation-play-state:running]">
            {[...allTechRow1, ...allTechRow1, ...allTechRow1].map((tech, i) => (
              <span
                key={i}
                className="
                  px-3 py-1.5 sm:px-6 sm:py-2 rounded-full
                  bg-black/5 dark:bg-white/5 border
                  dark:border-white/10 border-black/10
                  text-text-secondary text-xs sm:text-sm
                  hover:text-primary hover:bg-white hover:bg-tertiary hover:dark:bg-text
                  hover:border-tertiary transition-colors duration-300 cursor-crosshair
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex mb-4 sm:mb-5 mask-linear-gradient">
          <div
            className="flex flex-nowrap gap-2 sm:gap-4 animate-marquee whitespace-nowrap [animation-play-state:paused] hover:[animation-play-state:running]"
            style={{ animationDirection: "reverse", animationDuration: "50s" }}
          >
            {[...allTechRow2, ...allTechRow2, ...allTechRow2].map((tech, i) => (
              <span
                key={i}
                className="
                  px-3 py-1.5 sm:px-6 sm:py-2 rounded-full
                  bg-black/5 dark:bg-white/5
                  hover:bg-secondary hover:dark:bg-secondary
                  border dark:border-white/10 border-black/10
                  text-text-secondary text-xs sm:text-sm
                  hover:text-white hover:border-secondary
                  transition-colors duration-300 cursor-crosshair
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex mask-linear-gradient">
          <div
            className="flex flex-nowrap gap-2 sm:gap-4 animate-marquee whitespace-nowrap [animation-play-state:paused] hover:[animation-play-state:running]"
            style={{ animationDuration: "30s" }}
          >
            {[...allTechRow3, ...allTechRow3, ...allTechRow3].map((tech, i) => (
              <span
                key={i}
                className="
                  px-3 py-1.5 sm:px-6 sm:py-2 rounded-full
                  bg-black/5 dark:bg-white/5 border
                  dark:border-white/10 border-black/10
                  text-text-secondary text-xs sm:text-sm
                  hover:text-primary hover:bg-white hover:bg-tertiary hover:dark:bg-text
                  hover:border-tertiary transition-colors duration-300 cursor-crosshair
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
); }