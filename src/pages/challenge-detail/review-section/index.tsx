import { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import { getReview, getChallegeAvgScore } from '@/apis/review/review.api';
import type { ReviewData } from '@/apis/review/review.response';
import { StarRating } from '@/components/common/star-rating';
import ReviewItem from '@/pages/review/components/review-item';

interface Props {
  id: number;
}

export const ReviewSection = ({ id }: Props) => {
  const DATA_SIZE = 5; // 가져올 리뷰 개수
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
  const [page, setPage] = useState(0);
  const [avgRating, setAvgRating] = useState<number | undefined>();
  const [ratingToPercent, setRatingToPercent] = useState<string>(`0%`);
  const navigate = useNavigate();

  useEffect(() => {
    getChallegeAvgScore({ challengeGroupId: id }).then((res) => {
      setAvgRating(res.averageRating); // 평균 별점만 필요함
    });

    getReview({ challengeGroupId: id, page, size: DATA_SIZE })
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setReviewList((prevReviewList) => [...prevReviewList, ...res.data]);
          setPage((prevPage) => prevPage + 1);
        } else {
          console.log('리뷰 데이터 없음');
        }
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, [id, page]);

  useEffect(() => {
    if (avgRating !== undefined) {
      setRatingToPercent(`${(avgRating / 5) * 100}%`);
    }
  }, [avgRating]);

  return (
    <S.Wrapper>
      {reviewList.length > 0 ? (
        // 리뷰 있을 때
        <>
          <S.RatingContainer className='RatingContainer'>
            <S.AvgRating>{avgRating}</S.AvgRating>
            <StarRating ratingToPercent={ratingToPercent} />
            <S.AllReviewButton
              onClick={() => navigate(`/challenge/review/${id}`)}
            >
              모두 보기 <IoIosArrowForward style={{ marginLeft: '4px' }} />
            </S.AllReviewButton>
          </S.RatingContainer>
          {reviewList.map((review) => (
            <ReviewItem key={review.rating} data={review} />
            // 키가 원래 ranking으로 되어있었는데 ReviewData에는 해당 키가 없어서 임의로 변경해둠
          ))}
        </>
      ) : (
        // 리뷰 없을 때
        <S.Text>
          아직 리뷰가 없습니다.
          <br />
          챌린지를 완료하고{' '}
          <S.Text fontWeight='600' color={`var(--color-green-01)`}>
            첫 번째 리뷰어
          </S.Text>
          가 되어보세요!
        </S.Text>
      )}
    </S.Wrapper>
  );
};
