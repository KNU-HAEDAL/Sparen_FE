import { useState } from 'react';

import StampBoard from './components/stamp-board';
import Verification from './components/verification';
import { Tabs, Tab } from '@/components/common/tabs';
import { TabPanels, TabPanel } from '@/components/common/tabs/tab-panels';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const ChallengeRecord = () => {
  const [activeTab, setActiveTab] = useState<number>(() => {
    // 세션 스토리지에 저장된 값 | 기본값 0
    const savedTab = sessionStorage.getItem('activeTab');
    return savedTab ? Number(savedTab) : 0;
  });
  const tabsList = [
    {
      label: '인증 기록',
      panel: <StampBoard />,
    },
    {
      label: '인증하기',
      panel: <Verification />,
    },
  ];

  const handleSelectedTab = (value: number) => {
    setActiveTab(value as 0 | 1);
    sessionStorage.setItem('activeTab', String(value));
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
  min-height: calc(100vh - ${HEADER_HEIGHT});
`;
