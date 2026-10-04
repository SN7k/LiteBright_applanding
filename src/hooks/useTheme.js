/**
 * Generates dynamic theme styles mapped to the Day/Night video transition progress (0.0 = Day, 1.0 = Night).
 *
 * DAY MODE (progress = 0.0):
 *   - Clean, bright daylight atmosphere
 *   - Dark/charcoal text for high contrast readability
 *   - Translucent white glass surfaces
 *   - Crisp, subtle daylight shadows
 *
 * NIGHT MODE (progress = 1.0):
 *   - Deep midnight obsidian & twilight navy background
 *   - White/light text with subtle glow
 *   - Translucent dark glassy surfaces (Windows 11 Mica/Acrylic feel)
 *   - Subtle blue-tinted shadows
 */

import { VIDEO_BOTTOM_COLORS } from '../data/videoBottomColors';

const lerp = (a, b, t) => a + (b - a) * t;

export const buildThemeFromProgress = (progress = 0) => {
  const p = Math.max(0, Math.min(1, progress));

  // Background RGB: Day #f8fafc (248, 250, 252) -> Night #071322 (7, 19, 34) to match hero night sky
  const bgR = Math.round(lerp(248, 7, p));
  const bgG = Math.round(lerp(250, 19, p));
  const bgB = Math.round(lerp(252, 34, p));

  // Sample EXACT bottom color from the hero video frames matching the current progress
  const totalColors = VIDEO_BOTTOM_COLORS.length;
  const floatIndex = p * (totalColors - 1);
  const lowerIndex = Math.floor(floatIndex);
  const upperIndex = Math.min(totalColors - 1, Math.ceil(floatIndex));
  const fraction = floatIndex - lowerIndex;

  const [r1, g1, b1] = VIDEO_BOTTOM_COLORS[lowerIndex];
  const [r2, g2, b2] = VIDEO_BOTTOM_COLORS[upperIndex];

  // Exact synchronized video bottom color
  const s2BgR = Math.round(r1 + (r2 - r1) * fraction);
  const s2BgG = Math.round(g1 + (g2 - g1) * fraction);
  const s2BgB = Math.round(b1 + (b2 - b1) * fraction);

  // Section 3 Background: Day #fefefe (254, 254, 254) -> Night #071322 (7, 19, 34)
  const s3BgR = Math.round(lerp(254, 7, p));
  const s3BgG = Math.round(lerp(254, 19, p));
  const s3BgB = Math.round(lerp(254, 34, p));

  // Text contrast transitions smoothly as the sky darkens during dusk/twilight
  const textDarkProgress = Math.min(1, Math.max(0, (p - 0.25) / 0.4));

  // Section 2 Headline: Day #0a2335 (10, 35, 53) -> Night #f8fafc (248, 250, 252)
  const s2TitleR = Math.round(lerp(10, 248, textDarkProgress));
  const s2TitleG = Math.round(lerp(35, 250, textDarkProgress));
  const s2TitleB = Math.round(lerp(53, 252, textDarkProgress));

  // Section 2 Subtitle: Day #0f344e (15, 52, 78) -> Night #94a3b8 (148, 163, 184)
  const s2SubR = Math.round(lerp(15, 148, textDarkProgress));
  const s2SubG = Math.round(lerp(52, 163, textDarkProgress));
  const s2SubB = Math.round(lerp(78, 184, textDarkProgress));

  // Section 2 Eyebrow: Day #0f344e (15, 52, 78) -> Night #38bdf8 (56, 189, 248)
  const s2EyeR = Math.round(lerp(15, 56, textDarkProgress));
  const s2EyeG = Math.round(lerp(52, 189, textDarkProgress));
  const s2EyeB = Math.round(lerp(78, 248, textDarkProgress));

  // Section 2 Card Surface: Day rgba(255, 255, 255, 0.95) -> Night rgba(14, 27, 44, 0.75)
  const s2CardR = Math.round(lerp(255, 14, textDarkProgress));
  const s2CardG = Math.round(lerp(255, 27, textDarkProgress));
  const s2CardB = Math.round(lerp(255, 44, textDarkProgress));
  const s2CardA = lerp(0.95, 0.75, textDarkProgress).toFixed(2);

  // Section 2 Card Border: Day rgba(255, 255, 255, 0.6) -> Night rgba(255, 255, 255, 0.08)
  const s2CardBorderA = lerp(0.5, 0.08, textDarkProgress).toFixed(2);

  // Section 2 Card Text: Day #0f172a (15, 23, 42) -> Night #f8fafc (248, 250, 252)
  const s2CardTitleR = Math.round(lerp(15, 248, textDarkProgress));
  const s2CardTitleG = Math.round(lerp(23, 250, textDarkProgress));
  const s2CardTitleB = Math.round(lerp(42, 252, textDarkProgress));

  // Section 2 Card Desc: Day #475569 (71, 85, 105) -> Night #94a3b8 (148, 163, 184)
  const s2CardDescR = Math.round(lerp(71, 148, textDarkProgress));
  const s2CardDescG = Math.round(lerp(85, 163, textDarkProgress));
  const s2CardDescB = Math.round(lerp(105, 184, textDarkProgress));

  // Section 2 Card Icon
  const s2IconBgR = Math.round(lerp(240, 56, textDarkProgress));
  const s2IconBgG = Math.round(lerp(249, 189, textDarkProgress));
  const s2IconBgB = Math.round(lerp(255, 248, textDarkProgress));
  const s2IconBgA = lerp(1.0, 0.12, textDarkProgress).toFixed(2);

  const s2IconTextR = Math.round(lerp(24, 56, textDarkProgress));
  const s2IconTextG = Math.round(lerp(133, 189, textDarkProgress));
  const s2IconTextB = Math.round(lerp(190, 248, textDarkProgress));

  // Main text RGB: Day #0f172a (15, 23, 42) -> Night #f8fafc (248, 250, 252)
  const textR = Math.round(lerp(15, 248, p));
  const textG = Math.round(lerp(23, 250, p));
  const textB = Math.round(lerp(42, 252, p));

  // Muted text RGB: Day #475569 (71, 85, 105) -> Night #94a3b8 (148, 163, 184)
  const mutedR = Math.round(lerp(71, 148, p));
  const mutedG = Math.round(lerp(85, 163, p));
  const mutedB = Math.round(lerp(105, 184, p));

  // Button background: Day #0f172a -> Night #f8fafc
  const btnBgR = Math.round(lerp(15, 248, p));
  const btnBgG = Math.round(lerp(23, 250, p));
  const btnBgB = Math.round(lerp(42, 252, p));

  // Button text: Day #f8fafc -> Night #070a12
  const btnTextR = Math.round(lerp(248, 7, p));
  const btnTextG = Math.round(lerp(250, 10, p));
  const btnTextB = Math.round(lerp(252, 18, p));

  // Card surface: Day rgba(255, 255, 255, 0.75) -> Night rgba(15, 23, 42, 0.65)
  const cardR = Math.round(lerp(255, 15, p));
  const cardG = Math.round(lerp(255, 23, p));
  const cardB = Math.round(lerp(255, 42, p));
  const cardA = (lerp(0.8, 0.65, p)).toFixed(2);

  // Border: Day rgba(15, 23, 42, 0.08) -> Night rgba(255, 255, 255, 0.08)
  const borderR = Math.round(lerp(15, 255, p));
  const borderG = Math.round(lerp(23, 255, p));
  const borderB = Math.round(lerp(42, 255, p));
  const borderA = (lerp(0.08, 0.1, p)).toFixed(2);

  // Nav surface
  const navA = (lerp(0.85, 0.75, p)).toFixed(2);

  const themeStyles = {
    '--bg-base': `rgb(${bgR}, ${bgG}, ${bgB})`,
    '--text-main': `rgb(${textR}, ${textG}, ${textB})`,
    '--text-muted': `rgb(${mutedR}, ${mutedG}, ${mutedB})`,
    '--border-subtle': `rgba(${borderR}, ${borderG}, ${borderB}, ${borderA})`,
    '--card-bg': `rgba(${cardR}, ${cardG}, ${cardB}, ${cardA})`,
    '--nav-bg': `rgba(${bgR}, ${bgG}, ${bgB}, ${navA})`,
    '--btn-bg': `rgb(${btnBgR}, ${btnBgG}, ${btnBgB})`,
    '--btn-text': `rgb(${btnTextR}, ${btnTextG}, ${btnTextB})`,
    '--btn-hover': p > 0.5 ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
    '--s2-bg': `rgb(${s2BgR}, ${s2BgG}, ${s2BgB})`,
    '--s2-title': `rgb(${s2TitleR}, ${s2TitleG}, ${s2TitleB})`,
    '--s2-sub': `rgb(${s2SubR}, ${s2SubG}, ${s2SubB})`,
    '--s2-eyebrow': `rgb(${s2EyeR}, ${s2EyeG}, ${s2EyeB})`,
    '--s2-card-bg': `rgba(${s2CardR}, ${s2CardG}, ${s2CardB}, ${s2CardA})`,
    '--s2-card-border': `rgba(255, 255, 255, ${s2CardBorderA})`,
    '--s2-card-title': `rgb(${s2CardTitleR}, ${s2CardTitleG}, ${s2CardTitleB})`,
    '--s2-card-desc': `rgb(${s2CardDescR}, ${s2CardDescG}, ${s2CardDescB})`,
    '--s2-icon-bg': `rgba(${s2IconBgR}, ${s2IconBgG}, ${s2IconBgB}, ${s2IconBgA})`,
    '--s2-icon-text': `rgb(${s2IconTextR}, ${s2IconTextG}, ${s2IconTextB})`,
    '--s3-bg': `rgb(${s3BgR}, ${s3BgG}, ${s3BgB})`,
    backgroundColor: 'var(--bg-base)',
    color: 'var(--text-main)',
  };

  return { themeStyles, brightnessValue: Math.round(lerp(100, 25, p)) };
};

export default buildThemeFromProgress;
