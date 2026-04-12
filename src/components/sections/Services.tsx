"use client";

import { useTranslation } from "react-i18next";
import { FadeIn } from "@/components/ui/FadeIn";

const services = [
  {
    title: "full_stack_development",
    desc: "full_stack_development_desc",
  },
  {
    title: "scalable_architecture",
    desc: "scalable_architecture_desc",
  },
  {
    title: "ai_engineering",
    desc: "ai_engineering_desc",
  },
  {
    title: "ux_engineering",
    desc: "ux_engineering_desc",
}, ];

const philosophy = [
  {
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

      {/* SERVICES */}
      <div className="px-3 sm:px-8 md:px-14 py-12 sm:py-16 border-b border-white/10">
        <div className="mx-auto w-full max-w-screen-xl">

          <FadeIn>
            <h2
              className="mb-10 sm:mb-12 text-2xl sm:text-3xl font-light leading-tight"
              suppressHydrationWarning
            >
              {t("services")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((item, index) => (
              <FadeIn key={index}>
                <div className="group h-full rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <h3
                    className="mb-3 sm:mb-4 text-lg sm:text-xl font-light"
                    suppressHydrationWarning
                  >
                    {t(item.title)}
                  </h3>

                  <p
                    className="text-white/70 text-sm sm:text-base"
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

      {/* PHILOSOPHY */}
      <div className="px-3 sm:px-8 md:px-14 py-14 sm:py-20 border-b border-white/10 bg-black/10">
        <div className="mx-auto w-full max-w-screen-xl">

          <FadeIn>
            <h2
              className="mb-10 sm:mb-12 text-2xl sm:text-3xl text-[#f5f5f5] font-light text-right"
              suppressHydrationWarning
            >
              {t("philosophy")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {philosophy.map((item, index) => (
              <FadeIn key={index}>
                <div className="pl-4 sm:pl-6 border-l-2 border-[#f5f5f5] transition-colors">

                  <h3
                    className="text-xl sm:text-2xl text-[#f5f5f5] font-light mb-3 sm:mb-4"
                    suppressHydrationWarning
                  >
                    {t(item.title)}
                  </h3>

                  <p className="text-[#f5f5f5] text-sm sm:text-base" suppressHydrationWarning>
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