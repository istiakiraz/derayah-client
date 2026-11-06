import React from 'react';

export default function Features() {
  return (
    <section className="py-24 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl sm:text-4xl lg:text-[53px] font-semibold text-black leading-[0.96] tracking-[-1.12px] text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          Diverse offerings with one trusted partner
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Feature Card 1 */}
          <div className=" h-60 md:h-120 rounded-2xl p-6 md:p-6 md:p-9 relative overflow-hidden flex flex-col justify-between bg-linear-to-b from-[#b18aff] to-[#9e6eff] text-white  group">
            <div>
              <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.02] tracking-[-0.36px] max-w-[360px] mb-3">
                Trade in Saudi and MENA markets
              </h3>
              <p className="text-base hidden md:block font-normal leading-[114%] max-w-[330px] text-white/90">
                Grow your portfolio with stocks, ETFs, margins, derivatives and Shariah-compliant from TASI to NUMO all in one platform.
              </p>
            </div>
            
            <img 
              src="/images/Bro-with-stocks-1-1.png" 
              className="absolute bottom-0 right-0 h-full w-auto object-contain pointer-events-none -z-0" 
              alt="Trade in Saudi and MENA markets" 
            />

            <a 
              href="https://web.derayah.com/en/platforms/derayah-platform/" 
              title="Trade in Saudi and MENA markets" 
              className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white  z-10"
            >
              <span>Explore Derayah Platform</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 22 22" fill="none">
                <path d="M5.5 16.5L16.5 5.5" stroke="white" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 5.5H16.5V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Feature Card 2 */}
          <div className=" h-60 md:h-120 rounded-2xl p-6 md:p-9 relative overflow-hidden flex flex-col justify-between bg-linear-to-b from-[#eee5ff] to-[#f5f0ff] text-[#121212]  group">
            <div>
              <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.02] tracking-[-0.36px] max-w-[360px] mb-3">
                Access 43+ markets globally
              </h3>
              <p className="text-base font-normal hidden md:block leading-[114%] max-w-[330px] text-gray-700">
                Buy and sell with trading access to options, bonds, SPX, NDX, margin trading, and <b>zero commission</b> on US stocks and ETFs with Lite.
              </p>
            </div>

            <img 
              src="/images/Auto-Layout-Horizontal.png" 
              className="absolute top-[45%] right-0 w-[70%] object-contain pointer-events-none z-0" 
              alt="Access 43+ markets globally" 
            />

            <a 
              href="https://web.derayah.com/en/platforms/derayah-global/" 
              title="Access 43+ markets globally" 
              className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-[#121212]  z-10"
            >
              <span>Explore Derayah Global</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 22 22" fill="none">
                <path d="M5.5 16.5L16.5 5.5" stroke="#121212" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 5.5H16.5V16.5" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Feature Card 3 */}
          <div className=" h-60 md:h-120 rounded-2xl p-6 md:p-9 relative overflow-hidden flex flex-col justify-between bg-linear-to-b from-[#d9c7ff] to-[#eee5ff] text-[#121212]  group">
            <div>
              <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.02] tracking-[-0.36px] max-w-[360px] mb-3">
                Take the guesswork out of investing
              </h3>
              <p className="text-base font-normal hidden md:block leading-[114%] max-w-[330px] text-gray-700">
                Automate your investing with a personalized plan by choosing a portfolio that fits your goals, while we handle diversification and adjustments.
              </p>
            </div>

            <img 
              src="/images/2XD03uV.png" 
              className="absolute bottom-0 right-6 h-[65%] w-auto object-contain pointer-events-none z-0" 
              alt="Take the guesswork out of investing" 
            />

            <a 
              href="https://web.derayah.com/en/derayah-smart/" 
              title="Take the guesswork out of investing" 
              className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-[#121212]  z-10"
            >
              <span>Explore Robo-Advisory</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 22 22" fill="none">
                <path d="M5.5 16.5L16.5 5.5" stroke="#121212" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 5.5H16.5V16.5" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Feature Card 4 */}
          <div 
            className=" h-60 md:h-120 rounded-2xl p-6 md:p-9 relative overflow-hidden flex flex-col justify-between bg-cover bg-center text-white  group" 
            style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url('/images/Card-TypeProduct-Card-Text-ColourWhite-LanguageEN-StateDefault-PlatformWeb-545x480-c-default.png')" }}
          >
            <div>
              <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.02] tracking-[-0.36px] max-w-[360px] mb-3">
                Invest easily, let our experts do the work
              </h3>
              <p className="text-base font-normal hidden md:block leading-[114%] max-w-[330px] text-white/90">
                Explore a diverse range of mutual funds, public funds, and real estate investments tailored to your needs, while we carefully manage your portfolio.
              </p>
            </div>

            <a 
              href="https://web.derayah.com/en/ia/" 
              title="Invest easily, let our experts do the work" 
              className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-white  z-10"
            >
              <span>Discover Asset Management</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 22 22" fill="none">
                <path d="M5.5 16.5L16.5 5.5" stroke="white" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 5.5H16.5V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

