export default function Marquee() {
  const words = [
    "YOUNG AND GIFTED",
    "★",
    "EST. 2026",
    "★",
    "PREMIUM STREETWEAR",
    "★",
    "LAGOS TO THE WORLD",
    "★",
    "GIFTED ALWAYS",
    "★",
    "LIMITED DROP",
    "★",
    "YOUNG AND GIFTED",
    "★",
    "EST. 2026",
    "★",
    "PREMIUM STREETWEAR",
    "★",
    "LAGOS TO THE WORLD",
    "★",
    "GIFTED ALWAYS",
    "★",
    "LIMITED DROP",
    "★",
  ];

  const marqueeText = words.join("   ");

  return (
    <section className="marquee-section relative" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <div className="marquee-track">
        <span className="marquee-content">{marqueeText}</span>
        <span className="marquee-content" aria-hidden="true">{marqueeText}</span>
      </div>
    </section>
  );
}
