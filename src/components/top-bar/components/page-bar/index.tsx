import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import PrevIcon from '@/assets/top-bar/Prev-Icon.svg';
import * as Base from '@/styles/baseStyles';

const PageBar = ({
  title,
  backgroundColor,
}: {
  title: string;
  backgroundColor: string;
}) => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate('/');
  };
  return (
    <>
      <S.PageBarLayout backgroundColor={backgroundColor}>
        <S.PrevButtonBox onClick={handlerNavigate}>
          <Base.Img
            width='0.8rem'
            height='1.45rem'
            src={PrevIcon}
            alt='Prev Icon'
          />
        </S.PrevButtonBox>
        <S.TitleBox>
          <Base.Text
            fontSize='var(--font-size-xl)'
            fontWeight='700'
            fontStyle='normal'
            lineHeight='normal'
          >
            {title}
          </Base.Text>
        </S.TitleBox>
        <S.EmptyBox>&nbsp;</S.EmptyBox>
      </S.PageBarLayout>
    </>
  );
};

export default PageBar;
