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
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <path
      {...stroke}
      d="M50 12c-22 1-37 18-36 36 0 11 8 18 17 18 6 0 7-4 11-4 5 0 4 6 11 6 19 0 35-14 35-32C88 22 72 11 50 12z"
    />
    <circle cx="34" cy="38" r="3.2" fill="currentColor" />
    <circle cx="48" cy="28" r="3.2" fill="currentColor" />
    <circle cx="65" cy="35" r="3.2" fill="currentColor" />
    <circle cx="72" cy="52" r="3.2" fill="currentColor" />
    <path {...stroke} d="M22 60c-3 5-5 14 1 18 5 3 11-2 14-7" />
  </svg>
);

export const BowIcon = ({ className = "" }) => (
  <svg viewBox="0 0 110 80" className={className} aria-hidden>
    <path
      {...stroke}
      d="M55 38c-8-12-22-18-32-10-7 6-3 18 4 22 8 5 20 3 28-4 0 0 1-2 0-8z"
    />
    <path
      {...stroke}
      d="M55 38c8-12 22-18 32-10 7 6 3 18-4 22-8 5-20 3-28-4 0 0-1-2 0-8z"
    />
    <circle cx="55" cy="38" r="4.5" {...stroke} />
    <path {...stroke} d="M48 44c-5 9-10 18-15 26" />
    <path {...stroke} d="M62 44c5 9 10 18 15 26" />
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
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <circle cx="50" cy="38" r="6" {...stroke} />
    <path {...stroke} d="M50 32c-2-8 1-16 8-18 4 5 2 14-4 18" />
    <path {...stroke} d="M50 32c2-8-1-16-8-18-4 5-2 14 4 18" />
    <path {...stroke} d="M44 38c-8 0-15 5-15 13 6 2 14-2 17-7" />
    <path {...stroke} d="M56 38c8 0 15 5 15 13-6 2-14-2-17-7" />
    <path {...stroke} d="M50 44v40" />
    <path {...stroke} d="M50 64c4-4 11-6 16-4" />
    <path {...stroke} d="M50 74c-5-3-12-3-17 0" />
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
