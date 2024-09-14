import styled from '@emotion/styled';

export const Text = styled.span<{ fontWeight?: string; color?: string }>`
  font-size: var(--font-size-md);
  font-weight: ${(props) => props.fontWeight || null};
  color: ${(props) => props.color || null};
`;

export const RankingWrapper = styled.div`
  padding: 16px 16px;
  margin: 0 0 3.44rem; // 하단 내브 바 높이
  display: flex;
  flex-direction: column;
`;
