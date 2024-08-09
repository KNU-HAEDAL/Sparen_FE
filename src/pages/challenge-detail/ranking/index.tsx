import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import UserItem from '../components/user-item/';
import * as S from './styles';
import { getChallengeRanking } from '@/apis/challenge-detail/challenge.ranking.api.js';

type RankingProps = {
  title: string;
  category: string;
};

type User = {
  ranking: number;
  user: {
    profileImageUrl: string;
    nickname: string;
    tierInfo: {
      tier: number;
    };
  };
  acquiredPoint: number;
};

const Ranking = ({ title, category }: RankingProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      getChallengeRanking({ id: 1, page })
        .then((response) => {
          setUsers((prevUsers) => [...prevUsers, ...response.data]);
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
        {users.map((user) => (
          <UserItem key={user.ranking} user={user} />
        ))}
        <div style={{ margin: '55px' }}></div>
        <div ref={ref}>로딩..</div>
      </S.RankingWrapper>
    </>
  );
};

export default Ranking;
