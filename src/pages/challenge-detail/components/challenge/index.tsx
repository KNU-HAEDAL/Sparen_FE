import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import { joinChallenge } from '@/apis/challenge-detail/challenge.detail.api';
import { type Challenge } from '@/apis/challenge-detail/challenge.detail.response';
import { RouterPath } from '@/routes/path';

type Props = {
  challenge: Challenge;
  maxDifficulty: number;
};

const Challenge = ({ challenge, maxDifficulty }: Props) => {
  const difficultyRate = (challenge.difficulty / maxDifficulty) * 100;
  const navigate = useNavigate();

  const clickJoinChallenge = () => {
    joinChallenge(challenge.id)
      .then((res) => {
        alert(res.message);
      })
      .catch((error) => {
        // API에서 받은 오류 객체일 경우
        if (error.result === 'FAIL') {
          if (error.errorCode === 'UNAUTHORIZED') {
            alert('로그인 후 시도해주세요.');
            navigate(RouterPath.auth);
          } else {
            alert(error.message || '다시 시도해주세요.');
          }
        }
        // 예상치 못한 오류 처리
        else {
          alert('다시 시도해주세요.');
        }
      });
  };

  return (
    <S.Outer>
      <S.RowWrapper>
        <S.Wrapper>
          <S.BoldText>난이도</S.BoldText>
          <S.SubText>최대 난이도</S.SubText>
        </S.Wrapper>
        <S.Wrapper>
          <S.RowWrapper>
            <S.Bar width={difficultyRate}></S.Bar>
            <S.Text>{challenge.difficulty}</S.Text>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.MaxBar></S.MaxBar>
            <S.SubText>{maxDifficulty}</S.SubText>
          </S.RowWrapper>
        </S.Wrapper>
      </S.RowWrapper>
      <S.Wrapper>
        <S.RowWrapper>
          <S.BoldText>참여 횟수 및 기간</S.BoldText>
          <S.Text>
            {challenge.count}회 / {challenge.period}일
          </S.Text>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.BoldText>참여 경험치</S.BoldText>
          <S.ExpContent>{challenge.onceExp} 포인트</S.ExpContent>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.BoldText>완료 경험치</S.BoldText>
          <S.ExpContent>{challenge.successExp} 포인트</S.ExpContent>
        </S.RowWrapper>
      </S.Wrapper>
      <S.Btn onClick={clickJoinChallenge}>참여하기</S.Btn>
    </S.Outer>
  );
};

export default Challenge;
