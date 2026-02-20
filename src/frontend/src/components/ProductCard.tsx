import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { useCart } from '../hooks/useQueries';
import { getProductImage } from '../utils/productImages';
import type { Product } from '../utils/mockProducts';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isAddingToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(
      { productId: product.id, quantity: BigInt(1) },
      {
        onSuccess: () => {
          toast.success(`${product.name} added to cart!`);
        },
        onError: () => {
          toast.error('Failed to add item to cart');
        },
      }
    );
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-market">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={getProductImage(product.imageRef)}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <Badge className="absolute right-2 top-2 bg-primary/90 backdrop-blur">
          {product.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-display text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <p className="mt-2 text-2xl font-bold text-primary">₹{Number(product.price)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={isAddingToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
