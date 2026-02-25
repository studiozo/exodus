# EXODUS V3 UPDATE GAMEPLAN
## Last Updated: 2026-02-24

---

## FOLDER INVENTORY: `v3_updates/81.16-PIERRE & ZO/`

### 00_PICS_REF_BRANDING/ (16 images)
Traditional tattooing reference photography for philosophy page:
- Kalinga/Filipino tribal elder — full torso geometric line tattoo
- Amazonian/Shipibo woman — dense geometric blackwork chest piece
- Polynesian/Marquesan man — full body traditional tapping
- Blackwork hand tattoo — bold geometric tribal hand piece
- Modern blackwork arms — full sleeves with tribal-rooted patterns
- Contemporary blackwork sleeves — heavy coverage, pattern-based
- Mentawai woman — traditional hand-tapped palm tattoos
- Chin-tattooed elder — traditional facial tattoo lineage
These all serve as VISUAL REFERENCES for the ancestral roots of the work

### 01_NAME_STUDIO/
New custom blackletter studio name typography: "EXODUS" + subtitle "TATTOO BODY ART"
- **00_NAME_grey_letters/** — Grey letter variant (V1) with all combos
- **01_NAME_black_letters/** — Black letter variant (V1) with all combos
- Each has: no_shadows / with_shadows / no_background versions
- Each in PNG + JPEG
- **PLEASE_CHECK_VARIANT_V1_vs_V2.jpg** — V1 has shorter J-hook, V2 has taller J-hook
- **Recommended for web:** `01_NAME_black_letters/00_NAME_V1/02_NAME_V1_no_background/_PNG./00_NAME_V1_blackletter_NO_shadow_NO_subtitles.png`

### 02_LOGO/
New Phi-circle logo mark (vertical bar through circle — like the O in EXODUS)
- `00_LOGO_black_NO_SHADOW_NO_BACKG.png` — black on transparent
- `01_LOGO_NEGATIV_WITH_SHADOW_NO_BACKG.png` — grey/negative with drop shadow
- `Untitled_Artwork 15.jpg` — same as black version (JPG)

### 03_Colour_Combination/
- `OPTIC_REF_COLOURS.jpg` — "STUDIO THO" reference scene
- Warm earthy Balinese interior palette: exposed wood beams, clay/concrete walls, dusty rose curtains, stone platforms, ceramic vessels, natural linen

### 04_COPY_WEBSITE/
- `03_EXODUS Website Copy V1 - IN_PROGRESS.docx` — updated website copy (WIP)

### 05_PIERRE_PORTFOLIO/
- Empty — awaiting portfolio content

---

## THE 4 TASKS

---

### TASK 1: UPDATE STUDIO NAME
**Priority: HIGH | Complexity: MEDIUM**

**What:** Replace the text-based "EXØDUS" with the new custom blackletter name artwork throughout the site.

**Asset to use:**
`01_NAME_black_letters/00_NAME_V1/02_NAME_V1_no_background/_PNG./00_NAME_V1_blackletter_NO_shadow_NO_subtitles.png`

**Where it changes:**
- [ ] **Nav/Header logo** (`App.tsx` line ~1728-1730): Replace `<span className="logo-main">EXØDUS</span>` with the PNG image
- [ ] **Footer** (`components/Footer.tsx` line 12): Replace `<div className="footer-logo">EXØDUS</div>`
- [ ] **HTML title** (`index.html` line 6): Update `<title>` tag
- [ ] **Philosophy page** (`components/Philosophy.tsx`): All "EXØDUS" text references
- [ ] **AiContext** (`components/AiContext.tsx`): SEO/semantic references
- [ ] **package.json**: Update name field

**Approach:**
1. Copy the chosen PNG into `public/images/branding/`
2. Create an `<img>` component for the name, sized appropriately for nav (~40px height) and footer (~30px height)
3. Keep "TATTOO BODY ART" as a text subtitle beneath the image where needed
4. For the Philosophy page text content, keep "EXØDUS" as text (it's part of the narrative)

**Decision needed:** V1 or V2? (V1 = shorter J-hook, V2 = taller) — recommend V1 for cleaner web display

---

### TASK 2: UPDATE LOGO
**Priority: HIGH | Complexity: LOW**

**What:** Add the new Phi-circle logo mark alongside the name

**Assets:**
- Nav/light contexts: `02_LOGO/_PNG./00_LOGO_black_NO_SHADOW_NO_BACKG.png` — need to invert for dark background
- Dark background: `02_LOGO/_PNG./01_LOGO_NEGATIV_WITH_SHADOW_NO_BACKG.png`

**Where it goes:**
- [ ] **Nav bar** — small logo mark (24-32px) left of the name image
- [ ] **Favicon** — convert to .ico / use as site icon
- [ ] **Footer** — small mark above or beside footer name
- [ ] **Loading/splash** — if there's a loading state

**Approach:**
1. Copy both PNG versions into `public/images/branding/`
2. Use the negative (light/grey) version for the dark site background
3. Generate a favicon from the black version
4. Add to nav layout as `logo-mark` + `logo-name` side by side

---

### TASK 3: NEW COLOR PALETTE
**Priority: HIGH | Complexity: HIGH**

**What:** Extract and build a new color system from the OPTIC_REF_COLOURS.jpg reference

**Current palette:**
```css
--void: #050505    /* near-black background */
--bone: #f2ede6    /* warm cream text */
--smoke: #1a1a1a   /* dark grey */
--gold: #d4af37    /* accent gold */
```

**New palette derived from the optic reference:**
```css
/* -- CORE -- */
--void: #0a0806        /* warm black (slightly brown-shifted) */
--bone: #e8ddd0        /* warm parchment/linen */
--smoke: #1c1814       /* warm dark (wood-dark) */

/* -- EARTH TONES -- */
--clay: #8b6f5c        /* weathered clay/terracotta */
--timber: #5c4a3a      /* exposed beam / dark wood */
--stone: #9c9488       /* concrete/stone grey */

/* -- ACCENTS -- */
--rust: #a0694e         /* warm copper/rust */
--dust-rose: #8f6b6b   /* muted dusty rose (curtain ref) */
--ceramic: #c4a882      /* warm ceramic/vessel tone */
```

**Where it changes:**
- [ ] `index.html` `:root` CSS variables (line 11-16)
- [ ] All hardcoded color values in `App.tsx` styles
- [ ] Replace `--gold` accent with `--rust` or `--ceramic` for warmth
- [ ] Component-level hardcoded colors

**Approach:**
1. Define the new variable set in `:root`
2. Use find-and-replace across all files for var references
3. Replace hardcoded hex values (#111, #333, etc.) with warm equivalents
4. Test visual contrast — ensure readability
5. The vibe shifts from "cold void + bone" to "warm earth + linen"

---

### TASK 4: PHILOSOPHY PAGE — ANCESTRAL ROOTS
**Priority: MEDIUM | Complexity: MEDIUM**

**What:** Expand the Philosophy page with a new section showcasing the traditional/ancestral tattoo references and their cultural significance

**Assets:** All 16 images from `00_PICS_REF_BRANDING/` + the 8 additional JPGs

**Current state:** Philosophy page has the "Why EXØDUS" manifesto about the name meaning (EXØ, XØ, DUS breakdown). It's text-only.

**New section concept: "Ancestral Roots / The Lineage"**

**Where it goes:** AFTER the existing "Why EXØDUS" content, as a visual/narrative expansion

**Content structure:**
- [ ] **Section header:** "The Lineage" or "Ancestral Marks" or "Before Us"
- [ ] **Intro text:** Brief on how tattooing predates written language — these traditions are the foundation
- [ ] **Image gallery/grid:** Reference photos grouped by tradition:
  - Pacific/Polynesian (Marquesan full body, Kalinga tribal)
  - Amazonian/South American (Shipibo geometric)
  - Southeast Asian (Mentawai hand-tap, facial traditions)
  - Modern continuation (blackwork sleeves/hands carrying the lineage forward)
- [ ] **Captions:** Each image or group gets a short text about the tradition, what the marks mean, how they connect to the EXØDUS practice
- [ ] **Closing statement:** How these roots inform Pierre's approach — not appropriation but honoring a lineage

**Approach:**
1. Copy reference images into `public/images/philosophy/` or `public/images/lineage/`
2. Add a new section below the existing Philosophy content
3. Use a responsive masonry or offset grid layout to match the site aesthetic
4. Keep text minimal — let the images carry the weight
5. Consider a parallax scroll or fade-in reveal for the images

---

## EXECUTION ORDER

```
PHASE 1 — Foundation (do first, everything depends on it)
  [1] Color Palette    → sets the visual tone for everything after
  [2] Studio Name      → identity change, affects all pages
  [3] Logo             → pairs with the name, quick to implement

PHASE 2 — Content
  [4] Philosophy Page  → biggest content addition, uses ref images

PHASE 3 — Polish
  [ ] Test all pages with new colors
  [ ] Responsive check on mobile
  [ ] Verify all image paths resolve
  [ ] Check contrast/accessibility
  [ ] Update any remaining hardcoded "Bali Blackwork" references if needed
```

---

## OPEN QUESTIONS
1. **Name variant:** V1 or V2? (recommend V1)
2. **Subtitle:** Keep "Bali Blackwork Body Art" or change to "TATTOO BODY ART" (as shown in the name assets)?
3. **Website copy DOCX:** Should we extract and use the updated copy from `04_COPY_WEBSITE/`?
4. **Pierre's portfolio folder (05):** Content coming later?
5. **Color palette:** The warm earth direction is clear — should we keep any of the current cold tones or go fully warm?
