import { LucideIcon } from 'lucide-react';

export enum SlideType {
  COVER = 'COVER',
  CONTENT = 'CONTENT',
  INTERACTIVE_CHECKLIST = 'INTERACTIVE_CHECKLIST',
  AI_GENERATOR = 'AI_GENERATOR',
  CHART = 'CHART',
  OFFER = 'OFFER',
  CTA = 'CTA'
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string; // URL for picsum
  bullets?: string[];
  ctaText?: string;
  ctaLink?: string;
  highlight?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  label: string;
}
