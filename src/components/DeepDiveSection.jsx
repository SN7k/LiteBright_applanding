const CHECKLIST_ITEMS = [
  {
    title: 'Multi-monitor brightness control',
    description: 'Adjust displays individually or sync them all at once.',
  },
  {
    title: 'Native DDC/CI support',
    description: 'Control compatible external monitors directly at the hardware level.',
  },
  {
    title: 'System tray controls',
    description: 'Adjust brightness instantly without opening Windows Settings.',
  },
  {
    title: 'Global brightness hotkeys',
    description: 'Increase, decrease, or jump to brightness presets from anywhere.',
  },
  {
    title: 'Windows 11 Fluent experience',
    description: 'Native-feeling light/dark themes, accent colors, and modern controls.',
  },
  {
    title: 'Lightweight & private',
    description: 'Low resource usage, zero telemetry, and no internet connection required.',
  },
];

// Solid circular cyan-blue checkmark badge matching reference UI
const BrandedCheck = () => (
  <span className="flex-shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5 rounded-full bg-[#0ea5e9] dark:bg-cyan-500 flex items-center justify-center shadow-xs mt-0.5">
    <svg
      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 6.2L4.8 8.5L9.5 3.5" />
    </svg>
  </span>
);

const DeepDiveSection = ({ progress = 0, isNight = false }) => {
  // Use transition progress (0 to 1) for real-time crossfade, falling back to isNight boolean
  const darkOpacity = progress !== undefined ? Math.max(0, Math.min(1, progress)) : isNight ? 1 : 0;
  const lightOpacity = 1 - darkOpacity;

  return (
    <section
      id="features-detail"
      className="py-20 sm:py-28 relative z-20 transition-colors duration-75 overflow-hidden"
      style={{ backgroundColor: 'var(--s3-bg, #fefefe)' }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: LiteBright Settings Image (Size matched to right-side content height) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[490px] rounded-2xl overflow-hidden shadow-2xl shadow-black/25 border border-[var(--border-subtle)] bg-[var(--card-bg)] group">
              {/* Light Mode Screenshot */}
              <img
                src="/LiteBright Settings Light.png"
                alt="LiteBright Settings (Windows 11 Light Mode)"
                className="w-full h-auto object-cover block transition-opacity duration-200"
                style={{ opacity: lightOpacity }}
              />

              {/* Dark Mode Screenshot */}
              <img
                src="/LiteBright Settings dark.png"
                alt="LiteBright Settings (Windows 11 Dark Mode)"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200"
                style={{ opacity: darkOpacity }}
              />
            </div>
          </div>

          {/* RIGHT: Features Title, Subtitle, and List (Vertically aligned with left image) */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[var(--text-main)] mb-2 tracking-tight">
              Features
            </h2>

            <p className="text-sm sm:text-[15px] text-[var(--text-muted)] mb-5 max-w-lg leading-relaxed">
              LiteBright offers essential brightness controls to match your setup — simple, fast, and 100% free.
            </p>

            <ul className="space-y-3 sm:space-y-3.5">
              {CHECKLIST_ITEMS.map(({ title, description }) => (
                <li key={title} className="flex items-start gap-3">
                  <BrandedCheck />
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-[14.5px] font-semibold text-[var(--text-main)] leading-snug">
                      {title}
                    </span>
                    <span className="text-xs sm:text-[13px] text-[var(--text-muted)] leading-relaxed mt-0.5">
                      {description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;
