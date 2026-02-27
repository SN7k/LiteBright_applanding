import { Gauge, XCircle, Cpu, Zap, CheckCircle2 } from 'lucide-react';

const PerformanceSection = () => {
  return (
    <section className="py-24 border-t border-[var(--border-subtle)] relative overflow-hidden bg-[var(--card-bg)] transition-colors duration-75">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 mb-6">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* The Problem (Other Apps) */}
          <div className="p-8 rounded-2xl bg-[var(--bg-base)] border border-red-500/10 relative transition-colors duration-75">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[var(--border-subtle)]">
              <XCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold text-[var(--text-main)]">Typical Brightness Apps</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Cpu className="w-5 h-5 text-[var(--text-muted)] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-[var(--text-main)] font-medium mb-1">Heavy Resource Usage</h4>
                  <p className="text-[var(--text-muted)] text-sm opacity-80">
                    Constantly uses CPU cycles and hundreds of megabytes of RAM in the background.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-[var(--text-muted)] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-[var(--text-main)] font-medium mb-1">Slows System Startup</h4>
                  <p className="text-[var(--text-muted)] text-sm opacity-80">
                    Delays your PC from being usable because it takes too long to load on boot.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* The Solution (LiteBright) */}
          <div className="p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 relative overflow-hidden transition-colors duration-75">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[64px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-cyan-500/10 relative z-10">
              <CheckCircle2 className="w-6 h-6 text-cyan-500" />
              <h3 className="text-xl font-semibold text-[var(--text-main)]">LiteBright</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start">
                <Cpu className="w-5 h-5 text-cyan-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-[var(--text-main)] font-medium mb-1">Ultra-Light Footprint</h4>
                  <p className="text-[var(--text-muted)] text-sm opacity-80">
                    Uses near-zero CPU and negligible RAM. You won't even notice it's running.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-cyan-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-[var(--text-main)] font-medium mb-1">Instant Startup</h4>
                  <p className="text-[var(--text-muted)] text-sm opacity-80">
                    Loads instantly on system startup so you can adjust brightness the moment you
                    log in.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
