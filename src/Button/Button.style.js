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
    backgroundColor: '#2962FF',
    color: '#ffffff',
    border: '1px solid transparent',
  },
  secondary: {
    backgroundColor: '#455A64',
    color: '#ffffff',
    border: '1px solid transparent',
  },
  danger: {
    backgroundColor: '#D32F2F',
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
  border: '1px solid transparent';
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    disabledOptions.disabled &&
    css`
      color: ${disabledOptions.disabled.color};
      background-color: ${disabledOptions.disabled.backgroundColor};
      pointer-events: ${disabledOptions.disabled.pointerEvents};
    `}

  ${({ variant }) =>
    variant &&
    variantOptions[variant] &&
    css`
      background-color: ${variantOptions[variant].backgroundColor};
      border: ${variantOptions[variant].border};
      color: ${variantOptions[variant].color};
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
      background-color: ${colorOptions[color].backgroundColor};
      color: ${colorOptions[color].color};
      border: ${colorOptions[color].border};
    `}
`
