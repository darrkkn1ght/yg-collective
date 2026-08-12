"use client";

import { products, categories } from "@/app/data/products";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const categoryLabels: Record<string, string> = {
  tees: "Premium Tees",
  "crop-tees": "Crop Tees",
  tanks: "Tank Tops",
  caps: "Face Caps",
  beanies: "Beanies",
};

export default function ProductShowcase() {
  return (
    <section id="shop" className="product-showcase">
      <div className="showcase-header">
        <span className="showcase-tag">The Collection</span>
        <h2 className="showcase-title">SHOP THE DROP</h2>
        <p className="showcase-subtitle">
          Launch prices available for a limited time only. Don&rsquo;t sleep on it.
        </p>
      </div>

      {categories.map((category) => {
        const items = products.filter((p) => p.category === category);
        if (items.length === 0) return null;
        return (
          <div key={category} className="showcase-category">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="category-title"
            >
              {categoryLabels[category] || category}
              <span className="category-line" />
            </motion.h3>
            <div className={category === "tees" ? "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-[80rem] mx-auto mb-16" : "product-grid"}>
              {items.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  regularPrice={product.regularPrice}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
