import { useEffect } from 'react';

import * as S from './styles';
import { getUserInfo } from '@/apis/user/user.api';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/data/tierSchema';
import { useInfoStore } from '@/store/useInfoStore';
import * as Base from '@/styles/baseStyles';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Tier = () => {
  const { userInfo, setUserInfo } = useInfoStore();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
        const userData = response.data;
        setUserInfo(userData);
        console.log(userData);
      } catch (error) {
        console.error('fetchUserInfo error: ', error);
      }
    };
    fetchUserInfo();
  }, [setUserInfo]);

  const tierDetails = userInfo?.tierInfo
    ? getTierDetails(userInfo?.tierInfo.tier)
    : { color: 'var(--color-class-02)' };

  const currentExp = userInfo?.tierInfo.currentExp || 0;
  const totalExp = userInfo?.tierInfo.totalExp || 1;
  const expPercentage = (currentExp / totalExp) * 100;

  return (
    <>
      <Base.Text
        fontSize='1.25rem'
        fontWeight='700'
        mgLeft='1rem'
        mgBottom='0.5rem'
      >
        내 티어
      </Base.Text>
      <S.TierLayout>
        <S.InfoContainer>
          <S.ImgContainer>
            <S.ProfileImg src={ProfileImg} />
          </S.ImgContainer>
          <Base.Container
            flexDirection='column'
            justifyContent='center'
            alignItems='flex-start'
            gap='0.625rem'
          >
            <Base.Text fontSize='1.25rem' fontWeight='700' color='#000'>
              {userInfo?.nickname}
            </Base.Text>
            <Base.Container
              justifyContent='space-between'
              width='5rem'
              mgColumn='0.5rem'
              mgRow='1rem'
            >
              <Base.Text color={tierDetails?.color} fontWeight='700'>
                {userInfo?.tierInfo.tier}
              </Base.Text>
            </Base.Container>
          </Base.Container>
        </S.InfoContainer>
        <Box margin={4} position='relative'>
          <TotalGraph>
            <CurrentGraph
              width={`${expPercentage}%`}
              backgroundColor={tierDetails?.color || '#000'}
            />
          </TotalGraph>
        </Box>
      </S.TierLayout>
    </>
  );
};

export default Tier;

const TotalGraph = styled(Box)`
  position: 'relative';
  display: flex;
  text-align: center;
  align-items: center;
  margin: 1rem 0;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CurrentGraph = styled(Box)<{ backgroundColor: string }>`
  height: 1rem;
  position: 'absolute';
  border-radius: 0.25rem;
  background-color: ${(props) => props.backgroundColor};
  /* background-color: ${(props) =>
    `linear-gradient(45deg, #4e4e4e 0%, ${props.backgroundColor} 50%)` ||
    `linear-gradient(90deg, ${props.backgroundColor} 0%, #b28854 50%)`}; */
  width: ${(props) => props.width};
`;
