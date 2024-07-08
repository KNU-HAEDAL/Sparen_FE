import * as S from './styles';
import * as Base from '@/styles/baseStyles';

const ShortsContents = () => {
  return (
    <>
      <S.ShortsContentsBox>
        <Base.Text
          fontSize='var(--font-size-xxl)'
          fontWeight='700'
          color='#457A82'
        >
          길에 떨어진 쓰레기 줍기 챌린지
        </Base.Text>
        <Base.Text>
          길에 떨어진 쓰레기를 주워 우리 동네를 깨끗하게 만드는 챌린지입니다.
        </Base.Text>
        <Base.Text
          fontSize='var(--font-size-xs)'
          fontWeight='400'
          color='#797979'
        >
          사회적 책임감을 높이고 환경 보호 의식을 증진하기 위한 운동 중
          하나입니다. 이 챌린지는 일상에서 마주하는 길거리나 공원 등 공공장소에
          흩뿌려진 쓰레기를 주변을 깨끗하게 만들기 위해 자발적으로 줍는 것을
          촉구합니다.
        </Base.Text>
      </S.ShortsContentsBox>
    </>
  );
};

export default ShortsContents;
