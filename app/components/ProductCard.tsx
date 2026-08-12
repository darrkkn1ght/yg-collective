"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: number;
  regularPrice: number;
  image: string;
  category: string;
}

const categoryLabels: Record<string, string> = {
  tees: "Premium Tees",
  "crop-tees": "Crop Tees",
  tanks: "Tank Tops",
  caps: "Face Caps",
  beanies: "Beanies",
};

export default function ProductCard({
  name,
  price,
  regularPrice,
  image,
  category,
}: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);

  const formattedRegular = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(regularPrice);

  const discount = Math.round(((regularPrice - price) / regularPrice) * 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="product-card group"
    >
      {/* Sale Badge */}
      {discount > 0 && (
        <div className="product-badge">
          LAUNCH PRICE
        </div>
      )}

      {/* Image */}
      <div className="product-image-wrap">
        <Image
          src={`/images/${image}`}
          alt={name}
          fill
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="product-info p-3 flex flex-col gap-2">
        <h3 className="font-display text-sm md:text-base uppercase tracking-widest leading-tight">{name}</h3>
        
        <div className="flex justify-between items-end mt-auto">
          <span className="text-ink/60 text-[10px] tracking-wider uppercase font-bold">
            {categoryLabels[category] || category}
          </span>
          <div className="flex flex-col items-end">
            <span className="font-bold font-sans text-sm text-ink">{formattedPrice}</span>
            {discount > 0 && (
              <span className="text-ink/40 text-xs line-through">{formattedRegular}</span>
            )}
          </div>
        </div>
      </div>

      {/* CTA Overlay */}
      <div className="product-cta">
        <a
          href="https://wa.me/2347010302895"
          target="_blank"
          rel="noopener noreferrer"
          className="product-order-btn"
        >
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
