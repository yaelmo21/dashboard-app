import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'md' | 'lg';
  variant?:
    | 'primary'
    | 'secondary'
    | 'surface'
    | 'tertiary'
    | 'muted'
    | 'border';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizeClasses = {
  xs: 'rounded-sm px-2 py-1 text-xs',
  sm: 'rounded-sm px-2 py-1 text-sm',
  base: 'rounded-md px-2.5 py-1.5 text-sm',
  md: 'rounded-md px-3 py-2 text-sm',
  lg: 'rounded-md px-3.5 py-3.5 text-sm',
};

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-blue-600',
  secondary: 'bg-secondary text-primary hover:bg-gray-200',
  surface: 'bg-surface text-tertiary border border-border hover:bg-gray-50',
  tertiary: 'bg-tertiary text-white hover:bg-gray-800',
  muted: 'bg-muted text-white hover:bg-gray-500',
  border: 'border border-border text-tertiary bg-white hover:bg-gray-50',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'base',
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
