import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { RankingItem } from '../components/ranking-item/';
import * as S from './styles';
import { getChallengeRanking } from '@/apis/challenge-detail/challenge.ranking.api';
import { type ChallengeRankingData } from '@/apis/challenge-detail/challenge.ranking.response';
import * as Base from '@/styles/baseStyles';

type RankingSectionProps = {
  id: number;
};

export const RankingSection = ({ id }: RankingSectionProps) => {
  const DATA_SIZE = 10;
  const [rankingList, setRankingList] = useState<ChallengeRankingData[]>([]);
  const [page, setPage] = useState<number>(0); // 0부터 시작
  const { ref, inView } = useInView({ threshold: 0.8 });
  const [isFetching, setIsFetching] = useState<boolean>(false); // 로딩 UI 렌더링 여부
  const [hasNext, setHasNext] = useState<boolean>(true); // 데이터 없을 때 호출 방지

  useEffect(() => {
    if (inView && hasNext && !isFetching) {
      setIsFetching(true);

      getChallengeRanking({ challengeGroupId: id, page, size: DATA_SIZE })
        .then((res) => {
          // 데이터가 있을 때
          if (Array.isArray(res.data) && res.data.length > 0) {
            setRankingList((prevRankingList) => [
              ...prevRankingList,
              ...res.data,
            ]);
            // console.log(`랭킹 리스트: `, rankingList); // test
            setHasNext(page < res.totalPage);
            setPage((prevPage) => prevPage + 1);
          }
          // 데이터가 더 이상 없을 때
          else {
            setHasNext(false);
            console.log('리뷰가 더 이상 없습니다.');
          }
        })
        .catch((error) => {
          console.error('Error fetching rankings:', error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [inView, hasNext, isFetching, id, page]);

  return (
    <S.RankingWrapper>
      {rankingList.length > 0 ? (
        // 랭킹 있을 때
        <>
          {rankingList.map((item, index) => (
            <div key={item.ranking}>
              <RankingItem item={item} />
              {index < rankingList.length - 1 && (
                <Base.HorizontalLine marginY={8} />
              )}
              {/* 마지막 요소 뒤에는 Line을 넣지 않음 */}
            </div>
          ))}
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
      <S.Text ref={ref}>{isFetching ? '로딩 중...' : ' '}</S.Text>
    </S.RankingWrapper>
  );
};
