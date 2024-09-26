import { useState, useEffect } from 'react';

import styled from '@emotion/styled';

interface StarRatingProps {
  rating: number;
  size?: number;
  onClick?: (rating: number) => void;
}

export const StarRating = ({ rating, size = 24, onClick }: StarRatingProps) => {
  const [ratingToPercent, setRatingToPercent] = useState<number>(0);

  useEffect(() => {
    if (rating !== undefined) {
      setRatingToPercent((rating / 5) * 100);
    }
  }, [rating]);

  const handleClick = (rating: number) => {
    if (onClick) {
      onClick(rating + 1); // 클릭한 별점 값 전달 (1부터 시작)
    }
  };

  return (
    <Wrapper size={size}>
      <FilledStars ratingToPercent={ratingToPercent}>
        {[...Array(5)].map((_, index) => (
          <Star key={`fill-${index}`} onClick={() => handleClick(index)}>
            ★
          </Star>
        ))}
      </FilledStars>
      <BaseStars>
        {[...Array(5)].map((_, index) => (
          <Star key={`base-${index}`} onClick={() => handleClick(index)}>
            ★
          </Star>
        ))}
      </BaseStars>
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

const FilledStars = styled.div<{ ratingToPercent: number }>`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: ${({ ratingToPercent }) => `${ratingToPercent}%`};
  overflow: hidden;
  -webkit-text-fill-color: var(--color-green-01);
`;

const BaseStars = styled.div`
  display: flex;
`;

const Star = styled.button`
  outline: none;
`;
