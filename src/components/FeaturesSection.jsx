import { useState, useLayoutEffect, useRef } from 'react';

const FeaturesSection = ({ isNight = false, progress = 0 }) => {
  const isDark = progress !== undefined ? progress >= 0.5 : isNight;
  const sectionRef = useRef(null);
  const topHalfRef = useRef(null);
  const [splitOffset, setSplitOffset] = useState(null);

  useLayoutEffect(() => {
    const updateOffset = () => {
      if (topHalfRef.current && sectionRef.current) {
        if (window.innerWidth >= 768) {
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const topHalfRect = topHalfRef.current.getBoundingClientRect();
          setSplitOffset(Math.round(topHalfRect.bottom - sectionRect.top));
        } else {
          setSplitOffset(null);
        }
      }
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);

    let observer;
    if (window.ResizeObserver && sectionRef.current) {
      observer = new ResizeObserver(updateOffset);
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateOffset);
      if (observer) observer.disconnect();
    };
  }, []);

  const cards = [
    {
      icon: (
        <svg
          className="w-16 h-16 sm:w-[68px] sm:h-[68px] text-white transition-colors duration-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="12" x="3" y="3" rx="2" />
          <path d="M7 21h10" />
          <path d="M12 15v6" />
        </svg>
      ),
      eyebrow: 'CONTROL EVERY SCREEN',
      title: 'Multi-monitor brightness control',
      description:
        'Adjust individually or sync every display with one simple control.',
    },
    {
      icon: (
        <svg
          className="w-16 h-16 sm:w-[68px] sm:h-[68px] text-white transition-colors duration-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="18" y2="18" />
          <circle
            cx="9"
            cy="6"
            r="2.5"
            fill={isDark ? '#1d2227' : '#808080'}
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="15"
            cy="12"
            r="2.5"
            fill={isDark ? '#1d2227' : '#808080'}
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="8"
            cy="18"
            r="2.5"
            fill={isDark ? '#1d2227' : '#808080'}
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      eyebrow: 'ALWAYS WITHIN REACH',
      title: 'Instant control from your tray',
      description:
        'Change brightness with your mouse or keyboard — without leaving the app you\'re using.',
    },
    {
      icon: (
        <svg
          className="w-16 h-16 sm:w-[68px] sm:h-[68px] fill-current text-white transition-colors duration-200"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M0 2.278L6.545 1.382v6.241H0V2.278zm0 5.922h6.545v6.242L0 13.545V8.2zm7.091-6.918L16 0v7.623H7.091V1.282zm0 6.918H16V16l-8.909-1.282V8.2z" />
        </svg>
      ),
      eyebrow: 'BUILT FOR WINDOWS',
      title: 'Native. Fast. Lightweight.',
      description:
        'Designed to feel right at home in Windows with native Fluent UI and a ~25 MB memory footprint.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 sm:py-32 relative z-20 -mt-1 border-0 outline-none transition-colors duration-75 overflow-hidden"
      style={{ backgroundColor: 'var(--s3-bg, #fefefe)', border: 'none', outline: 'none' }}
    >
      {/* Sky Blue Top Layer: covers from top of section down to the exact half-position of the cards */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none transition-colors duration-75"
        style={{
          backgroundColor: 'var(--s2-bg, #4dc0ff)',
          height: splitOffset !== null ? `${splitOffset}px` : '100%',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p
            className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] mb-3 transition-colors duration-200"
            style={{ color: 'var(--s2-eyebrow, #0f344e)' }}
          >
            Everything you need. Nothing you don't.
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.18] transition-colors duration-200"
            style={{ color: 'var(--s2-title, #0a2335)' }}
          >
            Your screens. Your brightness. Your way.
          </h2>
          <p
            className="text-base sm:text-lg mt-5 leading-relaxed transition-colors duration-200"
            style={{ color: 'var(--s2-sub, #0f344e)' }}
          >
            LiteBright makes Windows brightness control simple. Adjust, sync, and fine-tune every display without getting in your way.
          </p>
        </div>

        {/* 3 Two-Tone Reference Style Feature Cards - 50/50 Half-Half Split & #808080 Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9">
          {cards.map(({ icon, eyebrow, title, description }, idx) => (
            <div
              key={title}
              className={`rounded-2xl overflow-hidden flex flex-col cursor-default h-[420px] sm:h-[440px] border-0 outline-none ${
                isDark
                  ? 'bg-[#242b33] shadow-2xl shadow-black/40'
                  : 'bg-white shadow-2xl shadow-slate-900/10'
              }`}
            >
              {/* Top Half: Exactly 50% height with solid #808080 in light mode, #1d2227 in dark mode */}
              <div
                ref={idx === 0 ? topHalfRef : null}
                className={`h-1/2 flex items-center justify-center p-6 sm:p-8 ${
                  isDark ? 'bg-[#1d2227]' : 'bg-[#808080]'
                }`}
              >
                {icon}
              </div>

              {/* Bottom Half: Exactly 50% height with pure white in light mode, #242b33 in dark mode */}
              <div
                className={`h-1/2 p-6 sm:p-7 md:p-8 flex flex-col items-center justify-center text-center ${
                  isDark ? 'bg-[#242b33]' : 'bg-white'
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-[0.18em] mb-2 block ${
                    isDark ? 'text-cyan-400' : 'text-sky-600'
                  }`}
                >
                  {eyebrow}
                </span>

                <h3
                  className={`text-xl sm:text-[22px] lg:text-2xl font-bold mb-2.5 tracking-tight leading-snug transition-colors duration-200 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {title}
                </h3>

                <p
                  className={`text-[14.5px] sm:text-[15px] leading-relaxed max-w-sm transition-colors duration-200 ${
                    isDark ? 'text-slate-300/90' : 'text-slate-600'
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
