import { type ReviewData } from '@/apis/review/review.response';
import { Chip } from '@/components/common/chip';
import { ProfileImage } from '@/components/common/profile-image';
import { StarRating } from '@/components/common/star-rating';
import {
  formatAchievement,
  formatDate,
  formatDifficulty,
} from '@/utils/formatters';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type ReviewItemProps = {
  item: ReviewData;
};

const ReviewItem = ({ item }: ReviewItemProps) => {
  const rating = item.rating;

  const formattedDate = formatDate(item.createdAt);
  const formattedDifficulty = formatDifficulty(item.difficulty);
  const formattedAchievement = formatAchievement(item.achievement);

  return (
    <Wrapper>
      <ProfileImage size={2.5} src={item.user.profileImageUrl} />
      <ReviewItemBox>
        <RowWrapper style={{ lineHeight: '2rem' }}>
          <Text fontSize='var(--font-size-sm)' fontWeight='600'>
            {item.user.nickname}
          </Text>
          <Text fontSize='var(--font-size-sm)' color='var(--color-grey-01)'>
            {item.user.tierInfo.tier}
          </Text>
          <Text
            fontSize='var(--font-size-xs)'
            color='var(--color-grey-02)'
            marginLeft='auto'
          >
            신고
          </Text>
          <VerticalLine />
          <Text fontSize='var(--font-size-xs)' color='var(--color-grey-02)'>
            {formattedDate}
          </Text>
        </RowWrapper>
        <RowWrapper>
          <Text
            fontSize='var(--font-size-xs)'
            color='var(--color-black)'
            margin='4px 0 0'
          >
            난이도 {item.challengeDifficulty}
          </Text>
        </RowWrapper>
        <RowWrapper style={{ margin: '12px 0' }}>
          <StarRating rating={rating} size={16} />
          <Chip>{formattedDifficulty}</Chip>
          <Chip>{formattedAchievement}</Chip>
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
  gap: 16px;
  flex: 1;
  width: 100%;
`;

const ReviewItemBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RowWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
`;

const VerticalLine = styled.span`
  height: 10px;
  border-right: 0.5px solid var(--color-grey-02);
`;
