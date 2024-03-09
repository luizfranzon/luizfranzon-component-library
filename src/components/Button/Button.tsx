import React from 'react'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonPropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  textSize?: 'smaller' | 'small' | 'base' | 'large' | 'big'
  variant?: 'primary' | 'secundary' | 'black' | 'danger'
  childrenSide?: 'left' | 'right'
  className?: string
  children?: ReactNode | ReactNode[]
}

function Button({
  text,
  textSize = 'base',
  childrenSide = 'right',
  className,
  children,
  variant = 'primary',
  ...rest
}: ButtonPropsInterface) {

  const buttonVariantsClasses = {
    primary: 'bg-blue-600 [&:not(:disabled)]:hover:bg-blue-800 text-white disabled:bg-blue-600/60',
    secundary: 'bg-[#fafafa] [&:not(:disabled)]:hover:bg-zinc-200/50 border text-zinc-950 disabled:opacity-50',
    black: 'text-white bg-zinc-900 [&:not(:disabled)]:hover:bg-black disabled:bg-zinc-900/60',
    danger: 'bg-red-600 [&:not(:disabled)]:hover:bg-red-800 text-white disabled:bg-red-800/60',
  }

  const textSizeVariants = {
    smaller: 'text-xs',
    small: 'text-sm',
    base: 'text-base',
    large: 'text-xl',
    big: 'text-3xl',
  }

  return (
    <button
      {...rest}
      className={`flex items-center disabled:opacity-80 disabled:cursor-not-allowed gap-1 rounded-lg px-5 py-3 font-medium transition-all ${buttonVariantsClasses[variant]} ${textSizeVariants[textSize]} ${className}`}
    >
      {childrenSide === 'left' ? children : null}
      {text}
      {childrenSide === 'right' ? children : null}
    </button>
  )
}

export default Button
