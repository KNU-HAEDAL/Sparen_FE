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
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  width: 100%;
  margin: 0 0 16px 0;
`;

export const AvgRating = styled.p`
  font-size: var(--font-size-xl);
  font-weight: 600;
`;

export const AllReviewButton = styled.button`
  font-size: var(--font-size-sm);
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  cursor: pointer;
`;

export const Line = styled.div`
  border-top: 1px solid var(--color-green-06);
`;
