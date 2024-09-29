import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ListItem from './components/list-item';
import { useGetReview } from '@/apis/my-challenge-record/getReview.api';
import { ChallengeData } from '@/apis/my-challenge-record/getReview.response';
import TopBar from '@/components/features/layout/top-bar';
import { Box, Spinner, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MyChallengeRecord = () => {
  const [page, setPage] = useState(0);
  const [allChallenges, setAllChallenges] = useState<ChallengeData[]>([]);
  const { data, isLoading } = useGetReview(page, 20);
  const navigate = useNavigate();

  const loadMoreChallenges = useCallback(() => {
    if (data?.data.hasNext && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (data?.data.data) {
      setAllChallenges((prevChallenges) => [
        ...prevChallenges,
        ...data.data.data,
      ]);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        loadMoreChallenges();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreChallenges]);

  const handleNavigate = (id: number) => {
    navigate(`/challenge/${id}/review`);
  };

  return (
    <>
      <TopBar
        type='Page'
        title='내 챌린지 기록'
        backgroundColor='var(--color-green-06)'
      />
      <MyChallengeRecordLayout>
        <Box textAlign='center' marginY={3}>
          <Text fontWeight='600'>챌린지 기록을 눌러 리뷰를 작성해보세요!</Text>
        </Box>
        <ChallengeList>
          {allChallenges.length > 0 ? (
            allChallenges.map((challenge, index) => (
              <ListItem
                key={`${challenge.challengeId}-${index}`}
                id={challenge.challengeId}
                challengeTitle={challenge.challengeTitle}
                userNickname={challenge.user.nickname}
                profileImageUrl={challenge.user.profileImageUrl}
                onClick={() => handleNavigate(challenge.challengeId)}
              />
            ))
          ) : (
            <Text>챌린지 기록이 존재하지 않습니다.</Text>
          )}
        </ChallengeList>
        {isLoading && (
          <SpinnerContainer>
            <Spinner size='xl' />
          </SpinnerContainer>
        )}
      </MyChallengeRecordLayout>
    </>
  );
};

export default MyChallengeRecord;

const MyChallengeRecordLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-green-06);
  padding-bottom: 5rem;
`;

const ChallengeList = styled(Box)`
  display: inline-flex;
  margin: 1rem 1rem;
  padding: 0.625rem 1.5rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1.25rem;
  background-color: #fff;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
