import { useState } from 'react';
import { Settings, Monitor, Sun, Contrast } from 'lucide-react';

const SliderField = ({ label, icon: Icon, value, onChange, accent, textMuted }) => (
  <div className="mb-3 last:mb-0">
    <div className="flex justify-between items-center mb-1 px-0.5">
      <div className="flex items-center gap-1.5" style={{ color: textMuted }}>
        <Icon size={10} />
        <span className="text-[9px] font-bold uppercase tracking-[0.08em]">
          {label}
        </span>
      </div>
      <span className="text-[10px] font-bold tabular-nums" style={{ color: accent }}>{value}</span>
    </div>
    <div className="relative flex items-center h-3">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="panel-slider w-full h-[2px] rounded-full appearance-none cursor-pointer outline-none z-10"
        style={{
          background: `linear-gradient(to right, ${accent} ${value}%, rgba(128,128,128,0.15) ${value}%)`,
        }}
      />
    </div>
  </div>
);

const MonitorControl = ({ name, initialBrightness, initialContrast, accent, textMain, textMuted, panelBorder }) => {
  const [brightness, setBrightness] = useState(initialBrightness);
  const [contrast, setContrast] = useState(initialContrast);

  return (
    <div
      className="rounded-lg p-4 transition-all duration-75 shadow-sm"
      style={{ background: 'rgba(128,128,128,0.04)', border: `1px solid ${panelBorder}` }}
    >
      <div className="flex items-center gap-1.5 mb-3 pb-2.5" style={{ borderBottom: `1px solid ${panelBorder}` }}>
        <Monitor size={11} style={{ color: textMuted }} />
        <span className="text-[11px] font-bold tracking-tight" style={{ color: textMain }}>{name}</span>
      </div>
      <div className="space-y-3">
        <SliderField label="Brightness" icon={Sun}      value={brightness} onChange={setBrightness} accent={accent} textMuted={textMuted} />
        <SliderField label="Contrast"   icon={Contrast} value={contrast}   onChange={setContrast}   accent={accent} textMuted={textMuted} />
      </div>
    </div>
  );
};

// Linearly interpolate between three control points (0, 50, 100)
const interp = (val, y0, y50, y100) => {
  if (val <= 50) return y0 + (y50 - y0) * (val / 50);
  return y50 + (y100 - y50) * ((val - 50) / 50);
};

const MonitorPanel = ({ brightness = 50 }) => {
  const b = Number(brightness);

  // Accent: cyan-400 → blue-500 → cyan-700 (stays visible in light mode)
  const accentR = Math.round(interp(b,  34, 59, 14));
  const accentG = Math.round(interp(b, 211, 130, 116));
  const accentB = Math.round(interp(b, 238, 246, 144));
  const accent  = `rgb(${accentR},${accentG},${accentB})`;

  // Panel surface adapts to page bg
  const panelBgL   = interp(b,  10, 11, 97);
  const panelBg    = `hsl(240,5%,${panelBgL}%)`;
  const borderA    = interp(b, 0.06, 0.08, 0.14);
  const rgb        = interp(b, 255, 255, 0);
  const panelBorder = `rgba(${rgb},${rgb},${rgb},${borderA})`;
  const textMain   = `var(--text-main)`;
  const textMuted  = `var(--text-muted)`;
  // Thumb: white in dark, slightly off-white in light
  const thumbBgL = interp(b, 100, 100, 96);
  const thumbBg  = `hsl(0,0%,${thumbBgL}%)`;
  return (
    <div
      className="w-full rounded-xl p-4 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] transition-colors duration-75"
      style={{ background: panelBg, border: `1px solid ${panelBorder}` }}
    >
      {/* Header */}
      <div className="px-0.5 mb-4">
        <h2 className="text-[10px] font-black tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>
          LiteBright
        </h2>
      </div>

      {/* Monitor list */}
      <div className="space-y-2">
        <MonitorControl name="Generic PnP Monitor" initialBrightness={28} initialContrast={50} accent={accent} textMain={textMain} textMuted={textMuted} panelBorder={panelBorder} />
        <MonitorControl name="Acer V206HQLB"       initialBrightness={65} initialContrast={75} accent={accent} textMain={textMain} textMuted={textMuted} panelBorder={panelBorder} />
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 flex items-center justify-between px-0.5" style={{ borderTop: `1px solid ${panelBorder}` }}>
        <div className="text-[9px] font-bold tracking-[0.1em] uppercase" style={{ color: 'var(--text-muted)' }}>
          Parameters
        </div>
        <button className="transition-colors p-1 rounded" style={{ color: 'var(--text-muted)' }}>
          <Settings size={13} strokeWidth={2.5} />
        </button>
      </div>

      {/* Slider thumb styles – accent colour is injected dynamically */}
      <style>{`
        .panel-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background: ${thumbBg};
          cursor: pointer;
          border: 2px solid ${accent};
          box-shadow: 0 1px 3px rgba(0,0,0,0.5);
          transition: transform 0.1s cubic-bezier(0.4,0,0.2,1), border-color 0.05s;
        }
        .panel-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .panel-slider::-moz-range-thumb {
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background: ${thumbBg};
          border: 2px solid ${accent};
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MonitorPanel;
