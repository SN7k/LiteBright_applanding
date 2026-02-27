import { LayoutDashboard, Command, Monitor } from 'lucide-react';

const FeaturesSection = () => {
  const cards = [
    {
      icon: LayoutDashboard,
      color: 'cyan',
      title: 'Native Integration',
      lines: [
        'Designed to feel like a built-in Windows 11 feature.',
        'Sits quietly in your system tray,ready when you',
        ' need it.',
      ],
    },
    {
      icon: Command,
      color: 'yellow',
      title: 'Global Shortcuts',
      lines: [
        'Adjust brightness without leaving your current app.',
        'Bind custom hotkeys to increase or decrease',
        ' instantly.',
      ],
    },
    {
      icon: Monitor,
      color: 'blue',
      title: 'Multi-Monitor',
      lines: [
        'Detects every display connected to your PC.',
        'Control each monitor individually or sync',
        ' all at once.',
      ],
    },
  ];

  const colorMap = {
    cyan: 'bg-cyan-500/10 text-cyan-500',
    yellow: 'bg-yellow-500/10 text-yellow-500',
    blue: 'bg-blue-500/10 text-blue-500',
  };

  return (
    <section
      id="features"
      className="py-24 relative z-20 bg-[var(--bg-base)] transition-colors duration-75 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, color, title, lines }) => (
            <div
              key={title}
              className="md:col-span-1 p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] transition-colors duration-75"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${colorMap[color]}`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-main)] mb-3">{title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                <span className="block">{lines[0]}</span>
                <span className="block mt-0.5 w-[90%]">{lines[1]}</span>
                <span className="block mt-0.5 w-[60%]">{lines[2]}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
