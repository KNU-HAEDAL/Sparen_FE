import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { getChallengeRanking } from '../../../apis/detail-challenge/ranking.challenge.api.js';
import UserItem from '../components/userItem/UserItem';
import * as Styles from './styles';

const Ranking = ({ title, category }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      getChallengeRanking(1, page).then((response) => {
        setUsers([...users, ...response.data]);
        setPage((page) => page + 1);
      });
    }
  }, [inView]);

  return (
    <>
      <Styles.Wrapper>
        <Styles.Category>{category}</Styles.Category>
        <Styles.Title>{title}</Styles.Title>
      </Styles.Wrapper>
      <Styles.RankingWrapper>
        {users.map((item) => (
          <UserItem key={item.ranking} props={item} />
        ))}
        <div style={{ margin: '55px' }}></div>
        <div ref={ref}>로딩..</div>
      </Styles.RankingWrapper>
    </>
  );
};

export default Ranking;
