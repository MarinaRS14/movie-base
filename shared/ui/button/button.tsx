import { Button as ButtonMantine } from '@mantine/core';
import style from './button.module.scss';
import { ButtonHTMLAttributes, ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'transparent';
  title: string;
  size?: string;
  color?: 'var(--color-purple-main)' | 'var(--color-purple-400)' | 'var(--color-purple-600)';
  disabled?: boolean;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
}

export const Button = ({
  variant = 'filled',
  title,
  size = 'm',
  color = 'var(--color-purple-main)',
  disabled = false,
  pl,
  pr,
  pt,
  pb,
  ...props
}: ButtonProps) => {
  return (
    <ButtonMantine
      {...props}
      variant={variant}
      size={size}
      color={color}
      radius="md"
      disabled={disabled}
      className={style.button}
      pl={pl}
      pr={pr}
      pt={pt}
      pb={pb}>
      {title}
    </ButtonMantine>
  );
};
