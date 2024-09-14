// import DefaultImage from '../../../../assets/UserImage.svg';
import * as S from './styles';
import type { ChallengeRankingData } from '@/apis/challenge-detail/challenge.ranking.response';

type RankingItemProps = {
  item: ChallengeRankingData;
};

export const RankingItem = ({ item }: RankingItemProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Rank ranking={item.ranking}>{item.ranking}위</S.Rank>
        <S.ImageBox>
          <S.Image src={item.user.profileImageUrl} />
        </S.ImageBox>
        <S.UserWrapper>
          <S.Nickname>{item.user.nickname}</S.Nickname>
          <S.Tier>{item.user.tierInfo.tier}</S.Tier>
        </S.UserWrapper>
      </S.Content>
      <S.Point>+ {item.acquiredPoint} 포인트</S.Point>
    </S.Wrapper>
  );
};
