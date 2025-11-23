"use client";

import { useTranslation } from "react-i18next";
import { useHydration } from "@/hooks/useHydration";
import { FadeIn } from "@/components/ui/FadeIn";

const trajectory = [ {
    role: "Lead AI Architect",
    project: "Ecossistema de Chatbots",
    desc: "Sistema de atendimento que reduziu em 60% a carga humana. NLP próprio.",
  },
  {
    role: "Mid-level Full-Stack Developer",
    project: "Plataforma SaaS Fintech",
    desc: "Sistema financeiro completo. Segurança de transações, microsserviços e dashboards (em tempo real).",
}, ];

const education = [
  "Computer Science Foundations",
  "Cloud & Infrastructure",
  "AI, ML & LLMs",
  "Full-Stack Engineering"
];

export function Details() {
  const { t } = useTranslation();
  const isMounted = useHydration();

  if (!isMounted) {
    return null;
  }

  return (
    <section id="about" className="py-24">

      <div className="px-6 md:px-14 py-20 border-b border-white/10">
        <div className="mx-auto w-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-bold mb-6">Impacto</h2>
              <p className="text-text-secondary text-md">Meus maiores desafios superados.</p>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-8">
            {trajectory.map((item, index) => (
              <FadeIn key={index}>
                <div className="rounded-xl bg-white/5 p-8 border border-white/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-secondary">{item.project}</h3>
                    <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full w-fit">{item.role}</span>
                  </div>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-14 pt-16 border-t border-black/10 dark:border-white/5">
        <div className="mx-auto w-full max-w-screen-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          <FadeIn>
            <h2 className="text-2xl font-bold">
              Estudos
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {education.map((item, index) => (
              <FadeIn key={index}>
                <div className="flex items-center gap-3 text-text"><span className="h-1.5 w-1.5 rounded-full bg-secondary"></span><span className="text-sm font-medium">{item}</span></div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

    </section>
); }