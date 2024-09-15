import ListItem from './components/list-item';
import TopBar from '@/components/features/layout/top-bar';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MyChallengeRecord = () => {
  return (
    <>
      <TopBar
        type='Page'
        title='내 챌린지 기록'
        backgroundColor='var(--color-green-06)'
      />
      <MyChallengeRecordLayout>
        <ChallengeList>
          <ListItem />
          <ListItem />
          <ListItem />
        </ChallengeList>
      </MyChallengeRecordLayout>
    </>
  );
};

export default MyChallengeRecord;

const MyChallengeRecordLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-green-06);
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
