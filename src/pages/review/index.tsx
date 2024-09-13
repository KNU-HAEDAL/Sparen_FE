import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';

import ReviewItem from './components/review-item';
import ReviewRating from './components/review-rating';
import { getReview } from '@/apis/review/review.api';
import type { ReviewData } from '@/apis/review/review.response';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const Review = () => {
  const { id } = useParams();
  const challengeGroupId = Number(id);
  const challengeGrouptitle = sessionStorage.getItem('challengeGroupTitle');

  const DATA_SIZE = 10; // 한번에 가져올 리뷰 개수
  const [reviewList, setReviewList] = useState<ReviewData[]>([
    {
      challengeId: 1,
      challengeTitle: '쓰레기 줍기 챌린지',
      challengeDifficulty: 0,
      user: {
        id: 2000,
        nickname: '뽀롱뽀롱 뽀로로 노는 게 젤 좋아',
        profileImageUrl: 'string',
        tierInfo: {
          tier: '노비 III',
          totalExp: 0,
          currentExp: 0,
        },
      },
      content:
        '매일 매일 꾸준히 했더니 습관이 형성되었어요. 습관도 만들고 포인트도 얻고 좋아요 굿',
      rating: 4,
    },
  ]);
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView({ threshold: 0.8 });
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true); // 데이터 없을 때 호출 방지

  useEffect(() => {
    if (inView && hasMore && !isFetching) {
      setIsFetching(true);
      getReview({ challengeGroupId: challengeGroupId, page, size: DATA_SIZE })
        .then((res) => {
          if (Array.isArray(res) && res.data.length > 0) {
            // 데이터가 있을 때
            setReviewList((prevReviewList) => [...prevReviewList, ...res.data]);
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
  }, [inView, isFetching, hasMore, challengeGroupId, page]);

  return (
    <>
      <TopBar title='챌린지 리뷰' type='Page' backgroundColor='#fff' />
      <Wrapper>
        <Title>{challengeGrouptitle}</Title>
        <ReviewRating challengeGroupId={challengeGroupId} />
        {reviewList.length > 0 && (
          <ReviewList>
            {reviewList.map((review) => (
              <ReviewItem key={review.rating} data={review} />
              // 키가 원래 ranking으로 되어있었는데 ReviewData에는 해당 키가 없어서 임의로 변경해둠
            ))}
            <Text ref={ref}>{isFetching ? '로딩 중...' : ' '}</Text>
          </ReviewList>
        )}
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
  margin: 16px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: var(--font-size-lg);
  font-weight: bold;
  margin-bottom: 16px;
`;

const ReviewList = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
