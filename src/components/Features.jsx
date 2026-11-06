import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language?.startsWith('ar');

  return (
    <section className="py-24 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl sm:text-4xl lg:text-[53px] font-semibold text-black leading-[0.96] tracking-[-1.12px] text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          {t('features.section_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Feature Card 1 */}
          <div className="h-60 md:h-120 rounded-2xl p-6 md:p-9 relative overflow-hidden flex flex-col justify-between bg-linear-to-b from-[#b18aff] to-[#9e6eff] text-white group">
            <div>
              <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.02] tracking-[-0.36px] max-w-[360px] mb-3">
                {t('features.card1.title')}
              </h3>
              <p className="text-base hidden md:block font-normal leading-[114%] max-w-[330px] text-white/90">
                {t('features.card1.desc')}
              </p>
            </div>
            
            <img 
              src="/images/Bro-with-stocks-1-1.png" 
              className={`absolute bottom-0 ${isArabic ? 'left-0 scale-x-[-1]' : 'right-0'} h-full w-auto object-contain pointer-events-none -z-0`} 
              alt={t('features.card1.title')} 
            />

            <a 
              href="" 
              title={t('features.card1.title')} 
              className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white z-10"
            >
              <span>{t('features.card1.cta')}</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:rotate-[135deg]' : 'group-hover:rotate-45'}`} viewBox="0 0 22 22" fill="none">
                <path d="M5.5 16.5L16.5 5.5" stroke="white" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 5.5H16.5V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Feature Card 2 */}
          <div className="h-60 md:h-120 rounded-2xl p-6 md:p-9 relative overflow-hidden flex flex-col justify-between bg-linear-to-b from-[#eee5ff] to-[#f5f0ff] text-[#121212] group">
            <div>
              <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.02] tracking-[-0.36px] max-w-[360px] mb-3">
                {t('features.card2.title')}
              </h3>
              <p className="text-base font-normal hidden md:block leading-[114%] max-w-[330px] text-gray-700">
                {t('features.card2.desc')}
              </p>
            </div>

            <img 
              src="/images/Auto-Layout-Horizontal.png" 
              className={`absolute top-[45%] ${isArabic ? 'left-0 scale-x-[-1]' : 'right-0'} w-[70%] object-contain pointer-events-none z-0`} 
              alt={t('features.card2.title')} 
            />

            <a 
              href="" 
              title={t('features.card2.title')} 
              className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-[#121212] z-10"
            >
              <span>{t('features.card2.cta')}</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:rotate-[135deg]' : 'group-hover:rotate-45'}`} viewBox="0 0 22 22" fill="none">
                <path d="M5.5 16.5L16.5 5.5" stroke="#121212" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 5.5H16.5V16.5" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Feature Card 3 */}
          <div className="h-60 md:h-120 rounded-2xl p-6 md:p-9 relative overflow-hidden flex flex-col justify-between bg-linear-to-b from-[#d9c7ff] to-[#eee5ff] text-[#121212] group">
            <div>
              <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.02] tracking-[-0.36px] max-w-[360px] mb-3">
                {t('features.card3.title')}
              </h3>
              <p className="text-base font-normal hidden md:block leading-[114%] max-w-[330px] text-gray-700">
                {t('features.card3.desc')}
              </p>
            </div>

            <img 
              src="/images/2XD03uV.png" 
              className={`absolute bottom-0 ${isArabic ? 'left-6 scale-x-[-1]' : 'right-6'} h-[65%] w-auto object-contain pointer-events-none z-0`} 
              alt={t('features.card3.title')} 
            />

            <a 
              href="" 
              title={t('features.card3.title')} 
              className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-[#121212] z-10"
            >
              <span>{t('features.card3.cta')}</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:rotate-[135deg]' : 'group-hover:rotate-45'}`} viewBox="0 0 22 22" fill="none">
                <path d="M5.5 16.5L16.5 5.5" stroke="#121212" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 5.5H16.5V16.5" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Feature Card 4 */}
          <div 
            className="h-60 md:h-120 rounded-2xl p-6 md:p-9 relative overflow-hidden flex flex-col justify-between bg-cover bg-center text-white group" 
            style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url('/images/Card-TypeProduct-Card-Text-ColourWhite-LanguageEN-StateDefault-PlatformWeb-545x480-c-default.png')" }}
          >
            <div>
              <h3 className="text-2xl lg:text-4xl font-semibold leading-[1.02] tracking-[-0.36px] max-w-[360px] mb-3">
                {t('features.card4.title')}
              </h3>
              <p className="text-base font-normal hidden md:block leading-[114%] max-w-[330px] text-white/90">
                {t('features.card4.desc')}
              </p>
            </div>

            <a 
              href="" 
              title={t('features.card4.title')} 
              className="inline-flex items-center gap-2 text-xs lg:text-sm font-medium text-white z-10"
            >
              <span>{t('features.card4.cta')}</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:rotate-[135deg]' : 'group-hover:rotate-45'}`} viewBox="0 0 22 22" fill="none">
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