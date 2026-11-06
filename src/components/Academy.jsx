import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Academy() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 4;

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // card width + gap
      // In RTL mode, scrolling left/right directions are inverted visually
      const modifier = isArabic ? (direction === "left" ? scrollAmount : -scrollAmount) : (direction === "left" ? -scrollAmount : scrollAmount);
      
      const newScrollLeft = scrollContainerRef.current.scrollLeft + modifier;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Update active bullet on manual scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = Math.abs(scrollContainerRef.current.scrollLeft);
      const cardWidth = 400;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), totalSlides - 1));
    }
  };

  const slidesData = t("academy.slides", { returnObjects: true }) || [];

  // Background images matching each slide index
  const slideImages = [
    "/images/Week-4-Announcement-Post-2-X-2-395x395-c-default.png",
    "/images/enSendPersonalinfo-1-395x395-c-default.png",
    "/images/17d474cd-a810-4d31-833e-c8037b6a49ba-395x395-c-default.png",
    "/images/enUseApplePay-395x395-c-default.png"
  ];

  return (
    <section className="bg-white overflow-x-hidden">
      <div className={`w-full ${isArabic ? "pr-4 sm:pr-6 lg:pr-[calc(max(0px,(100%-72rem)/2)+3rem)]" : "pl-4 sm:pl-6 lg:pl-[calc(max(0px,(100%-72rem)/2)+3rem)]"}`}>
        <div className={`flex flex-col lg:${isArabic ? "flex-row" : "flex-row"} gap-8 items-stretch`}>
          
          {/* Left/Right Control & Title Card */}
          <div className={`lg:w-104 lg:min-w-104 shrink-0 bg-white rounded-2xl p-8 ${isArabic ? "pr-0" : "pl-0"} flex flex-col justify-between z-10 ${isArabic ? "text-right" : "text-left"}`}>
            <div>
              <span className="inline-flex items-center px-4 h-7 rounded-full bg-[#eee] text-[#2a2a2a] text-xs font-semibold mb-4">
                {t("academy.badge")}
              </span>
              <h2 className="text-3xl lg:text-[56px] font-semibold text-black leading-[0.96] tracking-[-1.12px] mb-3">
                {t("academy.title")}
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-normal mb-8">
                {t("academy.description")}
              </p>
            </div>

            {/* Controls (Pagination Bullets & Arrows) */}
            <div className={`flex items-center justify-between pt-4 border-t border-gray-100 ${isArabic ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                {[...Array(totalSlides)].map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-6 bg-black" : "w-2.5 bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
              <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Previous slide"
                  className="w-12 h-12 rounded-full bg-[#d7d7d7] hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg
                    className={`w-6 h-6 stroke-[#121212] ${isArabic ? "" : ""}`}
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M15 18.5L9 12.5L15 6.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Next slide"
                  className="w-12 h-12 rounded-full bg-[#d7d7d7] hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg
                    className={`w-6 h-6 stroke-[#121212] ${isArabic ? "" : ""}`}
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M9 18.5L15 12.5L9 6.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Cards Slider */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            dir={isArabic ? "rtl" : "ltr"}
            className="flex-1 min-w-0 flex gap-5 overflow-x-auto pb-6 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {Array.isArray(slidesData) && slidesData.map((slide, idx) => (
              <div
                key={idx}
                className={`w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm ${
                  idx === slidesData.length - 1 ? (isArabic ? "ml-6 lg:ml-12" : "mr-6 lg:mr-12") : ""
                } ${isArabic ? "text-right" : "text-left"}`}
                style={{
                  backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('${slideImages[idx]}')`
                }}
              >
                <div>
                  <span className="inline-flex items-center px-3 h-6.25 rounded-full bg-white/50 text-white text-xs font-normal mb-3">
                    {slide.tag}
                  </span>
                  <h3 className={`text-xl font-semibold leading-snug line-clamp-3 ${slide.date ? "mb-2" : ""}`}>
                    {slide.title}
                  </h3>
                  {slide.date && (
                    <p className="text-xs text-white/80">{slide.date}</p>
                  )}
                </div>
                <a
                  href=""
                  className="inline-flex items-center justify-center h-10.5 px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-brand-hover hover:text-white transition-all w-fit"
                >
                  {slide.cta}
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}