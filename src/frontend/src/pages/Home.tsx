import { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductGrid } from '../components/ProductGrid';
import { mockProducts } from '../utils/mockProducts';
import { Toaster } from '../components/ui/sonner';
import { SiX, SiFacebook, SiInstagram } from 'react-icons/si';

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(query));
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner Section */}
        <section className="relative overflow-hidden">
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="/assets/generated/hero-banner.dim_1200x400.png"
              alt="Fresh vegetables from the market"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent">
              <div className="container h-full flex items-center">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Fresh from the{' '}
                    <span className="text-primary">Market</span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Discover the finest selection of fresh vegetables and produce, handpicked daily for quality and freshness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b bg-card">
          <div className="container py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 max-w-md">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="container py-8">
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h3>
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
            </p>
          </div>
          <ProductGrid products={filteredProducts} />
        </section>

        {/* Organic Farm-to-Table Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <img
                  src="/assets/generated/organic-section.dim_800x500.png"
                  alt="Organic farming landscape"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-bold">
                  Farm to Table <span className="text-primary">Freshness</span>
                </h3>
                <p className="text-muted-foreground">
                  We partner with local farmers to bring you the freshest organic produce. 
                  Every vegetable is carefully selected and delivered straight from the farm to your table, 
                  ensuring maximum freshness and nutritional value.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    100% Organic & Chemical-Free
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    Harvested Daily for Peak Freshness
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    Supporting Local Farmers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-auto">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/assets/generated/shop-logo.dim_200x200.png"
                  alt="Smart Shop"
                  className="h-8 w-8 rounded"
                />
                <span className="font-display font-bold text-lg">Smart Shop</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted source for fresh vegetables and produce, delivered with care.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiX className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Smart Shop. Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'smart-shop'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
