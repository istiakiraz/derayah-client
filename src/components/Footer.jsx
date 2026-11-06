import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language?.startsWith('ar');

  return (
    <footer className={`pt-24 pb-14 bg-white text-muted border-t border-gray-100 ${isArabic ? 'text-right' : 'text-left'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 ${isArabic ? 'lg:text-right' : ''}`}>
          
          {/* Company Info & Socials */}
          <div className="lg:col-span-5 flex gap-5 border-b border-gray-200 pb-8 md:border-none md:pb-0 items-start">
            <Link to="/" className="mb-4" aria-label="Derayah Financial">
              <img src="/images/cropped-New_Logo_Derayah.png" className="w-[70px] h-[64px] object-contain" alt="Derayah Financial" />
            </Link>
        
            <div className='flex flex-col'>
              <h6 className="text-xs font-semibold hidden md:block text-[#121212] mb-2">{t('footer.company_title')}</h6>
              <p className="text-xs text-muted leading-relaxed max-w-sm mb-6">
                {t('footer.company_desc')}
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="https://onlinetrade24.com/login" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
                  <img src="/images/Icon-4.svg" className="w-8 h-8" alt="Facebook" />
                </a>
                <a href="https://onlinetrade24.com/login" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-75 transition-opacity">
                  <img src="/images/Icons-Social-Icons.svg" className="w-8 h-8" alt="YouTube" />
                </a>
                <a href="https://onlinetrade24.com/login" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:opacity-75 transition-opacity">
                  <img src="/images/Icons-Social-Icons-2.svg" className="w-8 h-8" alt="X" />
                </a>
                <a href="https://onlinetrade24.com/login" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
                  <img src="/images/Icon-5.svg" className="w-8 h-8" alt="Instagram" />
                </a>
                <a href="https://onlinetrade24.com/login" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity">
                  <img src="/images/Icons-Social-Icons-1.svg" className="w-8 h-8" alt="LinkedIn" />
                </a>
                <a href="https://onlinetrade24.com/login" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-75 transition-opacity">
                  <img src="/images/tiktok-gray-circle-round-23168.svg" className="w-8 h-8" alt="TikTok" />
                </a>
              </div>
            </div>
          </div>

          <div className={`flex justify-between col-span-1 md:col-span-4 w-full ${isArabic ? 'flex-row-reverse' : ''}`}>
             {/* Products Links */}
             <div className="lg:col-span-2">
              <h6 className="text-xs font-bold text-[#121212] tracking-wider mb-4">{t('footer.products_title')}</h6>
              <div className="flex flex-col gap-2.5">
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.products.platform')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.products.global')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.products.funds')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.products.margins')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.products.smart')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.products.advisory')}</a>
              </div>
            </div>

            {/* About Links */}
            <div className="lg:col-span-2">
              <h6 className="text-xs font-bold text-[#121212] tracking-wider mb-4">{t('footer.about_title')}</h6>
              <div className="flex flex-col gap-2.5">
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.about.about')}</a>
                <a href="" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.about.team')}</a>
                <a href="" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.about.join')}</a>
                <a href="" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.about.integrations')}</a>
                <a href="" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.about.terms')}</a>
                <a href="" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.about.privacy')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.about.contact')}</a>
              </div>
            </div>

            {/* Learn Links */}
            <div className="lg:col-span-2">
              <h6 className="text-xs font-bold text-[#121212] tracking-wider mb-4">{t('footer.learn_title')}</h6>
              <div className="flex flex-col gap-2.5">
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.learn.news')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.learn.tutorials')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.learn.webinars')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.learn.blog')}</a>
                <a href="https://onlinetrade24.com/login" className="text-xs text-muted hover:text-brand transition-colors">{t('footer.learn.reports')}</a>
              </div>
            </div>
          </div>

          {/* App Download Column */}
          <div className="lg:col-span-3 flex bg-[#f7f7f7] p-5 rounded-2xl h-fit justify-between items-center gap-3">
            <div className='flex items-center gap-3'>
              <div className="flex justify-between items-center lg:flex-col gap-3">
                <p className="text-xs text-[#121212]">{t('footer.download_title')}</p>
                <div className='flex items-center gap-2'>
                  <a href="https://onlinetrade24.com/login" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store">
                    <img src="/images/2WaAQ5X.png" className="w-8 h-8 object-contain hover:opacity-80 transition-opacity" alt="App Store" />
                  </a>
                  <a href="https://onlinetrade24.com/login" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store">
                    <img src="/images/2Wa5Enj.png" className="w-8 h-8 object-contain hover:opacity-80 transition-opacity" alt="Google Play" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <img src="/images/DMApp-1.png" className="w-[68px] h-[68px] object-contain hidden md:block rounded-lg border border-gray-100 p-1 bg-white" alt="QR Code" />
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between md:items-center text-xs text-muted gap-4">
          <p>
            {t('footer.legal_text_1')}
            <a href="" className="underline hover:text-brand">{t('footer.terms_link')}</a>
            {t('footer.legal_text_2')}
            <a href="" className="underline hover:text-brand">{t('footer.privacy_link')}</a>
            {t('footer.legal_text_3')}
          </p>
          <p>{t('footer.copyright')}</p>
        </div>

      </div>
    </footer>
  );
}