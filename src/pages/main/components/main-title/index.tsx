import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import TitleLogo from '@/assets/main/ZZAN-Default.png';
import * as Base from '@/styles/baseStyles';

const MainTitle = () => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <S.TitleLayout onClick={handlerNavigate}>
        <S.LogoBox>
          <Base.Img
            width='2rem'
            color='var(--color-green-01)'
            src={TitleLogo}
            alt='ZZAN Logo'
          />
        </S.LogoBox>
        <Base.Text fontSize='1.75rem' color='var(--color-green-01)'>
          ZZANSUNI
        </Base.Text>
      </S.TitleLayout>
    </>
  );
};

export default MainTitle;
