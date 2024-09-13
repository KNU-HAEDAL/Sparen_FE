import { useState, useEffect } from 'react';

import { getChallegeAvgScore } from '@/apis/review/review.api';
import type { RatingCount } from '@/apis/review/review.response';
import { StarRating } from '@/components/common/star-rating';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ReviewDataProps = {
  challengeGroupId: number;
};

const ReviewRating = ({ challengeGroupId }: ReviewDataProps) => {
  const [ratingCount, setRatingCount] = useState<RatingCount | null>(null);
  const [avgRating, setAvgRating] = useState(0);
  const [ratingToPercent, setRatingToPercent] = useState<string>(`0%`);

  useEffect(() => {
    getChallegeAvgScore({ challengeGroupId: challengeGroupId }).then((res) => {
      setRatingCount(res.ratingCount);
      // console.log('rating count: ', res.ratingCount);

      setAvgRating(res.averageRating);
    });
  }, [challengeGroupId]);

  useEffect(() => {
    if (avgRating !== undefined) {
      setRatingToPercent(`${(avgRating / 5) * 100}%`);
    }
  }, [avgRating]);

  // data 객체를 [key, value] 형태의 배열로 변환
  const newRatingCount = ratingCount ? Object.entries(ratingCount) : [];

  return (
    <>
      {ratingCount ? (
        <Wrapper>
          <CWrapper style={{ alignItems: 'center' }}>
            <Text fontSize='var(--font-size-xl)' fontWeight='700'>
              {avgRating}
            </Text>
            <StarRating ratingToPercent={ratingToPercent} />
          </CWrapper>
          <VLine />
          <RWrapper>
            <CWrapper>
              {newRatingCount.map(([key]) => (
                <SubText key={key}>
                  {key === '5'
                    ? '매우 만족'
                    : key === '4'
                      ? '만족'
                      : key === '3'
                        ? '보통'
                        : key === '2'
                          ? '별로'
                          : '매우 별로'}
                </SubText>
              ))}
            </CWrapper>
            <CWrapper>
              {newRatingCount.map(([key, data]) => (
                <Bar key={key} percentage={`${data * 100}%`} />
              ))}
            </CWrapper>
            <CWrapper>
              {newRatingCount.map(([key, data]) => (
                <SubText key={key}>{data}</SubText>
              ))}
            </CWrapper>
          </RWrapper>
        </Wrapper>
      ) : (
        <div />
      )}
    </>
  );
};

export default ReviewRating;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  border-radius: 10px;
  background-color: var(--color-green-06);
  width: 100%;
  justify-content: center;
`;

const VLine = styled.div`
  border: #d7d7d7 solid 0.5px;
  height: 100px;
  border-radius: 10px;
  margin: 10px;
`;

const RWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  width: 170px;
  justify-content: space-between;
`;

const CWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const SubText = styled(Text)`
  font-size: var(--font-size-xs);
  color: var(--color-grey-01);
  margin: 0.2px;
`;

const Bar = styled.div<{ percentage: string }>`
  border-radius: 10px;
  height: 5px;
  background: linear-gradient(
    to right,
    var(--color-green-01) ${(props) => props.percentage},
    #d7d7d7 ${(props) => props.percentage}
  );
  width: 80px;
  flex-shrink: 0;
  margin: 6px 0;
`;
