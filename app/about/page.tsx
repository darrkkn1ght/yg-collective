import { brand } from "@/app/data/brand";
import Image from "next/image";

export const metadata = {
  title: "About Us | YG Collective",
  description: "The story of YG Collective, a premium streetwear brand born in Lagos.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ink flex flex-col items-center">
      <div className="max-w-4xl px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl text-bone mb-8">
          THE {brand.name.toUpperCase()} STORY
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#e3cd93] to-[#c9a961] mx-auto mb-12 rounded-full"></div>
        <p className="text-bone/80 text-lg md:text-xl leading-relaxed mb-8 text-left">
          Founded in {brand.established}, YG Collective was born on the streets of Lagos with a singular mission: to craft premium streetwear for the Young and Gifted. We believe that true style isn't just worn—it's earned, lived, and expressed through uncompromised quality and intentional design.
        </p>
        <p className="text-bone/80 text-lg md:text-xl leading-relaxed mb-16 text-left">
          Every piece in our collection is a statement. From our heavyweight premium tees to our signature bat graphic crop tops, we bridge the gap between elevated fashion and raw street energy. YG Collective isn't just a brand; it's a testament to those who dare to stand out.
        </p>
        
        <div className="relative w-full aspect-video mt-12 rounded-xl overflow-hidden drop-shadow-2xl bg-[#0d0d0d]">
           <Image src="/images/1000673689.png" alt="YG Collective Lifestyle" fill className="object-cover opacity-30 mix-blend-screen" />
           <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-display text-3xl md:text-5xl tracking-widest text-gold opacity-90">GIFTED ALWAYS</p>
           </div>
        </div>
      </div>
    </div>
  );
}
