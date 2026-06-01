const phrase = "TURNING IDEAS INTO VISUAL EXPERIENCES ✦ VISUAL STORYTELLING ✦ ";

export default function Marquee() {
  const repeated = Array.from({ length: 3 }).map(() => phrase).join("");
  return (
    <section
      data-testid="marquee-ribbon"
      className="bg-butter text-burgundy overflow-hidden border-y border-burgundy/15 select-none"
      aria-label="Featured statement"
    >
      <div className="py-5 md:py-6">
        <div className="marquee-track font-serif italic text-3xl md:text-5xl lg:text-6xl whitespace-nowrap leading-none">
          <span className="pr-8">{repeated}</span>
          <span className="pr-8">{repeated}</span>
        </div>
      </div>
    </section>
  );
}
