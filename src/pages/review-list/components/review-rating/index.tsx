import { useState, useEffect } from 'react';

import { getChallegeAvgScore } from '@/apis/review/review.api';
import type { RatingCount } from '@/apis/review/review.response';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ReviewRating = () => {
  const [datas, setDatas] = useState<RatingCount | null>(null);
  const [starAvg, setStarAvg] = useState(0);
  const [ratingToPercent, setRatingToPercent] = useState({
    width: `${(starAvg / 5) * 100}%`,
  });

  useEffect(() => {
    getChallegeAvgScore({ challengeGroupId: 1 }).then((res) => {
      setDatas(res.ratingCount);
      console.log('rating count: ', res.ratingCount);
      setStarAvg(res.averageRating);
      setRatingToPercent({ width: `${(res.averageRating / 5) * 100}%` });
    });
  }, []);

  // data 객체를 [key, value] 형태의 배열로 변환
  const ratings = datas ? Object.entries(datas) : [];

  return (
    <>
      {datas ? (
        <StarBox>
          <CWrapper style={{ alignItems: 'center' }}>
            <Text fontSize='var(--font-size-xxl)' fontWeight='700'>
              {starAvg}
            </Text>
            <StarRating>
              <StarFill style={ratingToPercent}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </StarFill>
              <StarBase>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </StarBase>
            </StarRating>
          </CWrapper>
          <VLine />
          <RWrapper>
            <CWrapper>
              {ratings.map(([key]) => (
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
              {ratings.map(([key, data]) => (
                <Bar key={key} percentage={`${data * 100}%`} />
              ))}
            </CWrapper>
            <CWrapper>
              {ratings.map(([key, data]) => (
                <SubText key={key}>{data}</SubText>
              ))}
            </CWrapper>
          </RWrapper>
        </StarBox>
      ) : (
        <div />
      )}
    </>
  );
};

export default ReviewRating;

const StarBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 90%;
  border-radius: 10px;
  background-color: var(--color-green-06);
  padding: 0px 20px;
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

const StarRating = styled.div`
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
