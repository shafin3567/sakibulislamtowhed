export interface ProductSubItem {
  id: string;
  name: string;
  description: string;
  priceEstimate?: string;
  popular?: boolean;
}

export interface Product {
  id: string;
  title: string;
  icon: string;
  image: string;
  description: string;
  bulletItems: string[];
  subItems: ProductSubItem[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  stars: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  likes: string;
  comments: string;
}

export interface CustomOrder {
  category: string;
  theme: string;
  flavor: string;
  weight: string;
  date: string;
  message: string;
  packingType: string;
  qty: string;
}
