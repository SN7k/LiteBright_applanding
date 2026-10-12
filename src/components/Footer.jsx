import { Sun } from 'lucide-react';
import FallbackImage from './FallbackImage';

const Footer = ({ onNavigate }) => {
  const handleLegal = (e, route) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.href = `/${route}`;
    }
  };

  return (
    <footer
      className="py-6 border-t border-[var(--border-subtle)] transition-colors duration-75 text-xs text-[var(--text-muted)]"
      style={{ backgroundColor: 'var(--s3-bg, #fefefe)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-2.5">
          <FallbackImage
            src="https://res.cloudinary.com/dlpskz98w/image/upload/v1772199200/icon_png_r1ukbi.png"
            alt="LiteBright"
            className="w-5 h-5 rounded-md opacity-75"
            icon={Sun}
          />
          <span className="font-medium text-[var(--text-main)]">LiteBright</span>
          <span className="opacity-40">•</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>

        {/* Center/Right: Organized Minimal Links */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[var(--text-muted)]">
          <a
            href="/privacy"
            onClick={(e) => handleLegal(e, 'privacy')}
            className="hover:text-[var(--text-main)] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            onClick={(e) => handleLegal(e, 'terms')}
            className="hover:text-[var(--text-main)] transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="https://github.com/SN7k/LiteBright"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://apps.microsoft.com/detail/9NTLVZDLPPK5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            Microsoft Store
          </a>
          <a
            href="https://snkdevworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition-colors"
          >
            SNK DevWorks
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
