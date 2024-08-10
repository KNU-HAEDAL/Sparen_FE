import { useState } from 'react';

import StampBoard from './components/stamp-board';
import Verification from './components/verification';
import { Tab, TabPanel, Tabs } from '@/components/common/tab';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

type TabsContainerProps = {
  position?: string;
};

const ChallengeRecord = () => {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  const handleTab = (value: number) => {
    setActiveTab(value as 0 | 1);
  };

  return (
    <>
      <TopBar type='Page' title='챌린지 기록' backgroundColor='#fff' />
      <ChallengeRecordLayout>
        <TabsContainer>
          <Tabs
            selectedTab={activeTab}
            onChange={(_, value) => handleTab(value)}
          >
            <Tab label='인증하기' value={0} />
            <Tab label='기록보기' value={1} />
          </Tabs>
        </TabsContainer>
        <TabPanelContainer>
          <TabPanel value={0} selectedIndex={activeTab}>
            <Verification />
          </TabPanel>
          <TabPanel value={1} selectedIndex={activeTab}>
            <StampBoard />
          </TabPanel>
        </TabPanelContainer>
      </ChallengeRecordLayout>
    </>
  );
};

export default ChallengeRecord;

const ChallengeRecordLayout = styled.div``;

const TabsContainer = styled.div<TabsContainerProps>`
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
