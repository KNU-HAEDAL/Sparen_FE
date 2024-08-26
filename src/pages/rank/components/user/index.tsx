import * as S from './styles';
import Profile from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/data/tierSchema';
import { User } from '@/interface/userInterface';
import { CurrentTierGraph, TotalTierGraph } from '@/styles/baseStyles';
import { Box, Img, Text } from '@chakra-ui/react';

type UserRankProps = {
  user: User;
  index: number;
};

const UserRank: React.FC<UserRankProps> = ({ user, index }) => {
  const { nickname, tierInfo, currentExp } = user;

  const tierDetails = tierInfo
    ? getTierDetails(tierInfo)
    : { color: 'var(--color-class-02)' };

  const tierColor = tierDetails?.color;

  return (
    <>
      <S.UserRankContainer>
        <Box
          display='flex'
          // justifyContent='space-between'
          alignItems='center'
          textAlign='center'
          bgColor='#fff'
          gap='1rem'
          width='100%'
        >
          <Text fontWeight='700'>{index + 1}위</Text>
          <Img src={Profile} width='1.5rem' height='1.5rem' />
          <Text fontWeight='700'>{nickname}</Text>
        </Box>
        <Box
          display='flex'
          width='100%'
          alignItems='center'
          textAlign='center'
          flexDirection='row'
          gap='1rem'
        >
          <Box
            display='flex'
            width='100%'
            alignItems='center'
            textAlign='center'
            flexDirection='row'
            gap='1rem'
          >
            <Text
              maxWidth='150px'
              fontWeight='700'
              fontSize='0.8rem'
              color={tierColor}
            >
              {tierInfo}
            </Text>
            <Text maxWidth='150px' fontSize='0.8rem' color={tierColor}>
              {currentExp}
            </Text>
          </Box>
          <Box
            display='flex'
            width='100%'
            alignItems='center'
            textAlign='center'
            flexDirection='row'
            gap='1rem'
          >
            <TotalTierGraph
              width='100%'
              mgColumn='1rem'
              mgRow='0'
              height='0.3125rem'
              radius='0.125rem'
            >
              <CurrentTierGraph
                width='1rem'
                height='0.3125rem'
                radius='0.125rem'
                bgColor={tierColor}
              />
            </TotalTierGraph>
          </Box>
        </Box>
      </S.UserRankContainer>
    </>
  );
};

export default UserRank;
