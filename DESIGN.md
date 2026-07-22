Action: file_editor create /app/DESIGN.md --file-text "# DESIGN.md — Magic Portfolio (demo.magic-portfolio.com)

A deep visual & interaction spec extracted from the live demo of **Magic Portfolio** (a Once UI template). This document is written so a designer or engineer can rebuild the aesthetic pixel‑close without opening the site.

---

## 1. Overall Concept & Mood

Magic Portfolio positions itself as a **serene, editorial‑minimal** portfolio for design engineers. The mood is:

- **Airy and light-first**, with an optional dark mode.
- **Soft, luminous ambience** — the page glows from a large radial wash of pale cyan behind the hero, giving the impression that the content is floating on light.
- **Editorial typography** — very large, tightly tracked display type dominates every page; body copy is generous and readable.
- **Micro-interactive** — text blurs in, buttons/pills have gentle hover lifts, images fade in.
- **System‑designed** — every element (chip, pill, card, avatar) shares the same radius language and border treatment, signalling a strict design system underneath.

Design keywords: *calm, precise, spacious, luminous, engineered, editorial.*

---

## 2. Layout System

### 2.1 Global page frame

- Content is centered in a **max content width of ~720–800px** for text/heroes, expanding to **~1100–1180px** for wide image cards.
- Vertical rhythm is generous: **sections are separated by ~96–128px** on desktop.
- The **background is not pure white** — it's a very light neutral (`hsl(210 40% 98%)`-ish) with a huge **radial gradient of soft cyan (#DFF3FA → transparent)** originating just below the top nav. On dark mode it inverts to near‑black with a subtle blue radial glow.

### 2.2 Persistent chrome

Every page shares three fixed elements:

| Position | Element | Notes |
|---|---|---|
| Top‑left | **Timezone label** (`Asia/Jakarta`) | Tiny 12–13px, mono‑feeling regular weight, muted gray |
| Top‑center | **Floating pill nav** | See §5.1 |
| Top‑right | **Live clock** (`08:18:15`) | Same tiny label style, updates every second |

There is **no traditional footer bar** on the home page — the last section (newsletter) doubles as the footer.

### 2.3 Page-specific layouts

- **Home**: single centered column. Order → chip badge → giant H1 → subtitle → avatar chip → featured project (full-width image card) → blog row → project grid → newsletter.
- **About**: **two-column split**. Left rail (≈340px) holds avatar + location + language toggles + section anchor nav. Right column holds the CTA pill, name, socials, and long‑form content (Introduction, Work Experience, Studies, Technical skills).
- **Work (Projects index)**: single column of large image + title + description + CTA blocks stacked vertically, each project separated by ~96px whitespace.
- **Blog**: two horizontal feature cards at top (image + meta + title), then a smaller vertically stacked list titled \"Earlier posts\" (avatar + name + date + title, no image).
- **Gallery**: masonry / responsive grid of images only.

---

## 3. Color System

The system is expressed as **CSS custom properties** with light + dark variants. Values below are approximated from the demo.

### 3.1 Light mode (default)

| Token | Value | Usage |
|---|---|---|
| `--bg-page` | `#F5FBFD` | Page background base |
| `--bg-glow` | radial `#CFEBF5 → transparent` | Ambient wash behind hero |
| `--surface` | `#FFFFFF` | Nav pill, cards, chips |
| `--surface-alt` | `#F1F6F9` | Subtle chip / muted button background |
| `--border-subtle` | `rgba(15,23,42,0.08)` | 1px hairline borders on chips, nav, cards |
| `--text-primary` | `#0B0F14` (near black) | Headings, body |
| `--text-secondary` | `#6B7480` | Descriptions, meta |
| `--text-muted` | `#9AA3AE` | Timestamps, timezone label |
| `--accent` | `#3FB6E0` (cyan) | Links, \"Senior Design Engineer\" role, hover states |
| `--accent-soft` | `#D6EEF8` | Pill fill for the \"Featured work\" badge |
| `--danger` | `#E24C4B` | Location pin icon (about page) |
| `--shadow-card` | `0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)` | Cards & floating nav |

### 3.2 Dark mode (toggle-controlled)

| Token | Value |
|---|---|
| `--bg-page` | `#0A0D12` |
| `--bg-glow` | radial `rgba(63,182,224,0.15) → transparent` |
| `--surface` | `#12161C` |
| `--surface-alt` | `#1A1F27` |
| `--border-subtle` | `rgba(255,255,255,0.08)` |
| `--text-primary` | `#F2F5F8` |
| `--text-secondary` | `#A6ADB6` |
| `--accent` | `#5FC6E8` |
| `--accent-soft` | `rgba(63,182,224,0.15)` |

### 3.3 Color rules

- **Never** use pure black `#000` on light mode text — always the near‑black `#0B0F14`.
- **Never** use pure white text on dark mode — use `#F2F5F8` for softness.
- The cyan accent is used **sparingly**: badge fill, active link, hover underlines, a single role label. Never used for body text or paragraph backgrounds.
- Backgrounds always feel *layered*: page → radial glow → surface → chip. Each layer differs by ~4–6% luminance.

---

## 4. Typography

The demo uses **Geist** as the display family (very likely) with **Geist Mono** for code and metadata, but the *pattern* to reproduce is what matters. Choose one modern geometric sans‑serif with a very heavy 700–800 cut and a comfortable body cut.

### 4.1 Type scale (desktop)

| Role | Size / Line-height | Weight | Tracking |
|---|---|---|---|
| Display H1 (hero) | 64–72px / 1.05 | 700 | -0.02em |
| Section H2 | 40–44px / 1.1 | 700 | -0.015em |
| Card title H3 | 24–28px / 1.25 | 600 | -0.01em |
| Body large (lede) | 18–20px / 1.55 | 400 | 0 |
| Body regular | 16px / 1.6 | 400 | 0 |
| Meta / caption | 13–14px / 1.4 | 500 | 0 |
| Nav label | 14px / 1 | 500 | 0 |
| Timezone/clock | 12–13px / 1 | 400 | 0.01em |

Mobile scale drops H1 to ~44px and H2 to ~32px.

### 4.2 Typography rules

- **One family everywhere.** Do not mix serif and sans.
- Headings are **tightly tracked** (negative letter-spacing) — this is what gives the site its editorial feel.
- Body copy uses **generous line-height (~1.6)** and never exceeds ~66ch column width.
- Metadata (dates, names, timezone) is one shade lighter than body.
- Links inside prose are the cyan accent with a subtle underline that thickens on hover.

---

## 5. Component Library

### 5.1 Floating pill nav (top-center)

- **Shape**: fully rounded pill (`border-radius: 999px`).
- **Container**: white surface, 1px hairline border (`--border-subtle`), soft shadow.
- **Padding**: `8px 12px`.
- **Children**: 5 icon+label items (Home, About, Work, Blog, Gallery) + a **theme toggle icon** on the far right (moon/sun).
- **Active state**: the current page's icon sits in a **white circular chip with its own border** (looks \"pressed in\"). Label is hidden on the active item — only the icon shows.
- **Inactive items**: icon (14px, stroked, `lucide` style) + label side-by-side, `gap: 6px`, medium weight.
- **Hover**: item background shifts to `--surface-alt` with 150ms ease.
- **Fixed position**: `top: 16px`, centered horizontally, `z-index: 50`.

### 5.2 Chip / badge (e.g. \"Once UI · Featured work\")

- Pill (`border-radius: 999px`), height ~32px, padding `6px 14px`.
- Fill: `--accent-soft`; border: 1px `--accent` at 30% opacity.
- Text: two parts separated by a thin vertical divider (`|` styled as 1px column, 12px tall, `--accent` at 40%).
- First segment bold near‑black; second segment cyan and lighter weight.
- Used as **section preamble** above H1s.

### 5.3 Buttons

Three button styles observed:

1. **Primary pill CTA** (\"Schedule a call →\")
   - `--accent-soft` fill, `--accent` text, 1px cyan border.
   - Pill radius, height 40px, padding `10px 16px`.
   - Trailing chevron icon in a slightly darker cyan circle.
2. **Ghost social pill** (GitHub / LinkedIn / Threads / Email)
   - White surface, hairline border, near‑black text, monochrome brand icon on the left.
   - Height 36px, padding `8px 14px`, radius 999px, `gap: 8px`.
3. **Text link** — inline cyan with underline on hover.

All buttons animate on hover: `transform: translateY(-1px)` + shadow lift over 180ms `cubic-bezier(.2,.7,.3,1)`.

### 5.4 Avatar

- Perfect circle, `border-radius: 50%`.
- Two sizes: **XL** ~168px (about page hero), **S** 28–32px (blog post meta, home avatar chip).
- Always sits on the page background — no border, no ring — the photo itself has soft edge lighting.

### 5.5 Avatar chip (home hero)

- Pill container with 1px border, `--surface` fill.
- Left: 28px avatar. Right: \"About – Selene Yu\" text at 14px medium.
- Whole chip is a link; hover raises it slightly.

### 5.6 Project / feature card

- Full-width block, **not** wrapped in a container box.
- Structure: image (rounded 16px, aspect ~16:10, soft shadow) → below image a two‑row block:
  - Row 1: H2 title, near-black.
  - Row 2 (optional): stack of small avatars (author + contributors) overlapping (`margin-left: -8px`), then a short description paragraph, then a \"Read case study\" text link.
- Multiple images inside a project card are laid out in horizontal 2‑up or 3‑up grids with the same 16px radius.

### 5.7 Blog list item

Two variants:
- **Featured (top of blog)**: horizontal card with 16:10 image on the left (rounded), text block on the right (avatar row + date + title).
- **Compact (\"Earlier posts\")**: no image, just `avatar · name · date · title(link)` on a single row that wraps on mobile. Dividers are pure whitespace, not lines.

### 5.8 Timeline row (Work Experience / Studies)

- Two columns inside the right content pane:
  - **Left**: Company/Institution name bold + role in cyan below.
  - **Right (aligned to end)**: date range in muted gray.
- Below: bulleted `<ul>` with disc markers, `margin-left: 20px`, bullets in `--text-secondary`.
- Optional inline images between entries, rounded 12px, ~50% column width, left‑aligned.

### 5.9 Sidebar anchor nav (About page left rail)

- Vertical list. Each item = a short dash (`—`, 16px wide, 1px tall, muted) + label.
- Active item: the dash becomes solid `--text-primary` and lengthens to 24px; label goes bold.
- No background, no border.
- Behaves like a scroll‑spy anchor list.

### 5.10 Language toggle (About)

- Two adjacent pills (\"English\" | \"Bahasa\"), single container with segmented look.
- Active pill: white fill, hairline border, shadow; inactive: transparent, muted text.

### 5.11 Newsletter block (footer of most pages)

- Centered column, ~560px wide.
- Small H2 (\"Subscribe to Selene's Newsletter\"), single line description, and a pill‑shaped email input with a \"Subscribe\" button attached on the right (both share the same rounded container).

---

## 6. Iconography

- **Library**: Lucide (or a lucide‑equivalent). All icons are **1.5px stroke, 16px** default, matching the type weight.
- Icons are always paired with a label in nav and buttons — never icon‑only except for the theme toggle and the active nav state.
- Brand marks (GitHub, LinkedIn, Threads) are their official monochrome glyphs, rendered in `currentColor` to match text.
- Location pin uses the accent‑red danger color; every other icon inherits text color.

---

## 7. Motion & Interaction

### 7.1 Entrance animations

- On page load, headings and paragraphs use a **staggered blur‑to‑sharp reveal**: text starts at `filter: blur(12px); opacity: 0` and animates to `blur(0); opacity: 1` over ~600ms, staggered by ~80ms per element. This is the site's signature motion.
- Images fade in from `opacity: 0` to `1` over ~500ms once loaded; no scale/translate.

### 7.2 Hover states

- Buttons/pills: `translateY(-1px)` + shadow deepen, 180ms.
- Nav items: background lerp to `--surface-alt`, 150ms.
- Cards: image inside card scales to `1.02` with `overflow: hidden` clipping on the rounded corner, 300ms `ease-out`. Title color darkens slightly.
- Links: underline thickness animates from 1px → 2px.

### 7.3 Theme toggle

- Clicking the moon/sun icon in nav flips the CSS variable set; the transition is animated over ~250ms on `background-color` and `color`.

### 7.4 Scroll behavior

- The floating nav does **not** move on scroll — it stays anchored at `top: 16px` with the same shadow.
- Section anchor nav on About uses smooth scroll and updates the active dash indicator.

### 7.5 Reduced motion

Respect `prefers-reduced-motion` by disabling blur animations and reducing all transitions to a simple 100ms opacity fade.

---

## 8. Radius, Border, Shadow language

| Element | Radius |
|---|---|
| Pills (nav, chips, buttons) | 999px |
| Cards & images | 16px |
| Inputs | 12px |
| Avatars | 50% |
| Timeline images | 12px |

- **Borders**: always a single 1px hairline in `--border-subtle`. Never 2px or dashed.
- **Shadows**: two-layer soft shadow only (`0 1px 2px` + `0 8px 24px`). No harsh drop shadows, no colored shadows.

---

## 9. Grid, Spacing & Responsiveness

### 9.1 Spacing scale (4px base)

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Nothing outside this scale.

### 9.2 Breakpoints

| Name | Range | Notes |
|---|---|---|
| Mobile | 0–640px | Nav collapses to icons-only pill; About switches to single column. |
| Tablet | 641–1024px | Two-column About with narrower left rail (~260px). |
| Desktop | 1025px+ | As documented above. |

### 9.3 Mobile adjustments

- Timezone + clock hide below 480px.
- Hero H1 drops to 44px.
- Featured pill wraps if needed.
- Blog \"featured\" cards stack image above text.

---

## 10. Accessibility Notes

- Color contrast: primary text on background = ~15:1 (passes AAA). Cyan on white for links = ~4.6:1 (passes AA large). Secondary gray on background = ~5.2:1 (AA).
- Focus states: 2px cyan outline offset by 2px on all interactive elements; never removed.
- All icons in buttons have accompanying `aria-label`s.
- Reduced‑motion path exists (see §7.5).

---

## 11. Content Voice & Micro-copy

Not strictly visual, but crucial to the \"feel\":

- First‑person, calm, short sentences.
- Hero uses a **verb + noun** construction: *\"Building bridges between design and code.\"*
- Section headings are single, low‑ornament phrases: *Work Experience*, *Studies*, *Technical skills*, *Latest from the blog*, *Earlier posts*.
- CTAs are polite verbs: *Read case study*, *View project*, *Schedule a call*, *Subscribe*.

---

## 12. Reproduction Checklist

To recreate the Magic Portfolio aesthetic, ensure the build has:

- [ ] One geometric sans-serif family, 400/500/600/700 weights loaded.
- [ ] Off-white background with a pale cyan radial glow behind the hero.
- [ ] Floating top-center pill nav with icons + labels + active chip.
- [ ] Blur-in text reveal on page load, staggered.
- [ ] Full-width rounded image cards for projects, 16px radius.
- [ ] Two-column About page with left rail anchor scroll‑spy.
- [ ] Cyan accent used only for the chip badge, active role label, and links.
- [ ] Dark mode toggle wired to a full CSS variable swap with 250ms transition.
- [ ] Timezone label + live clock in top corners.
- [ ] All buttons are pill-shaped with `translateY(-1px)` hover lift.
- [ ] Newsletter block as the sole footer.

---

*End of DESIGN.md*
"