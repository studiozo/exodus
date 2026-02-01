export type Theme = 'NOIR' | 'PAPER' | 'BRUTALIST' | 'ORGANIC' | 'EDITORIAL';

export interface TattooImage {
  id: string;
  url: string;
  category: string;
  title: string;
}

export interface NavItem {
  label: string;
  value: string;
}

export enum Page {
  HOME = 'HOME',
  GALLERY = 'GALLERY',
  STUDIO = 'STUDIO',
  PHILOSOPHY = 'PHILOSOPHY',
  BOOKING = 'BOOKING'
}
