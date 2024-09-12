import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import { joinChallenge } from '@/apis/challenge-detail/challenge.detail.api';

type DifficultyProps = {
  props: {
    id: number;
    difficulty: number;
    onceExp: number;
    successExp: number;
    count: number;
    period: number;
  };
  maxDifficulty: number;
};

const Difficulty = ({ props, maxDifficulty }: DifficultyProps) => {
  const [data, setData] = useState<number | null>(null);
  const navigate = useNavigate();

  const saveHandler = () => {
    joinChallenge(4)
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
            <S.Bar></S.Bar>
            <S.Text>{props.difficulty}</S.Text>
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
            {props.count}회/{props.period}일
          </S.Text>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.BoldText>참여 경험치</S.BoldText>
          <S.ExpContent>{props.onceExp} 포인트</S.ExpContent>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.BoldText>완료 경험치</S.BoldText>
          <S.ExpContent>{props.successExp} 포인트</S.ExpContent>
        </S.RowWrapper>
      </S.Wrapper>
      <S.Btn onClick={saveHandler}>참여하기</S.Btn>
      {data && null}
    </S.Outer>
  );
};

export default Difficulty;
