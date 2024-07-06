import * as Styles from './style';
import Logo from '@/assets/login/kakao.svg';
import { KAKAO_AUTH_URL } from '@/constants/uri';

const LoginPage = () => {
  const handlerKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <Styles.ButtonSection>
        <Styles.KaKaoLoginButton onClick={handlerKakaoLogin}>
          <Styles.KaKaoLoginLogo src={Logo} alt='kakao-symbol' />
          <Styles.LoginText>카카오 로그인</Styles.LoginText>
        </Styles.KaKaoLoginButton>
      </Styles.ButtonSection>
    </>
  );
};

export default LoginPage;
