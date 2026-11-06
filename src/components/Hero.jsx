import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

import heroImg2arabic from "../../public/images/Zero-Arabic-mob.png";
import heroImg2mob from "../../public/images/Zero-English-mob.png";
import heroImg1 from "../../public/images/homepageCharter_AR.png";

import Trust_Badges_arabic from "../../public/images/Trust_Badges_arabic.png";
import Trust_Badges_arabic_mobile from "../../public/images/Trust_Badges_arabic_mobile.png";

// Animation Variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// transformPerspective variant 
const flipLeft = {
  hidden: {
    opacity: 0,
    rotateY: 180,
    transformPerspective: 800,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    transformPerspective: 800,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.6,
      ease: "easeOut",
    },
  },
};

const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.7,
      ease: "easeOut",
    },
  },
};

const zoomIn2 = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const { i18n, t } = useTranslation();
  const [running, setRunning] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const currentLanguage = i18n.language || "en";
  const isArabic = currentLanguage.startsWith("ar");

  // Language change hole slider state reset
 
  useEffect(() => {
    setActiveSlide(0);
    setRunning(true);
  }, [currentLanguage]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Progress Bar */}
      <div className="absolute top-25 start-0 z-40 w-full h-1.25">
        <div
          className={`h-full bg-[#f47b42] ${
            running ? "animate-hero-progress" : "w-0"
          }`}
        />
      </div>

      <Swiper
       
        key={currentLanguage}
        dir={isArabic ? "rtl" : "ltr"}
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={900}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        onSlideChangeTransitionStart={() => setRunning(false)}
        onSlideChangeTransitionEnd={(swiper) => {
          setRunning(true);
          setActiveSlide(swiper.realIndex);
        }}
        className="w-full"
      >
        {/* =========================
            SLIDE 1
        ========================== */}

        <SwiperSlide>
          <div className="relative min-h-150 lg:min-h-220 flex items-center lg:start-60 top-20 bg-white">
            {/* Background Image */}
            <img
              src={heroImg1}
              alt={t("hero.title")}
              className={`absolute inset-0 w-full h-100 top-20 lg:top-20 lg:h-full object-cover object-center select-none ${
                isArabic ? "" : "right-100"
              }`}
              draggable="false"
            />

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-white/10" />

            {/* Content */}
            <div className="relative lg:end-60 -top-35 md:-top-20 lg:-top-35 z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
              <div className="max-w-155">
                {/* Heading - Fade Up */}
                <motion.h1
                  key={`heading-${activeSlide}-${currentLanguage}`}
                  variants={fadeUp}
                  initial="hidden"
                  animate={activeSlide === 0 ? "visible" : "hidden"}
                  className="text-3xl sm:text-4xl lg:text-[68px] font-bold text-black leading-[1.05] tracking-tight mb-5"
                >
                  {t("hero.title")}
                </motion.h1>

                {/* Description - Fade Up */}
                <motion.p
                  key={`description-${activeSlide}-${currentLanguage}`}
                  variants={fadeUp}
                  initial="hidden"
                  animate={activeSlide === 0 ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                  className="text-xs sm:text-md lg:text-[24px] font-semibold text-[#4d4d4d] leading-snug mb-7 max-w-xl"
                >
                  {t("hero.description")}
                </motion.p>

                <div className="flex flex-col items-center justify-center md:items-start lg:justify-start mt-15 lg:mt-0">
                  {/* CTA Button - Flip Left */}
                  <motion.a
                    key={`button-${activeSlide}-${currentLanguage}`}
                    variants={flipLeft}
                    initial="hidden"
                    animate={activeSlide === 0 ? "visible" : "hidden"}
                    transition={{ delay: 0.4 }}
                    href=""
                    className="inline-flex items-center justify-center px-4 lg:px-10 h-12 w-fit rounded-[10px] bg-[#9565f5] hover:bg-[#8050e5] text-white text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {t("hero.cta")}
                  </motion.a>

                  {/* App Download Widget - Fade Right */}
                  <motion.div
                    key={`app-widget-${activeSlide}-${currentLanguage}`}
                    variants={fadeRight}
                    initial="hidden"
                    animate={activeSlide === 0 ? "visible" : "hidden"}
                    transition={{ delay: 0.6 }}
                    className={`mt-8 md:inline-flex items-center w-fit hidden gap-4 bg-[#f7f7f7] rounded-[25px] p-4 ${
                      isArabic ? "pl-5 pr-4" : "pr-5"
                    } border border-gray-100`}
                  >
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-gray-500 leading-tight">
                        {t("hero.download_title")}
                        <br />
                        <strong className="font-semibold text-black">
                          {t("hero.download_app")}
                        </strong>
                      </p>

                      <div className="flex items-center gap-2">
                        <a
                          href="https://apps.apple.com/us/app/derayah-financial/id6502446831"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/images/iOSdownload.webp"
                            className="w-10 h-10 object-contain hover:opacity-80 transition"
                            alt="Download on App Store"
                          />
                        </a>

                        <a
                          href="https://play.google.com/store/apps/details?id=com.derayah&hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/images/AndroidDownload.webp"
                            className="w-10 h-10 object-contain hover:opacity-80 transition"
                            alt="Get it on Google Play"
                          />
                        </a>
                      </div>
                    </div>

                    {/* QR Code */}
                    <div
                      className={`border-gray-200 ${
                        isArabic ? "border-r pr-4 pl-0" : "border-l pl-4"
                      }`}
                    >
                      <img
                        src="/images/QrCodeDerayah.png"
                        className="w-20 h-20 object-contain rounded-xl bg-white p-1"
                        alt="QR Code"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges - Zoom In */}
          <div className="absolute bottom-5 start-0 z-20 w-full pointer-events-none">
            <motion.div
              key={`trust-${activeSlide}-${currentLanguage}`}
              variants={zoomIn}
              initial="hidden"
              animate={activeSlide === 0 ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex justify-center"
            >
              <img
                src={isArabic ? Trust_Badges_arabic : "/images/TrustBoxEs2.png"}
                className="hidden sm:block max-w-full h-auto max-h-36 object-contain"
                alt={t("hero.alt_trust")}
              />

              <img
                src={
                  isArabic
                    ? Trust_Badges_arabic_mobile
                    : "/images/mobileENTrustBoxes2.png"
                }
                className="sm:hidden max-w-full -mt-45 h-30"
                alt={t("hero.alt_trust")}
              />
            </motion.div>
          </div>
        </SwiperSlide>

        {/* =========================
            SLIDE 2
        ========================== */}

        <SwiperSlide>
          <div className="w-full min-h-[450px] lg:min-h-220 bg-[#15003a] hidden lg:flex items-center justify-center">
            {/* Image - Zoom In */}
            <motion.img
              key={`slide2-${activeSlide}-${currentLanguage}`}
              variants={zoomIn2}
              initial="hidden"
              animate={activeSlide === 1 ? "visible" : "hidden"}
              src={isArabic ? heroImg2arabic : heroImg2mob}
              alt={t("hero.alt_slide2")}
              className="w-full h-full mt-25 lg:mt-20 lg:min-h-[720px] object-cover object-center select-none"
              draggable="false"
            />
          </div>

          <div className="w-full min-h-[550px] lg:min-h-220 lg:hidden bg-[#15003a] flex items-center justify-center">
            {/* Image - Zoom In */}
            <motion.img
              key={`slide2-mob-${activeSlide}-${currentLanguage}`}
              variants={zoomIn2}
              initial="hidden"
              animate={activeSlide === 1 ? "visible" : "hidden"}
              src={isArabic ? heroImg2arabic : heroImg2mob}
              alt={t("hero.alt_slide2")}
              className="w-full h-full mt-25 lg:mt-20 min-h-80 object-cover object-center select-none"
              draggable="false"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}