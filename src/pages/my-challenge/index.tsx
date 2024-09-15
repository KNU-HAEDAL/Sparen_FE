import { useState, useEffect } from 'react';

import ChallengeList from './components/challenge-list';
import { getCurrentChallengeList } from '@/apis/challenge/my-challenge/my.challenge.api';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import { ChallengeData } from '@/interface/apis/challenge';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MyChallengePage = () => {
  const [listChallenges, setListChallenges] = useState<ChallengeData[]>([]);

  useEffect(() => {
    const fetchCurrentChallenges = async () => {
      try {
        const challenges = await getCurrentChallengeList(0, 10);
        setListChallenges(challenges.data.data);
        console.log(challenges.data.data);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchCurrentChallenges();
  }, []);

  return (
    <>
      <TopBar type='Page' title='내 챌린지' backgroundColor='#fff' />

      <div style={{ height: HEADER_HEIGHT }} />
      <MyChallengeLayout>
        <Text
          fontSize='var(--font-size-xxl)'
          fontWeight='700'
          marginLeft='1rem'
          marginBottom='1rem'
          marginTop='1rem'
          width='100%'
        >
          참여중인 챌린지
        </Text>
        <ChallengeListBox>
          <ChallengeList
            BackgroundColor='var(--color-green-01)'
            color='#fff'
            BorderColor='#fff'
            challenges={listChallenges}
          />
        </ChallengeListBox>
      </MyChallengeLayout>
    </>
  );
};

export default MyChallengePage;

const MyChallengeLayout = styled(Box)`
  height: 100%;
`;

const ChallengeListBox = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  background-color: #fff;
`;
