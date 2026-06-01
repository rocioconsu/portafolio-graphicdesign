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
          <div className="col-span-12 lg:col-span-6 relative min-h-[560px] md:min-h-[700px]">
            {/* Soft pink backing pad to unify the moodboard */}
            <div className="hidden md:block absolute inset-x-2 inset-y-4 bg-pink/30 rounded-sm -rotate-1" aria-hidden />

            {/* Image 1 — main portrait BW (top-right, largest) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="absolute top-0 right-2 md:right-4 w-[48%] md:w-[50%] bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)] z-30"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/assets/portrait3.jpg"
                  alt="Rocío portrait"
                  className="w-full h-full object-cover"
                  data-testid="hero-portrait-main"
                />
              </div>
              <span className="absolute bottom-1.5 left-2 text-[9px] uppercase tracking-[0.25em] text-burgundy font-sans">
                Plaza de España · 24
              </span>
            </motion.div>

            {/* Image 2 — portrait4 (top-left small) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-4 md:top-8 left-0 md:left-2 w-[36%] md:w-[34%] bg-white p-2 pb-5 shadow-[0_18px_40px_-20px_rgba(122,24,54,0.4)] z-20"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/portrait4.jpg"
                  alt="Rocío"
                  className="w-full h-full object-cover"
                  data-testid="hero-portrait-2"
                />
              </div>
              <span className="absolute bottom-1 left-2 text-[9px] uppercase tracking-[0.25em] text-burgundy font-sans">
                Costa · summer
              </span>
            </motion.div>

            {/* Image 3 — portrait5 sunset (middle-left, visible) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-[44%] md:top-[46%] left-2 md:left-6 w-[38%] md:w-[36%] bg-white p-2 pb-5 shadow-[0_18px_40px_-20px_rgba(122,24,54,0.4)] z-30"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/assets/portrait5.jpg"
                  alt="Rocío sunset"
                  className="w-full h-full object-cover"
                  data-testid="hero-portrait-4"
                />
              </div>
              <span className="absolute bottom-1 left-2 text-[9px] uppercase tracking-[0.25em] text-burgundy font-sans">
                Golden hour
              </span>
            </motion.div>

            {/* Image 4 — portrait2 sand floor (bottom-right) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="absolute bottom-0 right-6 md:right-16 w-[40%] md:w-[36%] bg-white p-2 pb-5 shadow-[0_18px_40px_-20px_rgba(122,24,54,0.4)] z-30"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src="/assets/portrait2.jpg"
                  alt="Rocío"
                  className="w-full h-full object-cover"
                  data-testid="hero-portrait-3"
                />
              </div>
              <span className="absolute bottom-1 left-2 text-[9px] uppercase tracking-[0.25em] text-burgundy font-sans">
                Off duty
              </span>
            </motion.div>

            {/* Tape pieces — unify the polaroids */}
            <span className="hidden md:block absolute top-[-6px] right-[28%] w-14 h-5 bg-butter/85 rotate-[12deg] z-40" aria-hidden />
            <span className="hidden md:block absolute top-[2%] left-[26%] w-12 h-4 bg-butter/80 -rotate-[10deg] z-40" aria-hidden />
            <span className="hidden md:block absolute top-[42%] left-[36%] w-12 h-4 bg-butter/80 rotate-[6deg] z-40" aria-hidden />

            {/* Scattered hand-drawn doodles, fewer + better placed */}
            <PaletteIcon className="absolute top-[2%] left-[42%] w-14 md:w-20 h-14 md:h-20 text-burgundy -rotate-12 z-40" />
            <BrushIcon className="hidden md:block absolute top-[26%] right-[-2%] w-16 h-16 text-burgundy rotate-[35deg] z-40" />
            <FlowerIcon className="absolute bottom-[2%] left-[2%] w-16 md:w-24 h-20 md:h-32 text-burgundy -rotate-[10deg] z-40" />
            <BowIcon className="hidden md:block absolute top-[62%] right-[6%] w-20 h-16 text-burgundy -rotate-6 z-40" />
            <StarIcon className="absolute top-[40%] right-[44%] w-8 md:w-10 h-8 md:h-10 text-burgundy rotate-12 z-40" />
            <HeartIcon className="hidden md:block absolute top-[10%] right-[40%] w-10 h-10 text-burgundy -rotate-12 z-40" />

            {/* Sticker label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="absolute -top-3 left-0 md:-top-3 md:left-2 bg-butter text-burgundy text-[10px] md:text-[11px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-sans -rotate-6 z-50"
            >
              ✦ Moodboard
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
