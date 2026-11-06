import React, { useRef } from 'react';

export default function Academy() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Control / Title Card */}
          <div className="lg:w-[416px] flex-shrink-0 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="text-left">
              <span className="inline-flex items-center px-4 h-7 rounded-full bg-[#eee] text-[#2a2a2a] text-xs font-semibold mb-4">
                DERAYAH ACADEMY
              </span>
              <h2 className="text-3xl lg:text-[56px] font-semibold text-black leading-[0.96] tracking-[-1.12px] mb-3">
                Learn with Derayah
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-normal mb-8">
                Your go-to hub to learn how to invest, navigate the Derayah platform, and access finance webinars.
              </p>
            </div>

            {/* Controls (Pagination Bullets & Arrows) */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  type="button" 
                  onClick={() => scroll('left')}
                  aria-label="Previous slide" 
                  className="w-12 h-12 rounded-full bg-[#d7d7d7] hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6 stroke-[#121212]" viewBox="0 0 24 25" fill="none">
                    <path d="M15 18.5L9 12.5L15 6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  type="button" 
                  onClick={() => scroll('right')}
                  aria-label="Next slide" 
                  className="w-12 h-12 rounded-full bg-[#d7d7d7] hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6 stroke-[#121212]" viewBox="0 0 24 25" fill="none">
                    <path d="M9 18.5L15 12.5L9 6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Cards Horizontal Flow / Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 flex gap-5 overflow-x-auto pb-4 scroll-smooth"
          >
            
            {/* Slide 1 */}
            <div 
              className="w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] flex-shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm" 
              style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/Week-4-Announcement-Post-2-X-2-395x395-c-default.png')" }}
            >
              <div>
                <span className="inline-flex items-center px-3 h-[25px] rounded-full bg-white/50 text-white text-xs font-normal mb-3">
                  Blogs
                </span>
                <h3 className="text-xl font-semibold leading-snug line-clamp-3">
                  Derayah Financial and Alpaca Join Forces to Expand Foreign Investor Access to Saudi Arabia’s Market.
                </h3>
              </div>
              <a 
                href="https://web.derayah.com/en/derayah-financial-and-alpaca-join-forces-to-expand-foreign-investor-access-to-saudi-arabias-market/" 
                className="inline-flex items-center justify-center h-[42px] px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-[#864aff] hover:text-white transition-all w-fit"
              >
                Read More
              </a>
            </div>

            {/* Slide 2 */}
            <div 
              className="w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] flex-shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm" 
              style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/enSendPersonalinfo-1-395x395-c-default.png')" }}
            >
              <div>
                <span className="inline-flex items-center px-3 h-[25px] rounded-full bg-white/50 text-white text-xs font-normal mb-3">
                  Tutorials
                </span>
                <h3 className="text-xl font-semibold leading-snug line-clamp-3">
                  How to send the IBAN and personal information using Derayah app
                </h3>
              </div>
              <a 
                href="https://web.derayah.com/en/tutorial/how-to-send-the-iban-and-personal-information-using-derayah-app/" 
                className="inline-flex items-center justify-center h-[42px] px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-[#864aff] hover:text-white transition-all w-fit"
              >
                Learn more
              </a>
            </div>

            {/* Slide 3 */}
            <div 
              className="w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] flex-shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm" 
              style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/17d474cd-a810-4d31-833e-c8037b6a49ba-395x395-c-default.png')" }}
            >
              <div>
                <span className="inline-flex items-center px-3 h-[25px] rounded-full bg-white text-[#121212] text-xs font-normal mb-3">
                  News
                </span>
                <h3 className="text-xl font-semibold leading-snug line-clamp-3 mb-2">
                  Derayah Financial: We have transformed to become the largest independent broker in Saudi Arabia, and the size of our AuM grew by 45% in H1 2024
                </h3>
                <p className="text-xs text-white/80">15/12/2024</p>
              </div>
              <a 
                href="https://web.derayah.com/en/derayah-financial-we-have-transformed-to-become-the-largest-independent-broker-in-saudi-arabia-and-the-size-of-our-aum-grew-by-45-in-h1-2024/" 
                className="inline-flex items-center justify-center h-[42px] px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-[#864aff] hover:text-white transition-all w-fit"
              >
                Watch Now
              </a>
            </div>

            {/* Slide 4 */}
            <div 
              className="w-[320px] sm:w-[350px] lg:w-[380px] h-[395px] flex-shrink-0 rounded-2xl p-8 flex flex-col justify-between bg-cover bg-center text-white relative shadow-sm" 
              style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/enUseApplePay-395x395-c-default.png')" }}
            >
              <div>
                <span className="inline-flex items-center px-3 h-[25px] rounded-full bg-white/50 text-white text-xs font-normal mb-3">
                  Tutorials
                </span>
                <h3 className="text-xl font-semibold leading-snug line-clamp-3 mb-2">
                  How to Use Apple Pay on the Derayah App
                </h3>
                <p className="text-xs text-white/80">15/12/2024</p>
              </div>
              <a 
                href="https://web.derayah.com/en/tutorial/how-to-use-apple-pay-on-the-derayah-app/" 
                className="inline-flex items-center justify-center h-[42px] px-5 rounded-full bg-white text-[#121212] font-semibold text-xs hover:bg-[#864aff] hover:text-white transition-all w-fit"
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

