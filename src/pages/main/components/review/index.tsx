import * as S from './styles';
import StarIcon from '@/assets/main/Star-Icon.svg';
import ProfileIcon from '@/assets/main/ZZAN-Profile.png';
import * as Base from '@/styles/baseStyles';

const Review = () => {
  return (
    <>
      <Base.Text fontSize='1.25rem' color='#000' mgLeft='1rem' mgBottom='1rem'>
        최근 챌린지 리뷰
      </Base.Text>
      <S.ReviewLayout>
        <S.ChallengeLayout>
          <Base.Text
            fontSize='1.25rem'
            mgTop='0.5rem'
            mgBottom='0.5rem'
            mgLeft='0.5rem'
          >
            쓰레기 줍기 챌린지
          </Base.Text>
          <S.StarContainer>
            <S.StarImg src={StarIcon} />
            <S.StarImg src={StarIcon} />
            <S.StarImg src={StarIcon} />
          </S.StarContainer>
          <S.ReviewProfileContainer>
            <Base.Img src={ProfileIcon} />
            <Base.Text
              fontWeight='700'
              fontSize='1rem'
              color='#fff'
              textAlign='left'
              fontStyle='normal'
              lineHeight='normal'
            >
              짠돌이
            </Base.Text>
          </S.ReviewProfileContainer>
          <S.ReviewContents>
            <Base.Text
              fontWeight='700'
              fontSize='1rem'
              color='#fff'
              textAlign='left'
              fontStyle='normal'
              lineHeight='normal'
            >
              세상이 깨끗해지는 기분이에요! 포인트도 많이줘서 등급 올리기 ...
            </Base.Text>
          </S.ReviewContents>
        </S.ChallengeLayout>
      </S.ReviewLayout>
    </>
  );
};

export default Review;
