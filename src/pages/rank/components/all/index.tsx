import { useState, useEffect } from 'react';

import HighRank from '../high';
import UserRank from '../user';
import * as S from './styles';
import { getUserRanking } from '@/apis/rank/rank.api';
import { UserRankingResponse } from '@/apis/rank/rank.response';
import { UserData } from '@/interface/apis/user';
import { User } from '@/interface/userInterface';
import * as Base from '@/styles/baseStyles';

const AllRank = () => {
  const [userRanks, setUserRanks] = useState<User[]>([]);

  const [, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserRanking = async () => {
      const response: UserRankingResponse = await getUserRanking(1, 10);
      const pageData = response.data;
      const allUserData: User[] = pageData.data.map((user: UserData) => ({
        ...user,
        currentExp: Math.floor(Math.random() * 1000),
        tierInfo: user.tierInfo.tier,
      }));
      setUserRanks(allUserData);
      setLoading(false);
      // console.log('rank data: ', allUserData);
    };

    fetchUserRanking();
  }, []);

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
            <HighRank key={index} grade={index + 1} user={user} />
          ))}
        </S.HighRankBox>
        <S.AllRankBox>
          {userRanks.slice(3).map((user, index) => (
            <UserRank key={index} index={index + 3} user={user} />
          ))}
        </S.AllRankBox>
      </S.AllRankLayout>
    </>
  );
};

export default AllRank;
