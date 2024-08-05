import StampBoard from './components/stamp-board';
import Verification from './components/verification';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const ChallengeRecord = () => {
  return (
    <>
      <TopBar type='Page' title='챌린지 기록' backgroundColor='#fff' />
      <ChallengeRecordLayout>
        <TabsContainer>
          <div id='Tabs'>
            <div id='Tab'>인증하기</div>
            <div id='Tab'>기록보기</div>
          </div>
        </TabsContainer>
        <TabPanelContainer>
          <div id='TabPanel'>
            <Verification />
          </div>
          <div id='TabPanel'>
            <StampBoard />
          </div>
        </TabPanelContainer>
      </ChallengeRecordLayout>
    </>
  );
};

export default ChallengeRecord;

const ChallengeRecordLayout = styled.div``;

const TabsContainer = styled.div`
  display: flex;
  position: ${(props) => props.position || 'relative'};
  top: 50px;
  align-self: center;
  width: 90%;
  margin: 0 auto;
  height: 55px;
  border-radius: 20px;
  background-color: var(--color-green-06);
`;

const TabPanelContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: 50px;
  text-align: center;
`;
