import * as S from './styles';

interface Props {
  id: number;
}

export const ReviewSection = ({ id }: Props) => {
  return (
    <S.Wrapper>
      {id}
      <S.ScoreContainer>
        {/* <div>{score}</div>
        <div>star</div>
        <div>모두 보기</div> */}
      </S.ScoreContainer>
    </S.Wrapper>
  );
};
