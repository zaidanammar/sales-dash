/* eslint-disable react/button-has-type */
import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: () => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
}

const Button = ({ onClick, disabled, type = 'button', title }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="w-full h-11 flex justify-center items-center bg-primary hover:bg-opacity-75 rounded-xl shadow-sm text-white font-sans font-semibold"
  >
    {title}
  </button>
)

export default Button
