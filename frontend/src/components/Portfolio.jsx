import React from 'react';
import { CalendlyCarousel } from '@/components/ui/connected-carousel';

// Unsplash stock images for reliable, high-resolution visuals
const STORIES_DATA = [
  {
    id: 'studio-prism',
    stat: '140+ editorial sessions completed',
    quote:
      'Precision architectural scissor work and tailored coloring redefined our studio aesthetic completely.',
    author: 'Elena Rostova',
    role: 'Creative Director at Studio Prism',
    defaultImage:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    selectedImage:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elena Rostova in salon studio showcase',
  },
  {
    id: 'veloce-ai',
    stat: '99.4% client satisfaction index',
    quote:
      'Custom blonde balayage and structural texturing delivered an effortless, runway-ready finish.',
    author: 'Julian Chen',
    role: 'Lead Stylist at Veloce Collective',
    defaultImage:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    selectedImage:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Julian Chen showcasing precision hair styling',
  },
  {
    id: 'hyperion-health',
    stat: '65+ editorial features worldwide',
    quote:
      'The brutalist interior paired with bespoke botanical treatments creates an unmatched sensory experience.',
    author: 'Dr. Amara Okafor',
    role: 'Aesthetics Consultant at Hyperion',
    defaultImage:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80',
    selectedImage:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dr. Amara Okafor at modern aesthetics salon',
  },
  {
    id: 'aura-craft',
    stat: '100% cruelty-free sustainable products',
    quote:
      'Eliminating chemical residues and adopting organic clay toners noticeably elevated our client hair health.',
    author: 'Maya Lindqvist',
    role: 'Founder & Colorist at Aura Craft',
    defaultImage:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80',
    selectedImage:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Maya Lindqvist hair styling session',
  },
  {
    id: 'echo-labs',
    stat: '82% surge in repeat reservations',
    quote:
      'Effortless consultation rituals and avant-garde cut techniques keep our clientele coming back across cities.',
    author: 'Siddharth Rao',
    role: 'Editorial Director at Echo Labs',
    defaultImage:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    selectedImage:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Siddharth Rao on editorial set',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="grid-border-b w-full overflow-hidden relative isolate z-10">
      {/* Portfolio Section Header */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between grid-border-b">
        <div>
          <span className="mono-label block text-xs tracking-widest text-textPrimary/70 mb-2">
            Selected Works & Stories // 01 - 05
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Curated Transformations
          </h2>
        </div>
        <p className="font-mono text-xs md:text-sm text-textPrimary/70 mt-3 md:mt-0 max-w-sm">
          Interactive showcase featuring client transformations, editorial styling, and master craft.
        </p>
      </div>

      {/* Replaced Project 1 & 2 with Connected Carousel */}
      <div className="w-full py-8 md:py-12 bg-transparent">
        <CalendlyCarousel
          items={STORIES_DATA}
          autoPlayInterval={6000}
          pauseOnHover={false}
        />
      </div>

      {/* Project 03 - Avant Garde Full Width Feature */}
      <div className="grid-border-t p-6 cursor-hover reveal-up">
        <div className="flex justify-between items-center mb-6 mono-label">
          <span>Project / 03</span>
          <span>Avant Garde & Runways</span>
        </div>
        <div className="aspect-video w-full media-card max-h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80"
            alt="Avant Garde Runway Editorial"
          />
        </div>
      </div>
    </section>
  );
}
