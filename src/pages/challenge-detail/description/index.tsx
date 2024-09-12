import { ReactNode } from 'react';

import Challenge from '../components/challenge';
import * as S from './styles';
import { type ChallengeDetailData } from '@/apis/challenge-detail/challenge.detail.response';

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
        <S.BoldText>챌린지 신청 가능 기간</S.BoldText>
        <S.Text>
          {data.startDate} ~ {data.endDate}
        </S.Text>
      </S.ContentWrapper>
      <div style={{ margin: '5px' }} />
      <S.ContentWrapper>
        <S.BoldText>참여방법</S.BoldText>
        <S.Text>{data.guide}</S.Text>
      </S.ContentWrapper>
      <S.Line />
      <S.RowList>
        {challenges.map((item) => (
          <Challenge
            key={item.id}
            challenge={item}
            maxDifficulty={data.maxDifficulty}
          />
        ))}
      </S.RowList>
    </S.Wrapper>
  );
};

export default Description;
