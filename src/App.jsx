import { useState } from 'react';

import useScrolled from './hooks/useScrolled';
import buildTheme from './hooks/useTheme';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DeepDiveSection from './components/DeepDiveSection';
import PerformanceSection from './components/PerformanceSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  const scrolled = useScrolled(20);
  const [brightness, setBrightness] = useState(() => {
    const saved = localStorage.getItem('lb-brightness');
    return saved !== null ? Number(saved) : 50;
  });

  const handleBrightness = (value) => {
    const num = Number(value);
    setBrightness(num);
    localStorage.setItem('lb-brightness', num);
  };

  const { themeStyles, trackShadowA } = buildTheme(brightness);

  return (
    <div
      className="min-h-screen font-sans selection:bg-cyan-500/30 transition-colors duration-75"
      style={themeStyles}
    >
      {/* Global styles for the custom range slider */}
      <style>{`
        .custom-slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          outline: none;
          height: 100%;
          margin: 0;
          width: 100%;
        }
        .custom-slider::-webkit-slider-runnable-track {
          height: 100%;
          background: transparent;
          border-radius: 999px;
        }
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 180px;
          height: 44px;
          background-color: var(--thumb-bg);
          border: 1px solid var(--thumb-border);
          border-radius: 999px;
          box-shadow: var(--thumb-shadow);
          cursor: grab;
          background-image: var(--slider-icon);
          background-position: center;
          background-repeat: no-repeat;
          transition: transform 0.1s, background-color 0.1s, box-shadow 0.1s;
        }
        .custom-slider::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(0.98);
        }
        .custom-slider::-moz-range-thumb {
          width: 180px;
          height: 44px;
          background-color: var(--thumb-bg);
          border: 1px solid var(--thumb-border);
          border-radius: 999px;
          box-shadow: var(--thumb-shadow);
          cursor: grab;
          background-image: var(--slider-icon);
          background-position: center;
          background-repeat: no-repeat;
          transition: transform 0.1s, background-color 0.1s, box-shadow 0.1s;
        }
        .custom-slider::-moz-range-thumb:active {
          cursor: grabbing;
          transform: scale(0.98);
        }
        .custom-slider::-moz-range-track {
          height: 100%;
          background: transparent;
          border-radius: 999px;
        }
      `}</style>

      <Navbar scrolled={scrolled} />

      <HeroSection
        brightness={brightness}
        setBrightness={handleBrightness}
        trackShadowA={trackShadowA}
      />

      <FeaturesSection />

      <DeepDiveSection brightness={brightness} />

      <PerformanceSection />

      <CTASection />

      <Footer />
    </div>
  );
}
