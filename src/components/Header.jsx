import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full  pb-5 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      {/* Announcement Banner (Optional) */}
      <div className="hidden bg-brand text-white px-6 py-2.5 items-center justify-between text-sm font-medium">
        <div className="flex-1 flex items-center justify-center gap-2">
          <span>
            Trade in the Saudi and U.S. markets with Zero Commission from
            Derayah for life.
          </span>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-white hover:text-white/80"
          >
            Trade now
          </a>
        </div>
        <button
          type="button"
          aria-label="Close Announcement"
          className="text-white hover:opacity-75"
        >
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M11 1L1 11M1 1L11 11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo & Desktop Menu Links */}
          <div className="flex items-center gap-6 xl:gap-8">
            {/* Logo */}
            <Link
              to=""
              className="shrink-0`"
              aria-label="Derayah Financial Home"
            >
              <img
                src="/images/cropped-New_Logo_Derayah.png"
                className="w-[70px] h-[64px] object-contain"
                alt="Derayah Financial"
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex items-center gap-5 xl:gap-6 m-0 p-0 list-none text-sm font-semibold text-black">
              {/* Trade Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className="flex items-center gap-1 hover:text-[#6c63ff] transition-colors"
                >
                  <span>Trade</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M5.41406 8.33398L10.4141 13.334L15.4141 8.33398"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="absolute left-0 top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50">
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-2.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Local (Saudi)</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icons-Map.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Global</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Passport_icon_SVG_01.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Foreign Investors</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/marGins_24.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Margins</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/dollar-sign-circle-2424.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Pricing</span>
                  </a>
                </div>
              </li>

              {/* Invest Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className="flex items-center gap-1 hover:text-[#6c63ff] transition-colors"
                >
                  <span>Invest</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M5.41406 8.33398L10.4141 13.334L15.4141 8.33398"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="absolute left-0 top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50">
                  <a
                    href=""
                    className="flex items-center justify-between px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/Icon-9.svg"
                        className="w-6 h-6 object-contain"
                        alt=""
                      />
                      <span>Equity Funds</span>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="currentColor"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Money-Riyal-Fund-24.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Derayah Money Market Fund</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-7.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Real Estate Investments</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-8.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Discretionary Portfolio Management</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-6.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Mutual Funds Supermarket</span>
                  </a>
                </div>
              </li>

              {/* Advisory Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className="flex items-center gap-1 hover:text-[#6c63ff] transition-colors"
                >
                  <span>Advisory</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M5.41406 8.33398L10.4141 13.334L15.4141 8.33398"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="absolute left-0 top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50">
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-16.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Derayah Smart</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-17.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Investment Advisory</span>
                  </a>
                </div>
              </li>

              {/* Learn Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className="flex items-center gap-1 hover:text-[#6c63ff] transition-colors"
                >
                  <span>Learn</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M5.41406 8.33398L10.4141 13.334L15.4141 8.33398"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="absolute left-0 top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50">
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-22.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>News</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-24.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Blog</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-23.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Tutorials</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icons-Media.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Webinars</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-25.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Reports</span>
                  </a>
                </div>
              </li>

              {/* About Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className="flex items-center gap-1 hover:text-[#6c63ff] transition-colors"
                >
                  <span>About</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M5.41406 8.33398L10.4141 13.334L15.4141 8.33398"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="absolute left-0 top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50">
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icon-18.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>About</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icons-Users.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Team</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/connection.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Integrations</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/briefcase.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Join Us</span>
                  </a>
                  <a
                    href=""
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors"
                  >
                    <img
                      src="/images/Icons-CService.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>Contact Us</span>
                  </a>
                </div>
              </li>

              {/* Investor Relations */}
              <li>
                <a href="" className="hover:text-[#6c63ff] transition-colors">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Actions (Language, Login, New Account, Mobile Hamburger) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Selector */}
            <a
              href=""
              title="العربية"
              className="inline-flex items-center justify-center gap-1.5 h-[42px] px-3.5 rounded-full bg-[#eee] hover:bg-[#e2e2e2] text-[#121212] text-sm font-semibold transition-colors"
            >
              <img
                src="/images/ar-flag.svg"
                className="w-5 h-5 rounded-full object-cover"
                alt="AR"
              />
              <span>AR</span>
            </a>

            {/* Login Dropdown Button */}
            <div className="relative group hidden sm:inline-block">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 h-[46px] min-w-[110px] px-5 rounded-full bg-[#121212] hover:bg-brand text-[#f7f7f7] text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>Login</span>
                <img
                  src="/images/icons-arrow.svg"
                  className="w-2.5 h-2.5 object-contain"
                  alt=""
                />
              </button>
              <div className="absolute right-0 top-[calc(100%+8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[220px] py-2 z-50">
                <a
                  href=""
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f7f7f7] text-gray-900 text-sm transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/swapTrade_24.svg"
                      className="w-5 h-5 object-contain"
                      alt=""
                    />
                    <span>Derayah Platform</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f7f7f7] text-gray-900 text-sm transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/3OxHh9p.png"
                      className="w-5 h-5 object-contain"
                      alt=""
                    />
                    <span>Derayah Global</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* New Account Button */}
            <a
              href=""
              className="hidden lg:inline-flex items-center justify-center h-[46px] min-w-[124px] sm:min-w-[132px] px-5 rounded-full bg-brand hover:bg-brand-hover active:bg-[#652adf] text-white text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              New account
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden inline-flex items-center justify-center w-[42px] h-[42px] rounded-full bg-brand text-white focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M3 6h18M3 18h18"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#f7f7f7] border-t border-gray-200 px-4 py-6 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li>
              <a
                href=""
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm"
              >
                <span>Trade</span>
                <span className="text-xs text-gray-500">
                  Saudi &amp; Global
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm"
              >
                <span>Invest</span>
                <span className="text-xs text-gray-500">
                  Funds &amp; Supermarket
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm"
              >
                <span>Advisory</span>
                <span className="text-xs text-gray-500">
                  Smart &amp; Advisory
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm"
              >
                <span>Learn</span>
                <span className="text-xs text-gray-500">
                  News &amp; Academy
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm"
              >
                <span>About</span>
                <span className="text-xs text-gray-500">
                  Company &amp; Team
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm"
              >
                <span>Investor Relations</span>
              </a>
            </li>
            <li className="pt-4 border-t border-gray-200 flex flex-col gap-3">
              <a
                href=""
                className="w-full inline-flex items-center justify-center h-[46px] rounded-full bg-[#121212] text-white text-sm font-semibold"
              >
                Login
              </a>
              <a
                href=""
                className="w-full inline-flex items-center justify-center h-[46px] rounded-full bg-brand text-white text-sm font-semibold"
              >
                New account
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
