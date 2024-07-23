import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/top-bar/ZZAN-Default.png';
import { useAuth } from '@/provider/auth';
import { getDynamicPath, RouterPath } from '@/routes/path.ts';
import { authLocalStorage } from '@/utils/storage';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MainBar = () => {
  const navigate = useNavigate();
  const authInfo = useAuth();
  const handleLogin = () => {
    navigate(getDynamicPath.login());
  };

  const handleLogout = () => {
    authLocalStorage.set(undefined);

    const redirectURL = `${window.location.origin}${RouterPath.main}`;
    window.location.replace(redirectURL);
  };

  return (
    <PageBarLayout>
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

      {authInfo ? (
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
          onClick={handleLogin}
          backgroundColor='#fff'
        >
          <Text
            fontSize='var(--font-size-md)'
            fontWeight='bold'
            color='var(--color-green-01)'
          >
            로그인
          </Text>
        </Button>
      )}
      {/*<Text*/}
      {/*  fontSize='var(--font-size-md)'*/}
      {/*  fontWeight='bold'*/}
      {/*  color='var(--color-green-01)'*/}
      {/*>*/}
      {/*  로그인*/}
      {/*</Text>*/}
    </PageBarLayout>
  );
};

export default MainBar;

const PageBarLayout = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
  cursor: pointer;
  gap: 1rem;
`;

//  const Container = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: center;
// `;

// const LogoBox = styled.div`
//   border: 1.5px solid var(--color-green-01);
//   padding: 0.25rem;
//   border-radius: 50%;
// `;
