"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { brand } from "../data/brand";
import Link from "next/link";

const HERO_IMAGES = [
  "/images/IMG_6284.JPEG",
  "/images/IMG_6242.JPEG",
  "/images/IMG_5628.JPG.jpeg",
  "/images/IMG_5630.JPG.jpeg"
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative flex flex-col items-center justify-center min-h-[100vh] bg-ink overflow-hidden pt-20 pb-20">
      
      {/* Parallax Background Slideshow */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-[120%]"
        style={{ y }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={HERO_IMAGES[currentImageIndex]}
              alt="YG Collective Lifestyle"
              fill
              className="object-cover object-center md:object-top opacity-50"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20 z-10" />
      </motion.div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-24">
        <div className="flex flex-col items-start w-full md:w-8/12">
          
          <p className="text-gold text-xs tracking-[0.3em] font-bold uppercase mb-6 animate-fade-up">
            Est. {brand.established}
          </p>
          
          <h2 className="font-display text-[13vw] sm:text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-bone mb-6 animate-fade-up drop-shadow-xl break-words" style={{ animationDelay: "0.4s", letterSpacing: "-0.03em" }}>
            {brand.name.toUpperCase()}
          </h2>

          <p className="text-bone/80 text-sm md:text-base tracking-[0.15em] uppercase mb-10 animate-fade-up max-w-lg" style={{ animationDelay: "0.6s" }}>
            Premium Streetwear &bull; Ibadan to the World
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <Link href="/shop" className="hero-cta-primary">
              Shop the Drop
            </Link>
            <a
              href="https://wa.me/2347010302895"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary"
            >
              Order via WhatsApp
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
