import { Gauge, XCircle, Cpu, Zap, CheckCircle2 } from 'lucide-react';

const PerformanceSection = ({ isNight = false, progress = 0 }) => {
  const isDark = progress !== undefined ? progress >= 0.5 : isNight;

  return (
    <section
      id="performance"
      className="py-24 relative overflow-hidden transition-colors duration-75"
      style={{ backgroundColor: 'var(--s3-bg, #fefefe)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-6">
            <Gauge className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Built for speed. Not bloat.
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Most display utilities run heavy background processes that consume RAM and slow down
            your PC. 
            LiteBright is designed to stay minimal and responsive so you can control brightness without slowing down your system.
          </p>
        </div>

        {/* 2 Comparison Cards: Exact 50/50 Half-Half Split with Heading in Top Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Card 1: The Problem (Other Apps) */}
          <div
            className={`rounded-2xl overflow-hidden flex flex-col cursor-default h-[460px] sm:h-[480px] border-0 outline-none ${
              isDark
                ? 'bg-[#242b33] shadow-2xl shadow-black/35'
                : 'bg-white shadow-xl shadow-slate-200/80'
            }`}
          >
            {/* Top Half: Exactly 50% height with Icon + Heading (No line) */}
            <div
              className={`h-1/2 flex flex-col items-center justify-center p-6 text-center ${
                isDark ? 'bg-[#1d2227]' : 'bg-[#808080]'
              }`}
            >
              <XCircle className="w-16 h-16 text-red-500 stroke-[1.75] mb-3.5" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Typical Brightness Apps
              </h3>
            </div>

            {/* Bottom Half: Exactly 50% height with Feature Points */}
            <div
              className={`h-1/2 p-7 sm:p-8 flex flex-col justify-center ${
                isDark ? 'bg-[#242b33]' : 'bg-white'
              }`}
            >
              <ul className="space-y-5">
                <li className="flex items-start">
                  <Cpu className="w-5 h-5 text-red-500 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold mb-1 text-sm sm:text-base ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Heavy Resource Usage
                    </h4>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300/80' : 'text-slate-600'
                      }`}
                    >
                      Constantly uses CPU cycles and hundreds of megabytes of RAM in the background.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-red-500 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold mb-1 text-sm sm:text-base ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Slows System Startup
                    </h4>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300/80' : 'text-slate-600'
                      }`}
                    >
                      Delays your PC from being usable because it takes too long to load on boot.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: The Solution (LiteBright) */}
          <div
            className={`rounded-2xl overflow-hidden flex flex-col cursor-default h-[460px] sm:h-[480px] border-0 outline-none ${
              isDark
                ? 'bg-[#242b33] shadow-2xl shadow-black/35'
                : 'bg-white shadow-xl shadow-slate-200/80'
            }`}
          >
            {/* Top Half: Exactly 50% height with Icon + Heading (No line) */}
            <div
              className={`h-1/2 flex flex-col items-center justify-center p-6 text-center ${
                isDark ? 'bg-[#1d2227]' : 'bg-[#808080]'
              }`}
            >
              <CheckCircle2 className="w-16 h-16 text-cyan-400 stroke-[1.75] mb-3.5" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                LiteBright
              </h3>
            </div>

            {/* Bottom Half: Exactly 50% height with Feature Points */}
            <div
              className={`h-1/2 p-7 sm:p-8 flex flex-col justify-center ${
                isDark ? 'bg-[#242b33]' : 'bg-white'
              }`}
            >
              <ul className="space-y-5">
                <li className="flex items-start">
                  <Cpu className="w-5 h-5 text-cyan-500 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold mb-1 text-sm sm:text-base ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Ultra-Light Footprint
                    </h4>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300/80' : 'text-slate-600'
                      }`}
                    >
                      Uses near-zero CPU and negligible RAM. You won't even notice it's running.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-cyan-500 mr-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold mb-1 text-sm sm:text-base ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Instant Startup
                    </h4>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300/80' : 'text-slate-600'
                      }`}
                    >
                      Loads instantly on system startup so you can adjust brightness the moment you log in.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
