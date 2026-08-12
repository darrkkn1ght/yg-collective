import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";
import BrandStory from "@/app/components/BrandStory";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandStory />
      <section className="bg-ink flex justify-center pb-32">
        <Link href="/shop" className="hero-cta-primary text-center">
          View Full Collection
        </Link>
      </section>
    </>
  );
}
