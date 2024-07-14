import { useState, useEffect } from 'react';

import HighRank from '../high';
import UserRank from '../user';
import * as S from './styles';
import { getUserRanking } from '@/apis/rank/rank.api';
import { PageData, UserRankingResponse } from '@/apis/rank/rank.response';
import { User } from '@/interface/userInterface';
import * as Base from '@/styles/baseStyles';

const AllRank = () => {
  const [userRanks, setUserRanks] = useState<User[]>([]);
  const [, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserRanking = async () => {
      const data: UserRankingResponse = await getUserRanking(1, 10);
      const pageData = data.data;

      const allUserData: User[] = pageData.flatMap((page: PageData) =>
        page.data.map((user) => ({
          ...user,
          currentExp: Math.floor(Math.random() * 1000), // Example logic for currentExp
          tierInfo: user.tierInfo.toString(), // Convert tierInfo to string
        }))
      );
      setUserRanks(allUserData);
      setLoading(false);
      console.log(data);
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
