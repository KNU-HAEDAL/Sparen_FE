import Logo from '@/assets/login/kakao.svg';
import { KAKAO_AUTH_URL } from '@/constants/URI.ts';
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
      />
    </Base.Container>
  );
};

export default KakaoLogin;
