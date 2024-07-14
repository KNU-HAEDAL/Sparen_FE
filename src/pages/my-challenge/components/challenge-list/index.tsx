import * as S from './styles';
import FinishStamp from '@/assets/challenge/ZZAN-Black.png';
import * as Base from '@/styles/baseStyles';

interface ChallengeListProps {
  BackgroundColor: string;
  color: string;
  BorderColor: string;
  challenges: {
    id: number;
    title: string;
  }[];
}

const ChallengeList: React.FC<ChallengeListProps> = ({
  BackgroundColor,
  color,
  BorderColor,
  challenges,
}) => {
  return (
    <>
      <S.ChallengeListLayout>
        {challenges.map((challenge) => (
          <S.ChallengeContainer key={challenge.id}>
            <S.ChallengeImgContainer>
              <S.ChallengeImg src={FinishStamp} />
            </S.ChallengeImgContainer>

            <S.ChallengeInfoContainer>
              <Base.Text
                fontSize='1.125rem'
                fontStyle='normal'
                fontWeight='700'
                lineHeight='normal'
              >
                {challenge.title}
              </Base.Text>
            </S.ChallengeInfoContainer>

            <S.ReviewContainer
              bgColor={BackgroundColor}
              borderColor={BorderColor}
            >
              <Base.Text
                fontSize='0.875rem'
                fontStyle='normal'
                fontWeight='700'
                lineHeight='normal'
                color={color}
              >
                리뷰 쓰기
              </Base.Text>
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
