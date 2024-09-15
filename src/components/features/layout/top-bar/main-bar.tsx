import { NavLink } from 'react-router-dom';

import Logo from '@/assets/top-bar/ZZAN-Default.png';
import { RouterPath } from '@/routes/path.ts';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MainBar = ({ height, show }: { height: string; show: boolean }) => {
  const accessToken = localStorage.getItem('accessToken');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    const redirectURL = `${window.location.origin}${RouterPath.main}`;
    window.location.replace(redirectURL);
  };

  return (
    <MainBarLayout height={height} show={show}>
      <Box gap='1rem' alignItems='center' display='flex'>
        <Box
          border='1.5px solid var(--color-green-01)'
          padding='0.25rem'
          borderRadius='50%'
        >
          <Image width='2rem' src={Logo} alt='ZZAN Logo' />
        </Box>
        <Text
          fontSize='var(--font-size-xxl)'
          fontWeight='bold'
          color='var(--color-green-01)'
        >
          ZZANSUNI
        </Text>
      </Box>

      {accessToken ? (
        <Button
          borderRadius='0.5rem'
          border='1.2px solid var(--color-green-01)'
          width='3.5rem'
          paddingX='5px'
          textAlign='center'
          alignItems='center'
          onClick={handleLogout}
          backgroundColor='#fff'
        >
          <Text
            fontSize='var(--font-size-md)'
            fontWeight='bold'
            color='var(--color-green-01)'
          >
            나가기
          </Text>
        </Button>
      ) : (
        <Button
          borderRadius='0.5rem'
          border='1.2px solid var(--color-green-01)'
          width='3.5rem'
          paddingX='5px'
          textAlign='center'
          alignItems='center'
          backgroundColor='#fff'
        >
          <NavLink to={RouterPath.auth}>
            <Text
              fontSize='var(--font-size-md)'
              fontWeight='bold'
              color='var(--color-green-01)'
            >
              로그인
            </Text>
          </NavLink>
        </Button>
      )}
    </MainBarLayout>
  );
};

export default MainBar;

const MainBarLayout = styled(Box)<{ show: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: ${({ height }) => height};
  padding: 0.5rem;
  gap: 1rem;
  background-color: #fff;
  z-index: 1000;
  position: fixed;
  top: ${({ show }) => (show ? '0' : '-100px')};
  transition: top 0.3s;

  /* position: sticky;
  top: 0; */
`;
