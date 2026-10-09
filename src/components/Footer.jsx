import { Sun } from 'lucide-react';
import FallbackImage from './FallbackImage';

const Footer = () => {
  return (
    <footer
      className="py-8 transition-colors duration-75"
      style={{ backgroundColor: 'var(--s3-bg, #fefefe)' }}
    >
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

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[var(--text-muted)] text-xs">
          <span>&copy; {new Date().getFullYear()} LiteBright Open Source.</span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span>
            Powered by{' '}
            <a
              href="https://snkdevworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--text-main)] hover:underline underline-offset-2 transition-colors"
            >
              SNK DevWorks
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
