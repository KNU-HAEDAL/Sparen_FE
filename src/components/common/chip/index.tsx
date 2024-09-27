import styled from '@emotion/styled';

export const Chip = styled.div<{ margin?: string }>`
  padding: 4px 12px;
  border-radius: 50px;
  border: var(--color-green-01) 0.5px solid;
  background-color: var(--color-white);
  color: var(--color-green-01);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-align: center;
  margin: ${({ margin }) => (margin ? `${margin}` : null)};
`;
