import useThemeVideo from './hooks/useThemeVideo';
import buildThemeFromProgress from './hooks/useTheme';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DeepDiveSection from './components/DeepDiveSection';
import PerformanceSection from './components/PerformanceSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  const {
    videoRef,
    canvasRef,
    theme,
    progress,
    isTransitioning,
    isReversing,
    toggleTheme,
  } = useThemeVideo();

  const { themeStyles, brightnessValue } = buildThemeFromProgress(progress);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-cyan-500/30 transition-colors duration-300 relative ${theme === 'night' ? 'dark' : ''}`}
      style={themeStyles}
    >
      <HeroSection
        videoRef={videoRef}
        canvasRef={canvasRef}
        theme={theme}
        toggleTheme={toggleTheme}
        isTransitioning={isTransitioning}
        isReversing={isReversing}
        progress={progress}
      />

      <FeaturesSection isNight={theme === 'night'} progress={progress} />

      <DeepDiveSection isNight={theme === 'night'} progress={progress} />

      <PerformanceSection isNight={theme === 'night'} progress={progress} />

      <CTASection />

      <Footer />
    </div>
  );
}
