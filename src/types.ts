export interface DentalTreatment {
  name: string;
  isStudy?: boolean;
}

export interface DentalService {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  treatments: string[];
  isStudiesList?: boolean; // For radiología bucal where they are called "Estudios"
  image: string;
  badgeLabel: string;
  focusHighlights: string[];
}

export interface OralHealthArticle {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  points: string[];
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  areaName: string;
  description: string;
  image: string;
}
