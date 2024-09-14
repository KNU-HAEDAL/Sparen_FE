import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';

import ReviewItem from './components/review-item';
import ReviewRating from './components/review-rating';
import { getReview } from '@/apis/review/review.api';
import type { ReviewData } from '@/apis/review/review.response';
import TopBar from '@/components/features/layout/top-bar';
import * as Base from '@/styles/baseStyles';
import styled from '@emotion/styled';

const Review = () => {
  const { id } = useParams();
  const challengeGroupId = Number(id);
  const challengeGrouptitle = sessionStorage.getItem('challengeGroupTitle');

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
      <TopBar title='챌린지 리뷰' type='Page' backgroundColor='#fff' />
      <Wrapper>
        <Title>{challengeGrouptitle}</Title>
        <ReviewRating challengeGroupId={challengeGroupId} />
        {reviewList.length > 0 ? (
          // 리뷰 있을 때
          <ReviewList>
            {reviewList.map((review, index) => (
              <div key={index}>
                <ReviewItem item={review} />
                {index < reviewList.length - 1 && (
                  <Base.HorizontalLine margin={8} />
                )}
                {/* 마지막 요소 뒤에는 Line을 넣지 않음 */}
              </div>
            ))}
          </ReviewList>
        ) : (
          // 리뷰 없을 때
          <Text>
            아직 리뷰가 없습니다.
            <br />
            챌린지를 완료하고{' '}
            <Text fontWeight='600' color={`var(--color-green-01)`}>
              첫 번째 리뷰어
            </Text>
            가 되어보세요!
          </Text>
        )}
        <Text ref={ref}>{isFetching ? '로딩 중...' : ' '}</Text>
      </Wrapper>
    </>
  );
};

export default Review;

const Text = styled.span<{ fontWeight?: string; color?: string }>`
  font-size: var(--font-size-md);
  font-weight: ${(props) => props.fontWeight || null};
  color: ${(props) => props.color || null};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.div`
  font-size: var(--font-size-lg);
  font-weight: bold;
  margin: 16px 16px;
  text-align: left;
`;

const ReviewList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  margin: 0 16px 3.44rem 16px;
`;
