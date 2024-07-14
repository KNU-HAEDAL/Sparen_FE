import * as S from './styles';
import EcoIcon from '@/assets/main/Eco-Logo.svg';
import HealthIcon from '@/assets/main/Heart-Logo.svg';
import ShearIcon from '@/assets/main/Nanum-Logo.svg';
import VolunteerIcon from '@/assets/main/Volunteer-Logo.svg';
import * as Base from '@/styles/baseStyles';

const Category = () => {
  return (
    <>
      <Base.Text
        fontSize='var(--font-size-xl)'
        fontWeight='700'
        color='#000'
        mgTop='1rem'
        mgLeft='1rem'
        mgBottom='1rem'
      >
        챌린지 카테고리
      </Base.Text>
      <S.CategoryLayout>
        <S.CategoryButtonContainer>
          <S.CategoryButton>
            <S.CategoryButtonImage src={EcoIcon} />
          </S.CategoryButton>
          <Base.Text
            fontSize='var(--font-size-xl)'
            fontWeight='700'
            color='#5DB075'
          >
            에코
          </Base.Text>
        </S.CategoryButtonContainer>
        <S.CategoryButtonContainer>
          <S.CategoryButton>
            <S.CategoryButtonImage src={ShearIcon} />
          </S.CategoryButton>
          <Base.Text
            fontSize='var(--font-size-xl)'
            fontWeight='700'
            color='#FFB636'
          >
            나눔
          </Base.Text>
        </S.CategoryButtonContainer>
        <S.CategoryButtonContainer>
          <S.CategoryButton>
            <S.CategoryButtonImage src={VolunteerIcon} />
          </S.CategoryButton>
          <Base.Text
            fontSize='var(--font-size-xl)'
            fontWeight='700'
            color='#599BE8'
          >
            봉사
          </Base.Text>
        </S.CategoryButtonContainer>
        <S.CategoryButtonContainer>
          <S.CategoryButton>
            <S.CategoryButtonImage src={HealthIcon} />
          </S.CategoryButton>
          <Base.Text
            fontSize='var(--font-size-xl)'
            fontWeight='700'
            color='#FF0000'
          >
            건강
          </Base.Text>
        </S.CategoryButtonContainer>
      </S.CategoryLayout>
    </>
  );
};

export default Category;
