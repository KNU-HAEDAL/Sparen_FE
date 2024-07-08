import { useState, useEffect, useCallback } from 'react';

import HighRank from '../high';
import UserRank from '../user';
import * as S from './styles';
import { getUserRanking } from '@/apis/rank';
import * as Base from '@/styles/baseStyles';

const AllRank = () => {
  const [userRanks, setUserRanks] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAllRank = useCallback(async () => {
    try {
      const response = await getUserRanking(1, 10);
      const data = response.data;
      setUserRanks(data.data);
      setLoading(false);
      console.log('fetchAllRank data: ', data);
      // console.log(userRanks);
    } catch (error) {
      console.error('fetchAllRank error: ', error);
    }
  }, []);

  useEffect(() => {
    fetchAllRank();
  }, [fetchAllRank]);

  return (
    <>
      <S.AllRankLayout>
        <Base.Text
          fontSize='1.25rem'
          fontWeight='700'
          color='var(--color-green-05)'
        >
          전체 순위
        </Base.Text>
        <S.HighRankBox>
          {userRanks.slice(0, 3).map((user, index) => (
            <HighRank key={index} grade={(index + 1).toString()} user={user} />
          ))}
        </S.HighRankBox>
        <S.AllRankBox>
          {userRanks.slice(3).map((user, index) => (
            <UserRank key={index} index={index} user={user} />
          ))}
        </S.AllRankBox>
      </S.AllRankLayout>
    </>
  );
};

export default AllRank;
