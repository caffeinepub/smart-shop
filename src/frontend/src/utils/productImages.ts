// Map product image references to actual marketplace images
const imageMap: Record<string, string> = {
  'market-1': '/assets/choudhary-ji-sabji-dukan-samastipur-p68egzvx6s-250.jpg',
  'market-2': '/assets/choudhary-ji-sabji-dukan-samastipur-p68egzvx6s-250-1.jpg',
  'market-3': '/assets/choudhary-ji-sabji-dukan-samastipur-uxz7e8pwvt.jpg',
  'market-4': '/assets/choudhary-ji-sabji-dukan-samastipur-uxz7e8pwvt-1.jpg',
  'market-5': '/assets/hari-sabji-vala-hanumangarh-1p9s8neo44.jpg',
  'market-6': '/assets/hari-sabji-vala-hanumangarh-1p9s8neo44-1.jpg',
  'market-7': '/assets/indian-marketplace-showing-different-kinds-of-vegetables.jpg',
  'market-8': '/assets/indian-marketplace-showing-different-kinds-of-vegetables-1.jpg',
};

export function getProductImage(imageRef: string): string {
  return imageMap[imageRef] || imageMap['market-7'];
}

export function getRandomMarketImage(): string {
  const keys = Object.keys(imageMap);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return imageMap[randomKey];
}
