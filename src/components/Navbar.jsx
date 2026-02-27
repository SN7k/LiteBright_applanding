import { Sun } from 'lucide-react';
import FallbackImage from './FallbackImage';

const Navbar = ({ scrolled }) => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-transparent border-none pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div
            className={`flex items-center gap-3 pointer-events-auto transition-all duration-300 ${
              scrolled ? '-translate-x-36 scale-75 opacity-60' : 'translate-x-0 scale-100 opacity-100'
            }`}
          >
            <FallbackImage
              src="https://res.cloudinary.com/dlpskz98w/image/upload/v1772199200/icon_png_r1ukbi.png"
              alt="LiteBright Icon"
              className="w-8 h-8 drop-shadow-md"
              icon={Sun}
            />
            <span className="text-lg font-semibold tracking-tight text-[var(--text-main)]">
              LiteBright
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
