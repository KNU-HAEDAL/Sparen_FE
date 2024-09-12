import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import { joinChallenge } from '@/apis/challenge-detail/challenge.detail.api';
import { type Challenge } from '@/apis/challenge-detail/challenge.detail.response';

type Props = {
  challenge: Challenge;
  maxDifficulty: number;
};

const Challenge = ({ challenge, maxDifficulty }: Props) => {
  const [data, setData] = useState<number | null>(null);
  const navigate = useNavigate();

  const difficultyRate = (challenge.difficulty / maxDifficulty) * 100;

  const saveHandler = () => {
    joinChallenge(challenge.id)
      .then((res) => {
        setData(res);
        alert(`성공적으로 참여했습니다. 데이터: ${res}`);
        navigate('/');
      })
      .catch(() => {
        alert('이미 참여한 챌린지입니다.');
        navigate('/');
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
            {challenge.count}회/{challenge.period}일
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
      <S.Btn onClick={saveHandler}>참여하기</S.Btn>
      {data && null}
    </S.Outer>
  );
};

export default Challenge;
