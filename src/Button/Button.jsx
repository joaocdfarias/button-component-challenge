import React from 'react'
import { ButtonStyled } from './Button.style'

export const Button = ({
  color,
  variant,
  disabled,
  disableShadow,
  startIcon,
  endIcon,
  size,
  children,
}) => {
  return (
    <ButtonStyled color={color} variant={variant} disabled={disabled}>
      {children}
    </ButtonStyled>
  )
}
