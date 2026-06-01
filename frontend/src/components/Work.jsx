import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    title: "Trankis",
    tag: "Brand Identity · Packaging · 3D",
    body: "Visual identity, packaging design and 3D campaign for a fruit beverage brand inspired by relaxation, color and summer. From the wordmark to every sun-soaked can, Trankis is a love letter to the slow afternoons.",
    year: "2024",
    img: "/assets/trankis.png",
    bg: "bg-pink",
    layout: "image-left",
  },
  {
    n: "02",
    title: "Vicci",
    tag: "3D Design · Campaign · Eyewear",
    body: "3D campaign and visual direction for an eyewear brand inspired by frozen geometry and summer light. Each sculpted frame floats inside a block of ice — built for the boardroom, cool for the summer.",
    year: "2024",
    img: "/assets/vicci.png",
    bg: "bg-ivory",
    layout: "image-right",
  },
  {
    n: "03",
    title: "Nike × Miu Miu",
    tag: "3D Footwear · Luxury Campaign",
    body: "A speculative collaboration: 3D footwear design, visualization and luxury campaign concept titled SOFT MOTION. A limited-edition dunk surrounded by roses — half sport, half couture.",
    year: "2024",
    img: "/assets/nike-miumiu.jpg",
    bg: "bg-butter",
    layout: "image-left",
  },
  {
    n: "04",
    title: "Nua — Creative AI",
    tag: "Brand Identity · Editorial · Creative AI",
    body: "A new brand of facial sunscreen sticks for young, active people — created from scratch. Identity, packaging and an AI-assisted editorial campaign for the magazine spread \"Aplica y sigue\".",
    year: "2025",
    img: "/assets/nua.png",
    bg: "bg-pink",
    layout: "image-right",
  },
];

function Project({ p, index }) {
  const isImageLeft = p.layout === "image-left";
  return (
    <article
      data-testid={`project-${p.n}`}
      className={`${p.bg} relative overflow-hidden min-h-screen flex items-center`}
    >
      <div className="mx-auto max-w-[1480px] w-full px-6 md:px-10 py-16 md:py-20">
        <div className={`grid grid-cols-12 gap-6 md:gap-10 items-center ${isImageLeft ? "" : "lg:[direction:rtl]"}`}>
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="col-span-12 lg:col-span-7 [direction:ltr]"
          >
            <div className="relative w-full flex items-center justify-center float-on-hover">
              <img
                src={p.img}
                alt={p.title}
                className="w-auto h-auto max-h-[78vh] max-w-full object-contain"
                data-testid={`project-${p.n}-image`}
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="col-span-12 lg:col-span-5 [direction:ltr]"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif italic text-burgundy text-4xl md:text-5xl tabular">{p.n}</span>
              <span className="font-serif italic text-burgundy/70 text-lg">—</span>
              <span className="text-[11px] uppercase tracking-[0.28em] text-charcoal/70 font-sans">{p.year}</span>
            </div>
            <h3
              className="font-serif text-burgundy text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.02em] mb-4"
              data-testid={`project-${p.n}-title`}
            >
              {p.title}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.28em] text-burgundy mb-5 font-sans">
              {p.tag}
            </p>
            <p className="text-charcoal/85 font-sans text-[14px] md:text-[15px] leading-relaxed max-w-[44ch]">
              {p.body}
            </p>
            <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-burgundy font-sans">
              <span className="bg-butter text-burgundy px-2.5 py-1 rounded-full">Case</span>
              <span className="link-underline cursor-default">View visuals ↗</span>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" data-testid="work-section" className="bg-ivory">
      {/* Header */}
      <div className="mx-auto max-w-[1480px] px-6 md:px-10 pt-24 md:pt-36 pb-14 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-burgundy font-sans mb-5">
              Selected Work
            </p>
            <h2 className="font-serif text-burgundy text-[15vw] sm:text-[12vw] lg:text-[10vw] leading-[0.9] tracking-[-0.03em]">
              Selected <span className="italic">Work</span>
            </h2>
          </div>
          <p className="font-sans text-charcoal/70 text-sm max-w-xs md:text-right">
            Four chapters from the last two years. Brand worlds, 3D explorations
            and an editorial AI debut.
          </p>
        </div>
      </div>

      {/* Projects */}
      {projects.map((p, i) => (
        <Project key={p.n} p={p} index={i} />
      ))}
    </section>
  );
}
