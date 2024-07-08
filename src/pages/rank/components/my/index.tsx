import { TextContainer } from '../../styles';
import * as S from './styles';
import Profile from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/data/tierSchema';
import { useInfoStore } from '@/store/useInfoStore';
import * as Base from '@/styles/baseStyles';

const MyRank = () => {
  const { userNickname, userTier } = useInfoStore();

  const tierDetails = userTier
    ? getTierDetails(userTier)
    : { color: 'var(--color-class-02)' };
  console.log(tierDetails?.color);
  return (
    <>
      <S.MyRankLayout>
        <Base.Text
          fontSize='var(--font-size-xl)'
          fontWeight='700'
          color='#457A82'
        >
          내 순위
        </Base.Text>
        <S.RankInfoContainer>
          <S.RankPosition>
            <Base.Text fontWeight='700'>1위</Base.Text>
          </S.RankPosition>
          <S.RankProfile>
            <S.RankProfileImg src={Profile} />
          </S.RankProfile>
          <TextContainer>
            <Base.Text fontSize='var(--font-size-xl)' fontWeight='650'>
              {userNickname}
            </Base.Text>
            <Base.Text
              color={tierDetails?.color}
              fontWeight='700'
              fontSize='1.2rem'
            >
              {userTier}
            </Base.Text>
          </TextContainer>
        </S.RankInfoContainer>
      </S.MyRankLayout>
    </>
  );
};

export default MyRank;
