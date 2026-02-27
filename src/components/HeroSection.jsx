import { Download, Sun, ChevronRight } from 'lucide-react';


const HeroSection = ({ brightness, setBrightness, trackShadowA }) => {
  return (
    <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 overflow-hidden">
      {/* Dynamic grid background */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-75"
        style={{
          backgroundImage: 'radial-gradient(var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.5,
        }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: 'rgb(6 182 212)',
          opacity: (Number(brightness) / 100) * 0.20,
          transition: 'opacity 0.05s',
        }}
      />
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[380px] rounded-full blur-[80px] pointer-events-none"
        style={{
          background: 'rgb(59 130 246)',
          opacity: (Number(brightness) / 100) * 0.18,
          transition: 'opacity 0.05s',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-main)] tracking-tight mb-8 leading-[1.1]">
          Lightweight brightness control for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            multiple monitors.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-muted)] mb-10 max-w-2xl leading-relaxed">
          LiteBright is a simple Windows brightness controller that lets you adjust and sync brightness across all your displays from the system tray.
          Control each monitor individually or together — instantly and without opening system settings.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[var(--btn-text)] bg-[var(--btn-bg)] rounded-lg hover:bg-[var(--btn-hover)] transition-colors"
          >
            <Download className="w-4 h-4 mr-2" strokeWidth={2} />
            Download for Windows
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[var(--text-main)] bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-lg hover:bg-[var(--border-subtle)] transition-colors"
          >
            Explore Features <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="mt-24 flex flex-col items-center w-full relative z-20">
          <p className="text-xs text-[var(--text-muted)] mb-5 font-medium uppercase tracking-widest flex items-center gap-2">
            <Sun className="w-4 h-4" /> Drag to adjust
          </p>
          <div
            className="relative w-full max-w-[540px] h-[56px] rounded-full flex items-center p-[6px] transition-colors duration-75"
            style={{
              backgroundColor: 'var(--track-bg)',
              border: '1px solid var(--track-border)',
              boxShadow: `0 8px 32px rgba(0,0,0, ${trackShadowA})`,
            }}
          >
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
              className="custom-slider z-10 cursor-pointer"
              title="Drag to test website brightness"
            />
          </div>
          <p className="mt-5 text-[11px] text-[var(--text-muted)] font-mono">
            {brightness}% BRIGHTNESS
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
