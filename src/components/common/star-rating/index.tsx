import { useState, useEffect } from 'react';

import styled from '@emotion/styled';

interface StarRatingProps {
  rating: number;
  size?: number;
  onClick?: (rating: number) => void;
}

export const StarRating = ({ rating, size = 24, onClick }: StarRatingProps) => {
  const [ratingToPercent, setRatingToPercent] = useState<string>(`0%`);

  useEffect(() => {
    if (rating !== undefined) {
      setRatingToPercent(`${(rating / 5) * 100}%`);
    }
  }, [rating]);

  const handleClick = (rating: number) => {
    if (onClick) {
      onClick(rating + 1); // 클릭한 별점 값 전달 (1부터 시작)
    }
  };

  return (
    <Wrapper size={size}>
      <StarFill style={{ width: ratingToPercent }}>
        {[...Array(5)].map((_, index) => (
          <button key={`fill-${index}`} onClick={() => handleClick(index)}>
            ★
          </button>
        ))}
      </StarFill>
      <StarBase>
        {[...Array(5)].map((_, index) => (
          <button key={`base-${index}`} onClick={() => handleClick(index)}>
            ★
          </button>
        ))}
      </StarBase>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: number; cursor?: string }>`
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: var(--color-green-01);
  font-size: ${({ size }) => `${size}px`};
  cursor: ${({ cursor }) => cursor && 'pointer'};
`;

const StarFill = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: var(--color-green-01);
`;

const StarBase = styled.div`
  display: flex;
`;
