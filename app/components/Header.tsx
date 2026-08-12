"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { brand } from "../data/brand";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink text-bone border-b border-charcoal" : "bg-transparent text-bone"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src={brand.logo.white} 
            alt="YG Collective Logo" 
            width={48} 
            height={48} 
            className="object-contain"
          />
        </Link>

        <nav className="hidden gap-8 md:flex items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  isActive ? "text-gold" : "hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a 
            href={`https://wa.me/${brand.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-gold hover:text-bone transition-colors"
          >
            WhatsApp CTA
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="bg-ink border-t border-charcoal px-4 py-4 md:hidden flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block text-sm font-bold uppercase tracking-widest ${
                  isActive ? "text-gold" : "hover:text-gold"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a 
            href={`https://wa.me/${brand.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-center text-sm font-bold uppercase tracking-widest text-gold hover:text-bone transition-colors"
          >
            WhatsApp CTA
          </a>
        </nav>
      )}
    </header>
  );
}
