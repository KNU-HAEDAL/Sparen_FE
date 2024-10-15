import { useNavigate } from 'react-router-dom';

import ProfileImg from '@/assets/challenge/ZZAN-Green.png';
import CTA from '@/components/common/cta';
import { RouterPath } from '@/routes/path';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  challengeId: number;
  challengeTitle: string;
};

const ListItem = ({ challengeId, challengeTitle }: Props) => {
  sessionStorage.setItem('activeTab', '0');

  const navigate = useNavigate();

  const handleChallengeClick = (
    challengeId: number,
    title: string,
    category?: string
  ) => {
    if (category) {
      navigate(
        `/${RouterPath.challenge}/${RouterPath.record}?id=${challengeId}&category=${category}&title=${title}`
      );
    } else
      navigate(
        `/${RouterPath.challenge}/${RouterPath.record}?id=${challengeId}&title=${title}`
      );
  };

  const handleReviewWrite = (
    challengeId: number,
    title: string,
    category?: string
  ) => {
    if (category) {
      navigate(
        `/${RouterPath.challenge}/${RouterPath.write}?id=${challengeId}&category=${category}&title=${title}`
      );
    } else
      navigate(
        `/${RouterPath.challenge}/${RouterPath.write}?id=${challengeId}&title=${title}`
      );
  };

  return (
    <ListItemLayout>
      <ProfileContainer>
        <Image src={ProfileImg} alt='profile' width='1.5rem' />
      </ProfileContainer>
      <ChallengeTitle
        onClick={() => handleChallengeClick(challengeId, challengeTitle)}
      >
        {challengeTitle}
      </ChallengeTitle>
      <ReviewWriteButton
        label='리뷰 쓰기'
        display='block'
        onClick={() => handleReviewWrite(challengeId, challengeTitle)}
      />
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

const ChallengeTitle = styled.button`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 1rem;
`;

const ReviewWriteButton = styled(CTA)``;
