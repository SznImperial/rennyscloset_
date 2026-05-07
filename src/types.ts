export type Page = 'home' | 'collection' | 'about' | 'contact';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
  category?: string;
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'cargo-pants',
    name: 'CARGO PANTS',
    price: '₦45,000',
    image: '/images/cargo-pants.png',
    tag: 'Best Seller'
  },
  {
    id: 'joggers',
    name: 'JOGGERS',
    price: '₦38,000',
    image: '/images/joggers.png'
  },
  {
    id: 'cottage-skirt',
    name: 'COTTAGE SKIRT',
    price: '₦52,000',
    image: '/images/cottage-skirt.png'
  },
  {
    id: 'lounge-pants',
    name: 'LOUNGE PANTS',
    price: '₦42,000',
    image: '/images/1922bb43c8726e410152d74a1811afe8.jpg'
  },
  {
    id: 'jorts',
    name: 'JORTS',
    price: '₦35,000',
    image: '/images/22b2441956c94b34931d7f74cd2b3a48.jpg',
    tag: 'New Arrival'
  }
];

export const CURATED_PRODUCTS: Product[] = [
  {
    id: 'curated-jorts',
    name: 'Jorts',
    price: '',
    image: '/images/22b2441956c94b34931d7f74cd2b3a48.jpg',
    description: 'Casual denim cuts for effortless days',
    tag: 'New Arrival'
  },
  {
    id: 'curated-cottage-skirt',
    name: 'Cottage Skirts',
    price: '',
    image: '/images/curated-cottage-skirt.png',
    description: 'Flowing silhouettes for ease and movement',
    tag: 'Best Seller'
  },
  {
    id: 'curated-joggers',
    name: 'Joggers',
    price: '',
    image: '/images/curated-joggers.png',
    description: 'Soft fits for every season',
    tag: 'Seasonal'
  }
];
