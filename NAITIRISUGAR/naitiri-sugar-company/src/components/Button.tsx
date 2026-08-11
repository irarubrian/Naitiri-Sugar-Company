// src/components/Button.tsx
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  as?: 'button' | 'link';
  to?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as = 'button',
  to,
  ...props
}: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg';

  const variants = {
    primary: 'bg-green-800 text-white hover:bg-green-900 focus:ring-green-600 shadow-lg shadow-green-800/30',
    secondary: 'bg-yellow-500 text-green-950 hover:bg-yellow-600 focus:ring-yellow-400 shadow-lg shadow-yellow-500/30',
    outline: 'border-2 border-green-800 text-green-800 hover:bg-green-50 focus:ring-green-600',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'link' && to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// ✅ Export both default and named export for flexibility
export default Button;
export { Button };