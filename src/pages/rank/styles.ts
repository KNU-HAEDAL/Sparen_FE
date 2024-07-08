import styled from '@emotion/styled';

export const RankLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-green-06);
`;

export const PageLayout = styled.div`
  margin: 0 1rem;
`;

export const TextContainer = styled.div<{
  direction?: string;
  marginRight?: string;
}>`
  display: flex;
  /* flex-direction: row; */
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 1rem;
  /* margin-right: 0.5rem; */
  margin-right: ${(props) => props.marginRight || '0.5rem'};
`;
