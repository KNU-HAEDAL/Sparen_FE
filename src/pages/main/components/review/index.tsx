import StarIcon from '@/assets/main/Star-Icon.svg';
import ProfileIcon from '@/assets/main/ZZAN-Profile.png';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Review = () => {
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
        <ChallengeLayout>
          <Text
            fontSize='1.25rem'
            marginTop='0.5rem'
            marginBottom='0.5rem'
            marginLeft='0.5rem'
          >
            쓰레기 줍기 챌린지
          </Text>
          <Box display='flex' margin='0.5rem' gap='0.2rem'>
            <StarImg src={StarIcon} />
            <StarImg src={StarIcon} />
            <StarImg src={StarIcon} />
          </Box>
          <ReviewProfileContainer>
            <Image src={ProfileIcon} />
            <Text
              fontWeight='700'
              fontSize='1rem'
              color='#fff'
              textAlign='left'
              fontStyle='normal'
              lineHeight='normal'
            >
              짠돌이
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
              세상이 깨끗해지는 기분이에요! 포인트도 많이줘서 등급 올리기 ...
            </Text>
          </Box>
        </ChallengeLayout>
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
  height: 15.5625rem;
  padding: 0.9375rem 4.8125rem 0.9375rem 0.8125rem;
  margin: 1rem;

  border-radius: 1.25rem;
  background: var(--green--06, rgba(240, 244, 243, 0.75));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ChallengeLayout = styled.div`
  width: 18rem;
  height: 13.7rem;
  padding: 1rem;
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
  gap: 0.25rem;
`;
