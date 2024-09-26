import { type ReviewData } from '@/apis/review/review.response';
import { StarRating } from '@/components/common/star-rating';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ReviewItemProps = {
  item: ReviewData;
};

const ReviewItem = ({ item }: ReviewItemProps) => {
  const rating = item.rating;

  const formatDate = (dateStr: string) => {
    const dateObj = new Date(dateStr);

    return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;
    // 2024.00.00 형식으로 반환
  };

  const formattedDate = formatDate(item.createdAt);

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
        <RowWrapper style={{ marginTop: '4px' }}>
          <Text fontSize='var(--font-size-sm)'>{item.user.nickname}</Text>
          <Text fontSize='var(--font-size-sm)' color='var(--color-grey-01)'>
            {item.user.tierInfo.tier}
          </Text>
          <Text
            fontSize='var(--font-size-xs)'
            color='var(--color-grey-02)'
            marginLeft='auto'
          >
            {formattedDate}
          </Text>
        </RowWrapper>
        <RowWrapper>
          <Chip>난이도 {item.challengeDifficulty}</Chip>
          <StarRating rating={rating} size={16} />
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
  flex: 1;
  gap: 8px;
`;

const Chip = styled.div`
  padding: 4px 12px;
  border-radius: 50px;
  border: var(--color-grey-02) 0.5px solid;
  background-color: var(--color-white);
  color: var(--color-grey-01);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-align: center;
`;
