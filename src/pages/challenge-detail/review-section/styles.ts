import styled from '@emotion/styled';

// export const Nickname = styled.div`
//   font-size: var(--font-size-sm);
// `;

// export const Tier = styled.div`
//   font-size: var(--font-size-xs);
//   color: var() (--color-grey--02);
// `;

export const Wrapper = styled.div`
  padding: 16px 16px;
  margin: 0 0 3.44rem; // 하단 내브 바 높이
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var() (--font-size-md);
`;

export const Line = styled.div`
  border-top: 1px solid var(--color-green-06);
`;
