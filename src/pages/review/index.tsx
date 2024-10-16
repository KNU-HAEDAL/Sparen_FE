import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ReviewItem from './components/review-item';
import ReviewRating from './components/review-rating';
import { getReview } from '@/apis/review/review.api';
import type { ReviewData } from '@/apis/review/review.response';
import EmptyState from '@/components/common/empty-state';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import * as Base from '@/styles/baseStyles';
import { Text } from '@chakra-ui/react';
// import { formatCategory } from '@/utils/formatters';
import styled from '@emotion/styled';

const Review = () => {
  // 쿼리 파라미터 추출
  const searchParams = new URLSearchParams(location.search);
  const challengeGroupId = Number(searchParams.get('id'));
  const title = searchParams.get('title') || '';

  const DATA_SIZE = 10; // 한번에 가져올 리뷰 개수
  const [reviewList, setReviewList] = useState<ReviewData[]>([]);
  const [page, setPage] = useState<number>(0); // 0부터 시작
  const { ref, inView } = useInView({ threshold: 0.8 });
  const [isFetching, setIsFetching] = useState<boolean>(false); // 로딩 UI 렌더링 여부
  const [hasNext, setHasNext] = useState<boolean>(true); // 데이터 없을 때 호출 방지

  useEffect(() => {
    if (inView && hasNext && !isFetching) {
      setIsFetching(true);

      getReview({ challengeGroupId, page, size: DATA_SIZE })
        .then((res) => {
          // 데이터가 있을 때
          if (Array.isArray(res.data) && res.data.length > 0) {
            setReviewList((prevReviewList) => [...prevReviewList, ...res.data]);
            // console.log(`리뷰 리스트: `, reviewList); // test
            setHasNext(res.hasNext);
            setPage((prevPage) => prevPage + 1);
          }
          // 데이터가 더 이상 없을 때
          else {
            setHasNext(false);
            console.log('리뷰가 더 이상 없습니다.');
          }
        })
        .catch((error) => {
          console.error('Error fetching reviews:', error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [inView, hasNext, isFetching, challengeGroupId, page]);

  return (
    <>
      <TopBar title={title} type='Page' backgroundColor='#fff' />
      <Wrapper>
        {reviewList.length > 0 ? (
          <>
            {/* 리뷰 있을 때 */}
            <ReviewRating challengeGroupId={challengeGroupId} />
            <ReviewList>
              {reviewList.map((review, index) => (
                <div key={index}>
                  <ReviewItem item={review} />
                  {index < reviewList.length - 1 && (
                    <Base.HorizontalLine marginY={16} />
                  )}
                  {/* 마지막 요소 뒤에는 Line을 넣지 않음 */}
                </div>
              ))}
            </ReviewList>
          </>
        ) : (
          // 리뷰 없을 때
          <EmptyState>
            <p>아직 리뷰가 없습니다.</p>
            <p>
              챌린지를 완료하고{' '}
              <span className='highlight'>첫 번째 리뷰어</span>가 되어보세요!
            </p>
          </EmptyState>
        )}
        {/* <div ref={ref}>{isFetching ? <Spinner /> : <></>}</div> */}
        <Text fontSize='var(--font-size-md)' ref={ref}>
          {isFetching ? '로딩 중...' : ' '}
        </Text>
      </Wrapper>
    </>
  );
};

export default Review;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: calc(100vh - ${HEADER_HEIGHT});
`;

const ReviewList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  margin: 0 16px 0 16px;
`;
