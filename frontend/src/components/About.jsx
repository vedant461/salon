import React from 'react';
import { BlurReveal } from '@/components/ui/blur-reveal';

export default function About() {
  const statement =
    "We believe in the tension between structured design and organic texture. Our studio is a blank canvas where stark lines meet soft human elements.";

  return (
    <section id="about" className="px-6 md:px-12 py-24 grid-border-b">
      <div className="max-w-5xl mx-auto">
        <BlurReveal
          as="h2"
          inView={true}
          once={true}
          delay={0.1}
          speedReveal={1.6}
          speedSegment={0.7}
          className="text-h2 leading-tight"
        >
          {statement}
        </BlurReveal>
      </div>
    </section>
  );
}
