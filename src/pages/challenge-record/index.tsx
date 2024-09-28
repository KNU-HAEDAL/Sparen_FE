import { useState } from 'react';

import StampBoard from './components/stamp-board';
import Verification from './components/verification';
import { Tabs, Tab } from '@/components/common/tabs';
import { TabPanels, TabPanel } from '@/components/common/tabs/tab-panels';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const ChallengeRecord = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsList = [
    {
      label: '인증 기록',
      panel: <Verification />,
    },
    {
      label: '인증하기',
      panel: <StampBoard />,
    },
  ];

  const handleSelectedTab = (value: number) => {
    setActiveTab(value as 0 | 1);
  };

  return (
    <>
      <TopBar type='Page' title='챌린지 기록' backgroundColor='#fff' />
      <Wrapper>
        <Tabs selectedTab={activeTab} onChange={handleSelectedTab}>
          {tabsList.map((t, index) => (
            <Tab key={t.label} label={t.label} value={index} />
          ))}
        </Tabs>
        <TabPanels>
          {tabsList.map((t, index) => (
            <TabPanel key={index} value={activeTab} selectedIndex={index}>
              {t.panel ?? undefined}
            </TabPanel>
          ))}
        </TabPanels>
      </Wrapper>
    </>
  );
};

export default ChallengeRecord;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
