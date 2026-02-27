import MonitorPanel from './MonitorPanel';

const FEATURES = [
  'Custom brightness step sizes.',
  'Start automatically with Windows.',
  'Hardware contrast control.',
  '100% free, lightweight, and open-source.',
];

const DeepDiveSection = ({ brightness }) => {
  return (
    <section className="py-24 border-t border-[var(--border-subtle)] transition-colors duration-75">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Monitor panel */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-2xl blur-2xl" />
            <div className="relative max-w-sm mx-auto">
              <MonitorPanel brightness={brightness} />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
              Advanced display settings, <br /> simplified.
            </h2>
            <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
              Customize your monitor brightness with a utility that respects your system resources.
              Access essential features without navigating complex Windows menus or installing
              bloated software.
            </p>

            <ul className="space-y-4">
              {FEATURES.map((feature, idx) => (
                <li key={idx} className="flex items-start text-[var(--text-main)] opacity-80">
                  <span className="mr-3 mt-1 flex h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
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
