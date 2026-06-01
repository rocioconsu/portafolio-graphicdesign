# Rocío Consuegra — Editorial Portfolio (PRD)

## Original problem statement
Build a one-page editorial portfolio for graphic designer Rocío Consuegra in the
style of contemporary fashion editorials / Awwwards / Framer showcases. Palette:
ivory, dusty pink, burgundy, butter yellow, charcoal. Two type families
(serif + sans). Detailed brief on hero, marquee, about, currently exploring,
selected work (4 projects, alternating layouts) and contact section.

## User choices
- Purely static frontend (no backend, no CMS)
- Real assets uploaded by user (4 projects + 3 personal photos)
- Real contact info provided

## Architecture
- React (CRA + craco) + Tailwind + framer-motion
- No backend logic (static one-page)
- All assets in /app/frontend/public/assets/
- Components in /app/frontend/src/components/

## User persona
Rocío Consuegra — graphic designer (brand identity, 3D, art direction, creative AI).
Audience: brand clients, art directors, recruiters discovering her on Behance/IG.

## Core requirements (static)
- Floating glass nav (Rocío Consuegra / About-Work-Contact / Contact CTA)
- Hero: large typographic "Hi! I'm Rocío" + moodboard collage of 3 personal photos
- Marquee ribbon (butter bg, burgundy serif italic)
- About: editorial 3-column (label / large statement / portrait)
- Currently Exploring: 5 cards (Brand Identity, Art Direction, 3D, Creative AI, Motion)
- Selected Work: 4 projects with alternating image-left/image-right layouts
  - 01 Trankis (cans 3D + packaging)
  - 02 Vicci (sunglasses 3D campaign — replaces "TRIAL")
  - 03 Nike × Miu Miu Soft Motion (sneakers)
  - 04 Nua (creative AI editorial — sunscreen stick brand)
- Contact: large "Let's create something together", 4 links (email/IG/Behance/LinkedIn), reverse marquee, footer

## Implemented (2025-12)
- Full one-page editorial portfolio with framer-motion entrance animations
- Playfair Display + Manrope type pairing
- Two infinite marquees (forward & reverse) for visual rhythm
- Mobile responsive nav with hamburger
- Real assets integrated; HEIC photos auto-converted to JPG

## Backlog / Next actions
- P1: Add individual project case studies (modal or scroll-expanding) with extra visuals
- P1: Add lazy-loading + image optimization (next-gen formats)
- P2: Cursor-follow effect & scroll-linked horizontal scroll for "Work"
- P2: Replace "View visuals ↗" placeholder with real case-study modals or external Behance deep-links
- P2: SEO meta tags + OG image
- P2: Subtle audio cue / loader animation on first load
