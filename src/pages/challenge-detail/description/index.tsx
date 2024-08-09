import Difficulty from '../components/difficulty';
import * as S from './styles';

type DescriptionProps = {
  data: {
    id: 0;
    title: 'string';
    content: 'string';
    participantCount: 0;
    startDate: '2024-08-09';
    endDate: '2024-08-09';
    category: 'HEALTH';
    guide: 'string';
    maxDifficulty: 0;
    imageUrls: ['string'];
    challenges: [
      {
        id: 0;
        participantCount: 0;
        difficulty: 0;
        onceExp: 0;
        successExp: 0;
        dayType: 'DAY';
        dayCount: 0;
      },
    ];
  };
};

const Description = ({ data }: DescriptionProps) => {
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
