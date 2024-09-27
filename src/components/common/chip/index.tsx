import styled from '@emotion/styled';

export const Chip = styled.div<{ margin?: string; color?: string }>`
  padding: 4px 12px;
  border-radius: 50px;
  border: ${({ color }) =>
    color ? `${color} 0.5px solid` : `var(--color-green-01) 0.5px solid`};
  background-color: var(--color-white);
  color: ${({ color }) => (color ? color : `var(--color-green-01)`)};
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-align: center;
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
`;
