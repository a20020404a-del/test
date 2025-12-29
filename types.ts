export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
  duration?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface AiResponse {
  suggestion: string;
  colorPalette: string[];
}
