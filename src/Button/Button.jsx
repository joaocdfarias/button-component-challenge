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
    <ButtonStyled
      size={size}
      color={color}
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      disableShadow={disableShadow}
    >
      {startIcon} {children} {endIcon}
    </ButtonStyled>
  )
}
