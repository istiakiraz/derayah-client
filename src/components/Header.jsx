import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import enFlag from "../../public/images/enFlag.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const loginDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target)
      ) {
        setIsLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language || "en";
  const isArabic = currentLanguage.startsWith("ar");

  useEffect(() => {
    document.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const toggleLanguage = (e) => {
    e.preventDefault();
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 w-full pb-5 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-20 ${isArabic ? "flex-row" : ""}`}
        >
          {/* Left: Logo & Desktop Menu Links */}
          <div
            className={`flex items-center gap-6 xl:gap-8 ${isArabic ? "flex-row" : ""}`}
          >
            {/* Logo */}
            <Link
              to=""
              className="shrink-0"
              aria-label="Derayah Financial Home"
            >
              <img
                src="/images/cropped-New_Logo_Derayah.png"
                className="w-[70px] h-[64px] object-contain"
                alt="Derayah Financial"
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <ul
              className={`hidden lg:flex items-center gap-5 xl:gap-6 m-0 p-0 list-none text-sm font-semibold text-black ${isArabic ? "flex-row" : ""}`}
            >
              {/* Trade Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className={`flex items-center gap-1 hover:text-[#6c63ff] transition-colors ${isArabic ? "flex-row" : ""}`}
                >
                  <span>{t("header.trade")}</span>
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
                <div
                  className={`absolute ${isArabic ? "right-0" : "left-0"} top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50 ${isArabic ? "text-right" : "text-left"}`}
                >
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-2.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.trade_menu.local")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icons-Map.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.trade_menu.global")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Passport_icon_SVG_01.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.trade_menu.foreign")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/marGins_24.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.trade_menu.margins")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/dollar-sign-circle-2424.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.trade_menu.pricing")}</span>
                  </a>
                </div>
              </li>

              {/* Invest Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className={`flex items-center gap-1 hover:text-[#6c63ff] transition-colors ${isArabic ? "flex-row" : ""}`}
                >
                  <span>{t("header.invest")}</span>
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
                <div
                  className={`absolute ${isArabic ? "right-0" : "left-0"} top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50 ${isArabic ? "text-right" : "text-left"}`}
                >
                  <a
                    href=""
                    className={`flex items-center justify-between px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}
                    >
                      <img
                        src="/images/Icon-9.svg"
                        className="w-6 h-6 object-contain"
                        alt=""
                      />
                      <span>{t("header.invest_menu.equity")}</span>
                    </div>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Money-Riyal-Fund-24.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.invest_menu.money_market")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-7.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.invest_menu.real_estate")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-8.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.invest_menu.discretionary")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-6.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.invest_menu.mutual")}</span>
                  </a>
                </div>
              </li>

              {/* Advisory Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className={`flex items-center gap-1 hover:text-[#6c63ff] transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("header.advisory")}</span>
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
                <div
                  className={`absolute ${isArabic ? "right-0" : "left-0"} top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50 ${isArabic ? "text-right" : "text-left"}`}
                >
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-16.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.advisory_menu.smart")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-17.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.advisory_menu.investment")}</span>
                  </a>
                </div>
              </li>

              {/* Learn Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className={`flex items-center gap-1 hover:text-[#6c63ff] transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("header.learn")}</span>
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
                <div
                  className={`absolute ${isArabic ? "right-0" : "left-0"} top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50 ${isArabic ? "text-right" : "text-left"}`}
                >
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-22.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.learn_menu.news")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-24.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.learn_menu.blog")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-23.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.learn_menu.tutorials")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icons-Media.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.learn_menu.webinars")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-25.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.learn_menu.reports")}</span>
                  </a>
                </div>
              </li>

              {/* About Dropdown */}
              <li className="relative group py-6">
                <a
                  href=""
                  className={`flex items-center gap-1 hover:text-[#6c63ff] transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <span>{t("header.about")}</span>
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
                <div
                  className={`absolute ${isArabic ? "right-0" : "left-0"} top-[calc(100%-8px)] hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[275px] py-2 z-50 ${isArabic ? "text-right" : "text-left"}`}
                >
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icon-18.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.about_menu.about")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icons-Users.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.about_menu.team")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/connection.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.about_menu.integrations")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/briefcase.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.about_menu.join")}</span>
                  </a>
                  <a
                    href=""
                    className={`flex items-center gap-3 px-5 py-3 hover:bg-[#f7f7f7] text-gray-900 font-normal text-sm transition-colors ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src="/images/Icons-CService.svg"
                      className="w-6 h-6 object-contain"
                      alt=""
                    />
                    <span>{t("header.about_menu.contact")}</span>
                  </a>
                </div>
              </li>

              {/* Investor Relations */}
              <li>
                <a href="" className="hover:text-[#6c63ff] transition-colors">
                  {t("header.investor_relations")}
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Actions (Language, Login, New Account, Mobile Hamburger) */}
          <div
            className={`flex items-center gap-3 sm:gap-4 ${isArabic ? "flex-row" : ""}`}
          >
            {/* Language Selector */}
            <a
              href="#lang"
              onClick={toggleLanguage}
              title={isArabic ? "English" : "العربية"}
              className={`inline-flex items-center justify-center gap-1.5 h-[42px] px-3.5 rounded-full bg-[#eee] hover:bg-[#e2e2e2] text-[#121212] text-sm font-semibold transition-colors cursor-pointer ${isArabic ? "flex-row-reverse" : ""}`}
            >
              <img
                src={isArabic ? enFlag : "/images/ar-flag.svg"}
                className="w-5 h-5 rounded-full object-cover"
                alt={isArabic ? "EN" : "AR"}
              />
              <span>{isArabic ? "EN" : "AR"}</span>
            </a>

            {/* Login Dropdown Button */}
            <div 
             ref={loginDropdownRef}
            className="relative hidden sm:inline-block">
              <button
                type="button"
                onClick={() => setIsLoginOpen((prev) => !prev)}
                className={`inline-flex items-center justify-center gap-2 h-[46px] min-w-[110px] px-5 rounded-full bg-[#121212] hover:bg-brand text-[#f7f7f7] text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <span>{t("header.login")}</span>

                <img
                  src="/images/icons-arrow.svg"
                  className={`w-2.5 h-2.5 object-contain transition-transform duration-200 ${
                    isLoginOpen ? "rotate-180" : ""
                  }`}
                  alt=""
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute ${
                  isArabic ? "left-0" : "right-0"
                } top-[calc(100%+8px)] ${
                  isLoginOpen ? "flex" : "hidden"
                } flex-col bg-white border border-gray-200 rounded-xl shadow-xl min-w-[220px] py-2 z-50 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                <a
                  href="https://onlinetrade24.com/login"
                  className={`flex items-center justify-between px-4 py-2.5 hover:bg-[#f7f7f7] text-gray-900 text-sm transition-colors ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-2.5 ${
                      isArabic ? "flex-row-reverse" : ""
                    }`}
                  >
                    <img
                      src="/images/swapTrade_24.svg"
                      className="w-5 h-5 object-contain"
                      alt=""
                    />
                    <span>{t("header.login_menu.platform")}</span>
                  </div>

                  <svg
                    className={`w-4 h-4 text-gray-400 ${isArabic ? "rotate-180" : ""}`}
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
                  href="https://onlinetrade24.com/login"
                  className={`flex items-center justify-between px-4 py-2.5 hover:bg-[#f7f7f7] text-gray-900 text-sm transition-colors ${
                    isArabic ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-2.5 ${
                      isArabic ? "flex-row-reverse" : ""
                    }`}
                  >
                    <img
                      src="/images/3OxHh9p.png"
                      className="w-5 h-5 object-contain"
                      alt=""
                    />
                    <span>{t("header.login_menu.global")}</span>
                  </div>

                  <svg
                    className={`w-4 h-4 text-gray-400 ${isArabic ? "rotate-180" : ""}`}
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
              href="https://onlinetrade24.com/register"
              className="hidden lg:inline-flex items-center justify-center h-11.5 min-w-31 sm:min-w-33 px-5 rounded-full bg-brand hover:bg-brand-hover active:bg-brand-dark text-white text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              {t("header.new_account")}
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden inline-flex items-center justify-center w-10.5 h-10.5 rounded-full bg-brand text-white focus:outline-none cursor-pointer"
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
        <div
          className={`lg:hidden bg-[#f7f7f7] border-t border-gray-200 px-4 py-6 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto ${isArabic ? "text-right" : "text-left"}`}
        >
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li>
              <a
                href="https://onlinetrade24.com/login"
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <span>{t("header.trade")}</span>
                <span className="text-xs text-gray-500">
                  {t("header.mobile.trade_desc")}
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://onlinetrade24.com/login"
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <span>{t("header.invest")}</span>
                <span className="text-xs text-gray-500">
                  {t("header.mobile.invest_desc")}
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://onlinetrade24.com/login"
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <span>{t("header.advisory")}</span>
                <span className="text-xs text-gray-500">
                  {t("header.mobile.advisory_desc")}
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://onlinetrade24.com/login"
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <span>{t("header.learn")}</span>
                <span className="text-xs text-gray-500">
                  {t("header.mobile.learn_desc")}
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://onlinetrade24.com/login"
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <span>{t("header.about")}</span>
                <span className="text-xs text-gray-500">
                  {t("header.mobile.about_desc")}
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://onlinetrade24.com/login"
                className={`flex items-center justify-between p-3 rounded-lg hover:bg-white text-gray-800 font-semibold text-sm ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <span>{t("header.investor_relations")}</span>
              </a>
            </li>
            <li className="pt-4 border-t border-gray-200 flex flex-col gap-3">
              <a
                href="https://onlinetrade24.com/login"
                className="w-full inline-flex items-center justify-center h-11.5 rounded-full bg-dark text-white text-sm font-semibold"
              >
                {t("header.login")}
              </a>
              <a
                href="https://onlinetrade24.com/register"
                className="w-full inline-flex items-center justify-center h-11.5 rounded-full bg-brand text-white text-sm font-semibold"
              >
                {t("header.new_account")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
