import styled from '@emotion/styled';

// export const Nickname = styled(Text)`
//   font-size: var(--font-size-sm);
// `;

// export const Tier = styled(Text)`
//   font-size: var(--font-size-xs);
//   color: var() (--color-grey--02);
// `;

export const Text = styled.span<{ fontWeight?: string; color?: string }>`
  font-size: var(--font-size-md);
  font-weight: ${(props) => props.fontWeight || null};
  color: ${(props) => props.color || null};
`;

export const Wrapper = styled.div`
  padding: 16px 16px;
  margin: 0 0 3.44rem; // 하단 내브 바 높이
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: auto;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  width: 100%;
`;

export const AvgRating = styled.p`
  font-size: var(--font-size-md);
  font-weight: 600;
`;

export const StarRating = styled.div`
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: var(--color-green-01);
`;

export const AllReviewButton = styled.button`
  font-size: var(--font-size-sm);
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  cursor: pointer;
`;

export const StarFill = styled.div`
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: var(--color-green-01);
`;

export const StarBase = styled.div`
  z-index: 0;
  padding: 0;
`;

export const Line = styled.div`
  border-top: 1px solid var(--color-green-06);
`;
