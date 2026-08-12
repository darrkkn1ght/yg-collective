"use client";

import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export default function ShopPreview() {
  // Select 4 standout products for the homepage
  const featuredProducts = products.filter(p => 
    ["striped-tee-black", "crop-pink", "tee-black-angel", "tank-white"].includes(p.id)
  );

  return (
    <section className="bg-ink text-bone py-32 overflow-hidden border-t border-bone/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-2">
              The Archive
            </h2>
            <p className="text-bone/50 text-sm tracking-[0.2em] uppercase">
              Curated Essentials
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link href="/shop" className="text-gold text-sm font-bold tracking-[0.2em] uppercase hover:text-bone transition-colors">
              View All //
            </Link>
          </motion.div>
        </div>

        {/* Mobile: Swipeable flex row | Desktop: Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[70vw] sm:w-[45vw] md:w-auto shrink-0 snap-center"
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/shop" className="hero-cta-primary w-full text-center">
            View Full Collection
          </Link>
        </div>
        
      </div>
    </section>
  );
}
