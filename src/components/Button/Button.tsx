import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function Button({
  className,
  children,
}: IButtonProps) {
  return (
    <button
      type="button"
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
