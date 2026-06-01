import { motion } from "framer-motion";

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
              className="font-serif text-burgundy leading-[0.92] tracking-[-0.02em]"
              data-testid="hero-title"
            >
              <span className="block text-[16vw] sm:text-[12vw] lg:text-[8vw]">Hi! I'm</span>
              <span className="block text-[20vw] sm:text-[15vw] lg:text-[9.5vw] italic">Rocío</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 md:mt-6 max-w-md"
            >
              <p className="font-serif italic text-xl md:text-2xl text-charcoal leading-snug">
                Graphic Designer
              </p>
              <p className="mt-3 md:mt-4 text-charcoal/80 text-[14px] md:text-[15px] leading-relaxed font-sans">
                I create visual identities, 3D experiences and creative projects
                through design, storytelling and experimentation.
              </p>
            </motion.div>
          </div>

          {/* Right: moodboard collage */}
          <div className="col-span-12 lg:col-span-6 relative min-h-[460px] md:min-h-[580px]">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="absolute top-2 right-4 md:right-8 w-[52%] md:w-[58%] aspect-[3/4] overflow-hidden shadow-[0_20px_60px_-20px_rgba(122,24,54,0.35)]"
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

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-32 md:top-44 left-0 md:left-4 w-[42%] md:w-[40%] aspect-[4/5] overflow-hidden bg-pink"
            >
              <img
                src="/assets/portrait1.jpg"
                alt="Rocío moodboard"
                className="w-full h-full object-cover mix-blend-multiply"
                data-testid="hero-portrait-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -7 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 right-0 md:right-20 w-[40%] md:w-[36%] aspect-square overflow-hidden"
            >
              <img
                src="/assets/portrait2.jpg"
                alt="Rocío moodboard"
                className="w-full h-full object-cover"
                data-testid="hero-portrait-3"
              />
            </motion.div>

            {/* Sticker labels */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-3 left-2 md:top-10 md:left-2 bg-butter text-burgundy text-[10px] md:text-[11px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-sans -rotate-6"
            >
              ✦ Moodboard
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
