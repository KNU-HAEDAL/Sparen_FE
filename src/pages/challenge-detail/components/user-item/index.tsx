// import DefaultImage from '../../../../assets/UserImage.svg';
import * as S from './styles';
import type { ChallengeRankingData } from '@/apis/challenge-detail/challenge.ranking.response';

type UserItemProps = {
  data: ChallengeRankingData;
};

const UserItem = ({ data }: UserItemProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Rank>{data.ranking}위</S.Rank>
          <S.ImageBox>
            <S.Image src={data.user.profileImageUrl} />
          </S.ImageBox>
          <S.UserWrapper>
            <S.BoldText>{data.user.nickname}</S.BoldText>
            <S.SubText>{data.user.tierInfo.tier}</S.SubText>
          </S.UserWrapper>
        </S.Content>
        <S.Point>+ {data.acquiredPoint}포인트</S.Point>
      </S.Wrapper>
      <S.Line />
    </>
  );
};

export default UserItem;
