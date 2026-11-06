
import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-[550px] lg:h-screen flex items-center justify-center bg-cover bg-center text-center px-4 py-20"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url('/images/Section-3-1-1-min-1-1-scaled.jpg')",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-9 z-10">
        {/* White Geometric Logo Mark */}
        <svg
          width="52"
          height="53"
          viewBox="0 0 52 53"
          fill="none"
          className="mx-auto"
        >
          <rect
            x="17.3335"
            y="19"
            width="34.6665"
            height="17"
            fill="white"
          ></rect>
          <rect y="36" width="51.9997" height="17" fill="white"></rect>
          <circle cx="43" cy="10" r="9" fill="white"></circle>
        </svg>

        <p className="text-2xl sm:text-4xl lg:text-[53px] font-semibold text-white leading-[1.05] tracking-[-1.12px]">
          {t("mission.text")}
        </p>

        <a
          href="https://onlinetrade24.com/register"
          className="inline-flex items-center justify-center h-[54px] px-8 rounded-full bg-white text-[#121212] font-semibold text-base hover:bg-brand-hover hover:text-white transition-all shadow-md"
        >
          {t("mission.cta")}
        </a>
      </div>
    </section>
  );
}