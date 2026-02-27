import { useState, useEffect } from 'react';

/**
 * Tracks whether the page has scrolled past a given threshold.
 * @param {number} threshold - scroll-Y offset in px (default 20)
 */
const useScrolled = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

export default useScrolled;
