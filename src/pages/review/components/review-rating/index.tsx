import { useState, useEffect } from 'react';

import { getChallegeAvgScore } from '@/apis/review/review.api';
import type { RatingCount } from '@/apis/review/review.response';
import { StarRating } from '@/components/common/star-rating';
import {
  formatRating,
  formatToFixed,
  formatWithComma,
} from '@/utils/formatters';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ReviewDataProps = {
  challengeGroupId: number;
};

const ReviewRating = ({ challengeGroupId }: ReviewDataProps) => {
  const [ratingCount, setRatingCount] = useState<RatingCount | null>({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });
  const [avgRating, setAvgRating] = useState<number>(0);
  const [formattedAvgRating, setFormattedAvgRating] = useState<string>('0.0'); // 소수점 한 자리까지 포맷팅된 별점 평균
  const [totalRatings, setTotalRatings] = useState(0); // 별점(리뷰) 개수
  const [formattedTotalRatings, setFormattedTotalRatings] = useState(''); // 쉼표 포맷팅된 별점(리뷰) 개수

  useEffect(() => {
    getChallegeAvgScore({ challengeGroupId: challengeGroupId }).then((res) => {
      setRatingCount(res.ratingCount);
      setAvgRating(res.averageRating);
      setFormattedAvgRating(formatToFixed(res.averageRating));

      // 모든 별점 개수 합 구하여 저장
      const total = Object.values(res.ratingCount).reduce(
        (acc, value) => acc + value,
        0
      );
      setTotalRatings(total);
      setFormattedTotalRatings(formatWithComma(total));
    });
  }, [challengeGroupId]);

  // data 객체를 [key, value] 형태의 배열로 변환하고, 내림차순 정렬
  const newRatingCount = ratingCount
    ? Object.entries(ratingCount).sort(([a], [b]) => Number(b) - Number(a))
    : [];

  return (
    <Wrapper>
      <Text fontSize='var(--font-size-md)'>
        <strong>{formattedTotalRatings || 0}</strong>개의 리뷰
      </Text>

      <RatingBox>
        <AvgRatingWrapper style={{ alignItems: 'center' }}>
          <Text fontSize='var(--font-size-xxl)' fontWeight='600'>
            {formattedAvgRating}
          </Text>
          <StarRating rating={avgRating} size={20} />
        </AvgRatingWrapper>

        <RatingGraphWrapper>
          {newRatingCount.map(([key, value]) => (
            <RatingGraphItem key={key}>
              <Text
                fontSize='var(--font-size-xs)'
                color='var(--color-grey-01)'
                mr='auto'
              >
                {formatRating(Number(key))}
              </Text>
              <Bar
                key={`${key}-bar`}
                percentage={`${(value / totalRatings) * 100}%`}
              />
              <Text fontSize='var(--font-size-xs)' color='var(--color-grey-01)'>
                {value}
              </Text>
            </RatingGraphItem>
          ))}
        </RatingGraphWrapper>
      </RatingBox>
    </Wrapper>
  );
};

export default ReviewRating;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 16px;
  gap: 8px;
`;

const RatingBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: var(--color-green-06);
  width: 100%;
  padding: 20px 0;
  justify-content: center;
`;

const AvgRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0; /* 고정 크기를 유지 */
  padding: 0 16px 0 16px;
`;

const RatingGraphWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto max-content;
  gap: 8px 12px;
  align-items: center;
  flex: 1;
  padding: 0 16px 0 16px;
  border-left: #d7d7d7 solid 0.5px;
`;

const RatingGraphItem = styled.div`
  display: contents;
`;

const Bar = styled.div<{ percentage: string }>`
  border-radius: 10px;
  height: 8px;
  background: linear-gradient(
    to right,
    var(--color-green-01) ${(props) => props.percentage},
    #d7d7d7 ${(props) => props.percentage}
  );
  min-width: 60px;
  flex-shrink: 0;
`;
