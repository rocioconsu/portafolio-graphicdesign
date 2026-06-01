// Hand-drawn-style SVG icons in burgundy.
// All accept className for sizing and rotation.

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 4.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const strokeThin = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// Sparkle / 4-point star
export const StarIcon = (props) => (
  <svg viewBox="0 0 60 60" {...props} aria-hidden>
    <path
      {...strokeThin}
      d="M30 6c1 9 4 14 12 18-8 4-11 9-12 18-1-9-4-14-12-18 8-4 11-9 12-18z"
    />
  </svg>
);

// Cherries — two round cherries hanging from stems with a leaf
export const CherriesIcon = (props) => (
  <svg viewBox="0 0 120 140" {...props} aria-hidden>
    {/* leaf top */}
    <path
      {...stroke}
      d="M55 14 C 70 6, 92 8, 100 22 C 90 30, 72 28, 60 22"
    />
    <path {...stroke} d="M58 18 C 68 22, 78 22, 86 18" />
    {/* stems */}
    <path {...stroke} d="M55 14 C 50 28, 44 50, 38 78" />
    <path {...stroke} d="M55 14 C 60 28, 66 56, 72 90" />
    {/* cherry 1 */}
    <circle cx="36" cy="98" r="20" {...stroke} />
    <path {...strokeThin} d="M28 90 C 24 94, 22 100, 26 100" />
    {/* cherry 2 */}
    <circle cx="76" cy="108" r="20" {...stroke} />
    <path {...strokeThin} d="M68 100 C 64 104, 62 110, 66 110" />
  </svg>
);

// Bow — flat ribbon bow with two loops on top and two tails dangling
export const BowIcon = (props) => (
  <svg viewBox="0 0 140 120" {...props} aria-hidden>
    {/* left loop */}
    <path
      {...stroke}
      d="M68 48 C 50 28, 24 26, 16 40 C 10 54, 28 64, 50 60 C 60 58, 66 54, 68 50 Z"
    />
    {/* right loop */}
    <path
      {...stroke}
      d="M72 48 C 90 28, 116 26, 124 40 C 130 54, 112 64, 90 60 C 80 58, 74 54, 72 50 Z"
    />
    {/* knot */}
    <path
      {...stroke}
      d="M62 48 C 60 54, 60 60, 62 64 C 68 66, 74 66, 78 64 C 80 60, 80 54, 78 48 C 72 46, 66 46, 62 48 Z"
    />
    {/* left tail */}
    <path
      {...stroke}
      d="M64 64 C 58 78, 50 90, 44 106"
    />
    <path {...strokeThin} d="M44 106 C 48 102, 54 102, 54 98" />
    {/* right tail */}
    <path
      {...stroke}
      d="M76 64 C 82 78, 90 90, 96 106"
    />
    <path {...strokeThin} d="M96 106 C 92 102, 86 102, 86 98" />
  </svg>
);

// Lobster — vertical lobster outline with claws up, body, tail down
export const LobsterIcon = (props) => (
  <svg viewBox="0 0 140 180" {...props} aria-hidden>
    {/* antennae */}
    <path {...strokeThin} d="M62 24 C 50 10, 32 6, 22 12" />
    <path {...strokeThin} d="M78 24 C 90 10, 108 6, 118 12" />
    {/* head */}
    <ellipse cx="70" cy="34" rx="16" ry="14" {...stroke} />
    {/* eyes */}
    <circle cx="62" cy="32" r="2" fill="currentColor" />
    <circle cx="78" cy="32" r="2" fill="currentColor" />
    {/* upper body */}
    <path
      {...stroke}
      d="M52 46 C 50 54, 50 64, 54 70 L 86 70 C 90 64, 90 54, 88 46"
    />
    {/* claws */}
    <path
      {...stroke}
      d="M52 50 C 38 50, 22 56, 14 70 C 8 84, 14 100, 26 102 C 36 102, 42 92, 44 80"
    />
    <ellipse cx="22" cy="92" rx="14" ry="11" {...stroke} />
    <path {...strokeThin} d="M14 88 C 18 86, 22 86, 26 90" />
    <path
      {...stroke}
      d="M88 50 C 102 50, 118 56, 126 70 C 132 84, 126 100, 114 102 C 104 102, 98 92, 96 80"
    />
    <ellipse cx="118" cy="92" rx="14" ry="11" {...stroke} />
    <path {...strokeThin} d="M114 88 C 118 86, 122 86, 126 90" />
    {/* lower body / tail segments */}
    <path {...stroke} d="M54 72 C 56 84, 58 96, 60 108 L 80 108 C 82 96, 84 84, 86 72" />
    <path {...strokeThin} d="M56 82 C 64 84, 76 84, 84 82" />
    <path {...strokeThin} d="M58 94 C 64 96, 76 96, 82 94" />
    <path {...strokeThin} d="M60 106 C 66 108, 74 108, 80 106" />
    {/* fan tail */}
    <path {...stroke} d="M60 110 C 56 124, 50 138, 56 152" />
    <path {...stroke} d="M70 110 C 68 126, 68 142, 70 156" />
    <path {...stroke} d="M80 110 C 84 124, 90 138, 84 152" />
    <path {...stroke} d="M56 152 C 64 158, 76 158, 84 152" />
    {/* small legs */}
    <path {...strokeThin} d="M54 64 C 48 66, 42 72, 40 78" />
    <path {...strokeThin} d="M86 64 C 92 66, 98 72, 100 78" />
  </svg>
);

// Starfish — 5-pointed soft star
export const StarfishIcon = (props) => (
  <svg viewBox="0 0 120 120" {...props} aria-hidden>
    <path
      {...stroke}
      d="M60 8 C 64 28, 70 38, 88 40 C 102 42, 110 52, 108 62 C 104 72, 92 76, 84 88 C 78 98, 70 110, 60 110 C 50 110, 42 98, 36 88 C 28 76, 16 72, 12 62 C 10 52, 18 42, 32 40 C 50 38, 56 28, 60 8 Z"
    />
  </svg>
);

// Lemons — two lemons with a leaf, tied like a sprig
export const LemonIcon = (props) => (
  <svg viewBox="0 0 140 140" {...props} aria-hidden>
    {/* leaf at top */}
    <path {...stroke} d="M58 18 C 70 6, 92 6, 100 22 C 88 30, 72 28, 62 22 Z" />
    <path {...strokeThin} d="M62 22 C 72 22, 82 22, 92 20" />
    {/* stem */}
    <path {...stroke} d="M58 18 C 54 30, 52 42, 56 50" />
    {/* lemon 1 (left) */}
    <path
      {...stroke}
      d="M44 56 C 28 56, 18 70, 22 88 C 28 104, 50 108, 62 96 C 70 86, 68 66, 58 58 C 54 54, 48 54, 44 56 Z"
    />
    <path {...strokeThin} d="M22 64 C 18 62, 14 64, 14 68" />
    <path {...strokeThin} d="M62 100 C 66 102, 70 102, 70 98" />
    {/* lemon 2 (right) */}
    <path
      {...stroke}
      d="M82 48 C 100 48, 114 64, 110 84 C 104 102, 84 108, 70 96 C 60 86, 64 64, 74 54 C 76 50, 80 48, 82 48 Z"
    />
    <path {...strokeThin} d="M110 56 C 114 54, 118 56, 118 60" />
    <path {...strokeThin} d="M70 100 C 66 104, 62 104, 62 100" />
  </svg>
);

// Shell — conch / snail-like spiral shell
export const ShellIcon = (props) => (
  <svg viewBox="0 0 140 100" {...props} aria-hidden>
    {/* outer rounded shape */}
    <path
      {...stroke}
      d="M16 60 C 14 36, 36 14, 70 14 C 104 14, 128 34, 126 60 C 124 78, 110 88, 96 88 L 28 88 C 18 88, 14 76, 16 60 Z"
    />
    {/* inner spiral lines */}
    <path {...stroke} d="M36 86 C 32 64, 48 36, 76 34" />
    <path {...stroke} d="M56 86 C 48 70, 56 50, 78 48" />
    <path {...stroke} d="M74 86 C 64 76, 70 60, 84 58" />
    {/* opening detail */}
    <path {...strokeThin} d="M94 86 C 92 76, 92 64, 94 56" />
    <path {...strokeThin} d="M110 80 C 112 70, 112 60, 108 52" />
  </svg>
);

// Kept-in-codebase legacy icons (still used in About hint etc., harmless to keep)
export const PaletteIcon = (props) => (
  <svg viewBox="0 0 110 100" {...props} aria-hidden>
    <path
      {...stroke}
      d="M55 10c-25 0-46 18-46 40 0 13 9 22 20 22 5 0 7-3 7-7 0-5 4-8 9-8 6 0 9 4 10 9 1 6 6 10 13 10 22 0 38-16 38-36 0-17-18-30-51-30z"
    />
    <ellipse cx="36" cy="58" rx="6" ry="9" {...strokeThin} />
    <circle cx="58" cy="28" r="4" fill="currentColor" />
    <circle cx="74" cy="36" r="4" fill="currentColor" />
    <circle cx="82" cy="52" r="4" fill="currentColor" />
    <circle cx="72" cy="68" r="4" fill="currentColor" />
  </svg>
);

export const BrushIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props} aria-hidden>
    <path {...stroke} d="M70 14c-6 6-30 30-44 44-3 3-3 8 0 11l5 5c3 3 8 3 11 0L86 30" />
    <path {...stroke} d="M70 14c5-4 12-4 16 0 4 4 4 11 0 16" />
    <path {...stroke} d="M22 70c-4 6-9 14-8 20 7 1 14-4 20-8" />
  </svg>
);

export const HeartIcon = (props) => (
  <svg viewBox="0 0 100 90" {...props} aria-hidden>
    <path
      {...stroke}
      d="M50 78c-4-2-30-18-36-36C10 28 22 14 36 18c8 2 12 8 14 12 2-4 6-10 14-12 14-4 26 10 22 24-6 18-32 34-36 36z"
    />
  </svg>
);

export const ScissorsIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props} aria-hidden>
    <circle cx="26" cy="26" r="11" {...stroke} />
    <circle cx="26" cy="74" r="11" {...stroke} />
    <path {...stroke} d="M34 36l52 40" />
    <path {...stroke} d="M34 64l52-40" />
  </svg>
);

export const PenIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props} aria-hidden>
    <path {...stroke} d="M14 86l10-30 50-50c4-4 12-4 16 0s4 12 0 16l-50 50-30 10" />
    <path {...stroke} d="M62 14l24 24" />
    <path {...stroke} d="M22 68l10 10" />
  </svg>
);

// Backward-compat: keep FlowerIcon symbol as alias to a simple rose (unused now but won't break imports)
export const FlowerIcon = (props) => (
  <svg viewBox="0 0 100 130" {...props} aria-hidden>
    <path
      {...stroke}
      d="M50 36 C 56 36, 60 32, 58 28 C 55 24, 48 24, 44 28 C 40 33, 42 40, 48 42 C 56 44, 64 40, 64 32 C 64 22, 54 18, 46 20 C 36 23, 32 34, 38 42 C 46 52, 62 50, 68 40"
    />
    <path {...stroke} d="M38 30 C 26 28, 20 38, 24 48 C 28 56, 38 58, 44 52" />
    <path {...stroke} d="M62 30 C 74 28, 80 38, 76 48 C 72 56, 62 58, 56 52" />
    <path {...stroke} d="M50 74 C 50 90, 50 110, 50 124" />
  </svg>
);
