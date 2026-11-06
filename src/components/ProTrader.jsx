import React from 'react';

export default function ProTrader() {
  return (
    <section 
      className="relative overflow-hidden min-h-[650px] lg:h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8" 
      style={{ backgroundImage: "linear-gradient(180deg, #9e6eff -11.94%, #635480 9.51%, #000000 68.22%)" }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-[#f7f7f7] z-10">
          <span className="inline-flex items-center px-4 h-7 rounded-full bg-[#eee]/80 text-[#121212] text-xs font-semibold mb-5">
            PRO TRADER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[53px] font-semibold text-white leading-[1.05] tracking-tight mb-4">
            Powerful tools for advanced trading
          </h2>
          <p className="text-sm sm:text-base text-[#d7d7d7] leading-[136%] font-normal mb-10 max-w-lg">
            Gain real-time market insights, advanced charting features and customizable tools. Make smarter trading decisions with integrated channels, conditional orders and seamless multi-device access.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://newonline.derayah.com/#/signin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center h-[54px] px-8 rounded-full bg-[#9e6eff] hover:bg-[#864aff] text-white text-base font-semibold transition-all shadow-sm"
            >
              Start trading
            </a>
            <a 
              href="https://web.derayah.com/en/integrations/" 
              className="inline-flex items-center justify-center h-[54px] px-8 rounded-full bg-white hover:bg-[#864aff] hover:text-white text-[#121212] text-base font-semibold transition-all shadow-sm"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right Dashboard Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img 
            src="/images/2XPAfqX-1-1-scaled.png" 
            className="w-full max-w-[650px] object-contain drop-shadow-2xl" 
            alt="Powerful tools for advanced trading" 
          />
        </div>

      </div>
    </section>
  );
}

