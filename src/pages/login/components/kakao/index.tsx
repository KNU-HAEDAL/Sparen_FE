import * as S from '../../styles';
import Logo from '@/assets/login/kakao.svg';
import { KAKAO_AUTH_URL } from '@/constants/URI';
import * as Base from '@/styles/baseStyles';

const KakaoLogin = () => {
  const handlerLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <Base.Container
      onClick={handlerLogin}
      bgColor='#fee500'
      width='3rem'
      height='3rem'
      radius='5px'
      textAlign='center'
      alignItems='center'
      justifyContent='center'
      cursor='pointer'
    >
      <Base.Img
        width='2rem'
        textAlign='center'
        src={Logo}
        alt='Social-symbol'
        // radius='1rem'
      />
    </Base.Container>
    // <S.SocialLoginButton
    //   borderColor='#fee500'
    //   bgColor='#fee500'
    //   onClick={handlerLogin}
    // >
    //   <Base.Img
    //     width='2rem'
    //     height='2rem'
    //     mgRight='2rem'
    //     mgLeft='1rem'
    //     textAlign='center'
    //     src={Logo}
    //     alt='Social-symbol'
    //   />
    // </S.SocialLoginButton>
  );
};

export default KakaoLogin;
