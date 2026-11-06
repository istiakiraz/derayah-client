import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-24 pb-14 bg-white text-[#717171] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Company Info & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="mb-4" aria-label="Derayah Financial">
              <img src="/images/cropped-New_Logo_Derayah.png" className="w-[70px] h-[64px] object-contain" alt="Derayah Financial" />
            </Link>
            <h6 className="text-xs font-semibold text-[#121212] mb-2">Derayah Financial</h6>
            <p className="text-xs text-[#717171] leading-relaxed max-w-sm mb-6">
              Derayah Financial, P.B: 286546, Riyadh 11323, Saudi Arabia , Licensed by the Capital Market Authority 08109 - 27
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/DerayahFinancial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
                <img src="/images/Icon-4.svg" className="w-8 h-8" alt="Facebook" />
              </a>
              <a href="https://www.youtube.com/user/DerayahFinancial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-75 transition-opacity">
                <img src="/images/Icons-Social-Icons.svg" className="w-8 h-8" alt="YouTube" />
              </a>
              <a href="https://twitter.com/derayah" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:opacity-75 transition-opacity">
                <img src="/images/Icons-Social-Icons-2.svg" className="w-8 h-8" alt="X" />
              </a>
              <a href="https://www.instagram.com/derayahfinancial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
                <img src="/images/Icon-5.svg" className="w-8 h-8" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/derayah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity">
                <img src="/images/Icons-Social-Icons-1.svg" className="w-8 h-8" alt="LinkedIn" />
              </a>
              <a href="https://www.tiktok.com/@derayah" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-75 transition-opacity">
                <img src="/images/tiktok-gray-circle-round-23168.svg" className="w-8 h-8" alt="TikTok" />
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-2">
            <h6 className="text-xs font-bold text-[#121212] uppercase tracking-wider mb-4">Products</h6>
            <div className="flex flex-col gap-2.5">
              <a href="https://web.derayah.com/en/platforms/derayah-platform/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Derayah Platform</a>
              <a href="https://web.derayah.com/en/platforms/derayah-global/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Global Trade</a>
              <a href="https://web.derayah.com/ar/https-web-derayah-com-ar-equity-funds/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Derayah Funds</a>
              <a href="https://web.derayah.com/en/margins/trading-margin/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Margins</a>
              <a href="https://web.derayah.com/en/derayah-smart/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Derayah Smart</a>
              <a href="https://web.derayah.com/en/ia/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Investment Advisory</a>
            </div>
          </div>

          {/* About Links */}
          <div className="lg:col-span-2">
            <h6 className="text-xs font-bold text-[#121212] uppercase tracking-wider mb-4">About Derayah</h6>
            <div className="flex flex-col gap-2.5">
              <a href="https://web.derayah.com/en/about/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">About</a>
              <a href="https://web.derayah.com/en/team/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Team</a>
              <a href="https://web.derayah.com/en/join-us/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Join Us</a>
              <a href="https://web.derayah.com/en/integrations/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Integrations</a>
              <a href="https://web.derayah.com/en/procedures/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Terms of Service</a>
              <a href="https://web.derayah.com/en/privacy-policy/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Privacy Policy</a>
              <a href="https://web.derayah.com/en/call-us/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Learn Links */}
          <div className="lg:col-span-2">
            <h6 className="text-xs font-bold text-[#121212] uppercase tracking-wider mb-4">Learn</h6>
            <div className="flex flex-col gap-2.5">
              <a href="https://web.derayah.com/en/latest-insights-on-market-in-saudi-arabia-derayah-financial/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">News</a>
              <a href="https://web.derayah.com/en/tutorials/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Tutorials</a>
              <a href="https://web.derayah.com/en/webinars/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Webinars</a>
              <a href="https://web.derayah.com/en/blog/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Blog</a>
              <a href="https://web.derayah.com/en/reports/" className="text-xs text-[#717171] hover:text-[#9e6eff] transition-colors">Reports</a>
            </div>
          </div>

          {/* App Download Column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <p className="text-xs font-semibold text-[#121212]">Download Derayah App</p>
            <div className="flex items-center gap-3">
              <a href="https://apps.apple.com/us/app/derayah-financial/id6502446831" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store">
                <img src="/images/2WaAQ5X.png" className="w-8 h-8 object-contain hover:opacity-80 transition-opacity" alt="App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.derayah&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store">
                <img src="/images/2Wa5Enj.png" className="w-8 h-8 object-contain hover:opacity-80 transition-opacity" alt="Google Play" />
              </a>
            </div>
            <div className="mt-2">
              <img src="/images/DMApp-1.png" className="w-[68px] h-[68px] object-contain rounded-lg border border-gray-100 p-1 bg-white" alt="QR Code" />
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#717171] gap-4">
          <p>By using this site, you agree to the <a href="https://web.derayah.com/en/procedures/" className="underline hover:text-[#9e6eff]">Terms of Service</a> and <a href="https://web.derayah.com/en/privacy-policy/" className="underline hover:text-[#9e6eff]">Privacy Policy</a>.</p>
          <p>All Rights Reserved &copy;2026</p>
        </div>

      </div>
    </footer>
  );
}

