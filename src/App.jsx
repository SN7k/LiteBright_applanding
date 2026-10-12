import React, { useState, useEffect, useCallback } from 'react';
import useThemeVideo from './hooks/useThemeVideo';
import buildThemeFromProgress from './hooks/useTheme';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DeepDiveSection from './components/DeepDiveSection';
import PerformanceSection from './components/PerformanceSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LegalPage from './components/legal/LegalPage';

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

  const { themeStyles } = buildThemeFromProgress(progress);

  // Client-side router supporting both clean pathnames (/privacy, /terms) and hash routes (#/privacy, #/terms)
  const getRouteFromUrl = () => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (
      path === '/privacy' ||
      path.startsWith('/privacy/') ||
      hash === '#/privacy' ||
      hash.startsWith('#/privacy') ||
      hash === '#privacy'
    ) {
      return 'privacy';
    }

    if (
      path === '/terms' ||
      path.startsWith('/terms/') ||
      path === '/terms-and-conditions' ||
      hash === '#/terms' ||
      hash.startsWith('#/terms') ||
      hash === '#terms' ||
      hash === '#/terms-and-conditions'
    ) {
      return 'terms';
    }

    return 'home';
  };

  const [route, setRoute] = useState(getRouteFromUrl);

  // Synchronize route with browser popstate and hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      const newRoute = getRouteFromUrl();
      setRoute(newRoute);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update document title and canonical meta dynamically
  useEffect(() => {
    if (route === 'privacy') {
      document.title = 'Privacy Policy — LiteBright Windows Brightness Controller';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'LiteBright Privacy Policy: Transparent zero-data collection architecture. Learn how our native Windows multi-monitor brightness tool operates completely offline without telemetry, tracking, or cloud servers.'
        );
      }
    } else if (route === 'terms') {
      document.title = 'Terms & Conditions — LiteBright Windows Brightness Controller';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'LiteBright Terms & Conditions: MIT Open Source license grant, VESA DDC/CI monitor hardware communication protocols, acceptable use, and warranty disclaimer for Windows 10 & 11.'
        );
      }
    } else {
      document.title = 'LiteBright — Windows Brightness Control for Multiple Monitors';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'LiteBright is the best free, ultra-lightweight Windows brightness controller for multiple monitors. Seamlessly manage and sync display brightness from the system tray with global hotkeys, instant startup, and near-zero CPU/RAM usage. Top alternative to Twinkle Tray, Brightness Slider, and CareUEyes.'
        );
      }
    }
  }, [route]);

  const navigate = useCallback((targetRoute) => {
    if (targetRoute === 'privacy') {
      window.history.pushState(null, '', '/privacy');
      setRoute('privacy');
    } else if (targetRoute === 'terms') {
      window.history.pushState(null, '', '/terms');
      setRoute('terms');
    } else {
      window.history.pushState(null, '', '/');
      setRoute('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-cyan-500/30 transition-colors duration-300 relative ${
        theme === 'night' ? 'dark' : ''
      }`}
      style={themeStyles}
    >
      {route === 'privacy' || route === 'terms' ? (
        <>
          <LegalPage
            activeTab={route}
            onTabChange={(tab) => navigate(tab)}
            onNavigateHome={() => navigate('home')}
            isNight={theme === 'night'}
            toggleTheme={toggleTheme}
            progress={progress}
          />
          <Footer onNavigate={navigate} />
        </>
      ) : (
        <>
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

          <Footer onNavigate={navigate} />
        </>
      )}
    </div>
  );
}
