import { motion } from "framer-motion";
import {
  BowIcon,
  CherriesIcon,
  LobsterIcon,
  StarfishIcon,
  LemonIcon,
  ShellIcon,
  StarIcon,
} from "./Doodles";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-ivory noise-overlay pt-28 md:pt-32"
    >
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10 pt-4 md:pt-8">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
          {/* Left: headline */}
          <div className="col-span-12 lg:col-span-5 relative z-10">
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
              <span className="block text-[15vw] sm:text-[12vw] lg:text-[7.5vw]">Hi! I'm</span>
              <span className="block text-[20vw] sm:text-[15vw] lg:text-[9vw] italic">Rocío</span>
              <StarIcon className="hidden md:block absolute top-1/2 -left-6 w-9 h-9 text-burgundy rotate-12 opacity-80" />
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
          <div className="col-span-12 lg:col-span-7 relative min-h-[640px] md:min-h-[760px]">
            {/* Sticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="absolute -top-2 left-2 md:left-6 bg-butter text-burgundy text-[10px] md:text-[11px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-sans -rotate-6 z-50"
            >
              ✦ Moodboard
            </motion.div>

            {/* Photo 1 — sunset (left, tilted left, tall) */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-[8%] left-[2%] w-[34%] bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)] z-20"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/assets/portrait5.jpg"
                  alt="Rocío sunset"
                  className="w-full h-full object-cover"
                  data-testid="hero-portrait-2"
                />
              </div>
            </motion.div>

            {/* Photo 2 — beach white top (center-left, slight right tilt, overlaps) */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="absolute top-0 left-[28%] w-[34%] bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)] z-30"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/assets/portrait4.jpg"
                  alt="Rocío beach"
                  className="w-full h-full object-cover"
                  data-testid="hero-portrait-4"
                />
              </div>
            </motion.div>

            {/* Photo 3 — BW Plaza España (right, large, slight right tilt) */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-[6%] right-[2%] w-[42%] bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)] z-20"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/assets/portrait3.jpg"
                  alt="Rocío portrait"
                  className="w-full h-full object-cover"
                  data-testid="hero-portrait-main"
                />
              </div>
            </motion.div>

            {/* Photo 4 — sand floor square (bottom-center, slight rotation, overlapping bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="absolute bottom-0 left-[30%] w-[34%] bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-[0_22px_50px_-22px_rgba(122,24,54,0.45)] z-40"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/portrait2.jpg"
                  alt="Rocío"
                  className="w-full h-full object-cover"
                  data-testid="hero-portrait-3"
                />
              </div>
            </motion.div>

            {/* Hand-drawn doodles — placed around the collage like the reference */}
            <CherriesIcon className="absolute top-[10%] left-[-2%] w-12 md:w-16 h-14 md:h-20 text-burgundy -rotate-[20deg] z-50" />
            <BowIcon className="absolute -top-2 md:top-0 left-[44%] w-16 md:w-24 h-12 md:h-20 text-burgundy rotate-[6deg] z-50" />
            <LobsterIcon className="hidden md:block absolute top-[34%] right-[-4%] w-20 lg:w-24 h-20 lg:h-24 text-burgundy rotate-[10deg] z-50" />
            <StarfishIcon className="absolute top-[44%] left-[36%] w-12 md:w-16 h-12 md:h-16 text-burgundy -rotate-[12deg] z-50" />
            <LemonIcon className="absolute bottom-[2%] left-[2%] w-14 md:w-20 h-14 md:h-20 text-burgundy rotate-[-6deg] z-50" />
            <ShellIcon className="hidden md:block absolute bottom-[14%] right-[8%] w-16 h-14 text-burgundy rotate-[6deg] z-50" />
            <StarIcon className="absolute top-[24%] left-[26%] w-7 md:w-9 h-7 md:h-9 text-burgundy rotate-[10deg] z-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
