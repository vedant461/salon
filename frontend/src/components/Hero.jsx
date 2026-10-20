import React from 'react';
import heroImage from '@/assets/9b705e8225fd4ecb8cc788ea819393ea.webp';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 grid-border-b min-h-[90vh]">
      {/* Left Text Column */}
      <div className="col-span-1 md:col-span-8 p-6 md:p-12 flex flex-col justify-center grid-border-b md:grid-border-b-0 md:grid-border-r border-borderSubtle">
        <span className="mono-label mb-8 reveal-up">EST. 2024 / Volume 01</span>
        <h1 className="text-hero leading-[0.85] tracking-tight uppercase reveal-up delay-100">
          Tactile<br />Geometry
        </h1>
        <p className="font-mono mt-12 max-w-md text-sm leading-relaxed reveal-up delay-200">
          A brutalist approach to hair and skin aesthetics. We strip away the unnecessary to reveal the
          architectural form of natural beauty.
        </p>
      </div>

      {/* Right Image Column */}
      <div className="col-span-1 md:col-span-4 p-6 md:p-12 flex items-end justify-center relative overflow-hidden group cursor-hover">
        <div className="mono-label absolute top-6 left-6 z-10 mix-blend-difference text-white">
          01 / FORM
        </div>
        <div className="w-full h-full min-h-[50vh] media-card">
          <img
            src={heroImage}
            alt="Hero Editorial Image"
            className="parallax-img"
            data-speed="0.05"
          />
        </div>
      </div>
    </section>
  );
}
