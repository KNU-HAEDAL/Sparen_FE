import { useNavigate } from 'react-router-dom';

import ProfileImg from '@/assets/challenge/ZZAN-Green.png';
import CTA from '@/components/common/cta';
import { RouterPath } from '@/routes/path';
import { formatCategory } from '@/utils/formatters';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  challengeId: number;
  challengeGroupId: number;
  challengeTitle: string;
  category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER';
};

const ListItem = ({
  challengeId,
  challengeGroupId,
  challengeTitle,
  category,
}: Props) => {
  sessionStorage.setItem('activeTab', '0');
  const formattedCategory = formatCategory(category);
  const navigate = useNavigate();

  const handleViewRecord = (
    challengeId: number,
    title: string,
    category: string
  ) => {
    navigate(
      `/${RouterPath.challenge}/${RouterPath.record}?id=${challengeId}&category=${category}&title=${title}`
    );
  };

  const handleReviewWrite = (
    challengeId: number,
    title: string,
    category?: string
  ) => {
    navigate(
      `/${RouterPath.challenge}/${RouterPath.write}?id=${challengeId}&category=${category}&title=${title}`
    );
  };

  return (
    <ListItemLayout>
      <ProfileContainer>
        <Image src={ProfileImg} alt='profile' width='1.5rem' />
      </ProfileContainer>
      <ChallengeTitle
        display='flex'
        flex='1'
        as='a'
        href={`/${RouterPath.challenge}/${challengeGroupId}`}
      >
        {challengeTitle}
      </ChallengeTitle>
      <Box display='flex' gap='8px'>
        <CTA
          theme='secondary'
          label='인증 기록'
          display='block'
          onClick={() =>
            handleViewRecord(challengeId, challengeTitle, category)
          }
        />
        <CTA
          label='리뷰 쓰기'
          display='block'
          onClick={() =>
            handleReviewWrite(challengeId, challengeTitle, formattedCategory)
          }
        />
      </Box>
    </ListItemLayout>
  );
};

export default ListItem;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid var(--color-green-06);
  padding: 8px 0;

  &:last-child {
    border-bottom: none;
  }
`;

const ProfileContainer = styled.div`
  width: 2.5rem;
  aspect-ratio: 1 / 1;
  display: flex;
  border-radius: 50%;
  border: 1px solid var(--color-green-01);
  border-style: solid;
  stroke-width: 1px;
  stroke: var(--green--01, var(--color-green-01));
  filter: drop-shadow(2px 3px 5px rgba(80, 153, 145, 0.5));
  padding: 0.5rem;
`;

const ChallengeTitle = styled(Box)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: var(--font-size-md);
  display: flex;
  flex: 1;
`;
