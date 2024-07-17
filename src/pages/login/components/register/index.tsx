import { useNavigate } from 'react-router-dom';

import * as S from '../../styles';
import TopBar from '@/components/top-bar/TopBar';
import * as Base from '@/styles/baseStyles';

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/auth');
  };
  return (
    <>
      <TopBar type='Page' title='' backgroundColor='#fff' />
      <S.LoginLayout>
        <Base.Text fontSize='var(--font-size-xl)' fontWeight='700'>
          짠수니에 오신것을 환영합니다!
        </Base.Text>
        <Base.Container flexDirection='column' gap='2px' mgTop='2rem'>
          <S.LoginInput type='text' placeholder='이메일을 입력해주세요.' />
          <S.LoginInput
            type='password'
            placeholder='비밀번호를 입력해주세요.'
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
          >
            <Base.Text textAlign='center' color='#fff' fontWeight='700'>
              회원가입
            </Base.Text>
          </Base.button>
        </Base.Container>
        <Base.Container alignItems='center' flexDirection='row' gap='10px'>
          <Base.Text fontSize='14px'>이미 가입했다면?</Base.Text>
          <Base.Text
            onClick={handleLogin}
            cursor='pointer'
            fontWeight='700'
            color='var(--color-green-01)'
          >
            로그인하기
          </Base.Text>
        </Base.Container>
      </S.LoginLayout>
    </>
  );
};

export default RegisterPage;
