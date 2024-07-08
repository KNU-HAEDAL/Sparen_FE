import styled from '@emotion/styled';

export const MyRankLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-green-06);
  border-bottom: 1px solid #bdc5cd;
`;

export const RankInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  gap: 0.6rem;
  padding: 1rem 0.5rem;
`;

export const RankProfile = styled.div`
  display: flex;
`;

export const RankProfileImg = styled.img`
  width: ${(props) => props.width || '3rem'};
  height: ${(props) => props.height || '3rem'};
`;

export const RankPosition = styled.div`
  flex-shrink: 0;
  width: 3rem;
  text-align: center;
  white-space: nowrap;
`;
