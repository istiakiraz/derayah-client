import React from "react";

export default function ReadyToGrow() {
  return (
    <section
      className="bg-brand text-white py-24 lg:py-32 relative overflow-hidden flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/images/2ESUOWG-1-1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-[77px] font-semibold text-white leading-[1.05] tracking-[-0.03em] mb-10 max-w-4xl text-center">
          Get started with Derayah in under 3 minutes
        </h2>

        <a
          href=""
          className="inline-flex items-center justify-center h-[54px] px-9 rounded-full bg-white hover:bg-brand-hover hover:text-white text-[#121212] font-semibold text-base transition-all shadow-md"
        >
          Sign up
        </a>
      </div>
    </section>
  );
}
