import React from 'react';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 grid-border-b">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-h2 leading-tight reveal-up">
          We believe in the tension between structured design and organic texture. Our studio is a blank
          canvas where stark lines meet soft human elements.
        </h2>
        <div className="mt-16 flex justify-between items-end grid-border-t pt-8">
          <span className="mono-label">The Philosophy</span>
          <a href="#book" className="btn-brutal rounded-full px-8 py-3 mono-label cursor-hover">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
