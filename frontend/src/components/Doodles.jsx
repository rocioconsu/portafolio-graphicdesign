// Hand-drawn-style SVG icons in burgundy. All accept className for sizing/rotation.
// Drawn with imperfect/wobbly paths to feel "made by hand".

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const PaletteIcon = ({ className = "" }) => (
  <svg viewBox="0 0 110 100" className={className} aria-hidden>
    {/* palette body */}
    <path
      {...stroke}
      d="M55 10c-25 0-46 18-46 40 0 13 9 22 20 22 5 0 7-3 7-7 0-5 4-8 9-8 6 0 9 4 10 9 1 6 6 10 13 10 22 0 38-16 38-36 0-17-18-30-51-30z"
    />
    {/* thumb hole */}
    <ellipse cx="36" cy="58" rx="6" ry="9" {...stroke} />
    {/* paint dots */}
    <circle cx="58" cy="28" r="4" fill="currentColor" />
    <circle cx="74" cy="36" r="4" fill="currentColor" />
    <circle cx="82" cy="52" r="4" fill="currentColor" />
    <circle cx="72" cy="68" r="4" fill="currentColor" />
    <circle cx="52" cy="44" r="3.5" fill="currentColor" />
    {/* brush across */}
    <path {...stroke} d="M2 96l30-30" />
    <path {...stroke} d="M32 66c2-4 8-6 12-4l4 4-12 12-4-4c-2-2 0-8 0-8z" />
    <path {...stroke} d="M4 94l8 8" />
  </svg>
);

export const BowIcon = ({ className = "" }) => (
  <svg viewBox="0 0 130 110" className={className} aria-hidden>
    {/* left loop */}
    <path
      {...stroke}
      d="M62 42 C 44 22, 18 22, 14 38 C 10 54, 30 64, 50 56 C 56 54, 60 50, 62 46 Z"
    />
    {/* right loop */}
    <path
      {...stroke}
      d="M68 42 C 86 22, 112 22, 116 38 C 120 54, 100 64, 80 56 C 74 54, 70 50, 68 46 Z"
    />
    {/* center knot */}
    <path
      {...stroke}
      d="M58 38 C 55 44, 55 52, 58 58 C 64 60, 72 60, 76 56 C 78 50, 78 44, 76 40 C 70 36, 62 36, 58 38 Z"
    />
    {/* left dangling ribbon with curl */}
    <path
      {...stroke}
      d="M60 58 C 52 70, 46 84, 40 96 C 38 100, 36 102, 34 98"
    />
    {/* right dangling ribbon with curl */}
    <path
      {...stroke}
      d="M72 58 C 80 70, 88 82, 94 94 C 96 98, 98 100, 100 96"
    />
    {/* small ribbon flicks at the ends */}
    <path {...stroke} d="M40 96 C 44 94, 50 96, 50 92" />
    <path {...stroke} d="M94 94 C 90 92, 84 94, 84 90" />
  </svg>
);

export const BrushIcon = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <path {...stroke} d="M70 14c-6 6-30 30-44 44-3 3-3 8 0 11l5 5c3 3 8 3 11 0L86 30" />
    <path {...stroke} d="M70 14c5-4 12-4 16 0 4 4 4 11 0 16" />
    <path {...stroke} d="M22 70c-4 6-9 14-8 20 7 1 14-4 20-8" />
  </svg>
);

export const StarIcon = ({ className = "" }) => (
  <svg viewBox="0 0 60 60" className={className} aria-hidden>
    <path
      {...stroke}
      d="M30 6c1 9 4 14 12 18-8 4-11 9-12 18-1-9-4-14-12-18 8-4 11-9 12-18z"
    />
  </svg>
);

export const FlowerIcon = ({ className = "" }) => (
  // Hand-drawn rose: spiral bud + curved outer petals + stem with leaf
  <svg viewBox="0 0 100 130" className={className} aria-hidden>
    {/* spiral bud (concentric inward curls) */}
    <path
      {...stroke}
      d="M50 36 C 56 36, 60 32, 58 28 C 55 24, 48 24, 44 28 C 40 33, 42 40, 48 42 C 56 44, 64 40, 64 32 C 64 22, 54 18, 46 20 C 36 23, 32 34, 38 42 C 46 52, 62 50, 68 40"
    />
    {/* outer left petal */}
    <path
      {...stroke}
      d="M38 30 C 26 28, 20 38, 24 48 C 28 56, 38 58, 44 52"
    />
    {/* outer right petal */}
    <path
      {...stroke}
      d="M62 30 C 74 28, 80 38, 76 48 C 72 56, 62 58, 56 52"
    />
    {/* bottom petal cup */}
    <path
      {...stroke}
      d="M34 50 C 30 60, 38 68, 50 68 C 62 68, 70 60, 66 50"
    />
    {/* sepals */}
    <path {...stroke} d="M44 64 C 42 70, 44 74, 50 74 C 56 74, 58 70, 56 64" />
    {/* stem */}
    <path {...stroke} d="M50 74 C 50 90, 50 110, 50 124" />
    {/* leaf left */}
    <path
      {...stroke}
      d="M50 92 C 40 88, 30 90, 26 100 C 34 104, 46 100, 50 96"
    />
    {/* leaf right */}
    <path
      {...stroke}
      d="M50 108 C 60 104, 72 106, 76 116 C 68 120, 56 116, 50 112"
    />
  </svg>
);

export const HeartIcon = ({ className = "" }) => (
  <svg viewBox="0 0 100 90" className={className} aria-hidden>
    <path
      {...stroke}
      d="M50 78c-4-2-30-18-36-36C10 28 22 14 36 18c8 2 12 8 14 12 2-4 6-10 14-12 14-4 26 10 22 24-6 18-32 34-36 36z"
    />
  </svg>
);

export const ScissorsIcon = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <circle cx="26" cy="26" r="11" {...stroke} />
    <circle cx="26" cy="74" r="11" {...stroke} />
    <path {...stroke} d="M34 36l52 40" />
    <path {...stroke} d="M34 64l52-40" />
  </svg>
);

export const PenIcon = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <path {...stroke} d="M14 86l10-30 50-50c4-4 12-4 16 0s4 12 0 16l-50 50-30 10" />
    <path {...stroke} d="M62 14l24 24" />
    <path {...stroke} d="M22 68l10 10" />
  </svg>
);

export const CherriesIcon = ({ className = "" }) => (
  <svg viewBox="0 0 100 110" className={className} aria-hidden>
    {/* stems */}
    <path {...stroke} d="M30 80 C 36 60, 44 36, 60 18" />
    <path {...stroke} d="M62 88 C 60 64, 64 38, 64 18" />
    {/* leaf at top */}
    <path {...stroke} d="M60 18 C 70 14, 82 18, 86 28 C 78 30, 68 26, 62 22" />
    <path {...stroke} d="M64 18 C 56 12, 46 14, 42 22 C 50 26, 60 24, 64 22" />
    {/* cherry 1 (left, lower) */}
    <circle cx="28" cy="86" r="14" {...stroke} />
    <path {...stroke} d="M22 80 C 20 84, 22 88, 24 86" />
    {/* cherry 2 (right) */}
    <circle cx="62" cy="92" r="14" {...stroke} />
    <path {...stroke} d="M56 86 C 54 90, 56 94, 58 92" />
  </svg>
);

export const LobsterIcon = ({ className = "" }) => (
  <svg viewBox="0 0 130 120" className={className} aria-hidden>
    {/* antennae */}
    <path {...stroke} d="M58 20 C 52 8, 40 4, 30 8" />
    <path {...stroke} d="M72 20 C 78 8, 90 4, 100 8" />
    {/* head/body */}
    <path
      {...stroke}
      d="M50 28 C 52 22, 60 18, 65 18 C 70 18, 78 22, 80 28 C 84 36, 84 46, 80 52 C 76 60, 76 70, 78 80 C 80 90, 76 100, 65 104 C 54 100, 50 90, 52 80 C 54 70, 54 60, 50 52 C 46 46, 46 36, 50 28 Z"
    />
    {/* tail segments */}
    <path {...stroke} d="M55 78 C 60 80, 70 80, 75 78" />
    <path {...stroke} d="M53 86 C 60 88, 70 88, 77 86" />
    <path {...stroke} d="M55 94 C 60 96, 70 96, 75 94" />
    {/* claws */}
    <path {...stroke} d="M50 38 C 30 36, 18 46, 16 60 C 24 64, 36 58, 44 48" />
    <ellipse cx="18" cy="62" rx="10" ry="7" {...stroke} />
    <path {...stroke} d="M80 38 C 100 36, 112 46, 114 60 C 106 64, 94 58, 86 48" />
    <ellipse cx="112" cy="62" rx="10" ry="7" {...stroke} />
    {/* little legs */}
    <path {...stroke} d="M50 60 C 42 64, 36 70, 36 78" />
    <path {...stroke} d="M80 60 C 88 64, 94 70, 94 78" />
  </svg>
);

export const StarfishIcon = ({ className = "" }) => (
  <svg viewBox="0 0 110 110" className={className} aria-hidden>
    <path
      {...stroke}
      d="M55 8 C 58 26, 64 36, 80 38 C 92 40, 100 50, 100 60 C 98 70, 86 76, 78 86 C 72 94, 66 102, 55 102 C 44 102, 38 94, 32 86 C 24 76, 12 70, 10 60 C 10 50, 18 40, 30 38 C 46 36, 52 26, 55 8 Z"
    />
    {/* inner dots */}
    <circle cx="55" cy="40" r="2.5" fill="currentColor" />
    <circle cx="40" cy="55" r="2.5" fill="currentColor" />
    <circle cx="70" cy="55" r="2.5" fill="currentColor" />
    <circle cx="48" cy="74" r="2.5" fill="currentColor" />
    <circle cx="62" cy="74" r="2.5" fill="currentColor" />
  </svg>
);

export const LemonIcon = ({ className = "" }) => (
  <svg viewBox="0 0 120 110" className={className} aria-hidden>
    {/* stem + leaf */}
    <path {...stroke} d="M60 10 C 64 18, 68 26, 72 32" />
    <path {...stroke} d="M68 16 C 78 12, 90 16, 94 26 C 86 28, 76 24, 72 20" />
    {/* lemon 1 */}
    <path
      {...stroke}
      d="M40 50 C 26 48, 18 60, 22 76 C 26 92, 44 96, 56 88 C 64 82, 64 64, 56 56 C 52 52, 46 50, 40 50 Z"
    />
    <path {...stroke} d="M22 54 C 18 50, 14 50, 12 54" />
    <path {...stroke} d="M58 90 C 62 94, 66 94, 68 90" />
    {/* lemon 2 */}
    <path
      {...stroke}
      d="M76 42 C 90 40, 100 52, 98 68 C 96 84, 80 92, 68 86 C 60 82, 58 64, 64 56 C 68 50, 72 44, 76 42 Z"
    />
    <path {...stroke} d="M98 46 C 102 42, 106 42, 108 46" />
    <path {...stroke} d="M66 84 C 62 88, 58 88, 56 84" />
  </svg>
);

export const ShellIcon = ({ className = "" }) => (
  <svg viewBox="0 0 110 100" className={className} aria-hidden>
    {/* outer shell shape */}
    <path
      {...stroke}
      d="M10 76 C 10 50, 28 14, 55 12 C 82 14, 100 50, 100 76 C 100 86, 90 92, 80 90 C 72 88, 64 86, 55 86 C 46 86, 38 88, 30 90 C 20 92, 10 86, 10 76 Z"
    />
    {/* ridges */}
    <path {...stroke} d="M55 12 C 54 32, 52 60, 48 84" />
    <path {...stroke} d="M55 12 C 56 32, 58 60, 62 84" />
    <path {...stroke} d="M40 16 C 36 36, 32 60, 28 86" />
    <path {...stroke} d="M70 16 C 74 36, 78 60, 82 86" />
    <path {...stroke} d="M24 30 C 20 50, 16 70, 14 84" />
    <path {...stroke} d="M86 30 C 90 50, 94 70, 96 84" />
    {/* hinge */}
    <path {...stroke} d="M48 12 C 52 8, 58 8, 62 12" />
  </svg>
);
