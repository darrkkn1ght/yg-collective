import Image from "next/image";
import { brand } from "../data/brand";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] bg-[#0a0a0a] overflow-hidden pt-20 pb-20">
      
      {/* Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 z-0">
        <h1 className="font-display text-[22vw] leading-[0.8] text-bone whitespace-nowrap text-center flex flex-col">
          <span>YOUNG ARE</span>
          <span>GIFTED ALWAYS</span>
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-24">
        <div className="flex flex-col md:flex-row items-center w-full">
          
          {/* Left Text Column */}
          <div className="w-full md:w-5/12 text-left z-20 order-2 md:order-1 pt-12 md:pt-0">
            <p className="text-gold text-xs tracking-[0.3em] font-bold uppercase mb-6 animate-fade-up">
              Est. {brand.established}
            </p>
            
            <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] text-bone mb-6 animate-fade-up" style={{ animationDelay: "0.4s", letterSpacing: "-0.03em" }}>
              {brand.name.toUpperCase()}
            </h2>

            <p className="text-bone/50 text-sm tracking-[0.15em] uppercase mb-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              Premium Streetwear &bull; Lagos to the World
            </p>

            <div className="flex gap-4 flex-wrap animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <a href="#shop" className="hero-cta-primary">
                Shop the Drop
              </a>
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

          {/* Right Product Images Bleeding */}
          <div className="w-full md:w-7/12 relative h-[50vh] md:h-[80vh] flex justify-end order-1 md:order-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute top-[15%] right-[30%] w-[60%] h-full z-10">
              <Image
                src="/images/1000673689.png"
                alt="Gifted Always Premium Tee – Black (Front)"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
            <div className="absolute top-0 -right-[5%] md:-right-[15%] w-[65%] h-full z-20">
              <Image
                src="/images/1000673690.png"
                alt="Gifted Always Premium Tee – White (Front & Back)"
                fill
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
