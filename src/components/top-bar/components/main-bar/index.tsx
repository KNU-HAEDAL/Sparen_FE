import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import Logo from '@/assets/top-bar/ZZAN-Default.png';
import * as Base from '@/styles/baseStyles';

const MainBar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/auth');
  };

  return (
    <>
      <S.PageBarLayout>
        <Base.Container gap='1rem' alignItems='center'>
          <S.LogoBox>
            <Base.Img width='2rem' src={Logo} alt='ZZAN Logo' />
          </S.LogoBox>
          <Base.Text
            fontSize='var(--font-size-xxl)'
            fontWeight='bold'
            color='var(--color-green-01)'
          >
            ZZANSUNI
          </Base.Text>
        </Base.Container>
        <Base.button
          radius='0.5rem'
          border='1.2px solid var(--color-green-01)'
          width='3.5rem'
          pdRow='5px'
          textAlign='center'
          alignItems='center'
          onClick={handleLogin}
        >
          <Base.Text
            fontSize='var(--font-size-md)'
            fontWeight='bold'
            color='var(--color-green-01)'
          >
            로그인
          </Base.Text>
        </Base.button>
      </S.PageBarLayout>
    </>
  );
};

export default MainBar;
