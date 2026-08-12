export type Product = {
  id: string;
  name: string;
  category: "tees" | "crop-tees" | "tanks" | "caps" | "beanies";
  price: number;      // launch price, Naira
  regularPrice: number;
  image: string;       // filename inside /public/images/
  altImage?: string;   // optional back/alt view
};

export const products: Product[] = [
  {
    id: "cap-black-white-angel",
    name: "Est. 2026 Angel Trucker",
    category: "caps",
    price: 5000,
    regularPrice: 7000,
    image: "1000673663.jpg",
  },
  {
    id: "tank-pink",
    name: "Signature Pink Tank",
    category: "tanks",
    price: 15000,
    regularPrice: 17000,
    image: "1000673668.jpg",
  },
  {
    id: "tank-white",
    name: "Signature White Tank",
    category: "tanks",
    price: 15000,
    regularPrice: 17000,
    image: "1000673682.jpg",
  },
  {
    id: "crop-white",
    name: "Bat Graphic Crop Tee (White)",
    category: "crop-tees",
    price: 17000,
    regularPrice: 20000,
    image: "1000673686.png",
  },
  {
    id: "crop-black",
    name: "Bat Graphic Crop Tee (Black)",
    category: "crop-tees",
    price: 17000,
    regularPrice: 20000,
    image: "1000673687.png",
  },
  {
    id: "crop-pink",
    name: "Bat Graphic Crop Tee (Pink)",
    category: "crop-tees",
    price: 17000,
    regularPrice: 20000,
    image: "1000673688.png",
  },
  {
    id: "tee-black-angel",
    name: "Gifted Always Premium Tee (Black)",
    category: "tees",
    price: 23000,
    regularPrice: 25000,
    image: "1000673689.png",
  },
  {
    id: "tee-white-angel",
    name: "Gifted Always Premium Tee (White)",
    category: "tees",
    price: 23000,
    regularPrice: 25000,
    image: "1000673690.png",
  },
  {
    id: "beanie-white",
    name: "Hardware Logo Beanie (White)",
    category: "beanies",
    price: 13000,
    regularPrice: 15000,
    image: "1000673693.png",
  }
];

export const categories: Product["category"][] = [
  "tees",
  "crop-tees",
  "tanks",
  "caps",
  "beanies",
];

export const priceList = [
  { item: "Premium Tees (White/Black)", regular: 25000, launch: 23000 },
  { item: "Crop Tees", regular: 20000, launch: 17000 },
  { item: "Tank Tops", regular: 17000, launch: 15000 },
  { item: "Beanies", regular: 15000, launch: 13000 },
  { item: "Face Caps", regular: 7000, launch: 5000 },
];
