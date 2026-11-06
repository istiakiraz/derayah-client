import React from "react";
import { useTranslation } from "react-i18next";

export default function Support() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  return (
    <section className="py-24 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <span className="inline-flex items-center px-4 h-7 rounded-full bg-[#eee]/90 text-[#121212] text-xs font-semibold mb-4">
          {t("support.badge")}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[53px] font-semibold text-[#121212] leading-[0.96] tracking-[-1.12px] my-4 max-w-xl text-center">
          {t("support.title")}
        </h2>
        <a
          href="tel:966115162890"
          className="inline-flex items-center justify-center h-[54px] px-8 rounded-full bg-brand hover:bg-brand-hover text-white text-base font-bold transition-all mb-14 shadow-sm hover:shadow-md"
        >
          {t("support.call_btn")}
        </a>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          <div
            className={`h-60 md:h-82.5 rounded-2xl p-6 flex flex-col justify-end ${
              isArabic ? "text-right" : "text-left"
            } bg-cover bg-center text-white relative overflow-hidden shadow-sm`}
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/New-Project-350x330-c-default.jpg')",
            }}
          >
            <h3 className="text-2xl font-semibold leading-snug tracking-tight text-white">
              {t("support.card1")}
            </h3>
          </div>

          <div
            className={`h-60 md:h-82.5 rounded-2xl p-6 flex flex-col justify-end ${
              isArabic ? "text-right" : "text-left"
            } bg-cover bg-center text-white relative overflow-hidden shadow-sm`}
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/New-Project-1-350x330-c-default.jpg')",
            }}
          >
            <h3 className="text-2xl font-semibold leading-snug tracking-tight text-white">
              {t("support.card2")}
            </h3>
          </div>

          <div
            className={`h-60 md:h-82.5 rounded-2xl p-6 flex flex-col justify-end ${
              isArabic ? "text-right" : "text-left"
            } bg-cover bg-center text-white relative overflow-hidden shadow-sm`}
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/New-Project-2-350x330-c-default.jpg')",
            }}
          >
            <h3 className="text-2xl font-semibold leading-snug tracking-tight text-white">
              {t("support.card3")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}