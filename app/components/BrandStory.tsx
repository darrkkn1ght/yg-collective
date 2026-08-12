import Link from "next/link";

export default function BrandStory() {
  return (
    <section id="about" className="bg-bone text-ink py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid gap-24 lg:gap-40 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1 animate-fade-up">
          <p className="text-lg leading-relaxed mb-6">
            YG Collective was born from a simple belief: that young people carry
            extraordinary gifts, and what they wear should reflect that truth.
            Rooted in Lagos and inspired by a global creative culture, we craft
            premium streetwear that speaks to ambition, artistry, and
            authenticity. 
          </p>
          <p className="text-lg leading-relaxed">
            Every piece is designed to make you feel seen — because
            you are young, you are gifted, and you are always enough.
          </p>
        </div>
        
        <div className="order-1 md:order-2 animate-fade-up flex flex-col items-start" style={{ animationDelay: "0.2s" }}>
          <blockquote className="font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-12">
            "YOU ARE <br/>
            YOUNG. <br/>
            YOU ARE <br/>
            <span className="text-gold">GIFTED.</span>"
          </blockquote>
          
          <Link href="/shop" className="hero-cta-primary">
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
