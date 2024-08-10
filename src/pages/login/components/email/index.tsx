import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from '../../styles';
import { setLogin } from '@/apis/auth/auth.api';
import { RouterPath } from '@/routes/path';
import * as Base from '@/styles/baseStyles';
import { Container, Text } from '@chakra-ui/react';

// test123@test.test / 123
const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlerLogin = () => {
    try {
      const response = setLogin({ email, password });
      console.log('로그인 성공:', response);
      navigate(RouterPath.root);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  return (
    <>
      <Container
        display='flex'
        flexDirection='column'
        gap='2px'
        marginTop='2rem'
      >
        <S.LoginInput
          type='text'
          id='email'
          placeholder='이메일을 입력해주세요.'
          onChange={handlerEmail}
          value={email}
        />
        <S.LoginInput
          type='password'
          id='password'
          placeholder='비밀번호를 입력해주세요.'
          onChange={handlerPassword}
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
        <Base.button
          bgColor='var(--color-green-01)'
          radius='0.5rem'
          width='15rem'
          height='2.5rem'
          pdColumn='0'
          pdRow='0.5rem'
          onClick={handlerLogin}
        >
          <Text textAlign='center' color='#fff' fontWeight='700'>
            로그인
          </Text>
        </Base.button>
      </Container>
    </>
  );
};

export default EmailLogin;
