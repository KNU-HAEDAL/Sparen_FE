import { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import { getReview, getChallegeAvgScore } from '@/apis/review/review.api';
import { type ReviewData } from '@/apis/review/review.response';
import { StarRating } from '@/components/common/star-rating';
import ReviewItem from '@/pages/review/components/review-item';

interface Props {
  id: number;
}

export const ReviewSection = ({ id }: Props) => {
  const DATA_SIZE = 5; // 가져올 리뷰 개수
  const [reviewList, setReviewList] = useState<ReviewData[]>([]);
  const [avgRating, setAvgRating] = useState<number | undefined>();
  const [ratingToPercent, setRatingToPercent] = useState<string>(`0%`);
  const navigate = useNavigate();

  useEffect(() => {
    // 평균 별점 가져오기
    getChallegeAvgScore({ challengeGroupId: id })
      .then((res) => {
        setAvgRating(Number(res.averageRating.toFixed(1))); // 소수점 아래 한 자리
      })
      .catch((error) => {
        console.error('Error fetching average score:', error);
      });

    // 리뷰 리스트 가져오기
    getReview({ challengeGroupId: id, page: 0, size: DATA_SIZE })
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setReviewList((prevReviewList) => [...prevReviewList, ...res.data]);
          // console.log(`리뷰 리스트: `, reviewList); // test
        } else {
          console.log('리뷰 데이터 없음');
        }
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, [id]);

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
          {reviewList.map((review, index) => (
            <ReviewItem key={index} item={review} />
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
