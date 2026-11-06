import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default function Testimonials() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language?.startsWith('ar');

  // Static styling configuration mapped with translation indices
  const testimonialStyles = [
    { bg: 'bg-[#c5a8ff]', text: 'text-white' },
    { bg: 'bg-[#652adf]', text: 'text-white' },
    { bg: 'bg-[#d9c7ff]', text: 'text-[#121212]' },
    { bg: 'bg-[#ff8136]', text: 'text-white' }
  ];

  // Fetching translated list array from i18n
  const translatedTestimonials = t('testimonials_section.list', { returnObjects: true }) || [];

  return (
    <section className="py-20 mx-auto lg:py-28 bg-white overflow-hidden">
      <div className="lg:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl sm:text-4xl lg:text-[53px] font-semibold text-black leading-tight tracking-[-0.02em] text-center mb-16 max-w-4xl mx-auto">
          {t('testimonials_section.title')}
        </h2>

        {/* Swiper Slider with partial slide preview for mobile */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.15}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          dir={isArabic ? 'rtl' : 'ltr'}
          key={i18n.language} // Re-renders swiper on language switch for smooth RTL alignment
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="pb-4"
        >
          {Array.isArray(translatedTestimonials) && translatedTestimonials.map((item, index) => {
            const style = testimonialStyles[index % testimonialStyles.length];
            return (
              <SwiperSlide key={index} className="h-auto">
                <div 
                  className={`${style.bg} ${style.text} p-7 rounded-2xl h-[330px] flex flex-col justify-between shadow-sm ${
                    isArabic ? 'text-right' : 'text-left'
                  }`}
                >
                  <h3 className="text-lg lg:text-xl leading-snug tracking-tight">
                    {item.quote}
                  </h3>
                  <p className="text-base font-medium opacity-90">
                    {item.author}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}