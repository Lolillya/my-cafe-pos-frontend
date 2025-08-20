import { ReactNode, MouseEvent } from 'react';

type ButtonProps = {
  children: ReactNode;
  classname?: string;
  variant: '1' | '2';
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  variant,
  classname = '',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) => {
  const variantStyles = {
    '1': 'bg-primary text-white',
    '2': 'bg-bg2 text-primary',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles[variant]} ${classname} `}
    >
      {children}
    </button>
  );
};
