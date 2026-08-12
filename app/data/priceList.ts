export interface PriceItem {
  item: string;
  regular: number;
  launch: number;
}

export const priceList: PriceItem[] = [
  { item: "Striped Tees", regular: 30000, launch: 27000 },
  { item: "Premium Tees (White/Black)", regular: 25000, launch: 23000 },
  { item: "Crop Tees", regular: 20000, launch: 17000 },
  { item: "Tank Tops", regular: 17000, launch: 15000 },
  { item: "Beanies", regular: 15000, launch: 13000 },
  { item: "Face Caps", regular: 7000, launch: 5000 },
];
