import { Sun, Moon, Sparkles, Download, Github } from 'lucide-react';
import FallbackImage from './FallbackImage';

const Navbar = ({ scrolled, theme = 'day', toggleTheme, isTransitioning, progress = 0 }) => {
  const isNight = theme === 'night' || progress >= 0.5;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-xl border-b shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled
          ? isNight
            ? 'rgba(7, 10, 18, 0.75)'
            : 'rgba(255, 255, 255, 0.75)'
          : 'transparent',
        borderColor: scrolled
          ? isNight
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(15, 23, 42, 0.08)'
          : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer select-none"
          title="LiteBright - Home"
        >
          <div className="relative w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <FallbackImage
              src="https://res.cloudinary.com/dlpskz98w/image/upload/v1772199200/icon_png_r1ukbi.png"
              alt="LiteBright Icon"
              className="w-full h-full object-cover"
              icon={Sun}
            />
          </div>
          <span className="text-base font-semibold tracking-tight transition-colors duration-300 text-[var(--text-main)]">
            LiteBright
          </span>
        </a>

        {/* Center: Minimal Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <a
            href="#features"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--card-bg)] transition-all duration-200"
          >
            Features
          </a>
          <a
            href="#deep-dive"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--card-bg)] transition-all duration-200"
          >
            Displays
          </a>
          <a
            href="#performance"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--card-bg)] transition-all duration-200"
          >
            Performance
          </a>
          <a
            href="#download"
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--card-bg)] transition-all duration-200"
          >
            Download
          </a>
        </nav>

        {/* Right: Theme Toggle Pill & Quick Action */}
        <div className="flex items-center gap-3">
          {/* THEME BUTTON: Small elegant pill button */}
          <button
            type="button"
            onClick={toggleTheme}
            id="theme-toggle-btn"
            aria-label={isNight ? 'Switch to Light/Day mode' : 'Switch to Dark/Night mode'}
            title={
              isTransitioning
                ? 'Transitioning scene...'
                : isNight
                ? 'Click to transition to Day Mode'
                : 'Click to transition to Night Mode'
            }
            className={`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none active:scale-95 shadow-sm ${
              isNight
                ? 'bg-slate-900/80 hover:bg-slate-900 text-slate-100 border border-white/15 shadow-cyan-950/40 hover:shadow-cyan-500/10'
                : 'bg-white/85 hover:bg-white text-slate-800 border border-slate-900/10 shadow-slate-900/5 hover:shadow-slate-900/10'
            } backdrop-blur-md`}
          >
            {/* Animated Sun / Moon Icon */}
            <div className="relative w-4 h-4 flex items-center justify-center">
              {isNight ? (
                <Moon
                  className={`w-3.5 h-3.5 text-cyan-300 transition-transform duration-500 ${
                    isTransitioning ? 'animate-pulse' : 'group-hover:-rotate-12'
                  }`}
                  strokeWidth={2}
                />
              ) : (
                <Sun
                  className={`w-3.5 h-3.5 text-amber-500 transition-transform duration-500 ${
                    isTransitioning ? 'animate-spin' : 'group-hover:rotate-45'
                  }`}
                  strokeWidth={2}
                />
              )}
            </div>

            {/* Day / Night Text Label */}
            <span className="font-medium">
              {isNight ? '☾ Dark' : '☀ Light'}
            </span>

            {/* Subtle transition pulse dot */}
            {isTransitioning && (
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping absolute -top-0.5 -right-0.5" />
            )}
          </button>

          {/* Direct GitHub shortcut */}
          <a
            href="https://github.com/SN7k/LightBright"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--card-bg)] transition-colors duration-200 hidden sm:inline-flex"
            aria-label="GitHub Repository"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
