import styled from '@emotion/styled';

interface StarRatingProps {
  ratingToPercent: string;
}

export const StarRating = ({ ratingToPercent }: StarRatingProps) => {
  return (
    <Wrapper>
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

const Wrapper = styled.div`
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: var(--color-green-01);
`;

const StarFill = styled.div`
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: var(--color-green-01);
`;

const StarBase = styled.div`
  z-index: 0;
  padding: 0;
`;
