import { useState, useEffect } from 'react';

import ChallengeList from './components/challenge-list';
import { getCurrentChallengeList } from '@/apis/challenge/my-challenge/my.challenge.api';
import { NAVBAR_HEIGHT } from '@/components/features/layout/nav-bar';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import { ChallengeData } from '@/interface/apis/challenge';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MyChallengePage = () => {
  sessionStorage.setItem('activeTab', '0'); // 선택 탭 초기화

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
      <MyChallengeLayout>
        <Text fontSize='var(--font-size-xl)' fontWeight='700' margin='1rem'>
          참여 중인 챌린지
        </Text>
        <ChallengeListBox>
          <ChallengeList challenges={listChallenges} />
        </ChallengeListBox>
      </MyChallengeLayout>
    </>
  );
};

export default MyChallengePage;

const MyChallengeLayout = styled(Box)`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  display: flex;
  flex-direction: column;
`;

const ChallengeListBox = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  background-color: #fff;
  margin-bottom: ${NAVBAR_HEIGHT};
`;
