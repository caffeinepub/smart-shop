import { ProductCard } from './ProductCard';
import type { Product } from '../utils/mockProducts';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <img
          src="/assets/generated/promo-basket.dim_600x600.png"
          alt="Shopping basket with vegetables"
          className="w-48 h-48 object-contain mb-6 opacity-80"
        />
        <p className="text-lg font-semibold text-muted-foreground">No products found</p>
        <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id.toString()} product={product} />
      ))}
    </div>
  );
}
