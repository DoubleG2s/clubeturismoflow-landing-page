interface LogoProps {
  variant?: 'color' | 'light';
  className?: string;
}

// Logotipo Flowtur: versão colorida para fundos claros, versão clara para fundos escuros
export default function Logo({ variant = 'color', className = '' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <span className={`flex items-center gap-2 font-display font-bold text-xl ${className}`}>
      {isLight ? (
        <img src="/icon-flowtur.png" alt="" className="w-8 h-8 rounded-lg" />
      ) : (
        <img src="/flowtur-semfundo.png" alt="" className="h-8 w-auto" />
      )}
      <span className={isLight ? 'text-white' : 'text-brand-navy'}>Flowtur</span>
    </span>
  );
}
