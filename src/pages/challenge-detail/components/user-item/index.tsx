// import DefaultImage from '../../../../assets/UserImage.svg';
import * as S from './styles';

type UserItemProps = {
  user: {
    ranking: number;
    user: {
      profileImageUrl: string;
      nickname: string;
      tierInfo: {
        tier: number;
      };
    };
    acquiredPoint: number;
  };
};

const UserItem = ({ user }: UserItemProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Rank>{user.ranking}위</S.Rank>
          <S.ImageBox>
            <S.Image src={user.user.profileImageUrl} />
          </S.ImageBox>
          <S.UserWrapper>
            <S.BoldText>{user.user.nickname}</S.BoldText>
            <S.SubText>{user.user.tierInfo.tier}</S.SubText>
          </S.UserWrapper>
        </S.Content>
        <S.Point>+ {user.acquiredPoint}포인트</S.Point>
      </S.Wrapper>
      <S.Line />
    </>
  );
};

export default UserItem;
