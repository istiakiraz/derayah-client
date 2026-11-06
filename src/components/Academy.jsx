import React, { useRef, useState } from "react";

export default function Academy() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 4;

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // card width + gap
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Update active bullet on manual scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 400;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), totalSlides - 1));
    }
  };

  return (
    <section className=" bg-white overflow-x-hidden">
      <div className="w-full pl-4 sm:pl-6 lg:pl-[calc(max(0px,(100%-72rem)/2)+3rem)]">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Control / Title Card */}
          <div className="lg:w-104 lg:min-w-104 shrink-0 bg-white rounded-2xl p-8 pl-0 flex flex-col justify-between z-10">
            <div className="text-left">
              <span className="inline-flex items-center px-4 h-7 rounded-full bg-[#eee] text-[#2a2a2a] text-xs font-semibold mb-4">
                DERAYAH ACADEMY
              </span>
              <h2 className="text-3xl lg:text-[56px] font-semibold text-black leading-[0.96] tracking-[-1.12px] mb-3">
                Learn with Derayah
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-normal mb-8">
                Your go-to hub to learn how to invest, navigate the Derayah
                platform, and access finance webinars.
              </p>
            </div>

            {/* Controls (Pagination Bullets & Arrows) */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                {[...Array(totalSlides)].map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-6 bg-black" : "w-2.5 bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Previous slide"
                  className="w-12 h-12 rounded-full bg-[#d7d7d7] hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 stroke-[#121212]"
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
                    className="w-6 h-6 stroke-[#121212]"
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
            className="flex-1 min-w-0 flex gap-5 overflow-x-auto pb-6 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Slide 1 */}
            <div className="w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm bg-[linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/Week-4-Announcement-Post-2-X-2-395x395-c-default.png')]">
              <div>
                <span className="inline-flex items-center px-3 h-6.25 rounded-full bg-white/50 text-white text-xs font-normal mb-3">
                  Blogs
                </span>
                <h3 className="text-xl font-semibold leading-snug line-clamp-3">
                  Derayah Financial and Alpaca Join Forces to Expand Foreign
                  Investor Access to Saudi Arabia’s Market.
                </h3>
              </div>
              <a
                href=""
                className="inline-flex items-center justify-center h-10.5 px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-brand-hover hover:text-white transition-all w-fit"
              >
                Read More
              </a>
            </div>

            {/* Slide 2 */}
            <div className="w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm bg-[linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/enSendPersonalinfo-1-395x395-c-default.png')]">
              <div>
                <span className="inline-flex items-center px-3 h-6.25 rounded-full bg-white/50 text-white text-xs font-normal mb-3">
                  Tutorials
                </span>
                <h3 className="text-xl font-semibold leading-snug line-clamp-3">
                  How to send the IBAN and personal information using Derayah
                  app
                </h3>
              </div>
              <a
                href=""
                className="inline-flex items-center justify-center h-10.5 px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-brand-hover hover:text-white transition-all w-fit"
              >
                Learn more
              </a>
            </div>

            {/* Slide 3 */}
            <div className="w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm bg-[linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/17d474cd-a810-4d31-833e-c8037b6a49ba-395x395-c-default.png')]">
              <div>
                <span className="inline-flex items-center px-3 h-6.25 rounded-full bg-white text-[#121212] text-xs font-normal mb-3">
                  News
                </span>
                <h3 className="text-xl font-semibold leading-snug line-clamp-3 mb-2">
                  Derayah Financial: We have transformed to become the largest
                  independent broker in Saudi Arabia, and the size of our AuM
                  grew by 45% in H1 2024
                </h3>
                <p className="text-xs text-white/80">15/12/2024</p>
              </div>
              <a
                href=""
                className="inline-flex items-center justify-center h-10.5 px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-brand-hover hover:text-white transition-all w-fit"
              >
                Watch Now
              </a>
            </div>

            {/* Slide 4 */}
            <div className="w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm mr-6 lg:mr-12 bg-[linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('/images/enUseApplePay-395x395-c-default.png')]">
              <div>
                <span className="inline-flex items-center px-3 h-6.25 rounded-full bg-white/50 text-white text-xs font-normal mb-3">
                  Tutorials
                </span>
                <h3 className="text-xl font-semibold leading-snug line-clamp-3 mb-2">
                  How to Use Apple Pay on the Derayah App
                </h3>
                <p className="text-xs text-white/80">15/12/2024</p>
              </div>
              <a
                href=""
                className="inline-flex items-center justify-center h-10.5 px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-brand-hover hover:text-white transition-all w-fit"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
