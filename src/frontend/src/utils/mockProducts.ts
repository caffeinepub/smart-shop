// Mock product data since backend doesn't have a getProducts method
export interface Product {
  id: bigint;
  name: string;
  price: bigint;
  description: string;
  category: string;
  imageRef: string;
}

export const mockProducts: Product[] = [
  {
    id: BigInt(1),
    name: 'Fresh Tomatoes',
    price: BigInt(45),
    description: 'Ripe, juicy tomatoes perfect for salads and cooking',
    category: 'Vegetables',
    imageRef: 'market-7',
  },
  {
    id: BigInt(2),
    name: 'Green Beans',
    price: BigInt(60),
    description: 'Crisp and tender green beans, freshly harvested',
    category: 'Vegetables',
    imageRef: 'market-3',
  },
  {
    id: BigInt(3),
    name: 'Red Onions',
    price: BigInt(35),
    description: 'Sweet and pungent red onions for all your cooking needs',
    category: 'Vegetables',
    imageRef: 'market-1',
  },
  {
    id: BigInt(4),
    name: 'Fresh Cabbage',
    price: BigInt(40),
    description: 'Crunchy cabbage heads, perfect for salads and stir-fries',
    category: 'Vegetables',
    imageRef: 'market-5',
  },
  {
    id: BigInt(5),
    name: 'Cucumbers',
    price: BigInt(30),
    description: 'Cool, refreshing cucumbers straight from the farm',
    category: 'Vegetables',
    imageRef: 'market-5',
  },
  {
    id: BigInt(6),
    name: 'Bell Peppers',
    price: BigInt(80),
    description: 'Colorful bell peppers packed with vitamins',
    category: 'Vegetables',
    imageRef: 'market-3',
  },
  {
    id: BigInt(7),
    name: 'Fresh Garlic',
    price: BigInt(120),
    description: 'Aromatic garlic bulbs for flavoring your dishes',
    category: 'Vegetables',
    imageRef: 'market-5',
  },
  {
    id: BigInt(8),
    name: 'Carrots',
    price: BigInt(50),
    description: 'Sweet, crunchy carrots rich in beta-carotene',
    category: 'Vegetables',
    imageRef: 'market-7',
  },
  {
    id: BigInt(9),
    name: 'Cauliflower',
    price: BigInt(55),
    description: 'Fresh white cauliflower florets',
    category: 'Vegetables',
    imageRef: 'market-5',
  },
  {
    id: BigInt(10),
    name: 'Green Chilies',
    price: BigInt(40),
    description: 'Spicy green chilies to add heat to your meals',
    category: 'Vegetables',
    imageRef: 'market-3',
  },
  {
    id: BigInt(11),
    name: 'Fresh Spinach',
    price: BigInt(35),
    description: 'Nutrient-rich spinach leaves',
    category: 'Leafy Greens',
    imageRef: 'market-1',
  },
  {
    id: BigInt(12),
    name: 'Potatoes',
    price: BigInt(25),
    description: 'Versatile potatoes for all your cooking needs',
    category: 'Vegetables',
    imageRef: 'market-7',
  },
];

export function getProductById(id: bigint): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return mockProducts;
  return mockProducts.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter((p) => p.name.toLowerCase().includes(lowerQuery));
}

export function getCategories(): string[] {
  const categories = new Set(mockProducts.map((p) => p.category));
  return ['All', ...Array.from(categories)];
}
