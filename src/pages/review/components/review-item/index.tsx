import { type ReviewData } from '@/apis/review/review.response';
import { StarRating } from '@/components/common/star-rating';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ReviewItemProps = {
  item: ReviewData;
};

const ReviewItem = ({ item }: ReviewItemProps) => {
  const rating = item.rating;

  return (
    <Wrapper>
      <ImageBox>
        <Image
          height='100%'
          width='100%'
          objectFit='cover'
          src={item.user.profileImageUrl}
        />
      </ImageBox>
      <ReviewItemBox>
        <RowWrapper>
          <Text fontSize='var(--font-size-sm)'>{item.user.nickname}</Text>
          <Text fontSize='var(--font-size-sm)' color='var(--color-gray-01)'>
            {item.user.tierInfo.tier}
          </Text>
          <Rating>난이도 {item.challengeDifficulty}</Rating>
        </RowWrapper>
        <RowWrapper>
          <Text fontSize='var(--font-size-sm)'>{rating}</Text>
          <StarRating rating={rating} />
        </RowWrapper>
        <Text fontSize='var(--font-size-sm)'>{item.content}</Text>
      </ReviewItemBox>
    </Wrapper>
  );
};

export default ReviewItem;

const Wrapper = styled(Box)`
  display: flex;
  text-align: left;
  gap: 8px;
  flex: 1;
  width: 100%;
`;

const ImageBox = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;
  display: flex; /* 이미지 가운데 정렬 */
  align-items: center;
  justify-content: center;
`;

const ReviewItemBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const RowWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  margin: 4px 0 0 0;
  flex: 1;
  gap: 8px;
`;

const Rating = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-grey-01);
  border-radius: 20px;
  border: var(--color-grey-02) 0.5px solid;
  padding: 2px 8px;
  text-align: center;
  margin-left: auto;
`;
