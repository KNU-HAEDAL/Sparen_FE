import styled from '@emotion/styled';

export const AllRankLayout = styled.section`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  background-color: var(--color-green-06);
`;

export const HighRankBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1rem;
`;

export const AllRankBox = styled.div`
  display: flex;
  /* height: 20.875rem; */
  padding: 1rem 1rem;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
