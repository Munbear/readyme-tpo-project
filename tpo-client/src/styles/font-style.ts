import { css } from 'styled-components';

type Font = {
  size: number;
  weight: 'B' | 'M' | 'R';
};

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'B':
      return 700;
    case 'M':
      return 500;
    case 'R':
      return 400;
    default:
      return 400;
  }
};

export const FONT = ({ size, weight }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
`;

export const FONT_STYLES = {
  B_32: FONT({ size: 32, weight: 'B'}),
  B_24: FONT({ size: 24, weight: 'B'}),
  B_20: FONT({ size: 20, weight: 'B'}),
  B_16: FONT({ size: 16, weight: 'B'}),
  B_14: FONT({ size: 14, weight: 'B'}),
  B_12: FONT({ size: 12, weight: 'B'}),
  B_11: FONT({ size: 11, weight: 'B'}),
  M_16: FONT({ size: 16, weight: 'M'}),
  M_12: FONT({ size: 12, weight: 'M'}),
  M_11: FONT({ size: 11, weight: 'M'}),
  R_14: FONT({ size: 14, weight: 'R'}),
  R_12: FONT({ size: 12, weight: 'R'}),
  R_11: FONT({ size: 11, weight: 'R'}),
};