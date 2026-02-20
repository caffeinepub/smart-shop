import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Cart } from './Cart';
import { useCart } from '../hooks/useQueries';

export function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + Number(item.quantity), 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/assets/generated/shop-logo.dim_200x200.png"
              alt="Smart Shop"
              className="h-10 w-10 rounded-lg"
            />
            <img
              src="/assets/generated/farm-to-table.dim_400x400.png"
              alt="Farm to table"
              className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background"
            />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-primary">Smart Shop</h1>
            <p className="text-xs text-muted-foreground">Fresh from the market</p>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-lg">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
