import styled, { css } from 'styled-components'

const variantOptions = {
  outline: {
    backgroundColor: 'transparent',
    border: '1px solid #3D5AFE',
    color: '#3D5AFE',
  },
  text: {
    color: '#3D5AFE',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
  },
}

const sizeOptions = {
  sm: {
    padding: '6px 12px',
  },
  md: {
    padding: '8px 16px',
  },
  lg: {
    padding: '12px 22px',
  },
}

const colorOptions = {
  primary: {
    backgroundColor: {
      main: '#2962FF',
      secondary: '#0039CB',
    },
    color: '#ffffff',
    border: '1px solid transparent',
  },
  secondary: {
    backgroundColor: {
      main: '#455A64',
      secondary: '#1C313A',
    },
    color: '#ffffff',
    border: '1px solid transparent',
  },
  danger: {
    backgroundColor: {
      main: '#D32F2F',
      secondary: '#9A0007',
    },
    color: '#ffffff',
    border: '1px solid transparent',
  },
}

const disabledOptions = {
  disabled: {
    color: '#9E9E9E',
    backgroundColor: '#E0E0E0',
    pointerEvents: 'none',
  },
}

export const ButtonStyled = styled.button`
  all: unset;
  padding: 8px 16px;
  border-radius: 6px;
  color: #3f3f3f;
  background-color: #e0e0e0;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s ease;
  font-family: Arial, Helvetica, sans-serif;

  &:hover,
  &:focus {
    background-color: #2962ff1a;
    transition: 0.2s ease;
  }

  ${({ disabled }) =>
    disabled &&
    disabledOptions.disabled &&
    css`
      color: ${disabledOptions.disabled.color};
      background-color: ${disabledOptions.disabled.backgroundColor};
      pointer-events: ${disabledOptions.disabled.pointerEvents};
    `}

  ${({ variant, disabled }) =>
    variant &&
    variantOptions[variant] &&
    css`
      background-color: ${variantOptions[variant].backgroundColor};
      border: ${variantOptions[variant].border};
      color: ${disabled ? '#9E9E9E' : variantOptions[variant].color};
    `}

  ${({ size }) =>
    size &&
    sizeOptions[size] &&
    css`
      padding: ${sizeOptions[size].padding};
    `}

  ${({ color }) =>
    color &&
    colorOptions[color] &&
    css`
      background-color: ${colorOptions[color].backgroundColor.main};
      color: ${colorOptions[color].color};
      border: ${colorOptions[color].border};

      &:hover,
      &:focus {
        background-color: ${colorOptions[color].backgroundColor.secondary};
        transition: 0.2s ease;
      }
    `}
`
