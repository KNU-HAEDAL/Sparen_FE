import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { useLogin } from '@/apis/auth/auth.api';
import { RouterPath } from '@/routes/path';
import { Button, Container, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

// test123@test.test / 123
const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }
    try {
      const response = await loginMutation.mutateAsync({ email, password });

      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // 리다이렉트 페이지 설정
      let redirectUrl =
        new URLSearchParams(location.search).get('redirect') || RouterPath.main;
      // redirectUrl이 상대경로일 경우 앞에 '/' 추가하여 절대경로로
      if (!redirectUrl.startsWith('/')) {
        redirectUrl = `/${redirectUrl}`;
      }
      navigate(redirectUrl);
    } catch (error) {
      // axios 통신 에러인 경우
      if (error instanceof AxiosError && error.response) {
        alert(error.response.data?.message); // 에러 응답 메시지 출력
      }
      // 이외의 에러
      else {
        alert('알 수 없는 오류가 발생했습니다.' + (error as Error).message);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <>
      <Container
        display='flex'
        flexDirection='column'
        gap='2px'
        marginTop='2rem'
        alignItems='center'
      >
        <LoginInput
          type='text'
          id='email'
          placeholder='이메일을 입력해주세요.'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          onKeyDown={handleKeyPress}
        />
        <LoginInput
          type='password'
          id='password'
          placeholder='비밀번호를 입력해주세요.'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          onKeyDown={handleKeyPress}
        />
      </Container>
      <Container
        display='flex'
        textAlign='center'
        marginTop='1rem'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        marginX='auto'
        marginY='2rem'
      >
        <Button
          backgroundColor='var(--color-green-01)'
          borderRadius='0.5rem'
          width='15rem'
          height='2.5rem'
          paddingX='0.1rem'
          onClick={handleLogin}
        >
          <Text textAlign='center' color='#fff' fontWeight='700'>
            로그인
          </Text>
        </Button>
      </Container>
    </>
  );
};

export default EmailLogin;

const LoginInput = styled.input`
  width: 15rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #d2d2d2;
  padding: 0 0.5rem;

  margin-bottom: 1rem;
`;
