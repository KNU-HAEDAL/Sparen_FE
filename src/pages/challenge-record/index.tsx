import { useState } from 'react';

import Records from './records';
import Verification from './verification';
import ChallengeTitle from '@/components/common/challenge-title';
import { Tab, Tabs } from '@/components/common/tabs';
import { TabPanel, TabPanels } from '@/components/common/tabs/tab-panels';
import TopBar, { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

const SAMPLE_CATEGORY = '에코';
const SAMPLE_TITLE = '환경 정화 활동';

const ChallengeRecord = () => {
  const [activeTab, setActiveTab] = useState<number>(() => {
    // 세션 스토리지에 저장된 값 | 기본값 0
    const savedTab = sessionStorage.getItem('activeTab');
    return savedTab ? Number(savedTab) : 0;
  });
  const tabsList = [
    {
      label: '인증 기록',
      panel: <Records />,
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
        <ChallengeTitle category={SAMPLE_CATEGORY} title={SAMPLE_TITLE} />
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
  display: flex;
  flex-direction: column;
  flex: 1;
`;
