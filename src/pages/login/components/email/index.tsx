import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useNavigate, useSearchParams } from 'react-router-dom';
import { setLogin } from '@/apis/auth/auth.api';
import { RouterPath } from '@/routes/path';
// import { setLogin, useLogin } from '@/apis/auth/auth.api';
// import { useAuth } from '@/provider/auth';
// import { getDynamicPath, RouterPath } from '@/routes/path';
import { Button, Container, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

// test123@test.test / 123
const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [queryParams] = useSearchParams();
  // const { setAuthInfo } = useAuth();
  // const loginMutation = useLogin();
  const navigate = useNavigate();

  const handlerLoginOrigin = () => {
    try {
      const response = setLogin({ email, password });
      console.log('로그인 성공:', response);
      navigate(RouterPath.main);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  // // refresh token test용
  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     alert('이메일과 비밀번호를 입력해주세요.');
  //     return;
  //   }
  //   try {
  //     const data = await loginMutation.mutateAsync({ email, password });
  //     const accessToken = data.data.accessToken;
  //     const refreshToken = data.data.refreshToken;

  //     setAuthInfo({
  //       id: data.data.user.id, // 필요 시 수정
  //       nickname: data.data.user.nickname, // 필요 시 수정
  //       accessToken,
  //       refreshToken,
  //     });

  //     const redirectURL =
  //       queryParams.get('redirect') ?? `${window.location.origin}`;
  //     window.location.replace(redirectURL);
  //   } catch (error: unknown) {
  //     alert('로그인 실패: ' + (error as Error).message);
  //   }
  // };

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
        />
        <LoginInput
          type='password'
          id='password'
          placeholder='비밀번호를 입력해주세요.'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
          onClick={handlerLoginOrigin}
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
