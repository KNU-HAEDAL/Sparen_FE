import * as S from './styles';
import ChallengeImg from '@/assets/challenge/Challenge-Img.png';
import * as Base from '@/styles/baseStyles';

const ShortsImage = () => {
  return (
    <>
      <S.ShortsImageBox>
        <Base.Img width='100%' src={ChallengeImg} />
      </S.ShortsImageBox>
    </>
  );
};

export default ShortsImage;
