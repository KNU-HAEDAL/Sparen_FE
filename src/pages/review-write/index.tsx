import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { postReview } from '@/apis/review/review.api';
import { StarRating } from '@/components/common/star-rating';
import TopBar from '@/components/features/layout/top-bar';
import { useChallengeStore } from '@/store/useChallengeStore';
import {
  formatRating,
  formatDifficulty,
  formatAchievement,
} from '@/utils/formatters';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ReviewWrite = () => {
  const { id } = useParams();
  const challengeId = Number(id);
  // const challengeGrouptitle = sessionStorage.getItem('challengeGroupTitle');
  const categoryLabel = sessionStorage.getItem('categoryLabel');
  const { challengeTitle } = useChallengeStore();
  // const challengeGroupTitle = sessionStorage.getItem('challengeGroupTitle');

  const [rating, setRating] = useState(0);
  const difficultyList = [1, 2, 3];
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    number | undefined
  >();
  const achievementList = [1, 2, 3];
  const [selectedAchievement, setSelectedAchievement] = useState<
    number | undefined
  >();
  const [content, setContent] = useState('');
  const [isContentValid, setIsContentValid] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleDifficultyClick = (difficulty: number) => {
    setSelectedDifficulty(difficulty);
  };

  const handleFeelingClick = (feeling: number) => {
    setSelectedAchievement(feeling);
  };

  // 별점, 체감 난이도, 성취감, 내용 유효성 검사 -> 버튼 상태 관리
  useEffect(() => {
    if (
      rating &&
      selectedDifficulty &&
      selectedAchievement &&
      content.trim() &&
      content.length >= 20
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [rating, selectedDifficulty, selectedAchievement, content]);

  // 소감 내용 유효성 검사
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);

    if (newContent.trim() && newContent.length >= 20) {
      setIsContentValid(true);
    } else {
      setIsContentValid(false);
    }
  };

  const handleSaveReview = () => {
    postReview({
      challengeId,
      content,
      rating,
      difficulty: selectedDifficulty,
      achievement: selectedAchievement,
    })
      .then(() => {
        alert('리뷰가 등록되었습니다!');
      })
      .catch((error) => {
        // API에서 받은 오류 객체일 경우
        if (error.result === 'FAIL') {
          alert(error.message || '다시 시도해주세요.');
        }
        // 예상치 못한 오류 처리
        else {
          alert('다시 시도해주세요.');
        }
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
        <FlexBox flexDirection='column' alignItems='center' alignSelf='center'>
          <FlexBox flexDirection='row' alignItems='center'>
            <StarRating
              rating={rating}
              size={32}
              onClick={(newRating) => setRating(newRating)}
            />
            <Rating>
              <span>{rating}.0</span>&nbsp;<span>/ 5.0</span>
            </Rating>
          </FlexBox>
          <FlexBox alignSelf='center'>
            <Text fontSize='var(--font-size-sm)' color='var(--color-gray-01)'>
              {formatRating(rating)}
            </Text>
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection='column'>
          <Text fontSize='var(--font-size-md)' fontWeight='600' lineHeight={10}>
            체감 난이도
          </Text>
          <Box as='ul' display='flex'>
            {difficultyList.map((d) => (
              <Chip
                as='li'
                key={d}
                onClick={() => handleDifficultyClick(d)}
                isSelected={selectedDifficulty === d}
              >
                {formatDifficulty(d)}
              </Chip>
            ))}
          </Box>
        </FlexBox>
        <FlexBox flexDirection='column'>
          <Text fontSize='var(--font-size-md)' fontWeight='600' lineHeight={10}>
            성취감
          </Text>
          <Box as='ul' display='flex'>
            {achievementList.map((a) => (
              <Chip
                as='li'
                key={a}
                onClick={() => handleFeelingClick(a)}
                isSelected={selectedAchievement === a}
              >
                {formatAchievement(a)}
              </Chip>
            ))}
          </Box>
        </FlexBox>
        <FlexBox flexDirection='column'>
          <Text fontSize='var(--font-size-md)' fontWeight='600' lineHeight={10}>
            소감
          </Text>
          <Content
            placeholder='챌린지 완수 후 느낀 점을 적어주세요.'
            value={content}
            onChange={handleContentChange}
            valid={isContentValid}
          />
          <Text
            fontSize='var(--font-size-xs)'
            color={
              isContentValid ? `var(--color-grey-01)` : `var(--color-class-05)`
            }
            textAlign='right'
            marginTop='8px'
          >
            {content.length} / 최소 20자
          </Text>
        </FlexBox>
        <FlexBox flexDirection='column'>
          <Text fontSize='var(--font-size-md)' fontWeight='600' lineHeight={10}>
            리뷰 작성 시 주의 사항
          </Text>
          <Text fontSize='var(--font-size-sm)'>
            해당 챌린지와 무관한 내용 또는 욕설, 도배 등의{' '}
            <Text as='span' color='var(--color-green-01)' fontWeight={600}>
              부적절한 내용은 삭제 조치
            </Text>
            될 수 있습니다.
          </Text>
        </FlexBox>
      </Wrapper>
      <CTABox>
        <SubmitButton disabled={isButtonDisabled} onClick={handleSaveReview}>
          등록하기
        </SubmitButton>
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
  gap: 16px;
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

const Rating = styled.span`
  display: inline-flex;
  align-items: end;

  span:first-child {
    font-size: var(--font-size-xxl);
    font-weight: bold;
    margin-left: 10px;
    line-height: 1;
  }

  span:last-child {
    font-size: var(--font-size-sm);
    color: var(--color-gray-01);
  }
`;

const Chip = styled.button<{ isSelected: boolean }>`
  margin-right: 4px;
  padding: 4px 12px;
  border-radius: 50px;
  border: var(--color-grey-02) 1px solid;
  background-color: var(--color-white);
  color: var(--color-grey-01);
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-align: center;
  ${({ isSelected }) =>
    isSelected &&
    `
        border: var(--color-green-01) 1px solid;
        color: var(--color-green-01);
    `}
`;

const Content = styled.textarea<{ valid?: boolean }>`
  font-size: var(--font-size-sm);
  color: var(--color-black);
  border-radius: 20px;
  border: ${({ valid }) =>
    valid
      ? 'var(--color-grey-02) 1px solid'
      : 'var(--color-class-05) 1px solid'};
  padding: 12px;
  width: 100%;
  height: 180px;
  resize: none;
  outline: none;

  &::placeholder {
    color: var(--color-grey-01);
    opacity: 1; /* Firefox에서 placeholder 색상을 명시적으로 설정하기 위해 추가 */
  }

  &:focus {
    border: ${({ valid }) =>
      valid
        ? 'var(--color-green-01) 1px solid'
        : 'var(--color-class-05) 1px solid'};
  }
`;

const CTABox = styled(Box)`
  position: fixed;
  bottom: 3.44rem; // 밑에 탭바
  display: flex;
  width: 100%;
  height: 3.44rem;
  padding: 4px 16px;
`;

const SubmitButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: var(--color-green-01);
  color: var(--color-white);
  font-size: var(--font-size-md);
  font-weight: bold;
  outline: none;

  &:disabled {
    cursor: not-allowed;
    color: var(--color-grey-01);
    background-color: var(--color-grey-02);
  }

  &:focus,
  &:hover {
    opacity: 0.8 !important;
    background-color: var(--color-green-01) !important;
    color: var(--color-white) !important;
  }
`;
