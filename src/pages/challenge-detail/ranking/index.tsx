import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import UserItem from '../components/user-item/';
import * as S from './styles';
import { getChallengeRanking } from '@/apis/challenge-detail/challenge.ranking.api';
import { ChallengeRankingData } from '@/apis/challenge-detail/challenge.ranking.response';

type RankingProps = {
  title: string;
  category: string;
};

const Ranking = ({ title, category }: RankingProps) => {
  const [users, setUsers] = useState<ChallengeRankingData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      getChallengeRanking({ id: 1, page })
        .then((response) => {
          setUsers((prevUsers) => [...prevUsers, ...response]);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((error) => {
          console.error('Error fetching rankings:', error);
        });
    }
  }, [inView, page]);

  return (
    <>
      <S.Wrapper>
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
      <S.RankingWrapper>
        {users.map((data) => (
          <UserItem key={data.ranking} user={data.user} />
        ))}
        <div style={{ margin: '55px' }}></div>
        <div ref={ref}>로딩..</div>
      </S.RankingWrapper>
    </>
  );
};

export default Ranking;
