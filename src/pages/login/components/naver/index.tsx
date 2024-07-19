import Logo from '@/assets/login/naver.png';
import { KAKAO_AUTH_URL } from '@/constants/URI.ts';
import * as Base from '@/styles/baseStyles';

const NaverLogin = () => {
  const handlerLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <Base.Container cursor='pointer'>
      <Base.Img
        width='3rem'
        textAlign='center'
        src={Logo}
        alt='Social-symbol'
      />
    </Base.Container>
  );
};

export default NaverLogin;
