import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      bg: 'bg-[#c5a8ff]',
      text: 'text-white',
      quote: '“Derayah Financial has given me access to a diverse range of investment opportunities and helped me grow my portfolio.”',
      author: 'Mohamed N.'
    },
    {
      id: 2,
      bg: 'bg-[#652adf]',
      text: 'text-white',
      quote: '“Speed and flexibility are what matter most to me. Derayah processes my requests before I even hang up! Whether it’s buying or transferring, the team always delivers.”',
      author: 'Waleed H.'
    },
    {
      id: 3,
      bg: 'bg-[#d9c7ff]',
      text: 'text-[#121212]',
      quote: '“Derayah excels in diversification of products. They also handle everything over the phone, and the service is excellent.”',
      author: 'Mohammad B.'
    },
    {
      id: 4,
      bg: 'bg-[#ff8136]',
      text: 'text-white',
      quote: '“Derayah offers quick responses, reduced trading fees, and high financing benefits. The service and Murabaha Financing product are exceptional.”',
      author: 'Abdullah M.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-4xl lg:text-[53px] font-semibold text-black leading-tight tracking-[-0.02em] text-center mb-16 max-w-4xl mx-auto">
          Why customers choose Derayah
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className={`${item.bg} ${item.text} p-7 rounded-2xl min-h-[330px] flex flex-col justify-between shadow-sm`}
            >
              <h3 className="text-2xl font-semibold leading-snug tracking-tight">
                {item.quote}
              </h3>
              <p className="text-base font-medium opacity-90">
                {item.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

