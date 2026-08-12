"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section id="about" className="bg-bone text-ink py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl grid gap-16 lg:gap-32 md:grid-cols-2 md:items-start">
        <div className="order-2 md:order-1 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-[60vh] md:h-[80vh] shadow-2xl"
          >
            <Image
              src="/images/IMG_6074.jpg"
              alt="YG Collective Lifestyle"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg"
          >
            <p className="text-lg leading-relaxed mb-6 font-medium">
              YG Collective was born from a simple belief: that young people carry
              extraordinary gifts, and what they wear should reflect that truth.
              Rooted in Ibadan and inspired by a global creative culture, we craft
              premium streetwear that speaks to ambition, artistry, and
              authenticity. 
            </p>
            <p className="text-lg leading-relaxed font-medium">
              Every piece is designed to make you feel seen — because
              you are young, you are gifted, and you are always enough.
            </p>
          </motion.div>
        </div>
        
        <div className="order-1 md:order-2 flex flex-col items-start md:sticky md:top-40 pt-10">
          <motion.blockquote 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.85] tracking-tight mb-12"
          >
            "YOU ARE <br/>
            YOUNG. <br/>
            YOU ARE <br/>
            <span className="text-gold">GIFTED.</span>"
          </motion.blockquote>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/about" className="inline-block border-2 border-ink text-ink hover:bg-ink hover:text-bone transition-colors px-8 py-4 font-bold tracking-wider text-sm uppercase">
              Read Our Manifesto
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
