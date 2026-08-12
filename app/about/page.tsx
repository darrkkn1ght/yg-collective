import { brand } from "@/app/data/brand";
import Image from "next/image";

export const metadata = {
  title: "About Us | YG Collective",
  description: "The story of YG Collective, a premium streetwear brand born in Lagos.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ink">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <p className="text-gold text-xs tracking-[0.3em] font-bold uppercase mb-4">
          Est. {brand.established}
        </p>
        <h1 className="font-display text-5xl md:text-8xl text-bone mb-16 leading-[0.9]">
          THE STORY
        </h1>

        {/* Two-column editorial */}
        <div className="grid md:grid-cols-2 gap-24 mb-24">
          <div>
            <p className="text-bone/70 text-lg leading-relaxed">
              Founded in {brand.established}, YG Collective was born on the streets of Lagos with a singular mission: to craft premium streetwear for the Young and Gifted. We believe that true style isn&apos;t just worn—it&apos;s earned, lived, and expressed through uncompromised quality and intentional design.
            </p>
          </div>
          <div>
            <p className="text-bone/70 text-lg leading-relaxed">
              Every piece in our collection is a statement. From our heavyweight premium tees to our signature bat graphic crop tops, we bridge the gap between elevated fashion and raw street energy. YG Collective isn&apos;t just a brand; it&apos;s a testament to those who dare to stand out.
            </p>
          </div>
        </div>

        {/* Full-bleed image block */}
        <div className="relative w-full aspect-[21/9] overflow-hidden border-2 border-bone/10 bg-[#0d0d0d]">
          <Image 
            src="/images/1000673689.png" 
            alt="YG Collective Lifestyle" 
            fill 
            className="object-cover opacity-30 mix-blend-screen" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-4xl md:text-7xl tracking-widest text-bone opacity-90">
              GIFTED ALWAYS
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

