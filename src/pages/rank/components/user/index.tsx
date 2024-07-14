import * as S from './styles';
import Profile from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/data/tierSchema';
import { User } from '@/interface/userInterface';
import * as Base from '@/styles/baseStyles';

type UserRankProps = {
  user: User;
  index: number;
};

const UserRank: React.FC<UserRankProps> = ({ user, index }) => {
  // const { nickname, profileImageUrl, tierInfo, currentExp } = user;
  const { nickname, tierInfo, currentExp } = user;

  const tierDetails = tierInfo
    ? getTierDetails(tierInfo)
    : { color: 'var(--color-class-02)' };

  const tierColor = tierDetails?.color;
  console.log(tierColor);

  return (
    <>
      <S.UserRankContainer>
        <Base.Container
          justifyContent='space-between'
          alignItems='center'
          textAlign='center'
          bgColor='#fff'
        >
          <Base.Text fontWeight='700'>{index + 4}위</Base.Text>
          <Base.Img src={Profile} width='1.5rem' height='1.5rem' />
          <Base.Text fontWeight='700'>{nickname}</Base.Text>
        </Base.Container>
        <Base.Container
          width='100%'
          alignItems='center'
          textAlign='center'
          flexDirection='row'
          gap='1rem'
        >
          <Base.Container
            width='100%'
            alignItems='center'
            textAlign='center'
            flexDirection='row'
            gap='1rem'
          >
            <Base.Text
              maxWidth='150px'
              fontWeight='700'
              fontSize='0.8rem'
              color={tierColor}
            >
              {tierInfo}
            </Base.Text>
            <Base.Text maxWidth='150px' fontSize='0.8rem' color={tierColor}>
              {currentExp}
            </Base.Text>
          </Base.Container>
          <Base.Container
            width='100%'
            alignItems='center'
            textAlign='center'
            flexDirection='row'
            gap='1rem'
          >
            <Base.TotalTierGraph
              width='100%'
              mgColumn='1rem'
              mgRow='0'
              height='0.3125rem'
              radius='0.125rem'
            >
              <Base.CurrentTierGraph
                width='1rem'
                height='0.3125rem'
                radius='0.125rem'
                bgColor={tierColor}
              />
            </Base.TotalTierGraph>
          </Base.Container>
        </Base.Container>
      </S.UserRankContainer>
    </>
  );
};

export default UserRank;
