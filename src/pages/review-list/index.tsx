import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ReviewItem from './components/review-item';
import ReviewRating from './components/review-rating';
import { getReview } from '@/apis/review/review.api';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    if (hasNext) {
      getReview(1, page).then((res) => {
        setReviews([...reviews, ...res.data]);
        setPage((page) => page + 1);
        setHasNext(res.hasNext);
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
          {reviews.map((item) => (
            <ReviewItem key={item.ranking} data={item} />
          ))}
          {hasNext ? <div ref={ref}>로딩..</div> : <div />}
        </List>
      </ReviewListLayout>
    </>
  );
};

export default ReviewList;

export const ReviewListLayout = styled.div`
  position: relative;
  margin: 30px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: var(--font-size-lg);
  font-weight: bold;
  margin-bottom: 15px;
`;

export const List = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const VLine = styled.div`
  position: absolute;
  border: #d7d7d7 solid 0.5px;
  height: calc(100% - 20px);
  width: 0px;
  border-radius: 10px;
  margin: 13px;
  z-index: 0;
`;
