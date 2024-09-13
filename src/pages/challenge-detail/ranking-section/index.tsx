import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import UserItem from '../components/user-item/';
import * as S from './styles';
import { getChallengeRanking } from '@/apis/challenge-detail/challenge.ranking.api';
import { type ChallengeRankingData } from '@/apis/challenge-detail/challenge.ranking.response';

type RankingSectionProps = {
  id: number;
};

export const RankingSection = ({ id }: RankingSectionProps) => {
  const DATA_SIZE = 10;
  const [rankingList, setRankingList] = useState<ChallengeRankingData[]>([
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
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true); // 데이터 없을 때 호출 방지

  useEffect(() => {
    if (inView && hasMore && !isFetching) {
      setIsFetching(true);
      getChallengeRanking({ id, page, size: DATA_SIZE })
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            // 데이터가 있을 때
            setRankingList((prevRankingList) => [...prevRankingList, ...data]);
            setPage((prevPage) => prevPage + 1);
          } else {
            // 데이터가 없을 때
            setHasMore(false);
            console.log('더 이상 데이터가 없습니다.');
          }
        })
        .catch((error) => {
          console.error('Error fetching rankings:', error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [inView, isFetching, hasMore, id, page]);

  return (
    <S.RankingWrapper>
      {rankingList.length > 0 ? (
        // 랭킹 있을 때
        <>
          {rankingList.map((item, index) => (
            <div key={item.ranking}>
              <UserItem data={item} />
              {index < rankingList.length - 1 && <S.Line />}
              {/* 마지막 요소 뒤에는 Line을 넣지 않음 */}
            </div>
          ))}
          <S.Text ref={ref}>{isFetching ? '로딩 중...' : ' '}</S.Text>
        </>
      ) : (
        // 랭킹 없을 때
        <S.Text>
          아직 챌린지를 성공한 유저가 없습니다. <br />
          챌린지에 참여해{' '}
          <S.Text fontWeight='600' color={`var(--color-green-01)`}>
            첫 번째 완료자
          </S.Text>
          가 되어보세요!
        </S.Text>
      )}
    </S.RankingWrapper>
  );
};
