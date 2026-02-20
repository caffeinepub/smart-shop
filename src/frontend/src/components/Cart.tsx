import { ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { useCart } from '../hooks/useQueries';
import { getProductById } from '../utils/mockProducts';
import { getProductImage } from '../utils/productImages';

export function Cart() {
  const { cart, clearCart, isClearingCart } = useCart();

  const cartItems = cart.map((item) => ({
    ...item,
    product: getProductById(item.productId),
  }));

  const total = cartItems.reduce((sum, item) => {
    if (!item.product) return sum;
    return sum + Number(item.product.price) * Number(item.quantity);
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 py-8">
        <div className="rounded-full bg-muted p-6">
          <ShoppingCart className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="text-center">
          <h3 className="font-display text-lg font-semibold">Your cart is empty</h3>
          <p className="text-sm text-muted-foreground">Add some fresh produce to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="space-y-1 pb-4">
        <h2 className="font-display text-2xl font-bold">Shopping Cart</h2>
        <p className="text-sm text-muted-foreground">{cart.length} items in your cart</p>
      </div>

      <ScrollArea className="flex-1 -mx-6 px-6">
        <div className="space-y-4">
          {cartItems.map((item) => {
            if (!item.product) return null;
            return (
              <div key={item.product.id.toString()} className="flex gap-4 rounded-lg border p-4">
                <img
                  src={getProductImage(item.product.imageRef)}
                  alt={item.product.name}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="font-semibold">{item.product.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    ₹{Number(item.product.price)} × {Number(item.quantity)}
                  </p>
                  <p className="font-semibold text-primary">
                    ₹{Number(item.product.price) * Number(item.quantity)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <div className="space-y-4 pt-4">
        <Separator />
        <div className="flex items-center justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-primary">₹{total}</span>
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => clearCart()}
          disabled={isClearingCart}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
