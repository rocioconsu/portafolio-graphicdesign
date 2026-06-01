const cards = [
  {
    n: "01",
    title: "Brand Identity",
    body: "Creating visual systems, logos, packaging and brand worlds with a clear and memorable personality.",
    accent: "bg-pink",
  },
  {
    n: "02",
    title: "Art Direction",
    body: "Building visual concepts, moods and compositions that connect design with emotion and storytelling.",
    accent: "bg-ivory",
  },
  {
    n: "03",
    title: "3D Design",
    body: "Exploring digital objects, product renders and visual experiences through light, texture and form.",
    accent: "bg-butter",
  },
  {
    n: "04",
    title: "Creative AI",
    body: "Using AI as a creative tool for image generation, video creation and visual experimentation.",
    accent: "bg-pink",
  },
  {
    n: "05",
    title: "Motion Design",
    body: "Adding movement, rhythm and energy to visual communication.",
    accent: "bg-ivory",
  },
];

export default function Exploring() {
  return (
    <section data-testid="exploring-section" className="bg-burgundy text-ivory py-24 md:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-butter mb-5 font-sans">
              <span className="tabular bg-butter text-burgundy px-2 py-1 mr-2">B · 03</span>
              Currently Exploring
            </p>
            <h2 className="font-serif text-ivory text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]">
              The disciplines <br /><span className="italic text-butter">I live in.</span>
            </h2>
          </div>
          <p className="font-sans text-ivory/70 text-sm max-w-xs">
            A non-exhaustive index of the practices that shape my work today —
            equal parts craft, code and curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cards.map((c, i) => (
            <article
              key={c.n}
              data-testid={`explore-card-${c.n}`}
              className={`${c.accent} text-charcoal p-7 md:p-9 flex flex-col justify-between min-h-[300px] md:min-h-[340px] relative overflow-hidden group ${
                i === 0 ? "lg:row-span-2 lg:min-h-[700px]" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif italic text-burgundy text-xl">{c.n}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50 font-sans">Discipline</span>
              </div>
              <div>
                <h3 className="font-serif text-burgundy text-3xl md:text-4xl leading-tight tracking-[-0.01em] mb-4">
                  {c.title}
                </h3>
                <p className="font-sans text-charcoal/80 text-[14px] md:text-[15px] leading-relaxed max-w-[34ch]">
                  {c.body}
                </p>
              </div>
              <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full border border-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-burgundy text-lg">
                ✦
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
