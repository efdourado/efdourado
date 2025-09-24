"use client";
import { useTranslation } from "react-i18next";
import { useHydration } from "@/hooks/useHydration";

export function Footer() {
  const { t } = useTranslation();
  const isMounted = useHydration();

  if (!isMounted) {
    return null;
  }

  return (
    <footer id="footer" className="bg-surface px-8 py-12">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-8 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">
          <span className="gradient-text">{t("thank_you")}</span>
          <br />
          <span>{t("echoes")}</span>
        </h2>

        <p className="mb-12 max-w-xl text-lg text-text-secondary">
          {t("footer_subtitle")}
        </p>

        <div className="cta-group">
          <a
            href="mailto:ed320819@gmail.com?subject=Msg%20from%20ur%20Portfolio&body=👋👋%0A%0A"
            className="rounded-full bg-gradient-to-br from-primary to-secondary px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
          >
            {t("send_message_btn")}
          </a>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <p className="text-text-secondary">{t("color_palette")}</p>
          <span className="h-6 w-6 rounded-full bg-[#6c63ff]"></span>
          <span className="h-6 w-6 rounded-full bg-[#ff6584]"></span>
        </div>

        <div className="mt-8 text-sm text-text-secondary">
          <p>
            &copy; 2025 Eduardo Dourado.
            <span>{t("rights_reserved")}</span>
          </p>
        </div>
      </div>
    </footer>
); }