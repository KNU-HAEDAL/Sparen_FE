import { useGetRecentlyReview } from '@/apis/recently-review/getRecentlyReview.api';
import StarIcon from '@/assets/main/Star-Icon.svg';
import ProfileIcon from '@/assets/main/ZZAN-Profile.png';
import { Box, Image, Text, Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Review = () => {
  const { data, isLoading } = useGetRecentlyReview(0, 10);

  if (isLoading) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100vh'
      >
        <Spinner size='xl' />
      </Box>
    );
  }

  return (
    <>
      <Text
        fontSize='1.25rem'
        fontWeight={700}
        color='#000'
        marginLeft='1rem'
        marginBottom='1rem'
      >
        최근 챌린지 리뷰
      </Text>
      <ReviewLayout>
        {!data || data?.data.length === 0 ? (
          <Text
            fontSize='1.25rem'
            fontWeight={700}
            color='var(--color-green-07)'
            textAlign='center'
          >
            최근 챌린지 리뷰가 존재하지 않아요..
          </Text>
        ) : (
          data?.data.map((review) => (
            <ChallengeLayout key={review.challengeId}>
              <Text
                fontSize='1.4rem'
                fontWeight={700}
                color='var(--color-green-07)'
                marginTop='0.5rem'
                marginBottom='0.5rem'
                marginLeft='0.5rem'
              >
                {review.challengeTitle}
              </Text>
              <Box display='flex' ml={1} gap='0.2rem'>
                {Array.from({ length: review.rating }, (_, index) => (
                  <StarImg key={index} src={StarIcon} />
                ))}
              </Box>
              <ReviewProfileContainer>
                <ImageBox
                  src={review.user.profileImageUrl || ProfileIcon} // 프로필 이미지가 없으면 기본 이미지 사용
                />
                <Text fontWeight='700' fontSize='1rem' color='#fff'>
                  {review.user.nickname}
                </Text>
              </ReviewProfileContainer>
              <Box width='100%'>
                <Text
                  fontWeight='700'
                  fontSize='1rem'
                  color='#fff'
                  textAlign='left'
                  fontStyle='normal'
                  lineHeight='normal'
                >
                  {review.content}
                </Text>
              </Box>
            </ChallengeLayout>
          ))
        )}
      </ReviewLayout>
    </>
  );
};

export default Review;

const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

const ReviewLayout = styled(Container)`
  display: flex;
  overflow-x: scroll;
  height: 15.5rem;
  padding: 0.9375rem 0.8125rem;
  margin: 1rem;

  border-radius: 1.25rem;
  background: var(--color-green-06);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChallengeLayout = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 13.7rem;
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 1.25rem;
  background-color: var(--color-green-01);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StarImg = styled.img`
  display: flex;
  width: 1.25rem;
  justify-content: center;
  align-items: center;
`;

const ReviewProfileContainer = styled(Container)`
  margin: 1rem 0.5rem;
  flex-direction: row;
  justify-content: space-between;
  width: 5.5rem;
`;

const ImageBox = styled(Image)`
  display: flex;
  width: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
