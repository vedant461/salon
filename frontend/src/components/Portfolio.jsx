import React from 'react';

export default function Portfolio() {
  return (
    <section id="work" className="grid-border-b">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Project 1 */}
        <div className="grid-border-b md:grid-border-b-0 md:grid-border-r p-6 pb-20 relative group cursor-hover reveal-up">
          <div className="flex justify-between items-center mb-6 mono-label">
            <span>Project / 01</span>
            <span>Cut & Structure</span>
          </div>
          <div className="aspect-[4/5] media-card w-full max-w-lg mx-auto">
            <img src="/b5a45a6ffb25e4fa3a9b48ca94052876.jpg" alt="Editorial 1" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-6 pb-20 relative group cursor-hover reveal-up delay-100">
          <div className="flex justify-between items-center mb-6 mono-label">
            <span>Project / 02</span>
            <span>Color & Light</span>
          </div>
          <div className="aspect-[4/5] media-card w-full max-w-lg mx-auto mt-24">
            <img
              src="/female-hairdresser-making-hairstyle-blonde-woman-beauty-salon_176420-4461.avif"
              alt="Editorial 2"
              className="parallax-img"
              data-speed="0.08"
            />
          </div>
        </div>
      </div>

      {/* Full width block */}
      <div className="grid-border-t p-6 cursor-hover reveal-up">
        <div className="flex justify-between items-center mb-6 mono-label">
          <span>Project / 03</span>
          <span>Avant Garde</span>
        </div>
        <div className="aspect-video w-full media-card">
          <img
            src="https://placehold.co/1600x900/d4d4d4/a3a3a3?text=Widescreen+Feature"
            alt="Editorial 3"
          />
        </div>
      </div>
    </section>
  );
}
