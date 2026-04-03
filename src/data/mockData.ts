import { MenuItem, BlogArticle, Testimonial } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Espresso',
    description: 'Rich, full-bodied espresso with notes of dark chocolate and caramel.',
    price: 4.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Velvet Latte',
    description: 'Smooth steamed milk poured over our signature espresso blend.',
    price: 5.25,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso.',
    price: 5.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Cold Brew Reserve',
    description: 'Slow-steeped for 20 hours for a super smooth, low-acid finish.',
    price: 4.95,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Artisan Croissant',
    description: 'Buttery, flaky pastry baked fresh every morning.',
    price: 3.95,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Tiramisu Delight',
    description: 'Classic Italian dessert with espresso-soaked ladyfingers.',
    price: 7.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '7',
    name: 'Avocado Toast',
    description: 'Sourdough bread topped with smashed avocado, chili flakes, and lime.',
    price: 12.00,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '8',
    name: 'Dark Chocolate Brownie',
    description: 'Intense dark chocolate brownie with sea salt flakes.',
    price: 4.25,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800',
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    title: 'The Art of the Perfect Pour-Over',
    excerpt: 'Discover the secrets to brewing a clean, aromatic cup of coffee at home.',
    content: '...',
    author: 'Elena Vance',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    category: 'Brewing Tips',
  },
  {
    id: '2',
    title: 'Sustainable Sourcing: Our Journey',
    excerpt: 'How we work directly with farmers to ensure the highest quality beans.',
    content: '...',
    author: 'Marcus Thorne',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
    category: 'Lifestyle',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Coffee Enthusiast',
    content: 'The atmosphere at Brew Haven is unmatched. It is my favorite spot to work and enjoy a perfect latte.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Freelance Designer',
    content: 'Best cold brew in the city. The staff is incredibly friendly and the interior design is inspiring.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
];
