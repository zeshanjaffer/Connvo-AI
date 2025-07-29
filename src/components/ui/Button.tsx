import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
} & LinkProps;

const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-200 flex items-center justify-center';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const variantStyles = {
    primary: 'bg-[#00809D] hover:bg-[#006d85] text-white shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-[#FFD700] hover:bg-[#D3AF37] text-[#00809D] shadow-lg hover:shadow-xl transform hover:scale-105',
    outline: 'bg-transparent border-2 border-[#00809D] hover:bg-[#00809D] hover:text-white',
  };

  return (
    <Link
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
