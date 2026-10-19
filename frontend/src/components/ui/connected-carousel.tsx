"use client";

import React from "react";

import type { CarouselItem } from "@/components/ui/connected-carousel";

import { CalendlyCarousel } from "@/components/ui/connected-carousel";

export interface CarouselItem {
  id: string | number;
  stat: string;
  quote: string;
  author: string;
  role: string;
  defaultImage: string;
  selectedImage: string;
  alt?: string;
}

export interface CalendlyCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CarouselItem[];
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

export { CalendlyCarousel };
export default CalendlyCarousel;
