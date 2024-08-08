import { useState, useEffect } from 'react';

import ChallengeList from './components/challenge-list';
import * as S from './styles';
import { getCurrentChallengeList } from '@/apis/challenge/my-challenge/my.challenge.api';
import TopBar from '@/components/features/layout/top-bar';
import { ChallengeData } from '@/interface/apis/challenge';
import { Text } from '@chakra-ui/react';

// interface ChallengeDataType {
//   id: number;
//   title: string;
// }

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
      <Text
        fontSize='var(--font-size-xxl)'
        fontWeight='700'
        marginLeft='1rem'
        marginBottom='1rem'
        marginTop='1rem'
      >
        참여중인 챌린지
      </Text>
      <S.MyChallengeLayout>
        <ChallengeList
          BackgroundColor='#fff'
          color='#c0c0c0'
          BorderColor='#c0c0c0'
          challenges={listChallenges}
        />
      </S.MyChallengeLayout>
    </>
  );
};

export default MyChallengePage;
