import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from 'antd';

import { setRegister } from '@/apis/auth/auth.api.ts';
import TopBar from '@/components/features/layout/top-bar';
import * as Base from '@/styles/baseStyles.ts';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    nickname: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleRegister = async () => {
    const { email, password, nickname } = formValues;
    try {
      const response = await setRegister({ email, password, nickname });
      console.log('회원가입 성공:', response);
      alert('회원가입이 완료되었습니다.');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  return (
    <>
      <TopBar type='Page' title='' backgroundColor='#fff' />
      <LoginLayout>
        <Text fontSize='var(--font-size-xl)' fontWeight='700'>
          짠수니에 오신것을 환영합니다!
        </Text>
        <Base.Container flexDirection='column' gap='2px' mgTop='2rem'>
          <Input
            type='text'
            name='email'
            placeholder='이메일을 입력해주세요.'
            onChange={handleInputChange}
            value={formValues.email}
          />
          <Input
            type='password'
            name='password'
            placeholder='비밀번호를 입력해주세요.'
            onChange={handleInputChange}
            value={formValues.password}
          />
          <Input
            type='text'
            name='nickname'
            placeholder='사용할 닉네임을 입력해주세요.'
            onChange={handleInputChange}
            value={formValues.nickname}
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
            onClick={handleRegister}
          >
            <Text textAlign='center' color='#fff' fontWeight='700'>
              회원가입
            </Text>
          </Base.button>
        </Base.Container>
        <Base.Container alignItems='center' flexDirection='row' gap='10px'>
          <Text fontSize='14px'>이미 가입했다면?</Text>
          <Text
            onClick={handleLogin}
            cursor='pointer'
            fontWeight='700'
            color='var(--color-green-01)'
          >
            로그인하기
          </Text>
        </Base.Container>
      </LoginLayout>
    </>
  );
};

export default RegisterPage;

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  background-color: #fff;
  /* height: 100vh; */
`;
