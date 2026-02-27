/**
 * Derives all CSS custom-property values from a brightness value (0-100).
 *
 * Brightness scale interpretation:
 *   0   → very dark (near-black background)
 *   50  → default dark-mode
 *   100 → full light mode
 */

/** Linear interpolation across three control points (0, 50, 100). */
const interp = (val, y0, y50, y100) => {
  if (val <= 50) return y0 + (y50 - y0) * (val / 50);
  return y50 + (y100 - y50) * ((val - 50) / 50);
};

const buildSliderIconSvg = (iconStroke) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="${iconStroke}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="4"  y1="7"  x2="16" y2="7"/>
    <line x1="16" y1="5"  x2="16" y2="9"/>
    <line x1="16" y1="7"  x2="20" y2="7"/>
    <line x1="4"  y1="12" x2="10" y2="12"/>
    <line x1="10" y1="10" x2="10" y2="14"/>
    <line x1="10" y1="12" x2="20" y2="12"/>
    <line x1="4"  y1="17" x2="14" y2="17"/>
    <line x1="14" y1="15" x2="14" y2="19"/>
    <line x1="14" y1="17" x2="20" y2="17"/>
  </svg>`;

/**
 * Given a brightness number (0-100), returns:
 *  - `themeStyles`   – CSS-in-JS object with all custom properties
 *  - `trackShadowA`  – numeric alpha used by HeroSection for the track box-shadow
 */
const buildTheme = (brightness) => {
  const b = Number(brightness);

  // --- Color channel values ---
  const bgL         = interp(b,   0,   4, 100);
  const textMainL   = interp(b,  40,  96,   9);
  const textMutedL  = interp(b,  25,  65,  40);
  const rgb         = interp(b, 255, 255,   0);
  const borderA     = interp(b, 0.02, 0.08, 0.15);
  const cardA       = interp(b,   0, 0.02, 0.04);
  const btnBgL      = interp(b,  80,  96,   9);
  const btnTextL    = interp(b,   9,   9,  96);
  const btnHoverL   = interp(b, 100, 100,  20);
  const navBgL      = interp(b,   0,   4, 100);

  // --- Slider track & thumb ---
  const trackBgL        = interp(b,   6,   9,  96);
  const trackBorderA    = interp(b, 0.05, 0.08, 0.15);
  const trackShadowA    = interp(b,   0,   0, 0.06);
  const thumbBgL        = interp(b,  14,  16, 100);
  const thumbBorderA    = interp(b, 0.1, 0.1, 0.15);
  const shadowAlphaOuter = interp(b, 0.6, 0.4, 0.15);
  const shadowAlphaInner = interp(b, 0.05, 0.08, 1);

  // --- Slider icon ---
  const iconL       = interp(b,  70,  50,  40);
  const iconStroke  = `hsl(240, 5%, ${iconL}%)`;
  const sliderIconSvg = buildSliderIconSvg(iconStroke);
  const sliderIconUrl = `url('data:image/svg+xml;utf8,${encodeURIComponent(
    sliderIconSvg.trim().replace(/\n/g, '')
  )}')`;

  const themeStyles = {
    '--bg-base':       `hsl(240, 9%, ${bgL}%)`,
    '--text-main':     `hsl(240, 5%, ${textMainL}%)`,
    '--text-muted':    `hsl(240, 5%, ${textMutedL}%)`,
    '--border-subtle': `rgba(${rgb}, ${rgb}, ${rgb}, ${borderA})`,
    '--card-bg':       `rgba(${rgb}, ${rgb}, ${rgb}, ${cardA})`,
    '--nav-bg':        `hsla(240, 9%, ${navBgL}%, 0.8)`,
    '--btn-bg':        `hsl(240, 5%, ${btnBgL}%)`,
    '--btn-text':      `hsl(240, 9%, ${btnTextL}%)`,
    '--btn-hover':     `hsl(240, 5%, ${btnHoverL}%)`,
    '--track-bg':      `hsl(240, 5%, ${trackBgL}%)`,
    '--track-border':  `rgba(${rgb}, ${rgb}, ${rgb}, ${trackBorderA})`,
    '--thumb-bg':      `hsl(240, 5%, ${thumbBgL}%)`,
    '--thumb-border':  `rgba(${rgb}, ${rgb}, ${rgb}, ${thumbBorderA})`,
    '--thumb-shadow':  `0 4px 12px rgba(0, 0, 0, ${shadowAlphaOuter}), inset 0 1px 0 rgba(255, 255, 255, ${shadowAlphaInner})`,
    '--slider-icon':   sliderIconUrl,
    backgroundColor:  'var(--bg-base)',
    color:            'var(--text-muted)',
  };

  return { themeStyles, trackShadowA };
};

export default buildTheme;
