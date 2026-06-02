import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-ivory noise-overlay pt-28 md:pt-32"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10 pt-4 md:pt-6">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
          {/* Left: headline */}
          <div className="col-span-12 lg:col-span-5 relative z-10 lg:pt-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[11px] md:text-xs uppercase tracking-[0.32em] text-burgundy mb-5 md:mb-6 font-sans"
            >
              ✦ CURIOSITY · CREATIVITY · EXPERIMENTATION
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-burgundy leading-[0.92] tracking-[-0.02em]"
              data-testid="hero-title"
            >
              <span className="block text-[15vw] sm:text-[12vw] lg:text-[7.5vw]">Hi! I'm</span>
              <span className="block text-[20vw] sm:text-[15vw] lg:text-[9vw] italic">Rocío</span>
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

          {/* Right: moodboard collage — replicates the user's reference */}
          <div className="col-span-12 lg:col-span-7 relative mt-2 lg:mt-0">
            <div className="relative w-full h-[62vw] sm:h-[58vw] lg:h-[68vh] max-h-[640px] min-h-[380px]">
              {/* Photo: Beach white top — top center (BACK) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ duration: 1, delay: 0.35 }}
                className="absolute"
                style={{ top: "4%", left: "30%", width: "28%", zIndex: 20 }}
              >
                <div className="bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/assets/portrait4.jpg"
                      alt="Rocío beach"
                      className="w-full h-full object-cover"
                      data-testid="hero-portrait-4"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Photo: Sunset — far left, tilted left */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -14 }}
                animate={{ opacity: 1, y: 0, rotate: -12 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute"
                style={{ top: "20%", left: "6%", width: "30%", zIndex: 30 }}
              >
                <div className="bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)]">
                  <div className="aspect-[3/4.4] overflow-hidden">
                    <img
                      src="/assets/portrait5.jpg"
                      alt="Rocío sunset"
                      className="w-full h-full object-cover"
                      data-testid="hero-portrait-2"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Photo: BW Plaza España — right, larger */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute"
                style={{ top: "10%", right: "2%", width: "40%", zIndex: 30 }}
              >
                <div className="bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/assets/portrait3.jpg"
                      alt="Rocío portrait"
                      className="w-full h-full object-cover"
                      data-testid="hero-portrait-main"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Photo: Sand floor — bottom center (FRONT) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                transition={{ duration: 1, delay: 0.65 }}
                className="absolute"
                style={{ top: "48%", left: "36%", width: "30%", zIndex: 40 }}
              >
                <div className="bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src="/assets/portrait2.jpg"
                      alt="Rocío"
                      className="w-full h-full object-cover"
                      data-testid="hero-portrait-3"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Hand-drawn doodles removed by request */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
