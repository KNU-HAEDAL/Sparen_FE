import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ReviewItem from './components/review-item';
import ReviewRating from './components/review-rating';
import { getReview } from '@/apis/review/review.api';
import type { ReviewData } from '@/apis/review/review.response';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const ReviewList = () => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    if (hasNext) {
      getReview({ challengeGroupId: 1, page })
        .then((res) => {
          if (Array.isArray(res.data) && res.data.length > 0) {
            setReviews((prevReviews) => [...prevReviews, ...res.data]);
            setPage((prevPage) => prevPage + 1);
            setHasNext(res.hasNext);
          } else {
            console.log('리뷰 데이터 없음');
            // 리뷰 없을 때 UI
          }
        })
        .catch((error) => {
          console.error('Error fetching reviews:', error);
        });
    }
  }, [inView]);

  return (
    <>
      <TopBar title='챌린지 리뷰' type='Page' backgroundColor='#fff' />
      <ReviewListLayout>
        <Title>길에 떨어진 쓰레기 줍기 챌린지</Title>
        <ReviewRating />
        <List>
          <VLine />
          {reviews.map((review) => (
            <ReviewItem key={review.rating} data={review} />
            // 키가 원래 ranking으로 되어있었는데 ReviewData에는 해당 키가 없어서 임의로 변경해둠
          ))}
          {hasNext ? <div ref={ref}>로딩..</div> : <div />}
        </List>
      </ReviewListLayout>
    </>
  );
};

export default ReviewList;

const ReviewListLayout = styled.div`
  position: relative;
  margin: 30px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: var(--font-size-lg);
  font-weight: bold;
  margin-bottom: 15px;
`;

const List = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const VLine = styled.div`
  position: absolute;
  border: #d7d7d7 solid 0.5px;
  height: calc(100% - 20px);
  width: 0px;
  border-radius: 10px;
  margin: 13px;
  z-index: 0;
`;
