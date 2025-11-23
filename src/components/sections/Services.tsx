"use client";

import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/ui/FadeIn";

const services = [ {
    icon: "fa-align-left",
    title: "full_stack_development",
    desc: "full_stack_development_desc",
  },
  {
    icon: "fa-cloud",
    title: "scalable_architecture",
    desc: "scalable_architecture_desc",
  },
  {
  icon: "fa-brain",
    title: "ai_engineering",
    desc: "ai_engineering_desc",
  },
  {
    icon: "fa-code-commit",
    title: "ux_engineering",
    desc: "ux_engineering_desc",
}, ];

const philosophy = [ {
    title: "vision_360",
    desc: "vision_360_desc",
  },
  {
    title: "ux",
    desc: "ux_desc",
}, ];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-primary text-[#f5f5f5] overflow-hidden">
      <div className="px-6 md:px-14 py-16 border-b border-white/10">
        <div className="mx-auto w-full max-w-screen-2xl">
          <FadeIn>
            <h2
              className="mb-12 text-3xl font-bold leading-tight"
              suppressHydrationWarning
            >
              {t("services")}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <FadeIn key={index}>
                <div className="group h-full rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <h3
                    className="mb-4 text-xl font-bold"
                    suppressHydrationWarning
                  >
                    {t(item.title)}
                  </h3>

                  <p
                    className="text-white/70 text-sm"
                    suppressHydrationWarning
                  >
                    {t(item.desc)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-14 py-20 border-b border-white/10 bg-black/10">
        <div className="mx-auto w-full max-w-screen-2xl">
          <FadeIn>
            <h2
              className="mb-12 text-3xl text-[#f5f5f5] font-bold text-right"
              suppressHydrationWarning
            >
              {t("philosophy")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <FadeIn key={index}>
                <div className="pl-8 border-l-2 border-[#f5f5f5] transition-colors">
                  <h3
                    className="text-2xl text-[#f5f5f5] font-bold mb-4"
                    suppressHydrationWarning
                  >
                    {t(item.title)}
                  </h3>

                  <p
                    className="text-[#f5f5f5]"
                    suppressHydrationWarning
                  >
                    {t(item.desc)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
); }