import { useState } from 'react';
import { Monitor } from 'lucide-react';


const FallbackImage = ({ src, alt, className, icon: Icon }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-xl ${className}`}
      >
        {Icon ? (
          <Icon className="w-8 h-8 text-[var(--text-muted)]" strokeWidth={1.5} />
        ) : (
          <Monitor className="w-8 h-8 text-[var(--text-muted)]" strokeWidth={1.5} />
        )}
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default FallbackImage;
