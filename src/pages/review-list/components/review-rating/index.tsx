import { useState, useEffect } from 'react';

import { getChallegeAvgScore } from '@/apis/review/review.api';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ReviewRating = () => {
  const [datas, setDatas] = useState(null);
  const [starAvg, setStarAvg] = useState(0);
  const [ratingToPercent, setRatingToPercent] = useState({
    width: `${(starAvg / 5) * 100}%`,
  });

  useEffect(() => {
    getChallegeAvgScore(1).then((res) => {
      setDatas(res.ratingCount);
      console.log('ddd', res.ratingCount);
      setStarAvg(res.averageRating);
      setRatingToPercent({ width: `${(res.averageRating / 5) * 100}%` });
    });
  }, []);

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
              <SubText>매우 만족</SubText>
              <SubText>만족</SubText>
              <SubText>보통</SubText>
              <SubText>별로</SubText>
              <SubText>매우 별로</SubText>
            </CWrapper>
            <CWrapper>
              <Bar percentage={`${datas[1] * 100}%`} />
              <Bar percentage={`${datas[2] * 100}%`} />
              <Bar percentage={`${datas[3] * 100}%`} />
              <Bar percentage={`${datas[4] * 100}%`} />
              <Bar percentage={`${datas[5] * 100}%`} />
            </CWrapper>
            <CWrapper>
              <SubText>{datas[1]}</SubText>
              <SubText>{datas[2]}</SubText>
              <SubText>{datas[3]}</SubText>
              <SubText>{datas[4]}</SubText>
              <SubText>{datas[5]}</SubText>
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

const Bar = styled.div`
  border-radius: 10px;
  height: 5px;
  --percentage: ${(props) => `${props.percentage}`};
  background: linear-gradient(
    to right,
    var(--color-green-01) var(--percentage),
    #d7d7d7 var(--percentage)
  );
  width: 80px;
  flex-shrink: 0;
  margin: 6px 0;
`;
