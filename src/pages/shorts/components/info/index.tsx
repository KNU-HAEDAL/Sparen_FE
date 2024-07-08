import * as S from './styles';
import StartIcon from '@/assets/challenge/Start-Icon.svg';
import EcoIcon from '@/assets/main/Eco-Logo.svg';
import * as Base from '@/styles/baseStyles';

const ShortsInfo = () => {
  return (
    <>
      <S.ShortsInfoLayout>
        <S.ShortsInfoIconBox>
          <Base.Img width='1.5rem' height='1.5rem' src={EcoIcon} />
        </S.ShortsInfoIconBox>
        <S.ShortsInfoTextBox>
          <Base.Text
            color='#000'
            fontSize='1.125rem'
            fontStyle='normal'
            fontWeight='700'
            lineHeight='normal'
          >
            누적 참여자 :&nbsp;
          </Base.Text>
          <Base.Text>125명</Base.Text>
        </S.ShortsInfoTextBox>
      </S.ShortsInfoLayout>
      <S.ShortsStartBox>
        <Base.Img width='1rem' height='1.25rem' src={StartIcon} />
      </S.ShortsStartBox>
    </>
  );
};

export default ShortsInfo;
