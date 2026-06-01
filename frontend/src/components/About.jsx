export default function About() {
  return (
    <section id="about" data-testid="about-section" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Left label */}
          <div className="col-span-12 md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-burgundy font-sans sticky top-32">
              About the designer
            </p>
          </div>

          {/* Center text */}
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-burgundy text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em]">
              I design with <span className="italic">intention</span>, curiosity and a deep love for the visual craft.
            </h2>
            <div className="mt-10 space-y-5 text-charcoal/85 font-sans text-[15px] md:text-base leading-relaxed max-w-[58ch]">
              <p>
                I'm Rocío, a graphic designer working between brand identity, 3D and art direction.
                My practice lives somewhere between editorial design and visual experimentation —
                I love building worlds, not just logos.
              </p>
              <p>
                I believe design should feel like something. Whether it's a fruit beverage that
                tastes like summer, a footwear concept that feels like silk, or an AI experiment
                that opens a new aesthetic — every project starts with a feeling and ends with a story.
              </p>
              <p className="font-serif italic text-burgundy text-lg md:text-xl pt-4">
                "Always chasing the line between minimal and expressive."
              </p>
            </div>
          </div>

          {/* Right portrait */}
          <div className="col-span-12 md:col-span-3 relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/assets/portrait1.jpg"
                alt="Rocío Consuegra portrait"
                className="w-full h-full object-cover"
                data-testid="about-portrait"
              />
            </div>
            <div className="mt-3 flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-charcoal/60 font-sans">
              <span>Rocío C.</span>
              <span className="tabular">— ph. self</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
