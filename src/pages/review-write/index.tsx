import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from 'antd';

import { postReview } from '@/apis/review/review.api';
import { StarRating } from '@/components/common/star-rating';
import TopBar from '@/components/features/layout/top-bar';
import { useChallengeStore } from '@/store/useChallengeStore';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

// const SAMPLE_CHALLENGE_ID = 1;

const ReviewWrite = () => {
  const { id } = useParams();
  const challengeGroupId = Number(id);
  // const challengeGrouptitle = sessionStorage.getItem('challengeGroupTitle');
  const categoryLabel = sessionStorage.getItem('categoryLabel');
  const { challengeTitle } = useChallengeStore();
  // const challengeGroupTitle = sessionStorage.getItem('challengeGroupTitle');

  const difficultyList = ['쉬워요', '적당해요', '어려워요'];
  const feelingList = ['뿌듯해요', '그냥 그래요', '별로예요'];

  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    string | undefined
  >();
  const [selectedFeeling, setSelectedFeeling] = useState<string | undefined>();
  const [content, setContent] = useState('');

  const handleDifficultyClick = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  const handleFeelingClick = (feeling: string) => {
    setSelectedFeeling(feeling);
  };

  const handleSaveReview = () => {
    if (rating === 0) {
      alert('별점을 선택해주세요.');
      return;
    } else if (
      selectedDifficulty === undefined ||
      selectedFeeling === undefined
    ) {
      alert('체감 난이도와 성취감을 선택해주세요.');
      return;
    } else if (!content.trim() || content.length < 20) {
      alert('소감을 20자 이상 입력해주세요.');
      return;
    } else
      postReview({
        challengeId: challengeGroupId,
        content,
        rating,
      })
        .then(() => {
          alert('성공적으로 저장했습니다.');
          navigate('/');
        })
        .catch(() => {
          alert('저장에 실패했습니다.');
        });
  };

  return (
    <>
      <TopBar title='리뷰 쓰기' backgroundColor='#fff' type='Page' />
      <Wrapper>
        <ChallengeTitleWrapper>
          <Category>{categoryLabel}</Category>
          <Title>{challengeTitle}</Title>
        </ChallengeTitleWrapper>
        <FlexBox margin='32px 0' alignItems='end' alignSelf='center'>
          <StarRating
            rating={rating}
            size={32}
            onClick={(newRating) => setRating(newRating)}
          />
          <Rating>{rating}.0</Rating>
          <Text
            fontSize='var(--font-size-sm)'
            color='var(--color-gray-01)'
            margin='3px'
          >
            / 5.0
          </Text>
        </FlexBox>
        <FlexBox>
          <Text fontSize='var(--font-size-md)' fontWeight='600'>
            체감 난이도
          </Text>
          {difficultyList.map((item) => (
            <CheckButton
              key={item}
              onClick={() => handleDifficultyClick(item)}
              isSelected={selectedDifficulty === item}
            >
              {item}
            </CheckButton>
          ))}
        </FlexBox>
        <FlexBox marginTop='8px'>
          <Text fontSize='var(--font-size-md)' fontWeight='600'>
            성취감
          </Text>
          {feelingList.map((item) => (
            <CheckButton
              key={item}
              onClick={() => handleFeelingClick(item)}
              isSelected={selectedFeeling === item}
            >
              {item}
            </CheckButton>
          ))}
        </FlexBox>
        <FlexBox flexDirection='column' gap='8px'>
          <Text
            fontSize='var(--font-size-md)'
            fontWeight='600'
            marginTop='24px'
          >
            소감
          </Text>
          <TextArea
            placeholder='챌린지 완수 후 느낀 점을 적어주세요.'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Text
            fontSize='var(--font-size-xs)'
            color='var(--color-grey-02)'
            textAlign='right'
          >
            {content.length} / 최소 20자
          </Text>
        </FlexBox>
        <FlexBox flexDirection='column' gap='8px'>
          <Text
            fontSize='var(--font-size-md)'
            fontWeight='600'
            marginTop='24px'
          >
            리뷰 작성 시 주의 사항
          </Text>
          <Text fontSize='var(--font-size-sm)'>
            해당 챌린지와 무관한 내용 또는 욕설, 도배 등의 부적절한 내용은 삭제
            조치될 수 있습니다.
          </Text>
        </FlexBox>
      </Wrapper>
      <CTABox>
        <SubmitButton onClick={handleSaveReview}>등록하기</SubmitButton>
      </CTABox>
    </>
  );
};

export default ReviewWrite;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 3.44rem;
`;

const ChallengeTitleWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Category = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-green-01);
`;

const Title = styled.div`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;

const FlexBox = styled(Box)`
  display: flex;
  padding: 0 16px;
`;

const Rating = styled.div`
  font-size: var(--font-size-xxl);
  font-weight: bold;
  margin-left: 10px;
`;

const TextArea = styled.textarea`
  font-size: var(--font-size-sm);
  border-radius: 20px;
  border: var(--color-green-01) 1px solid;
  padding: 12px;
  height: 30vh;
  resize: none;
`;

const CTABox = styled(Box)`
  position: fixed;
  bottom: 3.44rem; // 밑에 탭바
  display: flex;
  width: 100%;
  height: 3.44rem;
  padding: 4px 16px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: var(--color-green-01);
  color: var(--color-white);
  font-size: var(--font-size-md);
  font-weight: bold;
`;

const CheckButton = styled.button<{ isSelected: boolean }>`
  height: 25px;
  border-radius: 20px;
  margin-left: 5px;
  width: 4rem;
  border: var(--color-grey-02) 1px solid;
  background-color: var(--color-white);
  color: var(--color-grey-02);
  font-size: var(--font-size-sm);
  text-align: center;
  flex-shrink: 0;
  ${({ isSelected }) =>
    isSelected &&
    `
        border: var(--color-green-01) 1px solid;
        color: var(--color-green-01);
    `}
`;
