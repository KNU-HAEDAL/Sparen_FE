import { TextContainer } from '../../styles';
import * as S from './styles';
import Profile from '@/assets/main/ZZAN-Profile.png';
import First from '@/assets/rank/1st-Trophy.svg';
import Second from '@/assets/rank/2nd-Trophy.svg';
import Third from '@/assets/rank/3rd-Trophy.svg';
import { getTierDetails } from '@/constants/data/tierSchema';
import { User } from '@/interface/userInterface';
import * as Base from '@/styles/baseStyles';

const gradeToTrophy = {
  1: First,
  2: Second,
  3: Third,
};

type HighRankProps = {
  grade: number;
  user: User;
};

const HighRank = ({ grade, user }: HighRankProps) => {
  const trophySrc = gradeToTrophy[grade];
  const { nickname, profileImageUrl, tierInfo } = user;

  const tierDetails = tierInfo
    ? getTierDetails(tierInfo.tier)
    : { color: 'var(--color-class-02)' };

  return (
    <S.HighRankLayout>
      <S.TrophyContainer>
        <S.Trophy src={trophySrc} />
      </S.TrophyContainer>
      <Base.Img
        src={profileImageUrl ? profileImageUrl : Profile}
        width='1.5rem'
        height='1.5rem'
      />
      <Base.Text fontSize='1.2rem' fontWeight='700'>
        {nickname}
      </Base.Text>
      <TextContainer marginRight='1rem' direction='column'>
        <Base.Text
          color={tierDetails?.color}
          fontWeight='700'
          fontSize='0.8rem'
        >
          {tierInfo.tier}
        </Base.Text>
        <Base.TierGraph>
          <Base.CurrentTierGraph background={tierDetails?.color} />
        </Base.TierGraph>
      </TextContainer>
    </S.HighRankLayout>
  );
};

export default HighRank;
