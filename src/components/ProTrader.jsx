import React from "react";

export default function ProTrader() {
  return (
    <section
      className="relative min-h-[650px] lg:h-screen flex items-center py-20 px-4 sm:px-6 lg:pl-12 lg:pr-0 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #9e6eff -11.94%, #635480 9.51%, #000000 68.22%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-0">
        {/* Left Content */}
        <div className="lg:w-[480px] lg:min-w-[480px] flex flex-col md:text-left text-center md:items-start items-center text-[#f7f7f7] z-10 px-4 lg:px-0">
          <span className="inline-flex items-center px-4 h-7 rounded-full bg-[#eee]/80 text-[#121212] text-xs font-semibold mb-5">
            PRO TRADER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[53px] font-semibold text-white leading-[1.05] tracking-tight mb-4">
            Powerful tools for advanced trading
          </h2>
          <p className="text-sm sm:text-base text-[#d7d7d7] leading-[136%] font-normal mb-10">
            Gain real-time market insights, advanced charting features and
            customizable tools. Make smarter trading decisions with integrated
            channels, conditional orders and seamless multi-device access.
          </p>
          <div className="flex items-center gap-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block items-center  justify-center py-3 px-5 md:py-4 md:px-8 rounded-full bg-brand hover:bg-brand-hover text-white text-base font-semibold transition-all "
            >
              Start trading
            </a>
            <a
              href=""
              className="inline-flex items-center justify-center py-3 px-5 md:py-4 md:px-8 rounded-full bg-white hover:bg-brand-hover hover:text-white text-[#121212] text-base font-semibold transition-all "
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right Dashboard Image (Enlarged and aligned to the right edge) */}
        <div className="flex-1 flex justify-end w-full lg:w-auto overflow-visible">
          <img
            src="/images/2XPAfqX-1-1-scaled.png"
            className="w-90 sm:w-120 lg:w-160 xl:w-170 2xl:w-245 max-w-none object-contain drop-shadow-2xl translate-x-4 lg:translate-x-12"
            alt="Powerful tools for advanced trading"
          />
        </div>
      </div>
    </section>
  );
}
