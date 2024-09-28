import { useState } from 'react';

import StampBoard from './components/stamp-board';
import Verification from './components/verification';
import { Tabs, Tab } from '@/components/common/tabs';
import { TabPanels, TabPanel } from '@/components/common/tabs/tab-panels';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const ChallengeRecord = () => {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  const handleTab = (value: number) => {
    setActiveTab(value as 0 | 1);
  };

  return (
    <>
      <TopBar type='Page' title='챌린지 기록' backgroundColor='#fff' />
      <ChallengeRecordLayout>
        <Tabs selectedTab={activeTab} onChange={(value) => handleTab(value)}>
          <Tab label='인증하기' value={0} />
          <Tab label='기록보기' value={1} />
        </Tabs>
        <TabPanels>
          <TabPanel value={0} selectedIndex={activeTab}>
            <Verification />
          </TabPanel>
          <TabPanel value={1} selectedIndex={activeTab}>
            <StampBoard />
          </TabPanel>
        </TabPanels>
      </ChallengeRecordLayout>
    </>
  );
};

export default ChallengeRecord;

const ChallengeRecordLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 1.5rem;
`;
