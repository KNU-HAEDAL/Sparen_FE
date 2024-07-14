import StrickCalendar from '../strick-calendar';
import * as S from './styles';
import DownArrow from '@/assets/main/Down-Arrow.svg';
import * as Base from '@/styles/baseStyles';

const Strick = () => {
  const currentDay = 3;
  return (
    <>
      <Base.Text
        fontSize='var(--font-size-xl)'
        fontWeight='700'
        color='#000'
        mgLeft='1rem'
        mgBottom='1rem'
      >
        스트릭
      </Base.Text>
      <S.StrickLayout>
        <S.StrickInfo>
          <Base.Text fontSize='var(--font-size-xl)' fontWeight='700'>
            현재 {currentDay}일
          </Base.Text>
          <S.StrickMonthBox>
            <Base.Text fontSize='1rem' fontWeight='1.25rem'>
              6월
            </Base.Text>
            <Base.Img
              width='0.78rem'
              height='0.45rem'
              color='#000'
              src={DownArrow}
              alt='Down Arrow'
            />
          </S.StrickMonthBox>
        </S.StrickInfo>
        <StrickCalendar />
      </S.StrickLayout>
    </>
  );
};

export default Strick;
