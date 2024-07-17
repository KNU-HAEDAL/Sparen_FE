import { useNavigate } from 'react-router-dom';

import EmailLogin from './components/email';
import GoogleLogin from './components/google';
import NaverLogin from './components/naver';
import * as S from './styles';
import TopBar from '@/components/top-bar/TopBar';
import KakaoLogin from '@/pages/login/components/kakao';
import * as Base from '@/styles/baseStyles';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/auth/register');
  };
  return (
    <>
      <TopBar type='Page' title='' backgroundColor='#fff' />
      <S.LoginLayout>
        <Base.Text fontSize='var(--font-size-xl)' fontWeight='700'>
          짠수니와 함께 챌린지를 시작해보세요!
        </Base.Text>

        <EmailLogin />
        <Base.Container
          alignItems='center'
          flexDirection='row'
          gap='10px'
          mgBottom='2rem'
        >
          <Base.Text fontSize='14px'>아직 가입안했다면?</Base.Text>
          <Base.Text
            onClick={handleRegister}
            cursor='pointer'
            fontWeight='700'
            color='var(--color-green-01)'
          >
            회원가입하기
          </Base.Text>
        </Base.Container>
        <S.socialLoginBar />
        <S.socialLoginText>소셜로그인</S.socialLoginText>
        <S.ButtonBox>
          <GoogleLogin />
          <NaverLogin />
          <KakaoLogin />
        </S.ButtonBox>
      </S.LoginLayout>
    </>
  );
};

export default LoginPage;
