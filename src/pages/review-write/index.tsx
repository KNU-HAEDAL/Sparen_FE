import { useState } from 'react';
import { PiStarFill, PiStarLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import { postReview } from '@/apis/review/review.api';
import TopBar from '@/components/features/layout/top-bar';
import { useChallengeStore } from '@/store/useChallengeStore';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SAMPLE_CHALLENGE_ID = 1;

const ReviewWrite = () => {
  const { challengeTitle } = useChallengeStore();

  const difficultyList = ['쉬워요', '적당해요', '어려워요'];
  const feelingList = ['뿌듯해요', '유익해요', '애매해요'];

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
      alert('난이도와 성취감을 선택해주세요.');
      return;
    } else if (!content.trim()) {
      alert('리뷰 내용을 입력해주세요.');
      return;
    } else
      postReview({
        challengeId: SAMPLE_CHALLENGE_ID,
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
      <TopBar title='챌린지 리뷰' backgroundColor='#fff' type='Page' />
      <ReviewWriteLayout>
        <Text fontSize='var(--font-size-lg)' fontWeight='700'>
          {challengeTitle}
        </Text>
        <Wrapper margin='20px 0' alignItems='end' alignSelf='center'>
          {[...Array(rating)].map((_, i) => (
            <PiStarFill
              size='35'
              key={i}
              onClick={() => setRating(i + 1)}
              color='var(--color-green-01)'
            />
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <PiStarLight
              size='35'
              key={i}
              onClick={() => setRating(rating + i + 1)}
              color='var(--color-green-01)'
            />
          ))}
          <Star>{rating}.0</Star>
          <Text
            fontSize='var(--font-size-sm)'
            color='var(--color-gray-01)'
            margin='3px'
          >
            /5.0
          </Text>
        </Wrapper>
        <Wrapper margin='10px 0'>
          <Text
            fontSize='var(--font-size-md)'
            fontWeight='700'
            marginLeft='5px'
            marginRight='20px'
          >
            난이도
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
        </Wrapper>
        <Wrapper margin='10px 0'>
          <Text
            fontSize='var(--font-size-md)'
            fontWeight='700'
            marginLeft='5px'
            marginRight='20px'
          >
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
        </Wrapper>
        <Text
          fontSize='var(--font-size-md)'
          fontWeight='700'
          marginLeft='5px'
          marginRight='20px'
          marginTop='20px'
        >
          리뷰 쓰기
        </Text>
        <InputArea
          placeholder='챌린지 후 느낀점을 적어주세요'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SubmitButton onClick={handleSaveReview}>등록하기</SubmitButton>
      </ReviewWriteLayout>
    </>
  );
};

export default ReviewWrite;

const ReviewWriteLayout = styled.div`
  position: relative;
  margin: 30px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const Star = styled.div`
  font-size: var(--font-size-xxl);
  font-weight: bold;
  margin-left: 10px;
`;

const InputArea = styled.textarea`
  font-size: var(--font-size-sm);
  border-radius: 20px;
  border: var(--color-green-01) 1px solid;
  padding: 10px;
  height: 30vh;
  resize: none;
  margin-top: 10px;
`;

const SubmitButton = styled(Button)`
  position: fixed;
  display: block;
  bottom: 60px;
  width: calc(100% - 60px);
  height: 50px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: var(--color-green-01);
  color: var(--color-white);
  font-size: var(--font-size-md);
  font-weight: bold;
  border: none;
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
