"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { brand } from "../data/brand";

export default function BootLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run loader once per session using sessionStorage
    const hasLoaded = sessionStorage.getItem("yg_booted");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("yg_booted", "true");
      document.body.style.overflow = "unset";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="bootloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-24 h-24 mb-12"
          >
            <Image
              src={brand.logo.white}
              alt="YG Collective"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="overflow-hidden h-[1px] w-32 bg-bone/10 relative"
          >
             <motion.div 
               initial={{ x: "-100%" }}
               animate={{ x: "200%" }}
               transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
               className="absolute top-0 left-0 h-full w-1/3 bg-gold"
             />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
