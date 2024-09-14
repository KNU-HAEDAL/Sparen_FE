import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

export const Rank = styled.div<{ ranking: number }>`
  font-size: var(--font-size-md);
  font-weight: ${({ ranking }) => (ranking <= 3 ? `600` : `400`)};
  color: ${({ ranking }) => (ranking <= 3 ? `var(--color-green-01)` : `#000`)};
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2px;
`;

export const Text = styled.div`
  font-size: var(--font-size-md);
  font-weight: bold;
`;

export const Nickname = styled.div`
  font-size: var(--font-size-sm);
  font-weight: bold;
  word-wrap: break-word;
  text-align: left;
`;

export const Tier = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-grey-01);
  text-align: left;
`;

export const Point = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-green-05);
  margin-left: 12px;
`;

export const ImageBox = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 70%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
