import React from "react";
import { useTranslation } from "react-i18next";

export default function JourneyCards() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-4xl lg:text-[56px] font-semibold text-black leading-[0.96] tracking-[-1.12px] text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          {t("journey.section_title")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="h-45 md:min-h-82.5 rounded-2xl p-3 md:p-6 relative overflow-hidden flex flex-col justify-between hover:-rotate-4 duration-500 ease-in-out bg-linear-to-b from-[#ff7747] to-[#ff6230] text-white group">
            <h3 className="text-lg md:text-2xl font-semibold leading-[114%] tracking-[-0.26px] mb-0">
              {t("journey.card1.title")}
            </h3>
            <img
              src="/images/2WEJQAQ-1.png"
              className={`absolute bottom-0 ${isArabic ? "left-0 scale-x-[-1]" : "right-0"} max-w-50 hidden md:block object-contain pointer-events-none z-0`}
              alt={t("journey.card1.title")}
            />
            <a
              href="https://onlinetrade24.com/login"
              className="inline-flex items-center gap-2 text-xs lg:text-base font-normal text-white z-10"
            >
              <span>{t("journey.card1.cta")}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isArabic ? "rotate-180 group-hover:rotate-[135deg]" : "group-hover:rotate-45"}`}
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M5.5 16.5L16.5 5.5"
                  stroke="white"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 5.5H16.5V16.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Card 2 */}
          <div
            className="h-45 md:min-h-82.5 rounded-2xl p-3 relative overflow-hidden flex flex-col justify-between hover:-rotate-4 duration-500 ease-in-out bg-cover bg-center"
            style={{
              backgroundImage: isArabic
                ? "url('/images/New-App-CARD-EN-560x0-c-default.png')" 
                : "url('/images/New-App-CARD-EN-560x0-c-default.png')",
            }}
          ></div>

          {/* Card 3 */}
          <div
            className="h-45 md:min-h-82.5 rounded-2xl p-3 relative overflow-hidden flex flex-col justify-between bg-cover hover:-rotate-4 duration-500 ease-in-out bg-center text-white group"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url('/images/2Xr0JI4-1-1-1-560x0-c-default.png')",
            }}
          >
            <h3 className="text-lg md:text-2xl font-semibold leading-[114%] tracking-[-0.26px] mb-0">
              <span dangerouslySetInnerHTML={{ __html: t("journey.card3.title_html") }} />
              <br />
              <sup className="text-sm">
                <a
                  href="https://onlinetrade24.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t("journey.card3.disclaimer")}
                </a>
              </sup>
            </h3>
            <a
              href="https://onlinetrade24.com/login"
              className="inline-flex items-center gap-2 text-xs lg:text-base font-normal text-white z-10"
            >
              <span>{t("journey.card3.cta")}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isArabic ? "rotate-180 group-hover:rotate-[135deg]" : "group-hover:rotate-45"}`}
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M5.5 16.5L16.5 5.5"
                  stroke="white"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 5.5H16.5V16.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Card 4 */}
          <div className="h-45 md:min-h-82.5 rounded-2xl p-3 relative overflow-hidden flex flex-col justify-between bg-[#eee5ff] hover:-rotate-4 duration-500 ease-in-out text-black group">
            <h3 className="text-lg md:text-2xl font-semibold leading-[114%] tracking-[-0.26px] mb-0">
              {t("journey.card4.title")}
            </h3>
            <img
              src="/images/2XreS5l-1.png"
              className={`absolute bottom-6 ${isArabic ? "left-6 scale-x-[-1]" : "right-6"} max-w-[150px] hidden md:block object-contain pointer-events-none z-0`}
              alt={t("journey.card4.title")}
            />
            <a
              href="https://onlinetrade24.com/login"
              className="inline-flex items-center gap-2 text-xs lg:text-base font-normal text-black z-10"
            >
              <span>{t("journey.card4.cta")}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isArabic ? "rotate-180 group-hover:rotate-[135deg]" : "group-hover:rotate-45"}`}
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M5.5 16.5L16.5 5.5"
                  stroke="#000000"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 5.5H16.5V16.5"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Card 5 */}
          <div className="h-45 md:min-h-82.5 rounded-2xl p-3 relative overflow-hidden flex flex-col justify-between bg-brand hover:-rotate-4 duration-500 ease-in-out text-white group">
            <h3 className="text-lg md:text-2xl font-semibold leading-[114%] tracking-[-0.26px] mb-0">
              {t("journey.card5.title")}
            </h3>
            <img
              src="/images/2XrZoqx-1.png"
              className="my-auto self-center max-w-75 object-contain hidden md:block pointer-events-none"
              alt={t("journey.card5.title")}
            />
            <a
              href="https://onlinetrade24.com/register"
              className="inline-flex items-center gap-2 text-xs lg:text-base font-normal text-white z-10"
            >
              <span>{t("journey.card5.cta")}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isArabic ? "rotate-180 group-hover:rotate-[135deg]" : "group-hover:rotate-45"}`}
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M5.5 16.5L16.5 5.5"
                  stroke="white"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 5.5H16.5V16.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Card 6 */}
          <div className="h-45 md:min-h-82.5 rounded-2xl p-3 relative overflow-hidden flex flex-col justify-between hover:-rotate-4 duration-500 ease-in-out bg-[#eeeeee] text-black group">
            <h3 className="text-lg md:text-2xl font-semibold leading-[114%] tracking-[-0.26px] mb-0">
              {t("journey.card6.title")}
            </h3>
            <img
              src="/images/2X4KBfI-1.png"
              className="my-auto self-center max-w-75 object-contain hidden md:block pointer-events-none"
              alt={t("journey.card6.title")}
            />
            <a
              href="https://onlinetrade24.com/register"
              className="inline-flex items-center gap-2 text-xs lg:text-base font-normal text-black z-10"
            >
              <span>{t("journey.card6.cta")}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isArabic ? "rotate-180 group-hover:rotate-[135deg]" : "group-hover:rotate-45"}`}
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M5.5 16.5L16.5 5.5"
                  stroke="#000000"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 5.5H16.5V16.5"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}