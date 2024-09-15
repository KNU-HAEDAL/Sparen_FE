import { Link } from 'react-router-dom';

import EmailLogin from './components/email';
import GoogleLogin from './components/google';
import NaverLogin from './components/naver';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import KakaoLogin from '@/pages/login/components/kakao';
import { RouterPath } from '@/routes/path';
import { Container, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LoginPage = () => {
  return (
    <>
      <TopBar type='Page' title='' backgroundColor='#fff' />
      <div style={{ height: HEADER_HEIGHT }} />

      <LoginLayout>
        <Text fontSize='var(--font-size-xl)' fontWeight='700'>
          짠수니와 함께 챌린지를 시작해보세요!
        </Text>

        <EmailLogin />
        <Container
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='row'
          gap='10px'
          marginBottom='2rem'
        >
          <Text fontSize='14px'>아직 가입 안 했다면?</Text>
          <Link to={RouterPath.register}>
            <Text
              cursor='pointer'
              fontWeight='700'
              color='var(--color-green-01)'
            >
              회원가입하기
            </Text>
          </Link>
        </Container>
        <SocialLoginBar />
        <SocialLoginText>소셜로그인</SocialLoginText>
        <ButtonBox>
          <GoogleLogin />
          <NaverLogin />
          <KakaoLogin />
        </ButtonBox>
      </LoginLayout>
    </>
  );
};

export default LoginPage;

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  background-color: #fff;
`;

const ButtonBox = styled.div`
  display: flex;

  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 2rem auto;
  gap: 1rem;
`;

const SocialLoginBar = styled.hr`
  position: relative;
  bottom: -8px;
  display: block;
  margin: 0;
  width: 80%;
  height: 1px;
  background-color: #f1f3f5;
  border: none;
`;

const SocialLoginText = styled.span`
  padding: 0 1rem;
  margin-bottom: 16px;
  font-size: var(--font-size-sm);
  line-height: 16px;
  letter-spacing: -0.3px;
  color: #abb0b5;
  z-index: 1;
  background-color: #fff;
`;
