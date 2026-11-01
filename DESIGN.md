---
name: AOV MetaForge
description: A Lien Quan Mobile draft board and team roller forged from one enamel rank medal.
colors:
  gilt: "#e9be63"
  gilt-pale: "#f5dfa6"
  gilt-deep: "#8a6a2a"
  on-gilt: "#1a1305"
  ember: "#ff9a3d"
  blue: "#5c9bff"
  blue-field: "#0f2147"
  blue-line: "#2a4f94"
  red: "#ff6a6e"
  red-field: "#2a1226"
  red-line: "#7a3044"
  tier-splus: "#e9be63"
  tier-s: "#a897ff"
  tier-a: "#5c9bff"
  tier-b: "#9daac4"
  bg: "#0a1224"
  bg-raised: "#0e1a33"
  surface: "#101c38"
  surface-2: "#16264a"
  surface-3: "#1d3160"
  line: "#2a3a5e"
  line-strong: "#3d5184"
  ink: "#eef1f6"
  ink-2: "#c3cde0"
  mute: "#9daac4"
  scrim-ink: "#050914"
  backdrop-ink: "#030712"
typography:
  display:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1.05
  clock:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.05
    fontFeature: "tnum"
  headline:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    lineHeight: 1.05
  title:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.15
  label-display:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
  body-long:
    fontFamily: "Be Vietnam Pro, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Be Vietnam Pro, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  control:
    fontFamily: "Be Vietnam Pro, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: "Be Vietnam Pro, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  corner: "3px"
  round: "50%"
spacing:
  tile: "4px"
  tight: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  gutter: "20px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.gilt}"
    textColor: "{colors.on-gilt}"
    typography: "{typography.title}"
    rounded: "{rounded.corner}"
    padding: "0 28px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.gilt-pale}"
    textColor: "{colors.on-gilt}"
  button-primary-disabled:
    backgroundColor: "{colors.gilt-deep}"
    textColor: "{colors.ink}"
  button-control:
    textColor: "{colors.ink-2}"
    typography: "{typography.control}"
    rounded: "{rounded.corner}"
    padding: "0 10px"
    height: "34px"
  button-control-on:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
  segment:
    textColor: "{colors.mute}"
    typography: "{typography.control}"
    padding: "0 12px"
    height: "32px"
  segment-active:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
  input-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.corner}"
    padding: "0 12px"
    height: "34px"
  nav-tab:
    textColor: "{colors.mute}"
    typography: "{typography.label-display}"
    padding: "0 16px"
    height: "60px"
  nav-tab-active:
    textColor: "{colors.ink}"
  hero-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.corner}"
  pick-slot:
    backgroundColor: "{colors.scrim-ink}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.corner}"
  hero-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.corner}"
    padding: "2px 10px 2px 2px"
    height: "36px"
---

# Design System: AOV MetaForge

## Overview

**Creative North Star: "The Enamel Rank Medal"**

The whole app is struck from one rank medal: midnight lapis enamel for the ground, thin gilt for the setting, a heated seam for the only thing currently happening. It is a dense operating surface for rank players on phones and coaches on desktops, with the hero portrait as the largest thing on screen whenever the hero is the point.

Colour carries meaning, not mood. The ground stays quiet so that gold can mean "act now or this is the best", blue and red can mean a side, and ember can mean the one leg of the draft that is live. Cancelled things stay in view, like a ticket that has been punched rather than torn up.

The world refuses both the light SaaS card stack and a copy of Garena's own lobby. Density comes from whole-cell thumbnail grids and hairlines rather than padded cards, and depth comes from tonal enamel steps rather than floating panels.

**Key Characteristics:**
- Dark lapis ground with tonal steps, separated by 1px hairlines.
- Team fields in enamel blue and oxblood flank the board.
- Corners of 3px throughout; circles only for skill icons and seam nodes.
- Saira Condensed for names, numerals and headings; Be Vietnam Pro for reading and controls.
- Faceted SVG tier medals and drawn stroke icons, with no emoji anywhere.
- Whole-cell portraits, with text carried on a dark scrim.

## Colors

A near-black lapis ground, two team enamels, and one rationed metal with a single hot accent.

### Primary
- **Forged Gilt** (#e9be63): The fill of the primary action, the S+ medal plate and the S+ reel frame, and the colour of the turn clock and the current-slot prompt.
- **Pale Gilt** (#f5dfa6): Primary hover, the bright head of the S+ sweep, and draft notices on the turn line.
- **Deep Gilt** (#8a6a2a): The quiet metal setting: 1px frames on reels, the draft menu, the hero dialog and the detail portrait. Also the primary button's in-progress state.
- **On Gilt** (#1a1305): Text on gold, on every medal plate and on the damage split bars.

### Secondary
- **Heated Ember** (#ff9a3d): The active seam leg and its node. Nothing else in the interface.

### Tertiary
- **Team Blue** (#5c9bff), **Blue Field** (#0f2147), **Blue Line** (#2a4f94): Blue side's text and bars, rail ground, and edges.
- **Team Red** (#ff6a6e), **Oxblood Field** (#2a1226), **Red Line** (#7a3044): Red side's text and bars, rail ground, and edges. Team Red also carries bans and alerts: the strike line, a low clock, warning bullets.
- **Tier plates**: S+ Gilt (#e9be63), S Violet (#a897ff), A Blue (#5c9bff), B Steel (#9daac4). Each medal adds a lighter and a darker facet of the same hue. S Violet doubles as the magic share of the damage bar.

### Neutral
- **Midnight Lapis** (#0a1224): Page ground.
- **Raised Lapis** (#0e1a33): Header, sticky bars, menus, dialogs and the phone picker sheet.
- **Enamel 1, 2, 3** (#101c38, #16264a, #1d3160): Inputs and panels, then hover and notes, then the selected state of a control.
- **Hairline** (#2a3a5e) and **Strong Hairline** (#3d5184): Dividers and control edges, then their hover and filled state.
- **Ink** (#eef1f6), **Ink 2** (#c3cde0), **Mute** (#9daac4): Names and values, reading text, then secondary labels and placeholders. Mute holds above 7:1 on the ground and Enamel 1, so it stays usable for real information.
- **Scrim Ink** (#050914): Portrait scrims and slot wells, applied between 0.25 and 0.95 alpha.
- **Backdrop Ink** (#030712): Dialog backdrop and picker scrim at 0.7 to 0.78 alpha; also the tint of the one shadow.

### Named Rules
**The Gold Reservation Rule.** A gold fill or gold text means one of three things: the current turn, the primary action, or S+. A gacha S+ result line qualifies; a hero's tier below S+ never does. The AOV METAFORGE wordmark is the single identity exception.

**The Gilt Hairline Rule.** Outside that reservation, gold appears only as thin metal or a thin signal of 3px or less: deep gilt frames, the top edge of a filled pick, finished seam legs, the focus ring, the input caret and focus edge, hover edges on tiles and chips, and the underline on the active nav tab or gacha mode.

**The One Heated Leg Rule.** Ember belongs to the active seam leg and its node. If two things are ember, one of them is wrong.

**The Side Is Colour Rule.** Blue and red always mean a team side, and red alone may also mean banned or at risk. Verdict heads take the colour of the side that benefits.

## Typography

**Display Font:** Saira Condensed (with Arial Narrow, sans-serif)
**Body Font:** Be Vietnam Pro (with -apple-system, Segoe UI, sans-serif)

**Character:** A condensed, stamped face that reads like lettering on a medal, set against a warm humanist sans that handles Vietnamese diacritics cleanly at small sizes. Both cover Vietnamese.

### Hierarchy
- **Display** (800, 2.5rem, 1.05): The hero name in the detail view; 1.625rem on phones.
- **Clock** (800, 2.25rem, 1.05, tabular numerals): The turn clock only, in gold, red when low.
- **Headline** (800, 1.625rem, 1.05): Reel names, pick slot names, section titles such as the analysis and gacha headings.
- **Title** (800, 1.25rem, about 1.15): Primary button, catalog names, team rail heads, result line, skill names.
- **Label Display** (700, 1rem, 1.2): Nav tabs at 0.04em tracking, lane heads, verdict heads, chip names, numerals on empty ban slots.
- **Body Long** (400, 0.875rem, 1.6, max 72ch): Hero prose, skill descriptions, analysis text.
- **Body** (400, 0.875rem, 1.5): Page default and input text.
- **Control** (600, 0.8125rem): Buttons, segments, chips, metric labels.
- **Caption** (400, 0.75rem, 1.35): Verdict detail, roles, skill types, timestamps, pick order.

### Named Rules
**The Two Voices Rule.** Names, numerals and headings speak in Saira Condensed at 700 or 800. Anything read as a sentence or operated as a small control speaks in Be Vietnam Pro.

**The Uppercase Is For Stamps Rule.** Uppercase is used only on lane labels and team rail heads. Sentences, nav and buttons keep normal case so that Vietnamese reads correctly.

## Layout

The app is a fixed-frame operating board rather than a scrolling page. A 60px sticky header holds brand and sections, with language, music and sound at the right. Full-width bars use a 20px gutter on desktop and 12px on phones, in a rhythm of 4, 6, 8, 12, 16 and 20px, with 48px closing a section. Gaps between tiles stay at 4 to 6px so grids read as one sheet.

The draft board uses three columns: a 250 to 320px rail on each side and the centre between them, under a ban bar with bans left and right of the central clock. The board's height is tied to the viewport so the rails and the grid fit together, and the grid scrolls inside its own column at 6 columns, then 5 at 1180px. Gacha holds one frame height for idle, spinning and landed (700 to 860px) with up to 1400px of reels, and the result line reserves its height so reels never jump. The compendium is an auto-filling grid of square cards with a 148px minimum, three columns on phones.

Below 900px the draft stacks, with the seam and the rails first; the ban bar sticks under the header and the hero grid becomes a full-screen sheet with a live clock and a miniature of both teams' picks. Below 760px the section nav moves to a 60px bar in the thumb zone, the five reels arrange three over two, and interactive controls grow to 44px. Below 1100px the roll action takes its own full row.

**The Board Stays Rule.** Choosing never hides the state of the draft. Any picker over the board must carry the clock and both teams' picks with it.

## Elevation & Depth

Depth is tonal. Surfaces step from Midnight Lapis to Enamel 3, separated by hairlines rather than shadow. There is one shadow, used only for things that genuinely float over the board. Portrait legibility comes from a bottom-up scrim rather than a panel.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 8px 24px rgba(3, 7, 18, 0.55)`): The draft options menu and the hero dialog only.
- **Active underline** (`box-shadow: inset 0 -3px 0 #e9be63`): The active nav tab; 2px on the active gacha mode, and moved to the top edge on the phone nav. A state mark rather than elevation.

### Named Rules
**The Flat Enamel Rule.** Tiles, cards, rails and slots carry no shadow at rest or on hover. State changes the edge colour, not the height.

## Shapes

Corners are a tight, machined 3px on every bordered control, panel and tile. Skill icons and seam nodes are the only circles, because in the game skills are round and the nodes are rivets on the seam. Small labels overlaid on portraits and the phone sheet's miniature picks stay square. Empty ban slots use a dashed hairline to read as an unfilled socket. Tier medals are the one faceted silhouette, an elongated hexagon cut into three planes.

**The Three Pixel Rule.** Only two radii exist: 3px and 50%. A new radius is a new world.

## Components

### Buttons
Stamped and decisive at the top of the hierarchy, recessive everywhere else.
- **Shape:** Machined corners (3px).
- **Primary:** Forged Gilt with On Gilt text in Saira Condensed 800, 44px tall, 52px on phones. One per view: the roll action. The phone's current-slot prompt uses the same treatment.
- **Hover / Focus:** Pale Gilt on hover over 0.15s; a 2px gilt outline at 2px offset for all keyboard focus. In progress, it drops to Deep Gilt with Ink text.
- **Control:** Transparent with a hairline edge and Ink 2 text at 34px, 42px in the compact header. Hover strengthens the edge and lifts the text to Ink. Toggled on fills to Enamel 3. Disabled drops to 0.45 opacity.

### Segmented Controls
- **Style:** A single 3px hairline frame holding flush buttons in Mute, 32px tall, 40px in the gacha row, 44px on touch layouts.
- **State:** Selected fills to Enamel 3 with Ink text. The gacha mode row adds a 2px gilt underline. The draft's first-pick switch fills with the team's line colour. The lane filters' solid gold selection is drift against the Gold Reservation Rule and is not a pattern to copy.

### Chips
- **Hero chips:** Enamel with a hairline edge, a portrait flush at the left, and a Saira name, 36 to 44px tall. Hover turns the edge gilt. In relation lists the edge takes Blue Line for a win and Red Line for a loss.
- **Item pills:** Enamel 3, no edge, caption size, compact.
- **Lane chips:** Enamel with a hairline; checked fills to Enamel 3 with a Deep Gilt edge.

### Cards / Containers
- **Corner Style:** 3px.
- **Background:** Enamel 1, or the portrait itself filling the whole cell.
- **Shadow Strategy:** None, per the Flat Enamel Rule.
- **Border:** 1px hairline; gilt on hover where the card opens something.
- **Internal Padding:** 12 to 14px on text panels, none on portrait tiles.

### Inputs / Fields
- **Style:** Enamel 1 with a hairline edge, 3px corners, 34px tall, 44px on touch layouts, placeholder in Mute.
- **Focus:** The edge turns gilt and the caret is gilt.

### Navigation
- **Style:** Saira Condensed 700 at 1rem with a drawn 18px icon, full header height, in Mute.
- **States:** Hover lifts to Ink. Active is Ink with a 3px gilt underline.
- **Mobile:** A fixed three-column bottom bar with icon over label. Active takes a gilt top edge and gilt text.

### Tier Medals
A small faceted plate built as inline SVG: three polygons (light upper facet, dark lower facet, central plate) stretched behind the tier text in Saira Condensed 800 and On Gilt. 22px tall by default, 26px on a reel.

**The Faceted Medal Rule.** Tier is always the faceted medal in its own plate colour, never a text badge, a pill or a filled circle.

### Lane and Interface Icons
Inline 24 by 24 SVG with a 1.8 stroke, round caps and joins, inheriting `currentColor`. Lanes are a shield for top, crossed blades for jungle, a split diamond for mid, an arrow and arc for AD, and a heart for support. Sized 12 to 18px in context.

**The Drawn Icon Rule.** Every icon is a drawn stroke SVG. No emoji, no icon-font glyphs, no unicode symbols standing in for an icon.

### Ban Slots and Hero Tiles
Square portrait cells. Tiles show the portrait whole, the name on a scrim in Saira 700, and a medal top right.

**The Struck, Not Gone Rule.** A banned hero stays on the board and in the grid: portrait in greyscale and dimmed, a 2px Team Red line struck corner to corner at 45 degrees, and on tiles a red state label. A picked hero stays too, greyed without the strike and labelled in its team's colour. Unavailable heroes are never removed from the grid or reordered.

### Pick Slots
Rail rows on a dark well with a square portrait flush to the outer side and mirrored on the red rail. Filled slots take a strong hairline with a gilt top edge. The current slot takes a 2px gilt border and a gold prompt. A locked slot darkens and shows `not-allowed`.

### Draft Seam
The signature. The 1-2-2-2-2-1 snake drawn as a stroked SVG line through round nodes, in hairline when pending, gilt once finished and ember at 3px when active. On lock-in the next leg heats along its length over 0.55s. Nodes are outlined in their team colour, filled when done, and the active node grows from 20 to 24px in ember.

### Gacha Reels
Tall columns framed in Deep Gilt: lane head, square portrait window, and a panel of real hero data ending at the fold. Idle windows look through to one continuous portal image that stays lit below the window during a spin. An S+ landing brightens the portrait, drops the medal in from 2.2x scale, and runs a gilt sweep once around the frame over 1.1s; afterwards the frame stays solid gilt.

### Hero Text
About 100 of the 129 heroes still carry templated text from the data sync. Authored copy is the only hero prose that gets featured.

**The Authored Text Rule.** Gate hero prose with `hasAuthoredProfile`. Where a hero has no authored profile, omit the block and let skills, meters and relations fill the space. The reel panel and the detail prose follow this today; the analysis rows and the detail view's counter tips do not yet, which is drift to fix rather than precedent.

## Do's and Don'ts

### Do:
- **Do** keep gold fills and gold text for the current turn, the primary action and S+, under the Gold Reservation Rule.
- **Do** use gold outside that reservation only as thin metal or a thin signal of 3px or less, under the Gilt Hairline Rule.
- **Do** keep ember on the active seam leg and its node.
- **Do** show banned heroes greyed and struck in place, with picked heroes greyed and labelled by team.
- **Do** use 3px corners, with 50% only for skill icons and seam nodes.
- **Do** set names, numerals and headings in Saira Condensed, and reading text and small controls in Be Vietnam Pro.
- **Do** show tier with the faceted SVG medal and lanes with the drawn stroke icons.
- **Do** gate hero prose with `hasAuthoredProfile`.
- **Do** grow touch targets to 44px on touch layouts and honour `prefers-reduced-motion`.
- **Do** crop portraits at `center 20%` so faces survive square cells.

### Don't:
- **Don't** use gold for a selected filter, a tier below S+, a metric bar or decoration. Meters use Ink 2.
- **Don't** use ember for warnings, hover or any second accent.
- **Don't** remove, hide or reorder a banned or picked hero.
- **Don't** introduce a radius other than 3px or 50%, or pill shapes.
- **Don't** use emoji, icon fonts or unicode glyphs as icons.
- **Don't** render tier as a plain text badge.
- **Don't** feature templated hero text as if it were authored.
- **Don't** add shadows to tiles, cards or slots, or return to light surfaces and glass panels.
- **Don't** imitate Garena's lobby or suggest the app is an official Garena product.
