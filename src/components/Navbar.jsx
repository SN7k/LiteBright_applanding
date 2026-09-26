import { Sun } from 'lucide-react';
import FallbackImage from './FallbackImage';

const Navbar = ({ scrolled }) => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-transparent border-none pointer-events-none">
      <div className="w-full px-6 lg:px-8">
        <div className="relative flex items-center h-16 w-full">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-3 pointer-events-auto transition-all duration-500 ease-out cursor-pointer select-none group ${
              scrolled
                ? 'left-0 translate-x-0 opacity-100'
                : 'left-1/2 -translate-x-1/2 opacity-100'
            }`}
            title="LiteBright"
          >
            <FallbackImage
              src="https://res.cloudinary.com/dlpskz98w/image/upload/v1772199200/icon_png_r1ukbi.png"
              alt="LiteBright Icon"
              className="w-8 h-8 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              icon={Sun}
            />
            <span className="text-lg font-semibold tracking-tight text-[var(--text-main)]">
              LiteBright
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
