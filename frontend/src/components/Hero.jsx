import { motion } from "framer-motion";
import {
  PaletteIcon,
  BowIcon,
  BrushIcon,
  StarIcon,
  FlowerIcon,
  HeartIcon,
  ScissorsIcon,
  PenIcon,
} from "./Doodles";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-ivory noise-overlay pt-28 md:pt-32"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10 pt-6 md:pt-10">
        {/* Moodboard grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
          {/* Left big headline column */}
          <div className="col-span-12 lg:col-span-6 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[11px] md:text-xs uppercase tracking-[0.32em] text-burgundy mb-5 md:mb-6 font-sans"
            >
              ✦ Graphic Designer · 3D · Art Direction
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-burgundy leading-[0.92] tracking-[-0.02em] relative"
              data-testid="hero-title"
            >
              <span className="block text-[16vw] sm:text-[12vw] lg:text-[8vw]">Hi! I'm</span>
              <span className="block text-[20vw] sm:text-[15vw] lg:text-[9.5vw] italic">Rocío</span>

              {/* doodle near title */}
              <FlowerIcon className="hidden md:block absolute -top-4 right-[18%] w-14 h-14 text-burgundy -rotate-12 opacity-90" />
              <StarIcon className="hidden md:block absolute top-1/2 -left-6 w-10 h-10 text-burgundy rotate-12 opacity-80" />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 md:mt-6 max-w-md relative"
            >
              <p className="font-serif italic text-xl md:text-2xl text-charcoal leading-snug">
                Graphic Designer
              </p>
              <p className="mt-3 md:mt-4 text-charcoal/80 text-[14px] md:text-[15px] leading-relaxed font-sans">
                I create visual identities, 3D experiences and creative projects
                through design, storytelling and experimentation.
              </p>
              <BowIcon className="hidden md:block absolute -right-10 -bottom-6 w-20 h-16 text-burgundy -rotate-6 opacity-90" />
            </motion.div>
          </div>

          {/* Right: moodboard collage */}
          <div className="col-span-12 lg:col-span-6 relative min-h-[520px] md:min-h-[680px]">
            {/* Image 1 — main portrait (largest, top-right) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="absolute top-0 right-2 md:right-6 w-[50%] md:w-[54%] aspect-[3/4] overflow-hidden shadow-[0_20px_60px_-20px_rgba(122,24,54,0.35)] z-20"
            >
              <img
                src="/assets/portrait3.jpg"
                alt="Rocío portrait"
                className="w-full h-full object-cover"
                data-testid="hero-portrait-main"
              />
              <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.25em] text-ivory/95 font-sans bg-burgundy/85 px-2 py-1">
                Plaza de España
              </span>
            </motion.div>

            {/* Image 2 — new (portrait4) top-left small */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-6 left-2 md:left-0 w-[36%] md:w-[34%] aspect-[4/5] overflow-hidden z-10"
            >
              <img
                src="/assets/portrait4.jpg"
                alt="Rocío"
                className="w-full h-full object-cover"
                data-testid="hero-portrait-2"
              />
            </motion.div>

            {/* Image 3 — portrait2 (sand floor) bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-2 right-10 md:right-24 w-[40%] md:w-[36%] aspect-square overflow-hidden z-30"
            >
              <img
                src="/assets/portrait2.jpg"
                alt="Rocío"
                className="w-full h-full object-cover"
                data-testid="hero-portrait-3"
              />
            </motion.div>

            {/* Image 4 — new (portrait5) bottom-left, on pink block */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="absolute bottom-12 md:bottom-20 left-[28%] md:left-[24%] w-[34%] md:w-[32%] aspect-[3/4] overflow-hidden bg-pink z-10"
            >
              <img
                src="/assets/portrait5.jpg"
                alt="Rocío"
                className="w-full h-full object-cover mix-blend-multiply"
                data-testid="hero-portrait-4"
              />
            </motion.div>

            {/* Scattered hand-drawn doodles */}
            <PaletteIcon className="absolute top-[2%] left-[26%] w-12 md:w-16 h-12 md:h-16 text-burgundy -rotate-12 z-40" />
            <BrushIcon className="absolute top-[38%] right-[-2%] w-14 md:w-20 h-14 md:h-20 text-burgundy rotate-[20deg] z-40" />
            <HeartIcon className="absolute bottom-[18%] right-[2%] w-10 md:w-14 h-10 md:h-14 text-burgundy -rotate-12 z-40" />
            <ScissorsIcon className="hidden md:block absolute top-[12%] right-[40%] w-12 h-12 text-burgundy rotate-[35deg] z-40" />
            <PenIcon className="absolute bottom-[2%] left-[6%] w-12 md:w-16 h-12 md:h-16 text-burgundy -rotate-6 z-40" />
            <StarIcon className="absolute top-[58%] left-[8%] w-8 md:w-10 h-8 md:h-10 text-burgundy rotate-12 z-40" />
            <FlowerIcon className="hidden md:block absolute bottom-[40%] left-[44%] w-12 h-12 text-burgundy -rotate-[10deg] z-40 opacity-90" />

            {/* Sticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="absolute top-2 left-0 md:top-2 md:left-2 bg-butter text-burgundy text-[10px] md:text-[11px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-sans -rotate-6 z-50"
            >
              ✦ Moodboard
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
