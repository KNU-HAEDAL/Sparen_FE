import { useState, useEffect } from 'react';

import ChallengeList from './components/challenge-list';
import * as S from './styles';
import { getCurrentChallengeList } from '@/apis/challenge/my-challenge/my.challenge.api';
import TopBar from '@/components/top-bar/TopBar';
import { ChallengeData } from '@/interface/apis/challenge';
import * as Base from '@/styles/baseStyles';

// interface ChallengeDataType {
//   id: number;
//   title: string;
// }

const MyChallenge = () => {
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
      <Base.Text
        fontSize='var(--font-size-xxl)'
        fontWeight='700'
        mgLeft='1rem'
        mgBottom='1rem'
        mgTop='1rem'
      >
        참여중인 챌린지
      </Base.Text>
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

export default MyChallenge;
