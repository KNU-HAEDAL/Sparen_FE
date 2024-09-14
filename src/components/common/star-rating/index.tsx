import { useState, useEffect } from 'react';

import styled from '@emotion/styled';

interface StarRatingProps {
  rating: number;
  size?: number;
}

export const StarRating = ({ rating, size = 24 }: StarRatingProps) => {
  // rating(별점)을 백분율로 변환
  const [ratingToPercent, setRatingToPercent] = useState<string>(`0%`);

  useEffect(() => {
    if (rating !== undefined) {
      setRatingToPercent(`${(rating / 5) * 100}%`);
    }
  }, [rating]);

  return (
    <Wrapper size={size}>
      <StarFill style={{ width: ratingToPercent }}>
        {[...Array(5)].map((_, index) => (
          <span key={`fill-${index}`}>★</span>
        ))}
      </StarFill>
      <StarBase>
        {[...Array(5)].map((_, index) => (
          <span key={`base-${index}`}>★</span>
        ))}
      </StarBase>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: number }>`
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: var(--color-green-01);
  font-size: ${({ size }) => `${size}px`};
`;

const StarFill = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: var(--color-green-01);
`;

const StarBase = styled.div``;
