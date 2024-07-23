import { useState } from 'react';

import * as S from '../../styles';
import { setLogin } from '@/apis/auth/auth.api';
import * as Base from '@/styles/baseStyles';

// test123@test.test / 123
const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  return (
    <>
      <Base.Container flexDirection='column' gap='2px' mgTop='2rem'>
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
      </Base.Container>
      <Base.Container
        textAlign='center'
        mgTop='1rem'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        mgRow='auto'
        mgColumn='2rem'
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
          <Base.Text textAlign='center' color='#fff' fontWeight='700'>
            로그인
          </Base.Text>
        </Base.button>
      </Base.Container>
    </>
  );
};

export default EmailLogin;
