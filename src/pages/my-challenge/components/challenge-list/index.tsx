import * as S from './styles';
import FinishStamp from '@/assets/challenge/ZZAN-Black.png';
import { Text } from '@chakra-ui/react';

type ChallengeListProps = {
  BackgroundColor: string;
  color: string;
  BorderColor: string;
  challenges: {
    id: number;
    title: string;
  }[];
};

const ChallengeList = ({
  BackgroundColor,
  color,
  BorderColor,
  challenges,
}: ChallengeListProps) => {
  return (
    <>
      <S.ChallengeListLayout>
        {challenges.map((challenge) => (
          <S.ChallengeContainer key={challenge.id}>
            <S.ChallengeImgContainer>
              <S.ChallengeImg src={FinishStamp} />
            </S.ChallengeImgContainer>

            <S.ChallengeInfoContainer>
              <Text
                fontSize='1.125rem'
                fontStyle='normal'
                fontWeight='700'
                lineHeight='normal'
              >
                {challenge.title}
              </Text>
            </S.ChallengeInfoContainer>

            <S.ReviewContainer
              bgColor={BackgroundColor}
              borderColor={BorderColor}
            >
              <Text
                fontSize='0.875rem'
                fontStyle='normal'
                fontWeight='700'
                lineHeight='normal'
                color={color}
              >
                리뷰 쓰기
              </Text>
            </S.ReviewContainer>
          </S.ChallengeContainer>
        ))}
        <S.ChallengeBarContainer>
          <S.ChallengeBar>
            <S.ChallengeBarFill />
          </S.ChallengeBar>
        </S.ChallengeBarContainer>
      </S.ChallengeListLayout>
    </>
  );
};

export default ChallengeList;
