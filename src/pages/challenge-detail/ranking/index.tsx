import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import UserItem from '../components/user-item/';
import * as S from './styles';
import { getChallengeRanking } from '@/apis/challenge-detail/challenge.ranking.api';
import { type ChallengeRankingData } from '@/apis/challenge-detail/challenge.ranking.response';

type RankingProps = {
  id: number;
};

const Ranking = ({ id }: RankingProps) => {
  const [dataList, setDataList] = useState<ChallengeRankingData[]>([
    {
      ranking: 1,
      acquiredPoint: 800,
      user: {
        id: 0,
        nickname: '뽀로로가 뽀롱뽀롱 노는 게 젤 좋아',
        profileImageUrl: 'string',
        tierInfo: {
          tier: '양반IV',
          totalExp: 0,
          currentExp: 0,
        },
      },
    },
    {
      ranking: 2,
      acquiredPoint: 800,
      user: {
        id: 0,
        nickname: '하츄핑',
        profileImageUrl: 'string',
        tierInfo: {
          tier: '평민I',
          totalExp: 0,
          currentExp: 0,
        },
      },
    },
    {
      ranking: 3,
      acquiredPoint: 800,
      user: {
        id: 0,
        nickname: '파산핑',
        profileImageUrl: 'string',
        tierInfo: {
          tier: '상민II',
          totalExp: 0,
          currentExp: 0,
        },
      },
    },
    {
      ranking: 4,
      acquiredPoint: 800,
      user: {
        id: 0,
        nickname: '유재석',
        profileImageUrl: 'string',
        tierInfo: {
          tier: '상민III',
          totalExp: 0,
          currentExp: 0,
        },
      },
    },
    {
      ranking: 5,
      acquiredPoint: 800,
      user: {
        id: 0,
        nickname: '조셉',
        profileImageUrl: 'string',
        tierInfo: {
          tier: '노비IV',
          totalExp: 0,
          currentExp: 0,
        },
      },
    },
  ]);
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
    <S.RankingWrapper>
      {dataList.map((item, index) => (
        <div key={item.ranking}>
          <UserItem data={item} />
          {index < dataList.length - 1 && <S.Line />}
          {/* 마지막 요소 뒤에는 Line을 넣지 않음 */}
        </div>
      ))}
      <div ref={ref}>로딩..</div>
    </S.RankingWrapper>
  );
};

export default Ranking;
