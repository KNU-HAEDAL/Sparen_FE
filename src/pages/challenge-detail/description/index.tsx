import { ReactNode } from 'react';

import { type ChallengeDetailData } from '..';

import Difficulty from '../components/difficulty';
import * as S from './styles';

type DescriptionProps = {
  data: ChallengeDetailData;
};

const Description = ({ data }: DescriptionProps): ReactNode => {
  const challenges = data.challenges;

  return (
    <S.Wrapper>
      <S.Category>{data.category}</S.Category>
      <S.Title>{data.title}</S.Title>
      <S.Text>{data.content}</S.Text>
      <div style={{ margin: '5px' }} />
      <S.ContentWrapper>
        <S.BoldText>시작일</S.BoldText>
        <S.Text>{data.startDate}</S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.BoldText>종료일</S.BoldText>
        <S.Text>{data.endDate}</S.Text>
      </S.ContentWrapper>
      <S.Line />
      <S.BoldText>참여방법</S.BoldText>
      <S.Text>{data.guide}</S.Text>
      <S.RowList>
        <div style={{ margin: '5px' }} />
        {challenges.map((item) => (
          <Difficulty key={item.id} props={item} max={data.maxDifficulty} />
        ))}
        <div style={{ margin: '5px' }} />
      </S.RowList>
    </S.Wrapper>
  );
};

export default Description;
