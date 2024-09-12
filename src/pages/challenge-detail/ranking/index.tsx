import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import UserItem from '../components/user-item/';
import * as S from './styles';
import { getChallengeRanking } from '@/apis/challenge-detail/challenge.ranking.api';
import { type ChallengeRankingData } from '@/apis/challenge-detail/challenge.ranking.response';

type RankingProps = {
  title: string;
  id: number;
  category: string;
};

const Ranking = ({ title, id, category }: RankingProps) => {
  const [dataList, setDataList] = useState<ChallengeRankingData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      getChallengeRanking({ id, page })
        .then((response) => {
          if (Array.isArray(response)) {
            setDataList((prevDataList) => [...prevDataList, ...response]);
          } // not iterable 오류 방지 위해 배열인지 검사하는 조건문 추가
          setPage((prevPage) => prevPage + 1);
        })
        .catch((error) => {
          console.error('Error fetching rankings:', error);
        });
    }
  }, [inView, id, page]);

  return (
    <>
      <S.Wrapper>
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
      <S.RankingWrapper>
        {dataList.map((item) => (
          <UserItem key={item.ranking} data={item} />
        ))}
        <div style={{ margin: '55px' }}></div>
        <div ref={ref}>로딩..</div>
      </S.RankingWrapper>
    </>
  );
};

export default Ranking;
