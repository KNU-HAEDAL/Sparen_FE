// import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import * as Base from '@/styles/baseStyles';

const ChallengeRecord = () => {
  // const navigate = useNavigate();
  const handlerPage = () => {
    // navigate('/challenge/record-list');
    console.log('click');
  };
  return (
    <>
      <Base.Text mgLeft='1rem' mgTop='2rem'>
        내기록
      </Base.Text>
      <S.FinishChallengeBtn>
        <S.FinishChallengeText onClick={handlerPage}>
          완료한 챌린지 목록
        </S.FinishChallengeText>
      </S.FinishChallengeBtn>
    </>
  );
};

export default ChallengeRecord;
