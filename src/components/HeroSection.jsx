import { Github } from 'lucide-react';
import ThemeSwitch from './ThemeSwitch';

const HeroSection = ({
  videoRef,
  canvasRef,
  theme = 'day',
  toggleTheme,
  isTransitioning = false,
  isReversing = false,
  progress = 0,
}) => {
  const isNight = theme === 'night' || progress >= 0.5;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden select-none">
      {/* 
        HERO BACKGROUND VIDEO LAYER
        - position: absolute
        - width: 100%
        - height: 100%
        - object-fit: cover
        - overflow: hidden
        - No controls, no play button, no borders
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          src="/litebright-vid1.mp4"
          poster="/hero-day-poster.png"
          playsInline
          muted
          preload="auto"
          className="absolute -top-1 -bottom-2 inset-x-0 w-full h-[calc(100%+8px)] object-cover pointer-events-none"
        />
        {/* Seamless reverse playback canvas layer */}
        <canvas
          ref={canvasRef}
          width={1280}
          height={567}
          className={`absolute -top-1 -bottom-2 inset-x-0 w-full h-[calc(100%+8px)] object-cover pointer-events-none transition-opacity duration-75 ${isReversing ? 'opacity-100 z-[1]' : 'opacity-0 -z-10'
            }`}
        />
      </div>

      {/* Seamless blend overlay into section 2 (eliminates any video frame boundary in dark and light modes) */}
      <div
        className="absolute bottom-0 inset-x-0 h-12 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--s2-bg, #4dc0ff))',
        }}
      />

      {/* 
        TOP GLASS BLUR & SHADOW OVERLAY (Center to Top)
        - Covers from vertical center (~52%) up to the top
        - Soft atmospheric shadow vignette (deepens smoothly towards top)
        - Progressive frosted glass blur (backdrop-filter with gradient mask)
      */}
      <div
        className="absolute top-0 inset-x-0 h-[52%] pointer-events-none z-10 transition-all duration-500"
        style={{
          background: isNight
            ? 'linear-gradient(to top, transparent 0%, rgba(7, 19, 34, 0.2) 35%, rgba(7, 19, 34, 0.6) 75%, rgba(7, 19, 34, 0.85) 100%)'
            : 'linear-gradient(to top, transparent 0%, rgba(10, 30, 60, 0.05) 30%, rgba(10, 30, 60, 0.18) 70%, rgba(10, 25, 50, 0.32) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          maskImage: 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0.75) 70%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0.75) 70%, black 100%)',
        }}
      />

      {/* 
        TOP MINIMAL HEADER (Matches Twinkle Tray Reference)
        - Top Left: Small logo + LITEBRIGHT
        - Top Right: View project on GitHub
        - Completely leaves the central clouds & sun open
      */}
      <header className="relative z-20 w-full px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[var(--text-main)] hover:opacity-80 transition-opacity"
        >
          <img
            src="https://res.cloudinary.com/dlpskz98w/image/upload/v1772199200/icon_png_r1ukbi.png"
            alt="LiteBright Logo"
            className="w-5 h-5 rounded-md object-contain"
          />
          <span>LiteBright</span>
        </a>

        <a
          href="https://github.com/SN7k/LiteBright"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
        >
          <span>View project on GitHub</span>
          <Github className="w-3.5 h-3.5" />
        </a>
      </header>

      {/* 
        MAIN HERO CONTENT (Matches Twinkle Tray Reference Layout & Proportions)
        Pushed comfortably below the clouds into the open central/lower section.
      */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 w-full pt-[18vh] lg:pt-[24vh] pb-8 lg:pb-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Headline, description, CTA button, changelog link */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mb-4 leading-[1.18] transition-colors duration-300 text-[var(--text-main)]">
              Lightweight Brightness Control for Windows
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-[17px] font-normal max-w-lg leading-relaxed mb-6 transition-colors duration-300 text-[var(--text-muted)] opacity-90">
              Control and sync brightness across your laptop and external monitors — instantly from the system tray, with native DDC/CI support and global hotkeys
            </p>

            {/* CTA Row: Windows Download Button + all downloads & changelogs link */}
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <a
                  href="https://github.com/SN7k/LiteBright/releases/download/v1.2.2/LiteBright-Setup-1.2.2.exe"
                  id="hero-download-btn"
                  className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1f2429] hover:bg-[#2c333a] transition-all duration-200 active:scale-95 shadow-md shadow-black/20 border border-white/10 cursor-pointer whitespace-nowrap"
                >
                  {/* Windows official 4-pane logo */}
                  <svg
                    className="w-4 h-4 fill-current flex-shrink-0 text-white"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M0 2.278L6.545 1.382v6.241H0V2.278zm0 5.922h6.545v6.242L0 13.545V8.2zm7.091-6.918L16 0v7.623H7.091V1.282zm0 6.918H16V16l-8.909-1.282V8.2z" />
                  </svg>
                  <span>Download LiteBright (v1.2.2)</span>
                </a>

                <a
                  href="https://github.com/SN7k/LiteBright/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-normal transition-colors text-[var(--text-muted)] hover:text-[var(--text-main)] underline underline-offset-4 decoration-current/30 hover:decoration-current"
                >
                  all downloads & changelogs
                </a>
              </div>

              {/* Get it from Microsoft Store Badge */}
              <a
                href="https://apps.microsoft.com/detail/9NTLVZDLPPK5"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-ms-store-btn"
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-black text-white border border-white/30 hover:border-white/60 hover:bg-[#111111] transition-all duration-200 shadow-sm active:scale-95 cursor-pointer select-none"
                title="Get LiteBright from Microsoft Store"
              >
                {/* Microsoft 4-Color Squares Logo */}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M1 1h9v9H1V1z" fill="#f25022" />
                  <path d="M11 1h9v9h-9V1z" fill="#7fba00" />
                  <path d="M1 11h9v9H1v-9z" fill="#00a4ef" />
                  <path d="M11 11h9v9h-9v-9z" fill="#ffb900" />
                </svg>
                <div className="flex flex-col text-left leading-none justify-center">
                  <span className="text-[10px] text-white/90 font-normal tracking-tight mb-0.5">
                    Get it from
                  </span>
                  <span className="text-[14px] font-semibold text-white tracking-tight leading-none font-sans">
                    Microsoft
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: LiteBright Control Panel Screenshot (Sized to match Twinkle Tray flyout) */}
          <div className="lg:col-span-5 flex items-start justify-center lg:justify-end pt-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[390px] group">
              <div
                className={`absolute -inset-1.5 rounded-2xl blur-lg opacity-25 transition-opacity duration-500 ${isNight ? 'bg-cyan-500/20' : 'bg-blue-400/15'
                  }`}
              />
              <img
                src="/litebright-control-panel.png"
                alt="LiteBright Brightness Control Panel"
                className="relative w-full h-auto rounded-xl drop-shadow-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Center: Day / Night Theme Toggle Switch */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center pb-8 sm:pb-10 pt-2">
        <ThemeSwitch
          isNight={isNight}
          toggleTheme={toggleTheme}
          isTransitioning={isTransitioning}
        />
      </div>
    </section>
  );
};

export default HeroSection;
