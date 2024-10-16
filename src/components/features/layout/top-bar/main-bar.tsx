import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/top-bar/ZZAN-Default.png';
import CTA from '@/components/common/cta';
import { RouterPath } from '@/routes/path.ts';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MainBar = ({ height, show }: { height: string; show: boolean }) => {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(RouterPath.auth);
  };

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
        <CTA
          theme='secondary'
          label='나가기'
          display='block'
          onClick={handleLogout}
        />
      ) : (
        <CTA
          theme='secondary'
          label='로그인'
          display='block'
          onClick={handleLogin}
        />
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
  padding: 0 16px;
  background-color: #fff;
  z-index: 1000;
  position: sticky;
  top: ${({ show }) => (show ? '0' : '-100px')};
  transition: top 0.3s;
`;
