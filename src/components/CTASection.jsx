import { Download, Github } from 'lucide-react';
import FallbackImage from './FallbackImage';

const CTASection = () => {
  return (
    <section
      id="download"
      className="py-32 relative overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)] transition-colors duration-75"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <FallbackImage
          src="https://res.cloudinary.com/dlpskz98w/image/upload/v1772199200/icon_png_r1ukbi.png"
          alt="LiteBright Logo"
          className="h-20 w-20 mx-auto rounded-2xl mb-8 shadow-2xl shadow-cyan-500/10 border border-[var(--border-subtle)]"
        />

        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
          Take control of your screens.
        </h2>
        <p className="text-lg text-[var(--text-muted)] mb-10">
          Download LiteBright to manage brightness across all your monitors from one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/SN7k/LightBright/releases/download/v1.0.0/LiteBright-Setup-1.0.0.exe"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[var(--btn-text)] bg-[var(--btn-bg)] rounded-xl hover:bg-[var(--btn-hover)] transition-all hover:scale-[1.02]"
          >
            <Download className="w-5 h-5 mr-2" strokeWidth={2} />
            Download LiteBright (v1.0)
          </a>
          <a
            href="https://github.com/SN7k/LightBright"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[var(--text-main)] bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-xl hover:bg-[var(--border-subtle)] transition-all"
          >
            <Github className="w-5 h-5 mr-2" strokeWidth={2} />
            View on GitHub
          </a>
        </div>

        <p className="mt-6 text-xs text-[var(--text-muted)] opacity-80">
          Requires Windows 10 or Windows 11. 100% Free.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
