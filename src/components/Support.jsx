import React from 'react';

export default function Support() {
  return (
    <section className="py-24 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        <span className="inline-flex items-center px-4 h-7 rounded-full bg-[#eee]/90 text-[#121212] text-xs font-semibold mb-4">
          HUMAN FIRST SUPPORT
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[53px] font-semibold text-[#121212] leading-[0.96] tracking-[-1.12px] my-4 max-w-xl text-center">
          Always here to support you
        </h2>
        <a 
          href="tel:920024433" 
          className="inline-flex items-center justify-center h-[54px] px-8 rounded-full bg-[#9e6eff] hover:bg-[#864aff] text-white text-base font-bold transition-all mb-14 shadow-sm hover:shadow-md"
        >
          Call us on 920024433
        </a>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          
          <div 
            className="h-[330px] rounded-2xl p-6 flex flex-col justify-end text-left bg-cover bg-center text-white relative overflow-hidden shadow-sm" 
            style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/New-Project-350x330-c-default.jpg')" }}
          >
            <h3 className="text-2xl font-semibold leading-snug tracking-tight text-white">
              On-call brokers: trade easily over the phone
            </h3>
          </div>

          <div 
            className="h-[330px] rounded-2xl p-6 flex flex-col justify-end text-left bg-cover bg-center text-white relative overflow-hidden shadow-sm" 
            style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/New-Project-1-350x330-c-default.jpg')" }}
          >
            <h3 className="text-2xl font-semibold leading-snug tracking-tight text-white">
              Dedicated support for all your financial inquiries
            </h3>
          </div>

          <div 
            className="h-[330px] rounded-2xl p-6 flex flex-col justify-end text-left bg-cover bg-center text-white relative overflow-hidden shadow-sm" 
            style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/New-Project-2-350x330-c-default.jpg')" }}
          >
            <h3 className="text-2xl font-semibold leading-snug tracking-tight text-white">
              Expert advisors to help you succeed
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}

