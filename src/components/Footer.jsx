import { Sun } from 'lucide-react';
import FallbackImage from './FallbackImage';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-base)] py-8 border-t border-[var(--border-subtle)] transition-colors duration-75">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <FallbackImage
            src="https://res.cloudinary.com/dlpskz98w/image/upload/v1772199200/icon_png_r1ukbi.png"
            alt="LiteBright Logo"
            className="w-8 h-8 rounded-lg opacity-70 border border-[var(--border-subtle)]"
            icon={Sun}
          />
          <span className="text-[var(--text-muted)] text-sm font-medium">LiteBright</span>
        </div>

        <div className="text-[var(--text-muted)] text-xs">
          &copy; {new Date().getFullYear()} LiteBright Open Source.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
